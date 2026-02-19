class TeamMemberPopup {
  constructor() {
    this.activePopup = null;
    this.init();
  }

  init() {
    document.addEventListener('click', (e) => this.handleClick(e));
    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
      if (this.activePopup && !e.target.closest('.team-section__member-card') && !e.target.closest('.team-section__popup')) {
        this.closePopup();
      }
    });
  }

  handleClick(e) {
    const memberCard = e.target.closest('.team-section__member-card');
    if (!memberCard) return;

    e.stopPropagation();
    
    const member = memberCard.closest('.team-section__member');
    if (!member) return;

    // Close existing popup if any
    if (this.activePopup) {
      this.closePopup();
    }

    // Open new popup
    this.openPopup(member);
  }

  openPopup(memberElement) {
    const popup = memberElement.querySelector('.team-section__popup');
    if (!popup) return;

    popup.classList.add('team-section__popup--active');
    this.activePopup = popup;

    // Position popup to avoid overflow
    this.positionPopup(popup, memberElement);
  }

  closePopup() {
    if (this.activePopup) {
      this.activePopup.classList.remove('team-section__popup--active');
      this.activePopup = null;
    }
  }

  positionPopup(popup, memberElement) {
    // Get member card position
    const card = memberElement.querySelector('.team-section__member-card');
    const rect = card.getBoundingClientRect();
    
    // Default position is below the card
    const gap = 12;
    const topOffset = rect.bottom - memberElement.getBoundingClientRect().top + gap;
    
    popup.style.top = topOffset + 'px';
  }
}

// Initialize popup functionality
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new TeamMemberPopup();
  });
} else {
  new TeamMemberPopup();
}
