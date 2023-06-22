const darkModeIcon = document.getElementById("dark-mode-icon");

const toggle = document.querySelector('#dark-mode-icon');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('active');
  const isActive = document.body.classList.contains('active');
  localStorage.setItem('darkMode', isActive ? 'true' : 'false');

  // Update the dark mode icon's title and class
  if (isActive) {
    darkModeIcon.setAttribute("title", "Switch to light mode");
    darkModeIcon.classList.replace("bx-moon", "bx-sun");
  } else {
    darkModeIcon.setAttribute("title", "Switch to dark mode");
    darkModeIcon.classList.replace("bx-sun", "bx-moon");
  }
});

// check if dark mode is enabled from local storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// if dark mode is enabled, set the active class on the body
if (isDarkMode) {
  document.body.classList.add('active');
  darkModeIcon.setAttribute("title", "Switch to light mode");
  darkModeIcon.classList.replace("bx-moon", "bx-sun");
} else {
  darkModeIcon.setAttribute("title", "Switch to dark mode");
  darkModeIcon.classList.replace("bx-sun", "bx-moon");
}

// Add an event listener for when the user switches between light and dark mode
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  // If the device is in dark mode, display the sun icon
  if (e.matches) {
    darkModeIcon.classList.replace("bx-moon", "bx-sun");
    darkModeIcon.setAttribute("title", "Switch to light mode");
  } else {
    // Otherwise, display the dark mode icon
    darkModeIcon.classList.replace("bx-sun", "bx-moon");
    darkModeIcon.setAttribute("title", "Switch to dark mode");
  }
});
