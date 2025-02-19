const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-theme');
});
// The above code is theme just.


// Function to filter job cards
const searchButton = document.getElementById('search-button');
const jobCards = document.querySelectorAll('.job-card');

function filterJobs() {
    const titleInput = document.getElementById('search-title').value.toLowerCase();
    const locationInput = document.getElementById('search-location').value.toLowerCase();
    const typeInput = document.getElementById('search-type').value;

    jobCards.forEach(card => {
        const title = card.querySelector('.job-title').textContent.toLowerCase();
        const location = card.querySelector('.job-location').textContent.toLowerCase();
        const jobInfo = card.querySelector('.job-info').textContent.toLowerCase();

        if (
            (title.includes(titleInput) || !titleInput) &&
            (location.includes(locationInput) || !locationInput) &&
            (jobInfo.includes(typeInput) || !typeInput)
        ) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
}

// search on button click
searchButton.addEventListener('click', filterJobs);

// search on Enter key press
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        filterJobs();
    }
});
