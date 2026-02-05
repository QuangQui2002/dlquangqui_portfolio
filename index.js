const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.top-menu nav a');
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Nếu muốn hiện 1 lần rồi thôi (không ẩn lại)
                observer.unobserve(entry.target);
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    },
    {
        threshold: 0.5
    }
);

sections.forEach(section => observer.observe(section));
document.querySelectorAll('.skill-circle').forEach(skill => {
    const percent = skill.dataset.percent;
    const circle = skill.querySelector('circle:last-child');
    const offset = 314 - (314 * percent) / 100;
    circle.style.strokeDashoffset = offset;
});

const revealElements = document.querySelectorAll('.reveal');

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');

            const bars = entry.target.querySelectorAll('.progress-bar');
            bars.forEach(bar => {
                const percent = bar.dataset.percent;
                bar.style.width = percent + '%';
            });

            observer2.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

revealElements.forEach(el => observer2.observe(el));
