document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-bar a');
    const sections = document.querySelectorAll('.section-slide');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});