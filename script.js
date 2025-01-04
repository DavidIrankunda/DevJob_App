// // JavaScript Code for Search and Filters

// document.addEventListener("DOMContentLoaded", () => {
//     const searchInput = document.querySelector("#searchInput");
//     const locationInput = document.querySelector("#locationInput");
//     const fullTimeCheckbox = document.querySelector("#fullTimeCheckbox");
//     const jobCards = document.querySelectorAll(".job-card");
//     const themeSwitch = document.querySelector("#themeSwitch");

//     // Filter Jobs Function
//     const filterJobs = () => {
//         const searchText = searchInput.value.toLowerCase();
//         const locationText = locationInput.value.toLowerCase();
//         const isFullTime = fullTimeCheckbox.checked;

//         jobCards.forEach((card) => {
//             const jobTitle = card.querySelector("h2").textContent.toLowerCase();
//             const jobLocation = card.querySelector(".location").textContent.toLowerCase();
//             const jobType = card.querySelector(".job-type").textContent.toLowerCase();

//             const matchesSearch = jobTitle.includes(searchText);
//             const matchesLocation = jobLocation.includes(locationText);
//             const matchesFullTime = isFullTime ? jobType.includes("full-time") : true;

//             if (matchesSearch && matchesLocation && matchesFullTime) {
//                 card.style.display = "block";
//             } else {
//                 card.style.display = "none";
//             }
//         });
//     };

//     // Theme Toggle Function
//     const toggleTheme = () => {
//         const currentTheme = document.body.getAttribute("data-theme");
//         const newTheme = currentTheme === "dark" ? "light" : "dark";
//         document.body.setAttribute("data-theme", newTheme);
//     };

//     // Event Listeners
//     searchInput.addEventListener("input", filterJobs);
//     locationInput.addEventListener("input", filterJobs);
//     fullTimeCheckbox.addEventListener("change", filterJobs);
//     themeSwitch.addEventListener("change", toggleTheme);
// });
