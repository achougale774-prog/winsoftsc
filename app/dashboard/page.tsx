"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Phone, MessageSquare, RefreshCw, LogOut, Search,
  CheckCircle2, XCircle, PhoneCall, TrendingUp,
  Inbox, Eye, Trash2, ChevronDown, Lock,
  AlertCircle, Loader2, Download, LayoutDashboard,
  Users, Settings, Activity, Zap, User
} from "lucide-react"

// ── Types ─────────────────────────────────────────────────────────────────────
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

const STATUS = {
  new:            { label: "New Lead",       bg: "#EFF6FF", color: "#1D4ED8", dot: "#3B82F6" },
  called:         { label: "Called",         bg: "#FFFBEB", color: "#92400E", dot: "#F59E0B" },
  interested:     { label: "Interested",     bg: "#F5F3FF", color: "#5B21B6", dot: "#8B5CF6" },
  converted:      { label: "Converted ✅",   bg: "#ECFDF5", color: "#065F46", dot: "#10B981" },
  not_interested: { label: "Not Interested", bg: "#FEF2F2", color: "#991B1B", dot: "#EF4444" },
}

const BRAND = "#1E94A4"
const BRAND2 = "#0B7989"

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) +
    "  " + new Date(iso).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
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

// ── CSS ───────────────────────────────────────────────────────────────────────
const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
  .ws-dash { display: flex; min-height: 100vh; background: #F8FAFC; color: #0F172A; }

  /* Sidebar */
  .ws-sidebar {
    width: 240px; background: #fff; border-right: 1px solid #E2E8F0;
    display: flex; flex-direction: column; position: sticky; top: 0; height: 100vh; flex-shrink: 0;
  }
  .ws-logo { padding: 20px; border-bottom: 1px solid #E2E8F0; display: flex; align-items: center; gap: 10px; }
  .ws-logo-icon { width: 36px; height: 36px; border-radius: 10px; background: linear-gradient(135deg, #1E94A4, #22d3ee); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(30,148,164,0.3); flex-shrink: 0; }
  .ws-logo-title { font-size: 15px; font-weight: 800; color: #0F172A; letter-spacing: -0.02em; }
  .ws-logo-sub { font-size: 10px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 1px; }
  .ws-nav { flex: 1; padding: 12px; }
  .ws-nav-item { width: 100%; display: flex; align-items: center; gap: 10px; padding: 9px 12px; border-radius: 8px; border: none; cursor: pointer; font-size: 13px; font-weight: 600; text-align: left; transition: all 0.15s; background: transparent; color: #64748B; }
  .ws-nav-item:hover { background: #F1F5F9; color: #0F172A; }
  .ws-nav-item.active { background: #EFF9FA; color: #1E94A4; }
  .ws-nav-badge { margin-left: auto; background: #3B82F6; color: white; font-size: 10px; font-weight: 800; padding: 1px 7px; border-radius: 999px; }
  .ws-user { padding: 12px; border-top: 1px solid #E2E8F0; }
  .ws-user-card { display: flex; align-items: center; gap: 8px; padding: 8px 10px; background: #F8FAFC; border-radius: 8px; margin-bottom: 6px; }
  .ws-user-avatar { width: 30px; height: 30px; border-radius: 8px; background: linear-gradient(135deg, #1E94A4, #22d3ee); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; color: white; flex-shrink: 0; }
  .ws-user-name { font-size: 12px; font-weight: 700; color: #0F172A; }
  .ws-user-email { font-size: 10px; color: #94A3B8; }
  .ws-logout { width: 100%; display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 8px; border: none; cursor: pointer; background: transparent; color: #EF4444; font-size: 12px; font-weight: 700; transition: background 0.15s; }
  .ws-logout:hover { background: #FEF2F2; }

  /* Main */
  .ws-main { flex: 1; display: flex; flex-direction: column; min-width: 0; overflow: auto; }
  .ws-topbar { height: 56px; background: #fff; border-bottom: 1px solid #E2E8F0; display: flex; align-items: center; justify-content: space-between; padding: 0 24px; position: sticky; top: 0; z-index: 30; }
  .ws-topbar-title { font-size: 15px; font-weight: 700; color: #0F172A; }
  .ws-topbar-sub { font-size: 11px; color: #94A3B8; margin-top: 1px; }
  .ws-topbar-actions { display: flex; align-items: center; gap: 8px; }
  .ws-live-badge { display: flex; align-items: center; gap: 6px; padding: 4px 10px; background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 999px; font-size: 11px; font-weight: 700; color: #065F46; }
  .ws-live-dot { width: 6px; height: 6px; border-radius: 50%; background: #10B981; animation: pulse 2s infinite; }
  .ws-btn-icon { padding: 7px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; cursor: pointer; color: #64748B; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
  .ws-btn-icon:hover { background: #F1F5F9; border-color: #CBD5E1; }
  .ws-btn-text { display: flex; align-items: center; gap: 6px; padding: 7px 14px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; cursor: pointer; color: #475569; font-size: 12px; font-weight: 700; transition: all 0.15s; }
  .ws-btn-text:hover { background: #F1F5F9; }

  /* Content */
  .ws-content { flex: 1; padding: 24px; display: flex; flex-direction: column; gap: 20px; }

  /* Stats */
  .ws-stats { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; }
  .ws-stat-card { background: #fff; border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px 12px; text-align: center; cursor: pointer; transition: all 0.2s; }
  .ws-stat-card:hover { transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,0,0,0.08); border-color: #CBD5E1; }
  .ws-stat-card.active { border-color: #1E94A4; box-shadow: 0 0 0 3px rgba(30,148,164,0.1); }
  .ws-stat-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; }
  .ws-stat-num { font-size: 22px; font-weight: 900; color: #0F172A; }
  .ws-stat-label { font-size: 11px; color: #94A3B8; font-weight: 500; margin-top: 2px; }

  /* Search */
  .ws-search-wrap { position: relative; }
  .ws-search-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #94A3B8; }
  .ws-search { width: 100%; padding: 10px 16px 10px 38px; background: #fff; border: 1px solid #E2E8F0; border-radius: 10px; font-size: 14px; color: #0F172A; outline: none; transition: border-color 0.15s; }
  .ws-search:focus { border-color: #1E94A4; box-shadow: 0 0 0 3px rgba(30,148,164,0.1); }
  .ws-search::placeholder { color: #94A3B8; }

  /* Tabs */
  .ws-tabs { display: flex; gap: 6px; overflow-x: auto; padding-bottom: 2px; }
  .ws-tab { flex-shrink: 0; padding: 6px 14px; border-radius: 999px; font-size: 12px; font-weight: 700; cursor: pointer; border: 1px solid #E2E8F0; background: #fff; color: #64748B; transition: all 0.15s; }
  .ws-tab:hover { border-color: #1E94A4; color: #1E94A4; }
  .ws-tab.active { background: #1E94A4; border-color: #1E94A4; color: #fff; box-shadow: 0 2px 8px rgba(30,148,164,0.3); }

  /* Leads grid */
  .ws-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; }
  .ws-count { font-size: 12px; color: #94A3B8; }

  /* Lead card */
  .ws-card { background: #fff; border: 1px solid #E2E8F0; border-radius: 14px; padding: 16px; transition: all 0.2s; position: relative; overflow: hidden; }
  .ws-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-color: #CBD5E1; transform: translateY(-1px); }
  .ws-card-top-line { position: absolute; top: 0; left: 0; right: 0; height: 3px; border-radius: 14px 14px 0 0; }
  .ws-card-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; margin-bottom: 12px; }
  .ws-card-avatar { width: 38px; height: 38px; border-radius: 10px; background: #EFF9FA; border: 1px solid #CCEEF2; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .ws-card-name { font-size: 14px; font-weight: 700; color: #0F172A; }
  .ws-card-phone { font-size: 12px; color: #64748B; font-family: monospace; letter-spacing: 0.04em; margin-top: 1px; }
  .ws-card-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
  .ws-product-tag { display: inline-flex; align-items: center; gap: 4px; padding: 3px 8px; background: #EFF9FA; border: 1px solid #CCEEF2; border-radius: 6px; font-size: 11px; font-weight: 600; color: #1E94A4; }
  .ws-date { font-size: 11px; color: #94A3B8; }
  .ws-notes-box { font-size: 12px; color: #64748B; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 7px 10px; margin-bottom: 10px; font-style: italic; }
  .ws-notes-textarea { width: 100%; padding: 8px 10px; border: 1px solid #E2E8F0; border-radius: 8px; font-size: 12px; color: #0F172A; outline: none; resize: none; font-family: inherit; }
  .ws-notes-textarea:focus { border-color: #1E94A4; }
  .ws-notes-actions { display: flex; gap: 6px; margin-top: 6px; }
  .ws-btn-save { flex: 1; padding: 6px; background: #1E94A4; color: white; border: none; border-radius: 7px; font-size: 12px; font-weight: 700; cursor: pointer; }
  .ws-btn-cancel { flex: 1; padding: 6px; background: #F8FAFC; color: #64748B; border: 1px solid #E2E8F0; border-radius: 7px; font-size: 12px; font-weight: 700; cursor: pointer; }
  .ws-actions { display: flex; gap: 6px; }
  .ws-btn-call { flex: 1; display: flex; align-items: center; justify-content: center; gap: 5px; padding: 8px; background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 9px; color: #065F46; font-size: 12px; font-weight: 700; text-decoration: none; transition: all 0.15s; cursor: pointer; }
  .ws-btn-call:hover { background: #D1FAE5; }
  .ws-btn-wa { flex: 1; display: flex; align-items: center; justify-content: center; gap: 5px; padding: 8px; background: #F0FDF4; border: 1px solid #86EFAC; border-radius: 9px; color: #166534; font-size: 12px; font-weight: 700; text-decoration: none; transition: all 0.15s; }
  .ws-btn-wa:hover { background: #DCFCE7; }
  .ws-btn-note { padding: 8px 10px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 9px; color: #64748B; font-size: 12px; cursor: pointer; transition: all 0.15s; }
  .ws-btn-note:hover { background: #F1F5F9; }
  .ws-btn-del { padding: 8px 10px; background: #FEF2F2; border: 1px solid #FECACA; border-radius: 9px; color: #DC2626; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
  .ws-btn-del:hover { background: #FEE2E2; }

  /* Status pill */
  .ws-status-pill { display: inline-flex; align-items: center; gap: 5px; padding: 3px 9px; border-radius: 999px; font-size: 11px; font-weight: 700; cursor: pointer; border: 1px solid transparent; }
  .ws-status-dot { width: 6px; height: 6px; border-radius: 50%; }
  .ws-dropdown { position: absolute; right: 0; top: calc(100% + 4px); z-index: 50; background: #fff; border: 1px solid #E2E8F0; border-radius: 10px; overflow: hidden; width: 168px; box-shadow: 0 8px 30px rgba(0,0,0,0.12); }
  .ws-dropdown-item { width: 100%; display: flex; align-items: center; gap: 8px; padding: 9px 12px; font-size: 12px; font-weight: 600; cursor: pointer; border: none; background: transparent; text-align: left; color: #374151; transition: background 0.1s; }
  .ws-dropdown-item:hover { background: #F8FAFC; }
  .ws-dropdown-item.selected { background: #EFF9FA; color: #1E94A4; }

  /* Empty / Loading */
  .ws-empty { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 80px 0; gap: 12px; text-align: center; }
  .ws-empty-icon { font-size: 40px; }
  .ws-empty-title { font-size: 15px; font-weight: 700; color: #374151; }
  .ws-empty-sub { font-size: 13px; color: #94A3B8; }

  /* Login */
  .ws-login { min-height: 100vh; background: linear-gradient(135deg, #F0FDFF 0%, #E0F7FA 50%, #F8FAFC 100%); display: flex; align-items: center; justify-content: center; padding: 16px; }
  .ws-login-card { width: 100%; max-width: 380px; background: #fff; border: 1px solid #E2E8F0; border-radius: 20px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.08); }
  .ws-login-logo { width: 60px; height: 60px; border-radius: 16px; background: linear-gradient(135deg, #1E94A4, #22d3ee); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; box-shadow: 0 8px 24px rgba(30,148,164,0.3); }
  .ws-login-title { font-size: 22px; font-weight: 900; color: #0F172A; text-align: center; letter-spacing: -0.02em; }
  .ws-login-sub { font-size: 13px; color: #94A3B8; text-align: center; margin-top: 4px; margin-bottom: 28px; }
  .ws-input-label { display: block; font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; }
  .ws-input { width: 100%; padding: 11px 14px; border-radius: 10px; border: 1px solid #E2E8F0; font-size: 14px; color: #0F172A; outline: none; transition: all 0.15s; }
  .ws-input:focus { border-color: #1E94A4; box-shadow: 0 0 0 3px rgba(30,148,164,0.1); }
  .ws-input.error { border-color: #EF4444; box-shadow: 0 0 0 3px rgba(239,68,68,0.1); }
  .ws-input-error { font-size: 12px; color: #EF4444; margin-top: 6px; display: flex; align-items: center; gap: 4px; }
  .ws-login-btn { width: 100%; padding: 12px; border-radius: 10px; border: none; background: linear-gradient(135deg, #1E94A4, #22d3ee); color: white; font-size: 14px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 16px; box-shadow: 0 4px 16px rgba(30,148,164,0.3); transition: opacity 0.15s; }
  .ws-login-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .ws-login-footer { text-align: center; font-size: 11px; color: #CBD5E1; margin-top: 20px; }

  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
  @keyframes spin { to { transform: rotate(360deg) } }
  .spin { animation: spin 1s linear infinite; }
`

// ── Login ─────────────────────────────────────────────────────────────────────
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
    <>
      <style>{css}</style>
      <div className="ws-login">
        <div className="ws-login-card">
          <div className="ws-login-logo">
            <Lock style={{ width: 26, height: 26, color: "white" }} />
          </div>
          <h1 className="ws-login-title">WinDash</h1>
          <p className="ws-login-sub">Winsoft Leads Management Panel</p>

          <form onSubmit={submit}>
            <label className="ws-input-label">Password</label>
            <input type="password" value={pw} autoFocus
              onChange={e => { setPw(e.target.value); setErr(false) }}
              placeholder="Enter your password"
              className={`ws-input${err ? " error" : ""}`} />
            {err && (
              <p className="ws-input-error">
                <AlertCircle style={{ width: 13, height: 13 }} /> Incorrect password. Try again.
              </p>
            )}
            <button type="submit" disabled={loading || !pw} className="ws-login-btn">
              {loading
                ? <Loader2 style={{ width: 16, height: 16 }} className="spin" />
                : <Zap style={{ width: 16, height: 16 }} />}
              {loading ? "Verifying..." : "Enter Dashboard"}
            </button>
          </form>
          <p className="ws-login-footer">Winsoft Software Consultancy · Internal Use Only</p>
        </div>
      </div>
    </>
  )
}

// ── Status Dropdown ───────────────────────────────────────────────────────────
function StatusDrop({ lead, onUpdate }: { lead: Lead; onUpdate: (id: number, s: Lead["status"]) => void }) {
  const [open, setOpen] = useState(false)
  const cfg = STATUS[lead.status] || STATUS.new

  return (
    <div style={{ position: "relative", flexShrink: 0 }}>
      <button onClick={() => setOpen(!open)} className="ws-status-pill"
        style={{ background: cfg.bg, color: cfg.color, borderColor: cfg.dot + "40" }}>
        <span className="ws-status-dot" style={{ background: cfg.dot }} />
        {cfg.label}
        <ChevronDown style={{ width: 11, height: 11 }} />
      </button>
      {open && (
        <>
          <div style={{ position: "fixed", inset: 0, zIndex: 40 }} onClick={() => setOpen(false)} />
          <div className="ws-dropdown">
            {(Object.entries(STATUS) as [Lead["status"], typeof STATUS[keyof typeof STATUS]][]).map(([key, val]) => (
              <button key={key} onClick={() => { onUpdate(lead.id, key); setOpen(false) }}
                className={`ws-dropdown-item${lead.status === key ? " selected" : ""}`}>
                <span className="ws-status-dot" style={{ background: val.dot }} />
                {val.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ── Lead Card ─────────────────────────────────────────────────────────────────
function LeadCard({ lead, onUpdate, onDelete }: {
  lead: Lead
  onUpdate: (id: number, s: Lead["status"], n?: string) => void
  onDelete: (id: number) => void
}) {
  const [showNotes, setShowNotes] = useState(false)
  const [notes, setNotes] = useState(lead.notes || "")
  const product = getProduct(lead)
  const cfg = STATUS[lead.status] || STATUS.new

  return (
    <div className="ws-card">
      <div className="ws-card-top-line" style={{ background: cfg.dot }} />

      {/* Header */}
      <div className="ws-card-header">
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          <div className="ws-card-avatar">
            <User style={{ width: 17, height: 17, color: BRAND }} />
          </div>
          <div style={{ minWidth: 0 }}>
            <p className="ws-card-name" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lead.name}</p>
            <p className="ws-card-phone">{lead.phone}</p>
          </div>
        </div>
        <StatusDrop lead={lead} onUpdate={onUpdate} />
      </div>

      {/* Meta */}
      <div className="ws-card-meta">
        <span className="ws-product-tag">📦 {product}</span>
        <span className="ws-date">{fmtDate(lead.created_at)}</span>
      </div>

      {/* Notes */}
      {lead.notes && !showNotes && (
        <p className="ws-notes-box">📝 {lead.notes}</p>
      )}
      {showNotes && (
        <div style={{ marginBottom: 10 }}>
          <textarea value={notes} onChange={e => setNotes(e.target.value)}
            rows={2} placeholder="Notes लिहा... (e.g. Called, interested in AMCS)"
            className="ws-notes-textarea" />
          <div className="ws-notes-actions">
            <button onClick={() => { onUpdate(lead.id, lead.status, notes); setShowNotes(false) }} className="ws-btn-save">Save</button>
            <button onClick={() => setShowNotes(false)} className="ws-btn-cancel">Cancel</button>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="ws-actions">
        <a href={`tel:${lead.phone}`} onClick={() => onUpdate(lead.id, "called")} className="ws-btn-call">
          <Phone style={{ width: 13, height: 13 }} /> Call
        </a>
        <a href={`https://wa.me/91${lead.phone}?text=${encodeURIComponent(`नमस्कार ${lead.name}! मी Winsoft Software कडून बोलतोय. तुम्ही ${product} बद्दल enquiry केली होती. Free demo साठी वेळ सांगा.`)}`}
          target="_blank" rel="noopener noreferrer" className="ws-btn-wa">
          <MessageSquare style={{ width: 13, height: 13 }} /> WhatsApp
        </a>
        <button onClick={() => setShowNotes(!showNotes)} className="ws-btn-note">📝</button>
        <button onClick={() => { if (confirm("Delete this lead?")) onDelete(lead.id) }} className="ws-btn-del">
          <Trash2 style={{ width: 13, height: 13 }} />
        </button>
      </div>
    </div>
  )
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
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
      const all = [...await c.json(), ...await d.json()].sort(
        (a: Lead, b: Lead) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )
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

  const exportCSV = () => {
    const csv = [["Name","Phone","Product","Status","Date","Notes"],
      ...filtered.map(l => [l.name, l.phone, getProduct(l), l.status, fmtDate(l.created_at), l.notes || ""])
    ].map(r => r.map(c => `"${c}"`).join(",")).join("\n")
    const a = document.createElement("a")
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }))
    a.download = `winsoft-leads-${new Date().toISOString().slice(0,10)}.csv`
    a.click()
  }

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === "new").length,
    called: leads.filter(l => l.status === "called").length,
    interested: leads.filter(l => l.status === "interested").length,
    converted: leads.filter(l => l.status === "converted").length,
    not_interested: leads.filter(l => l.status === "not_interested").length,
  }

  const filtered = leads.filter(l => {
    const matchTab = tab === "all" || l.status === tab
    const q = search.toLowerCase()
    return matchTab && (!q || l.name?.toLowerCase().includes(q) || l.phone?.includes(q) || getProduct(l).toLowerCase().includes(q))
  })

  if (checking) return (
    <>
      <style>{css}</style>
      <div style={{ minHeight: "100vh", background: "#F8FAFC", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Loader2 style={{ width: 32, height: 32, color: BRAND }} className="spin" />
      </div>
    </>
  )
  if (!authed) return <Login onLogin={() => setAuthed(true)} />

  const STAT_CARDS = [
    { key: "total",          label: "Total Leads", icon: Inbox,        bg: "#F1F5F9", iconColor: "#475569" },
    { key: "new",            label: "New",         icon: TrendingUp,   bg: "#EFF6FF", iconColor: "#2563EB" },
    { key: "called",         label: "Called",      icon: PhoneCall,    bg: "#FFFBEB", iconColor: "#D97706" },
    { key: "interested",     label: "Interested",  icon: Eye,          bg: "#F5F3FF", iconColor: "#7C3AED" },
    { key: "converted",      label: "Converted",   icon: CheckCircle2, bg: "#ECFDF5", iconColor: "#059669" },
    { key: "not_interested", label: "Not Int.",    icon: XCircle,      bg: "#FEF2F2", iconColor: "#DC2626" },
  ]

  const NAV_ITEMS = [
    { icon: LayoutDashboard, label: "Overview",  active: true  },
    { icon: Users,           label: "Leads",     active: false },
    { icon: Activity,        label: "Analytics", active: false },
    { icon: Settings,        label: "Settings",  active: false },
  ]

  return (
    <>
      <style>{css}</style>
      <div className="ws-dash">

        {/* ── Sidebar ── */}
        <aside className="ws-sidebar">
          <div className="ws-logo">
            <div className="ws-logo-icon">
              <Zap style={{ width: 17, height: 17, color: "white" }} />
            </div>
            <div>
              <p className="ws-logo-title">WinDash</p>
              <p className="ws-logo-sub">Admin Panel</p>
            </div>
          </div>

          <nav className="ws-nav">
            {NAV_ITEMS.map(({ icon: Icon, label, active }) => (
              <button key={label} className={`ws-nav-item${active ? " active" : ""}`}>
                <Icon style={{ width: 15, height: 15 }} />
                {label}
                {label === "Leads" && stats.new > 0 && (
                  <span className="ws-nav-badge">{stats.new}</span>
                )}
              </button>
            ))}
          </nav>

          <div className="ws-user">
            <div className="ws-user-card">
              <div className="ws-user-avatar">W</div>
              <div style={{ minWidth: 0 }}>
                <p className="ws-user-name">Winsoft Admin</p>
                <p className="ws-user-email">admin@winsoft.in</p>
              </div>
            </div>
            <button className="ws-logout" onClick={() => { sessionStorage.removeItem("ws_auth"); setAuthed(false) }}>
              <LogOut style={{ width: 14, height: 14 }} /> Logout
            </button>
          </div>
        </aside>

        {/* ── Main Content ── */}
        <div className="ws-main">

          {/* Topbar */}
          <header className="ws-topbar">
            <div>
              <p className="ws-topbar-title">Leads Overview</p>
              <p className="ws-topbar-sub">
                {synced ? `Last synced at ${synced.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}` : "Loading..."}
              </p>
            </div>
            <div className="ws-topbar-actions">
              <div className="ws-live-badge">
                <span className="ws-live-dot" />
                LIVE SYNC
              </div>
              <button className="ws-btn-icon" onClick={fetchLeads} disabled={loading} title="Refresh">
                <RefreshCw style={{ width: 15, height: 15 }} className={loading ? "spin" : ""} />
              </button>
              <button className="ws-btn-text" onClick={exportCSV}>
                <Download style={{ width: 14, height: 14 }} /> Export CSV
              </button>
            </div>
          </header>

          {/* Content */}
          <div className="ws-content">

            {/* Stats */}
            <div className="ws-stats">
              {STAT_CARDS.map(({ key, label, icon: Icon, bg, iconColor }) => (
                <button key={key} onClick={() => setTab(key as Tab)}
                  className={`ws-stat-card${tab === key ? " active" : ""}`}>
                  <div className="ws-stat-icon" style={{ background: bg }}>
                    <Icon style={{ width: 17, height: 17, color: iconColor }} />
                  </div>
                  <div className="ws-stat-num">{stats[key as keyof typeof stats]}</div>
                  <div className="ws-stat-label">{label}</div>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="ws-search-wrap">
              <Search style={{ width: 15, height: 15 }} className="ws-search-icon" />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Name, phone किंवा product search करा..."
                className="ws-search" />
            </div>

            {/* Tabs */}
            <div className="ws-tabs">
              {(["all","new","called","interested","converted","not_interested"] as Tab[]).map(t => (
                <button key={t} onClick={() => setTab(t)} className={`ws-tab${tab === t ? " active" : ""}`}>
                  {t === "all" ? `All (${stats.total})` :
                   t === "new" ? `🔵 New (${stats.new})` :
                   t === "called" ? `🟡 Called (${stats.called})` :
                   t === "interested" ? `🟣 Interested (${stats.interested})` :
                   t === "converted" ? `🟢 Converted (${stats.converted})` :
                   `🔴 Not Int. (${stats.not_interested})`}
                </button>
              ))}
            </div>

            {/* Leads */}
            {loading ? (
              <div className="ws-empty">
                <Loader2 style={{ width: 28, height: 28, color: BRAND }} className="spin" />
                <p className="ws-empty-sub">Leads load होत आहेत...</p>
              </div>
            ) : filtered.length === 0 ? (
              <div className="ws-empty">
                <div className="ws-empty-icon">📭</div>
                <p className="ws-empty-title">{search ? "कोणताही lead सापडला नाही" : "अजून कोणताही lead नाही"}</p>
                <p className="ws-empty-sub">{search ? "वेगळा search करा" : "Popup form submit झाल्यावर इथे दिसेल"}</p>
              </div>
            ) : (
              <>
                <p className="ws-count">{filtered.length} lead{filtered.length !== 1 ? "s" : ""} showing</p>
                <div className="ws-grid">
                  {filtered.map(lead => (
                    <LeadCard key={lead.id} lead={lead} onUpdate={handleUpdate} onDelete={handleDelete} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
