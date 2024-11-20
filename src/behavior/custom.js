// Dropdown Menu Start
// Toggle the dropdown menu visibility
const toggleButton = document.getElementById("dropdown-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");

toggleButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden"); // Add/remove the 'hidden' class
});

// Close the dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (
    !dropdownMenu.contains(event.target) &&
    !toggleButton.contains(event.target)
  ) {
    dropdownMenu.classList.add("hidden");
  }
});
// Dropdown Menu Start

const phrases = ["Web Developer.", "Coding Enthusiast."];

let currentIndex = 0;
const dynamicText = document.getElementById("dynamic-text");

function typeWriter(text, index, callback) {
  if (index < text.length) {
    dynamicText.textContent += text.charAt(index);
    setTimeout(() => typeWriter(text, index + 1, callback), 100); // Typing speed
  } else if (callback) {
    setTimeout(callback, 200); // Pause before deleting
  }
}

function deleteText(callback) {
  const text = dynamicText.textContent;
  if (text.length > 0) {
    dynamicText.textContent = text.slice(0, -1); // Remove one character
    setTimeout(() => deleteText(callback), 50); // Deleting speed
  } else if (callback) {
    callback();
  }
}

function startTypewriter() {
  typeWriter(phrases[currentIndex], 0, () => {
    deleteText(() => {
      currentIndex = (currentIndex + 1) % phrases.length; // Cycle through phrases
      startTypewriter();
    });
  });
}

// Start the effect
startTypewriter();

// Theme Controller Start

document.getElementById("theme-toggle").addEventListener("change", function () {
  const html = document.documentElement;

  if (this.checked) {
    // Apply dark theme
    html.setAttribute("data-theme", "dark");
  } else {
    // Apply light theme
    html.setAttribute("data-theme", "light");
  }
});

// Initialize theme on page load based on user preference or default
window.addEventListener("load", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const html = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  if (prefersDark) {
    html.setAttribute("data-theme", "dark");
    toggle.checked = true;
  } else {
    html.setAttribute("data-theme", "light");
  }
});

// Theme Controller End


// Stack Animation Start


// Blogspot Stact
document.addEventListener("DOMContentLoaded", function () {
  const stackContainer = document.querySelector("#stack-container-blogspot");
  const elements = stackContainer.querySelectorAll("*");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              elements.forEach(el => el.classList.add("show"));
          }
      });
  }, { threshold: 1.0 }); // 1.0 means 100% visibility

  elements.forEach(el => el.classList.add("fade-in"));
  observer.observe(stackContainer);
});

// Wordpress Stack
document.addEventListener("DOMContentLoaded", function () {
  const stackContainer = document.querySelector("#stack-container-wordpress");
  const elements = stackContainer.querySelectorAll("*");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              elements.forEach(el => el.classList.add("show"));
          }
      });
  }, { threshold: 1.0 }); // 1.0 means 100% visibility

  elements.forEach(el => el.classList.add("fade-in"));
  observer.observe(stackContainer);
});

// MERN Stack
document.addEventListener("DOMContentLoaded", function () {
  const stackContainer = document.querySelector("#stack-container-mern");
  const elements = stackContainer.querySelectorAll("*");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              elements.forEach(el => el.classList.add("show"));
          }
      });
  }, { threshold: 1.0 }); // 1.0 means 100% visibility

  elements.forEach(el => el.classList.add("fade-in"));
  observer.observe(stackContainer);
});

// Stack End

document.addEventListener("DOMContentLoaded", function() {
  // Select the theme toggle input and the target elements
  const themeToggle = document.getElementById("theme-toggle");
  const vbOne = document.getElementById("vb-one");
  const vbTwo = document.getElementById("vb-two");

  // Function to update the class based on the theme
  function updateTheme() {
      if (themeToggle.checked) {
          // If the theme is "dark", add the "vertical-bar-light" class
          vbOne.classList.remove("vertical-bar-light");
          vbTwo.classList.remove("vertical-bar-light");
          vbOne.classList.add("vertical-bar-dark");
          vbTwo.classList.add("vertical-bar-dark");
      } else {
          // If the theme is "light", add the "vertical-bar-dark" class
          vbOne.classList.remove("vertical-bar-dark");
          vbTwo.classList.remove("vertical-bar-dark");
          vbOne.classList.add("vertical-bar-light");
          vbTwo.classList.add("vertical-bar-light");
      }
  }

  // Set the initial theme based on the toggle state
  updateTheme();

  // Add an event listener to toggle the theme when the checkbox is clicked
  themeToggle.addEventListener("change", updateTheme);
});

