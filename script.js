// JavaScript for theme toggle and search functionality

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-switch input');
    const body = document.body;
  
    // Theme Toggle
    themeToggle.addEventListener('change', () => {
      body.classList.toggle('dark', themeToggle.checked);
    });
  
    // Search Functionality
    const searchButton = document.querySelector('.search-bar button');
    const titleInput = document.querySelector('.search-bar input[placeholder="Filter by title, companies, expertise..."]');
    const locationInput = document.querySelector('.search-bar input[placeholder="Filter by location..."]');
    const fullTimeOnly = document.querySelector('.search-bar input[type="checkbox"]');
    const jobCards = document.querySelectorAll('.job-card');
  
    searchButton.addEventListener('click', () => {
      const titleQuery = titleInput.value.toLowerCase();
      const locationQuery = locationInput.value.toLowerCase();
      const isFullTime = fullTimeOnly.checked;
  
      jobCards.forEach(card => {
        const jobTitle = card.querySelector('h3').textContent.toLowerCase();
        const jobLocation = card.querySelector('p:last-child').textContent.toLowerCase();
        const jobType = card.querySelector('p:nth-child(2)').textContent.toLowerCase();
  
        let matchesTitle = !titleQuery || jobTitle.includes(titleQuery);
        let matchesLocation = !locationQuery || jobLocation.includes(locationQuery);
        let matchesType = !isFullTime || jobType.includes('full time');
  
        if (matchesTitle && matchesLocation && matchesType) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  
    // Reset search inputs on page load
    titleInput.value = '';
    locationInput.value = '';
    fullTimeOnly.checked = false;
  });
  