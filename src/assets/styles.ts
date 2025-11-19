/**
 * Complete stylesheet - Single Responsibility: All CSS output
 * Extracted from production homepage.html
 */

export const COMPLETE_STYLES = `
* {margin:0;padding:0;box-sizing:border-box}
:root{--color-primary:#002855;--color-secondary:#003D6B;--color-accent:#FF6B1A;--color-accent-light:#FF8C42;--color-accent-dark:#E55A0A;--color-success:#10B981;--color-warning:#F59E0B;--color-gray-50:#F9FAFB;--color-gray-100:#F3F4F6;--color-gray-200:#E5E7EB;--color-gray-300:#D1D5DB;--color-gray-400:#9CA3AF;--color-gray-500:#6B7280;--color-gray-600:#4B5563;--color-gray-700:#374151;--color-gray-800:#1F2937;--color-gray-900:#111827;--color-white:#FFF;--font-primary:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;--space-xs:.5rem;--space-sm:1rem;--space-md:1.5rem;--space-lg:2rem;--space-xl:3rem;--space-2xl:4rem;--space-3xl:6rem;--radius-sm:.5rem;--radius-md:.75rem;--radius-lg:1rem;--radius-xl:1.5rem;--shadow-sm:0 1px 2px 0 rgba(0,0,0,.05);--shadow-md:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);--shadow-lg:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);--shadow-xl:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);--shadow-2xl:0 25px 50px -12px rgba(0,0,0,.25)}
html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
body{font-family:var(--font-primary);font-size:16px;line-height:1.7;color:var(--color-gray-800);background-color:var(--color-white);overflow-x:hidden}
h1,h2,h3,h4,h5,h6{font-weight:700;line-height:1.2;letter-spacing:-.02em;color:var(--color-gray-900)}
h1{font-size:clamp(2.5rem,5vw,4rem)}h2{font-size:clamp(2rem,4vw,3rem)}h3{font-size:clamp(1.5rem,3vw,2rem)}h4{font-size:clamp(1.25rem,2.5vw,1.5rem)}
.container{max-width:1400px;margin:0 auto;padding:0 var(--space-lg)}
header{background:rgba(255,255,255,.98);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);border-bottom:1px solid rgba(0,0,0,.04);position:sticky;top:0;z-index:1000;transition:all .4s cubic-bezier(.4,0,.2,1)}
header.scrolled{background:rgba(255,255,255,1);box-shadow:0 1px 3px rgba(0,0,0,.04),0 8px 24px rgba(0,0,0,.06)}
nav{max-width:1400px;margin:0 auto;padding:1.125rem var(--space-lg);display:flex;justify-content:space-between;align-items:center;gap:var(--space-xl)}
.logo{font-size:1.375rem;font-weight:700;letter-spacing:-.02em;color:var(--color-primary);text-decoration:none;transition:all .3s cubic-bezier(.4,0,.2,1);position:relative;z-index:1001}
.logo:hover{color:var(--color-accent)}
.nav-links{display:flex;list-style:none;gap:2.5rem;align-items:center;margin:0}
.nav-links li{position:relative}
.nav-links a{color:var(--color-gray-700);text-decoration:none;font-weight:500;font-size:.9375rem;letter-spacing:-.01em;position:relative;padding:.5rem 0;transition:color .3s cubic-bezier(.4,0,.2,1);display:inline-block}
.nav-links a::before{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--color-accent);transform:scaleX(0);transform-origin:right;transition:transform .4s cubic-bezier(.4,0,.2,1)}
.nav-links a:hover{color:var(--color-primary)}
.nav-links a:hover::before{transform:scaleX(1);transform-origin:left}
.mobile-menu-toggle{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:.5rem;z-index:1001;position:relative}
.mobile-menu-toggle span{display:block;width:24px;height:2px;background:var(--color-gray-800);transition:all .3s cubic-bezier(.4,0,.2,1);border-radius:2px}
.mobile-menu-toggle.active span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.mobile-menu-toggle.active span:nth-child(2){opacity:0}
.mobile-menu-toggle.active span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
.mobile-nav{position:fixed;top:0;left:0;right:0;bottom:0;background:var(--color-white);z-index:999;opacity:0;visibility:hidden;transition:all .4s cubic-bezier(.4,0,.2,1);padding:6rem 2rem 2rem;overflow-y:auto;display:flex;flex-direction:column;gap:0}
.mobile-nav.active{opacity:1;visibility:visible}
.mobile-nav a{display:block;padding:1.25rem 0;color:var(--color-gray-900);text-decoration:none;font-size:1.25rem;font-weight:500;letter-spacing:-.02em;transition:all .3s ease;border-bottom:1px solid var(--color-gray-100)}
.mobile-nav a:hover{color:var(--color-accent);padding-left:1rem}
.btn{display:inline-flex;align-items:center;gap:var(--space-xs);padding:.75rem 1.5rem;border-radius:var(--radius-md);text-decoration:none;font-weight:600;font-size:.938rem;transition:all .3s ease;cursor:pointer;border:none}
.btn-primary{background:linear-gradient(135deg,var(--color-accent) 0%,var(--color-accent-dark) 100%);color:var(--color-white);box-shadow:0 4px 14px 0 rgba(255,107,26,.4)}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 6px 20px 0 rgba(255,107,26,.5)}
.cta-button{display:inline-flex;align-items:center;gap:var(--space-xs);padding:.75rem 1.5rem;border-radius:var(--radius-md);text-decoration:none;font-weight:600;font-size:.938rem;background:linear-gradient(135deg,var(--color-accent),var(--color-accent-dark));color:var(--color-white);transition:all .3s ease}
.cta-button:hover{transform:translateY(-2px);box-shadow:0 6px 20px 0 rgba(255,107,26,.5)}
.error-page{min-height:60vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:var(--space-3xl) var(--space-lg)}
.error-page h1{margin-bottom:var(--space-md)}
.error-page p{font-size:1.125rem;color:var(--color-gray-600);margin-bottom:var(--space-xl)}
footer{background:var(--color-gray-900);color:var(--color-gray-400);padding:var(--space-xl) 0 var(--space-lg)}
.footer-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:var(--space-xl);margin-bottom:var(--space-lg)}
.footer-section h3{color:var(--color-white);font-size:1.125rem;margin-bottom:var(--space-md)}
.footer-section p,.footer-section a{color:var(--color-gray-400);text-decoration:none;line-height:2;display:block;transition:all .3s ease}
.footer-section a:hover{color:var(--color-accent-light);transform:translateX(4px)}
.footer-bottom{padding-top:var(--space-md);border-top:1px solid var(--color-gray-800);text-align:center;color:var(--color-gray-500);font-size:.875rem}
@media (max-width:968px){.nav-links{display:none}.mobile-menu-toggle{display:flex}}
`.trim();
