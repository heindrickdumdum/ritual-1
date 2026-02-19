class TeamMemberDrawer {
  constructor() {
    this.activeDrawer = null;
    this.activeOverlay = null;
    this.init();
  }

  init() {
    // Open drawer on card click
    document.addEventListener('click', (e) => {
      const memberCard = e.target.closest('.team-section__member-card');
      if (memberCard) {
        e.stopPropagation();
        const member = memberCard.closest('.team-section__member');
        if (member) {
          this.openDrawer(member);
        }
      }
    });

    // Close drawer on close button click
    document.addEventListener('click', (e) => {
      const closeBtn = e.target.closest('.team-section__modal-close');
      if (closeBtn) {
        this.closeDrawer();
      }
    });

    // Close drawer on overlay click
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('team-section__modal-overlay--active')) {
        this.closeDrawer();
      }
    });

    // Close drawer on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.activeDrawer) {
        this.closeDrawer();
      }
    });
  }

  openDrawer(memberElement) {
    // Close existing drawer if any
    if (this.activeDrawer) {
      this.closeDrawer();
    }

    const drawer = memberElement.querySelector('.team-section__modal');
    const overlay = memberElement.querySelector('.team-section__modal-overlay');

    if (!drawer || !overlay) return;

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Show overlay and drawer
    overlay.classList.add('team-section__modal-overlay--active');
    drawer.classList.add('team-section__modal--active');

    this.activeDrawer = drawer;
    this.activeOverlay = overlay;

    // Focus the close button for accessibility
    const closeBtn = drawer.querySelector('.team-section__modal-close');
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 100);
    }
  }

  closeDrawer() {
    if (!this.activeDrawer || !this.activeOverlay) return;

    // Restore body scroll
    document.body.style.overflow = '';

    // Hide overlay and drawer
    this.activeOverlay.classList.remove('team-section__modal-overlay--active');
    this.activeDrawer.classList.remove('team-section__modal--active');

    this.activeDrawer = null;
    this.activeOverlay = null;
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new TeamMemberDrawer();
  });
} else {
  new TeamMemberDrawer();
}
