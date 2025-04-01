document.addEventListener("DOMContentLoaded", () => {
    const animatedSections = [".recipe-container", ".animated-burger",".recipe", ".courier-road", ".home-page-content", ".main-burger-container"];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll("img, div").forEach(img => {
                    img.classList.add("active");
                });

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    animatedSections.forEach(selector => {
        document.querySelectorAll(selector).forEach(section => observer.observe(section));
    });
});
