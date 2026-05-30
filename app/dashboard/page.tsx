"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Phone, MessageSquare, RefreshCw, LogOut, Search,
  CheckCircle2, XCircle, PhoneCall, TrendingUp,
  Inbox, Eye, Trash2, ChevronDown, Lock, User,
  AlertCircle, Loader2, Download, LayoutDashboard,
  Users, Settings, Activity, Zap, Bell
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────
type Lead = {
  id: number
  created_at: string
  name: string
  phone: string
  inquiry_type?: string
  message?: string
  status: "new" | "called" | "interested" | "converted" | "not_interested"
  notes?: string
}
type Tab = "all" | "new" | "called" | "interested" | "converted" | "not_interested"

const PASS = "winsoft2024"

const S = {
  new:            { label: "New Lead",       pill: "bg-blue-500/20 text-blue-300 border border-blue-500/30",     dot: "bg-blue-400"    },
  called:         { label: "Called",         pill: "bg-amber-500/20 text-amber-300 border border-amber-500/30",  dot: "bg-amber-400"   },
  interested:     { label: "Interested",     pill: "bg-purple-500/20 text-purple-300 border border-purple-500/30", dot: "bg-purple-400" },
  converted:      { label: "Converted ✅",   pill: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30", dot: "bg-emerald-400" },
  not_interested: { label: "Not Interested", pill: "bg-red-500/20 text-red-300 border border-red-500/30",        dot: "bg-red-400"     },
}

function fmtDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" }) +
    " · " + d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
}

function getProduct(lead: Lead) {
  const s = (lead.inquiry_type || "") + " " + (lead.message || "")
  if (s.includes("AMCS"))       return "AMCS"
  if (s.includes("Sankalan"))   return "Sankalan App"
  if (s.includes("Admin ERP"))  return "Admin ERP"
  if (s.includes("Hardware"))   return "Hardware"
  if (s.includes("Cattle"))     return "Cattle Feed"
  if (s.includes("Gold"))       return "Gold Software"
  if (s.includes("Sugar"))      return "Sugar ERP"
  if (s.includes("Demo"))       return "Demo Request"
  return (lead.inquiry_type || "General").replace("Popup - ", "").replace("Dairy Solutions Popup - ", "")
}

// ─── Login ────────────────────────────────────────────────────────────────────
function Login({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("")
  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      if (pw === PASS) { sessionStorage.setItem("ws_auth", "1"); onLogin() }
      else { setErr(true); setLoading(false) }
    }, 600)
  }

  return (
    <div style={{ minHeight: "100vh", background: "#080810", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", position: "relative", overflow: "hidden" }}>
      {/* Glow */}
      <div style={{ position: "absolute", top: "20%", left: "20%", width: 400, height: 400, background: "rgba(30,148,164,0.08)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", right: "20%", width: 300, height: 300, background: "rgba(139,92,246,0.06)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none" }} />

      <div style={{ width: "100%", maxWidth: 380, background: "#10101a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: "2.5rem", position: "relative" }}>
        {/* Top accent line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #1E94A4, #22d3ee, transparent)", borderRadius: "24px 24px 0 0" }} />

        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ width: 64, height: 64, background: "linear-gradient(135deg, #1E94A4, #22d3ee)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", boxShadow: "0 8px 32px rgba(30,148,164,0.35)" }}>
            <Lock style={{ width: 28, height: 28, color: "white" }} />
          </div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#ffffff", margin: 0, letterSpacing: "-0.02em" }}>WinDash</h1>
          <p style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: 4 }}>Winsoft Admin Control Panel</p>
        </div>

        <form onSubmit={submit}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Password</label>
            <input
              type="password" value={pw} autoFocus
              onChange={e => { setPw(e.target.value); setErr(false) }}
              placeholder="••••••••••••"
              style={{
                width: "100%", padding: "0.75rem 1rem", borderRadius: 12, border: err ? "1px solid rgba(239,68,68,0.5)" : "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)", color: "#ffffff", fontSize: "0.9rem", outline: "none", boxSizing: "border-box",
              }}
            />
            {err && <p style={{ color: "#f87171", fontSize: "0.75rem", marginTop: 6, display: "flex", alignItems: "center", gap: 4 }}>
              <AlertCircle style={{ width: 14, height: 14 }} /> Incorrect password
            </p>}
          </div>
          <button type="submit" disabled={loading || !pw}
            style={{
              width: "100%", padding: "0.85rem", borderRadius: 12, border: "none", cursor: loading || !pw ? "not-allowed" : "pointer",
              background: "linear-gradient(135deg, #1E94A4, #22d3ee)", color: "white", fontWeight: 700, fontSize: "0.9rem",
              opacity: loading || !pw ? 0.5 : 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              boxShadow: "0 4px 20px rgba(30,148,164,0.3)",
            }}>
            {loading ? <Loader2 style={{ width: 16, height: 16, animation: "spin 1s linear infinite" }} /> : <Zap style={{ width: 16, height: 16 }} />}
            {loading ? "Verifying..." : "Enter Dashboard"}
          </button>
        </form>
        <p style={{ textAlign: "center", fontSize: "0.7rem", color: "#4b5563", marginTop: "1.5rem" }}>Winsoft Internal · Confidential</p>
      </div>
    </div>
  )
}

// ─── Status Dropdown ──────────────────────────────────────────────────────────
function StatusDrop({ lead, onUpdate }: { lead: Lead; onUpdate: (id: number, s: Lead["status"]) => void }) {
  const [open, setOpen] = useState(false)
  const cfg = S[lead.status] || S.new
  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold cursor-pointer ${cfg.pill}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} style={{ animation: "pulse 2s infinite" }} />
        {cfg.label}
        <ChevronDown style={{ width: 12, height: 12 }} />
      </button>
      {open && (
        <>
          <div style={{ position: "fixed", inset: 0, zIndex: 10 }} onClick={() => setOpen(false)} />
          <div style={{ position: "absolute", left: 0, top: "calc(100% + 4px)", zIndex: 20, background: "#1a1a28", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, overflow: "hidden", width: 176, boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
            {(Object.entries(S) as [Lead["status"], typeof S[keyof typeof S]][]).map(([key, val]) => (
              <button key={key} onClick={() => { onUpdate(lead.id, key); setOpen(false) }}
                style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "0.6rem 0.75rem", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer", border: "none", textAlign: "left", background: lead.status === key ? "rgba(255,255,255,0.08)" : "transparent", color: lead.status === key ? "#ffffff" : "#9ca3af" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                onMouseLeave={e => (e.currentTarget.style.background = lead.status === key ? "rgba(255,255,255,0.08)" : "transparent")}>
                <span className={`w-2 h-2 rounded-full ${val.dot}`} />
                {val.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ─── Lead Card ────────────────────────────────────────────────────────────────
function LeadCard({ lead, onUpdate, onDelete }: { lead: Lead; onUpdate: (id: number, s: Lead["status"], n?: string) => void; onDelete: (id: number) => void }) {
  const [showNotes, setShowNotes] = useState(false)
  const [notes, setNotes] = useState(lead.notes || "")
  const product = getProduct(lead)

  const glowColor = lead.status === "converted" ? "rgba(52,211,153,0.5)" : lead.status === "new" ? "rgba(96,165,250,0.5)" : lead.status === "interested" ? "rgba(167,139,250,0.5)" : lead.status === "called" ? "rgba(251,191,36,0.5)" : "rgba(248,113,113,0.3)"

  return (
    <div style={{ background: "#10101a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "1rem", position: "relative", overflow: "hidden", transition: "border-color 0.2s" }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>
      {/* Status glow line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)` }} />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(30,148,164,0.15)", border: "1px solid rgba(30,148,164,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <User style={{ width: 16, height: 16, color: "#22d3ee" }} />
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.875rem", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lead.name}</p>
            <p style={{ fontSize: "0.75rem", color: "#6b7280", fontFamily: "monospace", margin: 0, letterSpacing: "0.05em" }}>{lead.phone}</p>
          </div>
        </div>
        <StatusDrop lead={lead} onUpdate={onUpdate} />
      </div>

      {/* Product + Date */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 8px", background: "rgba(30,148,164,0.12)", border: "1px solid rgba(30,148,164,0.2)", borderRadius: 8, fontSize: "0.7rem", fontWeight: 600, color: "#22d3ee" }}>
          📦 {product}
        </span>
        <span style={{ fontSize: "0.7rem", color: "#4b5563" }}>{fmtDate(lead.created_at)}</span>
      </div>

      {/* Notes */}
      {lead.notes && !showNotes && (
        <p style={{ fontSize: "0.75rem", color: "#9ca3af", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: "6px 10px", marginBottom: 10, fontStyle: "italic" }}>
          📝 {lead.notes}
        </p>
      )}
      {showNotes && (
        <div style={{ marginBottom: 10 }}>
          <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={2} placeholder="Notes लिहा..."
            style={{ width: "100%", padding: "8px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "#ffffff", fontSize: "0.75rem", outline: "none", resize: "none", boxSizing: "border-box" }} />
          <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
            <button onClick={() => { onUpdate(lead.id, lead.status, notes); setShowNotes(false) }}
              style={{ flex: 1, padding: "6px", background: "#1E94A4", color: "white", border: "none", borderRadius: 8, fontSize: "0.75rem", fontWeight: 700, cursor: "pointer" }}>Save</button>
            <button onClick={() => setShowNotes(false)}
              style={{ flex: 1, padding: "6px", background: "transparent", color: "#9ca3af", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: "0.75rem", fontWeight: 700, cursor: "pointer" }}>Cancel</button>
          </div>
        </div>
      )}

      {/* Actions */}
      <div style={{ display: "flex", gap: 6 }}>
        <a href={`tel:${lead.phone}`} onClick={() => onUpdate(lead.id, "called")}
          style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 4, padding: "7px", background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: 10, color: "#34d399", fontSize: "0.75rem", fontWeight: 700, textDecoration: "none" }}>
          <Phone style={{ width: 13, height: 13 }} /> Call
        </a>
        <a href={`https://wa.me/91${lead.phone}?text=${encodeURIComponent(`नमस्कार ${lead.name}! मी Winsoft Software कडून बोलतोय. तुम्ही ${product} बद्दल enquiry केली होती. Free demo साठी वेळ सांगा.`)}`}
          target="_blank" rel="noopener noreferrer"
          style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 4, padding: "7px", background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.2)", borderRadius: 10, color: "#25D366", fontSize: "0.75rem", fontWeight: 700, textDecoration: "none" }}>
          <MessageSquare style={{ width: 13, height: 13 }} /> WhatsApp
        </a>
        <button onClick={() => setShowNotes(!showNotes)}
          style={{ padding: "7px 10px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, color: "#9ca3af", fontSize: "0.75rem", cursor: "pointer" }}>📝</button>
        <button onClick={() => { if (confirm("Delete this lead?")) onDelete(lead.id) }}
          style={{ padding: "7px 10px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 10, color: "#f87171", cursor: "pointer" }}>
          <Trash2 style={{ width: 13, height: 13 }} />
        </button>
      </div>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const [authed, setAuthed] = useState(false)
  const [checking, setChecking] = useState(true)
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)
  const [tab, setTab] = useState<Tab>("all")
  const [search, setSearch] = useState("")
  const [synced, setSynced] = useState<Date | null>(null)

  useEffect(() => {
    if (sessionStorage.getItem("ws_auth") === "1") setAuthed(true)
    setChecking(false)
  }, [])

  const fetchLeads = useCallback(async () => {
    setLoading(true)
    try {
      const [c, d] = await Promise.all([fetch("/api/contacts"), fetch("/api/demo-requests")])
      const all = [...await c.json(), ...await d.json()].sort((a: Lead, b: Lead) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      setLeads(all); setSynced(new Date())
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }, [])

  useEffect(() => { if (authed) fetchLeads() }, [authed, fetchLeads])

  const handleUpdate = async (id: number, status: Lead["status"], notes?: string) => {
    setLeads(p => p.map(l => l.id === id ? { ...l, status, notes: notes ?? l.notes } : l))
    const lead = leads.find(l => l.id === id)
    const ep = (lead?.inquiry_type || "").toLowerCase().includes("demo") ? `/api/demo-requests/${id}` : `/api/contacts/${id}`
    await fetch(ep, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status, notes }) }).catch(console.error)
  }

  const handleDelete = async (id: number) => {
    const lead = leads.find(l => l.id === id)
    const ep = (lead?.inquiry_type || "").toLowerCase().includes("demo") ? `/api/demo-requests/${id}` : `/api/contacts/${id}`
    setLeads(p => p.filter(l => l.id !== id))
    await fetch(ep, { method: "DELETE" }).catch(console.error)
  }

  const stats = { total: leads.length, new: leads.filter(l => l.status === "new").length, called: leads.filter(l => l.status === "called").length, interested: leads.filter(l => l.status === "interested").length, converted: leads.filter(l => l.status === "converted").length, not_interested: leads.filter(l => l.status === "not_interested").length }

  const filtered = leads.filter(l => {
    const matchTab = tab === "all" || l.status === tab
    const q = search.toLowerCase()
    return matchTab && (!q || l.name?.toLowerCase().includes(q) || l.phone?.includes(q) || getProduct(l).toLowerCase().includes(q))
  })

  const exportCSV = () => {
    const csv = [["Name","Phone","Product","Status","Date","Notes"], ...filtered.map(l => [l.name, l.phone, getProduct(l), l.status, fmtDate(l.created_at), l.notes || ""])].map(r => r.map(c => `"${c}"`).join(",")).join("\n")
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" })); a.download = `leads-${new Date().toISOString().slice(0,10)}.csv`; a.click()
  }

  if (checking) return <div style={{ minHeight: "100vh", background: "#080810", display: "flex", alignItems: "center", justifyContent: "center" }}><Loader2 style={{ width: 32, height: 32, color: "#1E94A4", animation: "spin 1s linear infinite" }} /></div>
  if (!authed) return <Login onLogin={() => setAuthed(true)} />

  const STAT_CARDS = [
    { key: "total",          label: "Total",      icon: Inbox,        grad: "linear-gradient(135deg,#374151,#1f2937)", glow: "rgba(107,114,128,0.3)" },
    { key: "new",            label: "New",        icon: TrendingUp,   grad: "linear-gradient(135deg,#1d4ed8,#2563eb)", glow: "rgba(59,130,246,0.4)"  },
    { key: "called",         label: "Called",     icon: PhoneCall,    grad: "linear-gradient(135deg,#b45309,#d97706)", glow: "rgba(245,158,11,0.4)"  },
    { key: "interested",     label: "Interested", icon: Eye,          grad: "linear-gradient(135deg,#6d28d9,#7c3aed)", glow: "rgba(139,92,246,0.4)"  },
    { key: "converted",      label: "Converted",  icon: CheckCircle2, grad: "linear-gradient(135deg,#065f46,#059669)", glow: "rgba(16,185,129,0.4)"  },
    { key: "not_interested", label: "Not Int.",   icon: XCircle,      grad: "linear-gradient(135deg,#991b1b,#dc2626)", glow: "rgba(239,68,68,0.4)"   },
  ]

  const NAV = [
    { icon: LayoutDashboard, label: "Overview",  active: true  },
    { icon: Users,           label: "Leads",     active: false },
    { icon: Activity,        label: "Analytics", active: false },
    { icon: Settings,        label: "Settings",  active: false },
  ]

  return (
    <div style={{ minHeight: "100vh", background: "#080810", display: "flex", color: "#ffffff", fontFamily: "system-ui, sans-serif" }}>

      {/* ── Sidebar ── */}
      <aside style={{ width: 220, background: "#0d0d18", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", flexShrink: 0, position: "sticky", top: 0, height: "100vh" }}>
        {/* Logo */}
        <div style={{ padding: "1.25rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg,#1E94A4,#22d3ee)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(30,148,164,0.4)" }}>
              <Zap style={{ width: 16, height: 16, color: "white" }} />
            </div>
            <div>
              <p style={{ fontSize: "0.875rem", fontWeight: 900, color: "#ffffff", margin: 0, letterSpacing: "-0.02em" }}>WinDash</p>
              <p style={{ fontSize: "0.6rem", color: "#4b5563", margin: 0, textTransform: "uppercase", letterSpacing: "0.1em" }}>Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "0.75rem" }}>
          {NAV.map(({ icon: Icon, label, active }) => (
            <button key={label} style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "0.6rem 0.75rem", borderRadius: 10, border: "none", cursor: "pointer", marginBottom: 2, background: active ? "rgba(30,148,164,0.15)" : "transparent", color: active ? "#22d3ee" : "#6b7280", fontSize: "0.8rem", fontWeight: 600, textAlign: "left", transition: "all 0.15s" }}
              onMouseEnter={e => { if (!active) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#d1d5db" } }}
              onMouseLeave={e => { if (!active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#6b7280" } }}>
              <Icon style={{ width: 15, height: 15 }} />
              {label}
              {label === "Leads" && stats.new > 0 && (
                <span style={{ marginLeft: "auto", background: "#3b82f6", color: "white", fontSize: "0.6rem", fontWeight: 900, padding: "1px 6px", borderRadius: 999 }}>{stats.new}</span>
              )}
            </button>
          ))}
        </nav>

        {/* User + Logout */}
        <div style={{ padding: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0.5rem 0.75rem", background: "rgba(255,255,255,0.04)", borderRadius: 10, marginBottom: 6 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#1E94A4,#22d3ee)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 900, color: "white", flexShrink: 0 }}>W</div>
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#e5e7eb", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Winsoft Admin</p>
              <p style={{ fontSize: "0.65rem", color: "#4b5563", margin: 0 }}>admin@winsoft.in</p>
            </div>
          </div>
          <button onClick={() => { sessionStorage.removeItem("ws_auth"); setAuthed(false) }}
            style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "0.5rem 0.75rem", borderRadius: 10, border: "none", cursor: "pointer", background: "transparent", color: "#f87171", fontSize: "0.75rem", fontWeight: 700 }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(239,68,68,0.1)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
            <LogOut style={{ width: 14, height: 14 }} /> Logout
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, overflow: "auto" }}>

        {/* Topbar */}
        <header style={{ height: 56, background: "rgba(13,13,24,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.5rem", position: "sticky", top: 0, zIndex: 30 }}>
          <div>
            <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>Leads Overview</p>
            <p style={{ fontSize: "0.65rem", color: "#4b5563", margin: 0 }}>{synced ? `Synced ${synced.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}` : "Loading..."}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 10px", background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: 999, fontSize: "0.7rem", fontWeight: 700, color: "#34d399" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399", animation: "pulse 2s infinite" }} />
              LIVE SYNC
            </div>
            <button onClick={fetchLeads} disabled={loading} style={{ padding: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, cursor: "pointer", color: "#9ca3af" }}>
              <RefreshCw style={{ width: 15, height: 15, animation: loading ? "spin 1s linear infinite" : "none" }} />
            </button>
            <button onClick={exportCSV} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, cursor: "pointer", color: "#9ca3af", fontSize: "0.75rem", fontWeight: 700 }}>
              <Download style={{ width: 14, height: 14 }} /> Export CSV
            </button>
          </div>
        </header>

        <main style={{ flex: 1, padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "0.75rem" }}>
            {STAT_CARDS.map(({ key, label, icon: Icon, grad, glow }) => (
              <button key={key} onClick={() => setTab(key as Tab)}
                style={{ background: "#10101a", border: tab === key ? "1px solid rgba(30,148,164,0.5)" : "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "0.875rem 0.5rem", textAlign: "center", cursor: "pointer", transition: "all 0.2s", boxShadow: tab === key ? "0 0 20px rgba(30,148,164,0.15)" : "none" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.borderColor = tab === key ? "rgba(30,148,164,0.5)" : "rgba(255,255,255,0.06)" }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: grad, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px", boxShadow: `0 4px 12px ${glow}` }}>
                  <Icon style={{ width: 15, height: 15, color: "white" }} />
                </div>
                <div style={{ fontSize: "1.25rem", fontWeight: 900, color: "#ffffff" }}>{stats[key as keyof typeof stats]}</div>
                <div style={{ fontSize: "0.65rem", color: "#6b7280", marginTop: 2, fontWeight: 500 }}>{label}</div>
              </button>
            ))}
          </div>

          {/* Search */}
          <div style={{ position: "relative" }}>
            <Search style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 15, height: 15, color: "#4b5563" }} />
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Name, phone किंवा product search करा..."
              style={{ width: "100%", paddingLeft: 36, paddingRight: 16, paddingTop: 10, paddingBottom: 10, background: "#10101a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, color: "#ffffff", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }} />
          </div>

          {/* Tab pills */}
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
            {(["all","new","called","interested","converted","not_interested"] as Tab[]).map(t => (
              <button key={t} onClick={() => setTab(t)}
                style={{ flexShrink: 0, padding: "6px 14px", borderRadius: 999, fontSize: "0.75rem", fontWeight: 700, cursor: "pointer", border: "none", transition: "all 0.15s",
                  background: tab === t ? "linear-gradient(135deg,#1E94A4,#22d3ee)" : "rgba(255,255,255,0.05)",
                  color: tab === t ? "white" : "#6b7280",
                  boxShadow: tab === t ? "0 4px 16px rgba(30,148,164,0.3)" : "none" }}>
                {t === "all" ? `All (${stats.total})` : t === "new" ? `New (${stats.new})` : t === "called" ? `Called (${stats.called})` : t === "interested" ? `Interested (${stats.interested})` : t === "converted" ? `Converted (${stats.converted})` : `Not Int. (${stats.not_interested})`}
              </button>
            ))}
          </div>

          {/* Leads grid */}
          {loading ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5rem 0", gap: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(30,148,164,0.1)", border: "1px solid rgba(30,148,164,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Loader2 style={{ width: 22, height: 22, color: "#22d3ee", animation: "spin 1s linear infinite" }} />
              </div>
              <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Leads load होत आहेत...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5rem 0", gap: 12, textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem" }}>📭</div>
              <p style={{ fontWeight: 700, color: "#d1d5db", margin: 0 }}>{search ? "कोणताही lead सापडला नाही" : "अजून कोणताही lead नाही"}</p>
              <p style={{ fontSize: "0.875rem", color: "#4b5563", margin: 0 }}>{search ? "वेगळा search करा" : "Popup form submit झाल्यावर इथे दिसेल"}</p>
            </div>
          ) : (
            <>
              <p style={{ fontSize: "0.75rem", color: "#4b5563", margin: 0 }}>{filtered.length} lead{filtered.length !== 1 ? "s" : ""} · Recent Submissions</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
                {filtered.map(lead => <LeadCard key={lead.id} lead={lead} onUpdate={handleUpdate} onDelete={handleDelete} />)}
              </div>
            </>
          )}
        </main>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg) } } @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }`}</style>
    </div>
  )
}
