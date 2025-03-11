document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle
    const themeSwitch = document.getElementById("theme-switch");
    const currentTheme = localStorage.getItem("theme") || "light";
    document.body.classList.toggle("dark-mode", currentTheme === "dark");
    themeSwitch.checked = currentTheme === "dark";

    themeSwitch.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });

    // Mobile Navigation Toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        navToggle.classList.toggle("active");
    });

    // Smooth Scrolling & Active Section Highlight
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    
    let debounceTimer;
    window.addEventListener("scroll", () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href").includes(current)) {
                    link.classList.add("active");
                }
            });
        }, 100);
    });

    // Scroll-to-Top Button
    const scrollTopBtn = document.querySelector(".scroll-top");
    window.addEventListener("scroll", () => {
        scrollTopBtn.classList.toggle("active", window.scrollY > 300);
    });
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Lazy Load Images
    const images = document.querySelectorAll("img");
    images.forEach(img => img.setAttribute("loading", "lazy"));
});