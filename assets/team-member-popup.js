class TeamMemberModal {
  constructor() {
    this.activeModal = null;
    this.activeOverlay = null;
    this.init();
  }

  init() {
    // Open modal on card click
    document.addEventListener('click', (e) => {
      const memberCard = e.target.closest('.team-section__member-card');
      if (memberCard) {
        e.stopPropagation();
        const member = memberCard.closest('.team-section__member');
        if (member) {
          this.openModal(member);
        }
      }
    });

    // Close modal on close button click
    document.addEventListener('click', (e) => {
      const closeBtn = e.target.closest('.team-section__modal-close');
      if (closeBtn) {
        this.closeModal();
      }
    });

    // Close modal on overlay click
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('team-section__modal-overlay--active')) {
        this.closeModal();
      }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.activeModal) {
        this.closeModal();
      }
    });
  }

  openModal(memberElement) {
    // Close existing modal if any
    if (this.activeModal) {
      this.closeModal();
    }

    const modal = memberElement.querySelector('.team-section__modal');
    const overlay = memberElement.querySelector('.team-section__modal-overlay');

    if (!modal || !overlay) return;

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Show overlay and modal
    overlay.classList.add('team-section__modal-overlay--active');
    modal.classList.add('team-section__modal--active');

    this.activeModal = modal;
    this.activeOverlay = overlay;

    // Focus the close button for accessibility
    const closeBtn = modal.querySelector('.team-section__modal-close');
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 100);
    }
  }

  closeModal() {
    if (!this.activeModal || !this.activeOverlay) return;

    // Restore body scroll
    document.body.style.overflow = '';

    // Hide overlay and modal
    this.activeOverlay.classList.remove('team-section__modal-overlay--active');
    this.activeModal.classList.remove('team-section__modal--active');

    this.activeModal = null;
    this.activeOverlay = null;
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new TeamMemberModal();
  });
} else {
  new TeamMemberModal();
}
