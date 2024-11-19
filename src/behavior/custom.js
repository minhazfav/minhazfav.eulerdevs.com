 // Dropdown Menu Start
        // Toggle the dropdown menu visibility
        const toggleButton = document.getElementById('dropdown-toggle');
        const dropdownMenu = document.getElementById('dropdown-menu');

        toggleButton.addEventListener('click', () => {
            dropdownMenu.classList.toggle('hidden'); // Add/remove the 'hidden' class
        });

        // Close the dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (
                !dropdownMenu.contains(event.target) &&
                !toggleButton.contains(event.target)
            ) {
                dropdownMenu.classList.add('hidden');
            }
        });
        // Dropdown Menu Start


        const phrases = [
            "Web Developer.",
            "Coding Enthusiast."
        ];

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