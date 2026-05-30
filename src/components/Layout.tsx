import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { type ReactNode, useState } from "react";
import { college, navigation } from "../lib/content";
import { AppLink } from "../lib/navigation";
import { cn } from "../lib/utils";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen text-meridian-text">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-meridian-line bg-white/95 backdrop-blur-xl">
      <div className="hidden border-b border-slate-100 bg-slate-50 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs font-semibold">
          <span className="inline-flex items-center gap-2 text-slate-600">
            <MapPin className="h-3.5 w-3.5 text-meridian-primary" aria-hidden="true" />
            {college.address}
          </span>
          <a className="inline-flex items-center gap-2 text-slate-600 transition hover:text-meridian-primary" href={`mailto:${college.email}`}>
            <Mail className="h-3.5 w-3.5 text-meridian-primary" aria-hidden="true" />
            {college.email}
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <AppLink
          to="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="Meridian College of Education home"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md border border-meridian-line bg-white p-1">
            <img
              src="/images/meridian-logo.jpeg"
              alt=""
              className="h-full w-full object-contain"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-bold leading-tight text-meridian-ink sm:text-xl">
              Meridian College
            </span>
            <span className="block truncate text-xs font-bold text-slate-500 sm:text-sm">
              College of Education
            </span>
          </span>
        </AppLink>

        <nav className="hidden items-center gap-1 rounded-md border border-meridian-line bg-slate-50 p-1 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <AppLink
              key={item.path}
              to={item.path}
              className="rounded-sm px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-white hover:text-meridian-primary"
              activeClassName="bg-white text-meridian-primary shadow-sm"
            >
              {item.label}
            </AppLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:+91${college.phone}`}
            className="inline-flex items-center gap-2 rounded-md bg-meridian-primary px-4 py-2.5 text-sm font-bold text-white shadow-soft transition hover:bg-meridian-secondary"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            +91 {college.phone}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-meridian-line bg-white text-meridian-ink shadow-soft lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "grid border-t border-meridian-line bg-white transition-[grid-template-rows] duration-200 lg:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <AppLink
                key={item.path}
                to={item.path}
                className="rounded-md px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-meridian-mist hover:text-meridian-primary"
                activeClassName="bg-meridian-violet text-meridian-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </AppLink>
            ))}
            <a
              href={`tel:+91${college.phone}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-meridian-primary px-4 py-3 text-sm font-bold text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {college.phone}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-meridian-line bg-meridian-ink text-white">
      <div className="h-1 bg-gradient-to-r from-meridian-primary to-meridian-secondary" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-md border border-white/20 bg-white p-1">
              <img src="/images/meridian-logo.jpeg" alt="" className="h-full w-full object-contain" />
            </span>
            <div>
              <p className="font-display text-xl font-bold">{college.name}</p>
              <p className="text-sm text-white/70">{college.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">{college.philosophy}</p>
        </div>

        <div>
          <p className="font-mono text-xs font-bold uppercase text-white/56">Visit</p>
          <p className="mt-3 text-sm leading-7 text-white/78">{college.address}</p>
          <div className="mt-5 grid gap-2 text-sm">
            <a className="font-semibold text-white transition hover:text-blue-200" href={`tel:+91${college.phone}`}>
              +91 {college.phone}
            </a>
            <a className="font-semibold text-white transition hover:text-blue-200" href={`mailto:${college.email}`}>
              {college.email}
            </a>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs font-bold uppercase text-white/56">Explore</p>
          <nav className="mt-3 grid grid-cols-2 gap-2 text-sm" aria-label="Footer navigation">
            {navigation.map((item) => (
              <AppLink
                key={item.path}
                to={item.path}
                className="text-white/76 transition hover:text-white"
              >
                {item.label}
              </AppLink>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/56">
        Estd {college.established}. Meridian College of Education.
      </div>
    </footer>
  );
}
