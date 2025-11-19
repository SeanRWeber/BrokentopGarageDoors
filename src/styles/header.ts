/**
 * Header styles - Single Responsibility: Header CSS
 * Human Made-level navigation animations
 */

export const HEADER_STYLES = `
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px) saturate(180%);
  border-bottom: 1px solid var(--color-gray-200);
  z-index: 1000;
  transition: all 0.3s ease;
}

header.scrolled {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.logo a {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  position: relative;
  color: var(--color-gray-700);
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-links a:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}
`.trim();
