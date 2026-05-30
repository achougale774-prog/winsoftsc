"use client"

import { useState, useEffect } from "react"
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Settings, 
  Bell, 
  Search, 
  ExternalLink, 
  Clock, 
  Calendar,
  CheckCircle2,
  AlertCircle,
  Menu,
  X,
  TrendingUp,
  ArrowUpRight,
  Filter,
  Download,
  Mail,
  Phone,
  Briefcase
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { supabase } from "../lib/supabase"
import { cn } from "../lib/utils"

// Mock Data for demonstration
const MOCK_MESSAGES = [
  { id: 1, name: "Rahul Sharma", email: "rahul@example.com", phone: "+91 9876543210", inquiry_type: "Dairy Solution", message: "Interested in Dairy Management Software for our cooperative.", created_at: "2026-04-30T08:30:00Z", status: "new", lead_type: 'Contact' },
  { id: 2, name: "Priya Patil", email: "priya@example.com", phone: "+91 8888888888", inquiry_type: "Gold Industry", message: "Looking for inventory tracking system.", created_at: "2026-04-30T07:15:00Z", status: "read", lead_type: 'Demo Request' },
  { id: 3, name: "Amit Deshmukh", email: "amit@example.com", phone: "+91 7777777777", inquiry_type: "Sugar Industry", message: "Need a quote for ERP integration.", created_at: "2026-04-29T16:45:00Z", status: "new", lead_type: 'Contact' },
]

export default function Dashboard() {
  const [messages, setMessages] = useState(MOCK_MESSAGES)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLead, setSelectedLead] = useState<any>(null)

  useEffect(() => {
    const fetchAllLeads = async () => {
      try {
        const [contactsRes, demoRes] = await Promise.all([
          supabase.from("contacts").select("*").order("created_at", { ascending: false }),
          supabase.from("demo_requests").select("*").order("created_at", { ascending: false })
        ])

        const combined = [
          ...(contactsRes.data || []).map((c: any) => ({ ...c, lead_type: 'Contact' })),
          ...(demoRes.data || []).map((d: any) => ({ ...d, lead_type: 'Demo Request' }))
        ].sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

        if (combined.length > 0) {
          setMessages(combined)
        }
      } catch (err) {
        console.error("Supabase fetch error:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchAllLeads()
    const interval = setInterval(fetchAllLeads, 10000);

    return () => clearInterval(interval)
  }, [])

  const filteredMessages = messages.filter((m: any) => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (m.inquiry_type && m.inquiry_type.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (m.industry && m.industry.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="flex min-h-screen bg-[#f1f5f9] dark:bg-[#020617] text-foreground font-inter overflow-hidden relative">
      {/* Background blobs for colorful effect */}
      <div className="fixed -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="fixed top-1/3 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="fixed -bottom-20 left-1/3 w-96 h-96 bg-info/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: sidebarOpen ? 280 : 88 }}
        className="fixed left-0 top-0 h-full bg-white/80 dark:bg-[#020617]/80 backdrop-blur-2xl border-r border-border/50 z-50 flex flex-col transition-colors duration-300 shadow-2xl shadow-black/5"
      >
        <div className="p-6 mb-2 flex items-center justify-start relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className={cn(
            "transition-all duration-500 overflow-hidden relative z-10",
            sidebarOpen ? "w-48 h-12" : "w-12 h-12 rounded-2xl shadow-lg shadow-primary/20 bg-white p-1"
          )}>
            <img 
              src="/winsoftlogo.jpg" 
              alt="Winsoft Logo" 
              className={cn(
                "w-full h-full object-contain transition-all duration-300",
                !sidebarOpen && "object-contain scale-110"
              )} 
            />
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1.5 relative z-10">
          <NavItem icon={<LayoutDashboard size={22} className="text-primary" />} label="Overview" active={activeTab === "overview"} onClick={() => setActiveTab("overview")} collapsed={!sidebarOpen} />
          <NavItem icon={<MessageSquare size={22} className="text-info" />} label="Messages" active={activeTab === "messages"} onClick={() => setActiveTab("messages")} collapsed={!sidebarOpen} badge={messages.length} />
          <NavItem icon={<Users size={22} className="text-accent" />} label="Leads" active={activeTab === "leads"} onClick={() => setActiveTab("leads")} collapsed={!sidebarOpen} />
          <NavItem icon={<TrendingUp size={22} className="text-emerald-500" />} label="Analytics" active={activeTab === "analytics"} onClick={() => setActiveTab("analytics")} collapsed={!sidebarOpen} />
          <NavItem icon={<Settings size={22} className="text-slate-400" />} label="Settings" active={activeTab === "settings"} onClick={() => setActiveTab("settings")} collapsed={!sidebarOpen} />
        </nav>

        <div className="p-4 mt-auto relative z-10">
          <div className={cn(
            "p-5 rounded-3xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/30 relative overflow-hidden group",
            !sidebarOpen && "hidden"
          )}>
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 text-blue-100">Pro Access</p>
            <p className="text-sm font-bold mb-4 leading-tight">Unlock Smart Automation</p>
            <button className="w-full py-2.5 bg-white text-primary rounded-xl text-xs font-black hover:bg-blue-50 transition-colors shadow-sm">Upgrade Now</button>
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full mt-4 flex items-center justify-center p-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-all border border-transparent hover:border-primary/20 group"
          >
            {sidebarOpen ? <X size={20} className="text-muted-foreground group-hover:rotate-90 transition-transform" /> : <Menu size={20} className="text-muted-foreground" />}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className={cn(
        "flex-1 transition-all duration-300 min-h-screen flex flex-col relative",
        sidebarOpen ? "ml-[280px]" : "ml-[88px]"
      )}>
        {/* Top Navbar */}
        <header className="h-22 border-b border-border/40 bg-white/40 dark:bg-[#020617]/40 backdrop-blur-xl sticky top-0 z-40 px-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-outfit font-black tracking-tight text-foreground bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text">
              {activeTab}
            </h1>
            <p className="text-xs text-muted-foreground font-bold tracking-wide uppercase mt-0.5 opacity-70">
              WinSoft Dashboard Control
            </p>
          </div>
          
          <div className="flex items-center gap-5">
            <div className="relative hidden lg:block group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find anything..." 
                className="pl-12 pr-4 py-3 bg-white/50 dark:bg-muted/10 border border-border/50 focus:border-primary/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all w-80 text-sm font-medium"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <HeaderAction icon={<Bell size={20} />} badge color="blue" />
              <HeaderAction icon={<Calendar size={20} />} color="purple" />
            </div>

            <div className="flex items-center gap-3 pl-5 border-l border-border/50">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black leading-none">Abhishek C.</p>
                <p className="text-[10px] text-primary mt-1 font-black uppercase tracking-widest">Admin Panel</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-tr from-primary via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-lg shadow-primary/20 rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                AC
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-12 max-w-7xl mx-auto w-full">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard 
              title="Total Leads" 
              value={messages.length} 
              icon={<Users size={24} />} 
              trend="+12.5%" 
              color="blue"
              description="Across all platforms"
              glow="glow-blue"
            />
            <StatsCard 
              title="Avg. Response" 
              value="2.4h" 
              icon={<Clock size={24} />} 
              trend="-15%" 
              color="amber"
              description="Down from 3h yesterday"
              glow="glow-amber"
            />
            <StatsCard 
              title="Conversions" 
              value="28%" 
              icon={<CheckCircle2 size={24} />} 
              trend="+4.2%" 
              color="emerald"
              description="High performance"
              glow="glow-emerald"
            />
            <StatsCard 
              title="Active Leads" 
              value="14" 
              icon={<TrendingUp size={24} />} 
              trend="+2" 
              color="rose"
              description="Currently in pipeline"
              glow="glow-rose"
            />
          </div>

          {/* Main View Area */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Message Feed */}
            <div className="xl:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-outfit font-bold flex items-center gap-3">
                    Recent Submissions
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-500 px-2.5 py-1 rounded-full border border-emerald-500/10">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                      Live Sync
                    </span>
                  </h2>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-card border border-border/60 rounded-xl text-xs font-bold hover:bg-muted/50 transition-colors">
                    <Filter size={14} /> Filter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-xs font-bold hover:opacity-90 shadow-lg shadow-primary/20 transition-all">
                    <Download size={14} /> Export
                  </button>
                </div>
              </div>

              <div className="space-y-5">
                <AnimatePresence mode="popLayout">
                  {filteredMessages.length > 0 ? (
                    filteredMessages.map((msg, index) => (
                      <LeadCard key={msg.id} lead={msg} index={index} onClick={() => setSelectedLead(msg)} />
                    ))
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-20 text-center bg-card rounded-3xl border border-dashed border-border"
                    >
                      <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="text-muted-foreground" />
                      </div>
                      <h3 className="font-bold text-lg">No leads found</h3>
                      <p className="text-muted-foreground text-sm">Try adjusting your search query.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Side Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#1e293b] to-[#020617] p-8 rounded-[2rem] text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                    <ArrowUpRight className="text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-outfit font-bold mb-3">Database Health</h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    System synchronizing with WinSoft main application. Latency is within optimal range (42ms).
                  </p>
                  
                  <div className="space-y-4">
                    <HealthBar label="Supabase Connection" percentage={100} color="emerald" />
                    <HealthBar label="Local Storage Sync" percentage={98} color="blue" />
                    <HealthBar label="Email Notifications" percentage={85} color="amber" />
                  </div>

                  <button className="w-full mt-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-sm font-bold transition-all">
                    System Diagnostics
                  </button>
                </div>
              </div>

              <div className="bg-card p-8 rounded-[2rem] border border-border/60 shadow-sm">
                <h3 className="font-outfit font-bold text-lg mb-6">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <QuickAction icon={<Mail size={20} />} label="Mass Email" color="blue" />
                  <QuickAction icon={<Briefcase size={20} />} label="New Project" color="purple" />
                  <QuickAction icon={<Phone size={20} />} label="Call Logs" color="emerald" />
                  <QuickAction icon={<Settings size={20} />} label="System Config" color="slate" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Lead Detail Side Panel */}
      <AnimatePresence>
        {selectedLead && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLead(null)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-lg bg-white dark:bg-[#020617] border-l border-border shadow-2xl z-[70] overflow-y-auto"
            >
              <div className="p-8 space-y-8">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedLead(null)}
                    className="p-3 bg-muted/20 hover:bg-muted/40 rounded-2xl transition-all"
                  >
                    <X size={20} />
                  </button>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-xs font-bold uppercase tracking-widest">Edit</button>
                    <button className="px-4 py-2 bg-rose-500/10 text-rose-500 rounded-xl text-xs font-bold uppercase tracking-widest">Delete</button>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/20 rounded-[2rem] flex items-center justify-center text-4xl font-black text-primary">
                    {selectedLead.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-3xl font-outfit font-black tracking-tight">{selectedLead.name}</h2>
                    <p className="text-muted-foreground font-medium mt-1">{selectedLead.company || "No Company"}</p>
                    <div className="flex items-center gap-3 mt-3">
                       <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter",
                        selectedLead.lead_type === 'Contact' ? "bg-blue-500/10 text-blue-500" : "bg-purple-500/10 text-purple-500"
                      )}>
                        {selectedLead.lead_type}
                      </span>
                      <span className="text-[10px] font-black px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full uppercase tracking-tighter">
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <DetailInfo icon={<Mail size={16} />} label="Email Address" value={selectedLead.email} />
                  <DetailInfo icon={<Phone size={16} />} label="Phone Number" value={selectedLead.phone} />
                  <DetailInfo icon={<Briefcase size={16} />} label="Inquiry Type" value={selectedLead.inquiry_type || "General"} />
                  <DetailInfo icon={<Clock size={16} />} label="Submitted On" value={new Date(selectedLead.created_at).toLocaleDateString()} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground/60">Message Content</h3>
                  <div className="p-6 bg-muted/20 dark:bg-muted/5 rounded-[2rem] text-base leading-relaxed font-medium text-slate-700 dark:text-slate-300">
                    {selectedLead.message}
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-border/50">
                  <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground/60">Action History</h3>
                  <div className="space-y-4">
                    <HistoryItem date="Just now" action="Viewed by Administrator" />
                    <HistoryItem date="2 hours ago" action="Auto-responder email sent" />
                    <HistoryItem date="1 day ago" action="Lead captured from Website Form" />
                  </div>
                </div>

                <div className="pt-8 grid grid-cols-2 gap-4">
                  <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    Send Email
                  </button>
                  <button className="w-full py-4 bg-emerald-500 text-white rounded-2xl font-bold shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

function DetailInfo({ icon, label, value }: any) {
  return (
    <div className="p-5 bg-card border border-border/50 rounded-2xl space-y-2">
      <div className="flex items-center gap-2 text-primary">
        {icon}
        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">{label}</span>
      </div>
      <p className="text-sm font-bold truncate">{value}</p>
    </div>
  )
}

function HistoryItem({ date, action }: any) {
  return (
    <div className="flex gap-4">
      <div className="w-2 h-2 bg-primary rounded-full mt-1.5 ring-4 ring-primary/10"></div>
      <div>
        <p className="text-xs font-bold">{action}</p>
        <p className="text-[10px] text-muted-foreground mt-0.5">{date}</p>
      </div>
    </div>
  )
}

function NavItem({ icon, label, active, onClick, collapsed, badge }: any) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3.5 p-3.5 rounded-2xl transition-all duration-300 group relative",
        active 
          ? "bg-primary text-white shadow-xl shadow-primary/25" 
          : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
      )}
    >
      <div className={cn("transition-transform duration-300", !active && "group-hover:scale-110 group-hover:rotate-3")}>
        {icon}
      </div>
      {!collapsed && <span className="font-bold text-sm">{label}</span>}
      {!collapsed && badge && (
        <span className={cn(
          "ml-auto text-[10px] font-black px-2 py-0.5 rounded-lg",
          active ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
        )}>
          {badge}
        </span>
      )}
      {collapsed && active && (
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-8 bg-primary rounded-r-full shadow-[2px_0_10px_rgba(37,99,235,0.5)]"></div>
      )}
    </button>
  )
}

function StatsCard({ title, value, icon, trend, color, description, glow }: any) {
  const colorMap: any = {
    blue: "bg-blue-500/10 text-blue-500",
    emerald: "bg-emerald-500/10 text-emerald-500",
    amber: "bg-amber-500/10 text-amber-500",
    rose: "bg-rose-500/10 text-rose-500",
  }

  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        "bg-white dark:bg-[#0f172a] p-8 rounded-[2.5rem] border border-border/50 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden",
        glow
      )}
    >
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-current opacity-[0.03] rounded-full group-hover:scale-150 transition-transform duration-700"></div>
      <div className="flex items-center justify-between mb-8">
        <div className={cn("p-4 rounded-2xl transition-transform group-hover:scale-110 group-hover:rotate-6", colorMap[color])}>
          {icon}
        </div>
        <div className={cn(
          "flex items-center gap-1.5 text-[11px] font-black px-3 py-1.5 rounded-full",
          trend.startsWith('+') ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
        )}>
          {trend.startsWith('+') ? <ArrowUpRight size={14} /> : <TrendingUp size={14} className="rotate-180" />}
          {trend}
        </div>
      </div>
      <div>
        <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.2em]">{title}</p>
        <p className="text-4xl font-outfit font-black mt-2 tracking-tighter text-foreground">{value}</p>
        <p className="text-[11px] text-muted-foreground mt-4 font-bold opacity-60">{description}</p>
      </div>
    </motion.div>
  )
}

function LeadCard({ lead, index, onClick }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
      onClick={onClick}
      className="group bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md p-8 rounded-[2.5rem] border border-border/40 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all cursor-pointer relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-18 h-18 bg-gradient-to-br from-muted/10 to-muted/20 rounded-3xl flex items-center justify-center text-3xl font-black text-primary/30 group-hover:from-primary/20 group-hover:to-primary/30 group-hover:text-primary/60 transition-all duration-500 group-hover:rotate-3">
              {lead.name.charAt(0)}
            </div>
            {lead.status === 'new' && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-[#0f172a] shadow-lg animate-pulse"></span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h3 className="font-outfit font-black text-2xl group-hover:text-primary transition-colors tracking-tight">{lead.name}</h3>
              <span className={cn(
                "text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest border",
                lead.lead_type === 'Contact' ? "bg-blue-500/10 text-blue-500 border-blue-500/20" : "bg-purple-500/10 text-purple-500 border-purple-500/20"
              )}>
                {lead.lead_type}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-xs font-bold text-muted-foreground/70">
              <span className="flex items-center gap-2 bg-muted/10 px-2 py-1 rounded-lg"><Clock size={14} /> {new Date(lead.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
              <span className="flex items-center gap-2 bg-muted/10 px-2 py-1 rounded-lg"><Briefcase size={14} /> {lead.inquiry_type || lead.industry || 'General Inquiry'}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden lg:block text-right mr-4">
            <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.2em] mb-1 opacity-50">Direct Link</p>
            <p className="text-sm font-black text-primary/80">{lead.email.split('@')[0]}@...</p>
          </div>
          <button className="w-14 h-14 bg-primary/5 hover:bg-primary text-primary hover:text-white rounded-[1.5rem] flex items-center justify-center transition-all duration-300 group/btn shadow-sm hover:shadow-primary/30">
            <ExternalLink size={24} className="group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-slate-50/50 dark:bg-white/5 rounded-3xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-400 font-medium border border-border/20 relative z-10">
        {lead.message}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4 relative z-10">
        <ContactBadge icon={<Mail size={14} />} label={lead.email} />
        <ContactBadge icon={<Phone size={14} />} label={lead.phone} />
        <div className="ml-auto">
           <span className={cn(
            "px-5 py-2 rounded-2xl text-[11px] font-black uppercase tracking-[0.15em] shadow-sm",
            lead.status === 'new' ? "bg-primary text-white glow-blue" : "bg-slate-200 text-slate-500"
          )}>
            {lead.status || 'Received'}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

function ContactBadge({ icon, label }: any) {
  return (
    <div className="flex items-center gap-3 px-4 py-2.5 bg-white dark:bg-slate-800 border border-border/40 rounded-2xl text-[12px] font-bold text-muted-foreground hover:border-primary/30 hover:text-primary transition-all hover:shadow-md cursor-pointer">
      <div className="text-primary/70">{icon}</div>
      <span>{label}</span>
    </div>
  )
}

function HealthBar({ label, percentage, color }: any) {
  const colorMap: any = {
    emerald: "bg-emerald-500",
    blue: "bg-blue-500",
    amber: "bg-amber-500",
  }
  return (
    <div className="space-y-3">
      <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.15em]">
        <span className="text-slate-400">{label}</span>
        <span className="text-white">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          className={cn("h-full rounded-full transition-all duration-1000", colorMap[color])}
        ></motion.div>
      </div>
    </div>
  )
}

function QuickAction({ icon, label, color }: any) {
  const colorMap: any = {
    blue: "bg-blue-500/10 text-blue-500 border-blue-500/20 hover:bg-blue-500",
    purple: "bg-purple-500/10 text-purple-500 border-purple-500/20 hover:bg-purple-500",
    emerald: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500",
    slate: "bg-slate-500/10 text-slate-500 border-slate-500/20 hover:bg-slate-500",
  }
  return (
    <button className={cn("flex flex-col items-center justify-center p-6 rounded-3xl transition-all border gap-3 group hover:text-white hover:shadow-xl hover:-translate-y-1", colorMap[color])}>
      <div className="transition-transform group-hover:scale-110 group-hover:-rotate-6">{icon}</div>
      <span className="text-[10px] font-black uppercase tracking-wider">{label}</span>
    </button>
  )
}

function HeaderAction({ icon, badge, color }: any) {
  const colorMap: any = {
    blue: "hover:bg-blue-500/10 hover:text-blue-500",
    purple: "hover:bg-purple-500/10 hover:text-purple-500",
  }
  return (
    <button className={cn("relative w-12 h-12 flex items-center justify-center bg-white/50 dark:bg-white/5 hover:bg-white border border-border/50 rounded-2xl transition-all text-muted-foreground hover:shadow-md", colorMap[color])}>
      {icon}
      {badge && <span className="absolute top-3 right-3 w-3 h-3 bg-primary rounded-full border-2 border-white dark:border-[#020617] shadow-sm"></span>}
    </button>
  )
}
