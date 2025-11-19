/**
 * Trust badges component - Single Responsibility: Credibility signals
 * Pure function, YMYL compliance, E-E-A-T optimization
 */

export const TrustBadges = (): string => `
<section class="why-choose-us">
  <div class="container">
    <div class="section-header">
      <span class="section-badge">Trusted & Certified</span>
      <h2 class="section-title">Fully Licensed & Insured</h2>
      <p class="section-description">
        Your peace of mind matters. We maintain all necessary licenses, insurance, and certifications to protect you and your property.
      </p>
    </div>
    <div class="trust-badges">
      <div class="trust-badge">
        <svg class="trust-badge-icon" viewBox="0 0 24 24" fill="currentColor" style="color: #002855;">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
        <div class="trust-badge-text">Licensed</div>
        <div class="trust-badge-subtext">CCB #209697</div>
      </div>
      <div class="trust-badge">
        <svg class="trust-badge-icon" viewBox="0 0 24 24" fill="currentColor" style="color: #FF6B1A;">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
        </svg>
        <div class="trust-badge-text">Insured</div>
        <div class="trust-badge-subtext">Fully Bonded</div>
      </div>
      <div class="trust-badge">
        <svg class="trust-badge-icon" viewBox="0 0 24 24" fill="currentColor" style="color: #F59E0B;">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <div class="trust-badge-text">5-Star Rated</div>
        <div class="trust-badge-subtext">Google Reviews</div>
      </div>
      <div class="trust-badge">
        <svg class="trust-badge-icon" viewBox="0 0 24 24" fill="currentColor" style="color: #002855;">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/>
        </svg>
        <div class="trust-badge-text">Certified</div>
        <div class="trust-badge-subtext">LiftMaster Pro</div>
      </div>
      <div class="trust-badge">
        <svg class="trust-badge-icon" viewBox="0 0 24 24" fill="currentColor" style="color: #FF6B1A;">
          <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
        </svg>
        <div class="trust-badge-text">Local</div>
        <div class="trust-badge-subtext">Family Owned</div>
      </div>
    </div>
  </div>
</section>`;
