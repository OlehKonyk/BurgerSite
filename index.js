document.addEventListener("DOMContentLoaded", () => {
    const animatedSections = [".animeted-burger", ".courier-road", ".main-burger"];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll("img").forEach(img => {
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
