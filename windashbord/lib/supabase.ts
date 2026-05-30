import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Local API Mock for when Supabase is not configured
// Points to the main project's API
const mockSupabase = {
  from: (table: string) => ({
    select: (columns: string = '*') => ({
      order: (column: string, { ascending = true } = {}) => {
        // Return a promise directly to work with await/Promise.all
        return Promise.resolve().then(async () => {
          try {
            const endpoint = table === 'contacts' ? '/api/contacts' : '/api/demo-requests';
            const res = await fetch(endpoint); // Use relative path
            const data = await res.json();
            return { data, error: null };
          } catch (err) {
            console.error("Mock fetch error:", err);
            return { data: [], error: err };
          }
        });
      }
    }),
    insert: (data: any[]) => {
      return Promise.resolve({ data: null, error: null }) as any;
    }
  }),
  channel: () => ({ on: () => ({ subscribe: () => ({}) }) }), // Mock real-time
  removeChannel: () => {},
};

console.log("Dashboard Supabase URL:", supabaseUrl);
console.log("Dashboard Using Real Supabase:", !!(supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('placeholder')));

const realSupabase = (supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('placeholder'))
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const supabase = {
  from: (table: string) => ({
    select: (columns: string = '*') => ({
      order: (column: string, { ascending = true } = {}) => {
        return Promise.resolve().then(async () => {
          let cloudData: any[] = [];
          let localData: any[] = [];

          // 1. Try to fetch from Cloud if configured
          if (realSupabase) {
            try {
              const { data, error } = await realSupabase.from(table).select(columns).order(column, { ascending });
              if (!error && data) cloudData = data;
            } catch (err) {
              console.error("Cloud fetch error:", err);
            }
          }

          // 2. Try to fetch from Local API
          try {
            const endpoint = table === 'contacts' ? '/api/contacts' : '/api/demo-requests';
            const res = await fetch(endpoint);
            const data = await res.json();
            if (Array.isArray(data)) localData = data;
          } catch (err) {
            console.error("Local fetch error:", err);
          }

          // 3. Merge and Sort (deduplicate by id if possible)
          const combined = [...cloudData];
          localData.forEach(localItem => {
            // Simple deduplication logic: check if an item with same name/email/created_at exists
            const exists = combined.some(cloudItem => 
              (cloudItem.id === localItem.id) || 
              (cloudItem.email === localItem.email && Math.abs(new Date(cloudItem.created_at).getTime() - new Date(localItem.created_at).getTime()) < 5000)
            );
            if (!exists) combined.push(localItem);
          });

          // Sort by created_at descending
          combined.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

          return { data: combined, error: null };
        });
      }
    }),
    insert: (data: any[]) => {
      // For dashboard, we might not need to insert, but let's implement it just in case
      if (realSupabase) return realSupabase.from(table).insert(data);
      return mockSupabase.from(table).insert(data);
    }
  }),
  channel: () => ({ on: () => ({ subscribe: () => ({}) }) }),
  removeChannel: () => {},
} as any;
