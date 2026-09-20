"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type IconName =
  | "grid"
  | "briefcase"
  | "user"
  | "github"
  | "linkedin"
  | "sun"
  | "moon";

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 17,
    height: 17,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "grid") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    );
  }

  if (name === "briefcase") {
    return (
      <svg {...common}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg {...common}>
        <path d="M15 22v-3.9c.04-1 .35-1.96.9-2.8 3-.33 6.1-1.47 6.1-6.67a5.2 5.2 0 0 0-1.4-3.6 4.84 4.84 0 0 0-.14-3.56s-1.15-.37-3.76 1.38a12.94 12.94 0 0 0-6.85 0C7.24 1.1 6.1 1.47 6.1 1.47a4.84 4.84 0 0 0-.14 3.56 5.2 5.2 0 0 0-1.4 3.6c0 5.19 3.08 6.33 6.08 6.67.55.83.86 1.8.9 2.8V22" />
        <path d="M9 21.2c-3 .92-3.63-1.38-4.63-1.38" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 3a2 2 0 1 0 0 4 2 2 0 0 0-0-4Z" />
      </svg>
    );
  }

  if (name === "sun") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.6 6.6 0 0 0 21 12.8Z" />
    </svg>
  );
}

function MonogramLogo() {
  return (
    <svg
      className="nnkr-logo"
      viewBox="0 0 48 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path className="nnkr-stroke" d="M2 21V3L10 21V3" />

      <path className="nnkr-stroke" d="M12 21V3L20 21V3" />

      <path
        className="nnkr-stroke"
        d="M25 3V21M25 12L34 3M25 12L34 21"
      />

      <path
        className="nnkr-stroke"
        d="M38 21V3H42C44.5 3 46 4.5 46 7C46 9.5 44.5 11 42 11H38M42 11L46 21"
      />
    </svg>
  );
}

export function Navigation() {
  const pathname = usePathname();

  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");

    const isDark =
      saved === "dark" ||
      (!saved &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDark(isDark);

    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggleTheme() {
    const next = !dark;

    setDark(next);

    document.documentElement.classList.toggle("dark", next);

    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="site-header">
      <Link
        className="wordmark"
        href="/"
        aria-label="Nanda Kishore Reddy Neelam — home"
      >
        <MonogramLogo />
      </Link>

      <nav className="icon-nav" aria-label="Primary navigation">
        <Link
          className={`nav-pill ${
            pathname === "/projects" ? "active" : ""
          }`}
          href="/projects"
        >
          <Icon name="grid" />
          <span>Work</span>
        </Link>

        <Link
          className={`nav-pill ${
            pathname === "/experience" ? "active" : ""
          }`}
          href="/experience"
        >
          <Icon name="briefcase" />
          <span>Experience</span>
        </Link>

        <Link
          className={`nav-pill ${
            pathname === "/about" ? "active" : ""
          }`}
          href="/about"
        >
          <Icon name="user" />
          <span>About</span>
        </Link>

        <Link
          className={`nav-text-link ${
            pathname === "/writing" || pathname.startsWith("/writing/")
              ? "active"
              : ""
          }`}
          href="/writing"
        >
          Writing
        </Link>

        <Link
          className={`nav-text-link ${
            pathname === "/gallery" ? "active" : ""
          }`}
          href="/gallery"
        >
          Gallery
        </Link>

        <i className="nav-divider" />

        <a
          className="icon-button"
          href="https://www.linkedin.com/in/nanda-kishore-reddy-neelam-683082206/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Icon name="linkedin" />
        </a>

        <a
          className="icon-button"
          href="https://github.com/NanduN2003"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Icon name="github" />
        </a>

        <button
          className="icon-button"
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle colour theme"
        >
          <Icon name={dark ? "sun" : "moon"} />
        </button>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <p>Available for thoughtful engineering work.</p>

      <p>© {new Date().getFullYear()} Nanda Kishore Reddy Neelam</p>
    </footer>
  );
}