"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AppWindow,
  BookOpen,
  Compass,
  FileText,
  Fingerprint,
  FolderOpen,
  Handshake,
  HeartHandshake,
  Home,
  Layers,
  MapPinned,
  Menu,
  Microscope,
  Network,
  RefreshCw,
  Shapes,
  Users,
  Workflow,
  X,
} from "lucide-react";

const groups = [
  {
    title: "DISCOVER",
    items: [
      { label: "ARCHIVE HOME", icon: Home, href: "/" },
      { label: "ARCHIVE ATLAS", icon: MapPinned, href: "/atlas" },
      { label: "COLLECTIONS", icon: Layers, href: "/collections" },
      { label: "RECORDS", icon: FileText, href: "/records" },
      { label: "KNOWLEDGE GRAPH", icon: Network, href: "/knowledge-graph" },
      { label: "RECOVERIES", icon: RefreshCw, href: "/recoveries" },
      { label: "PEOPLE & ENTITIES", icon: Users, href: "/entities" },
      { label: "BOOKS & PUBLICATIONS", icon: BookOpen, href: "/books" },
      { label: "DOSSIERS", icon: FolderOpen, href: "/dossiers" },
    ],
  },
  {
    title: "INSTITUTION",
    items: [
      { label: "RESEARCH & METHOD", icon: Microscope, href: "/research" },
      { label: "STUDIOS / HELMR HUGR", icon: Shapes, href: "/studios" },
      { label: "ENGINES & EXPERIENCES", icon: Workflow, href: "/engines" },
      { label: "THE EXPEDITION", icon: Compass, href: "/expedition" },
      { label: "HELMR HUGR", icon: Shapes, href: "/helmr-hugr" },
      { label: "IDENTITY & MARK", icon: Fingerprint, href: "/identity" },
      { label: "PARTNERSHIPS", icon: Handshake, href: "/partnerships" },
      { label: "CONTRIBUTE", icon: HeartHandshake, href: "/contribute" },
    ],
  },
  {
    title: "PARTICIPATE",
    items: [
      { label: "FIRST RECOVERY", icon: Compass, href: "/first-recovery" },
      { label: "ARCHIVE PLATFORM", icon: AppWindow, href: "/platform" },
    ],
  },
];

export default function ArchiveNav() {
  const [open, setOpen] = useState(false);
  const TriggerIcon = open ? X : Menu;

  return (
    <aside
      className={"archive-sidebar" + (open ? " is-open" : "")}
      aria-label="Archive navigation"
    >
      <button
        type="button"
        className="archive-trigger"
        aria-label={open ? "Close Archive navigation" : "Open Archive navigation"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <TriggerIcon size={19} strokeWidth={1.7} aria-hidden="true" />
      </button>

      <nav className="archive-menu" aria-label="Main navigation">
        {groups.map((group) => (
          <div className="archive-nav-group" key={group.title}>
            <p className="archive-menu-label">{group.title}</p>
            {group.items.map(({ label, icon: Icon, href }) => (
              <Link
                key={href}
                href={href}
                className="archive-link"
                onClick={() => setOpen(false)}
              >
                <i aria-hidden="true">
                  <Icon size={16} strokeWidth={1.7} />
                </i>
                <strong>{label}</strong>
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
