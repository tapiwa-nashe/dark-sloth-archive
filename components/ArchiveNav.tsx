"use client";

import Link from "next/link";
import { useState } from "react";

const groups = [
  { title: "DISCOVER", items: [
    { label: "ARCHIVE HOME", icon: "⌂", href: "/" },
    { label: "ARCHIVE ATLAS", icon: "⌖", href: "/atlas" },
    { label: "COLLECTIONS", icon: "▰", href: "/collections" },
    { label: "RECORDS", icon: "▤", href: "/records" },
    { label: "RECOVERIES", icon: "◇", href: "/recoveries" },
    { label: "PEOPLE & ENTITIES", icon: "◉", href: "/entities" },
    { label: "BOOKS & PUBLICATIONS", icon: "▱", href: "/books" },
    { label: "DOSSIERS", icon: "◎", href: "/dossiers" },
  ]},
  { title: "INSTITUTION", items: [
    { label: "RESEARCH & METHOD", icon: "⌁", href: "/research" },
    { label: "STUDIOS / HELMR HUGR", icon: "◌", href: "/studios" },
    { label: "IDENTITY & MARK", icon: "✧", href: "/identity" },
    { label: "PARTNERSHIPS", icon: "◇", href: "/partnerships" },
    { label: "CONTRIBUTE", icon: "✦", href: "/contribute" },
  ]},
  { title: "PARTICIPATE", items: [
    { label: "FIRST RECOVERY", icon: "↗", href: "/first-recovery" },
    { label: "ARCHIVE PLATFORM", icon: "◈", href: "/platform" },
  ]},
];
export default function ArchiveNav(){
  const [open,setOpen]=useState(false);
  return <aside className={"archive-sidebar"+(open?" is-open":"")}>
    <button type="button" className="archive-trigger" aria-label={open?"Close Archive navigation":"Open Archive navigation"} aria-expanded={open} onClick={()=>setOpen(value=>!value)}>☰</button>
    <div className="archive-menu">{groups.map(group=><div className="archive-nav-group" key={group.title}><p className="archive-menu-label">{group.title}</p>{group.items.map(item=><Link key={item.href} href={item.href} className="archive-link" onClick={()=>setOpen(false)}><i>{item.icon}</i><strong>{item.label}</strong></Link>)}</div>)}</div>
  </aside>;
}
