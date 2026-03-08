import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="site-header__brand">
            memory<span>lane</span>
          </NavLink>
          <nav className="site-nav" aria-label="Main navigation">
            <NavLink to="/" end className={({ isActive }) => isActive ? "site-nav__link active" : "site-nav__link"}>
              Archive
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <p>
          Memory Lane &mdash; Jason Haire &middot; Full Sail University &middot; WDV 463
        </p>
      </footer>
    </div>
  );
}
