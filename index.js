const sections = Array.from(document.querySelectorAll(".section"));
const navLinks = Array.from(document.querySelectorAll(".top-menu nav a"));

function setActiveSection(sectionId) {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("active", isActive);
  });
}

// Init active state (hash first, fallback to first section)
const initialId =
  (window.location.hash || "").replace("#", "") ||
  sections[0]?.getAttribute("id") ||
  "about";
setActiveSection(initialId);

window.addEventListener("hashchange", () => {
  const id = (window.location.hash || "").replace("#", "");
  if (id) setActiveSection(id);
});

// Smooth-scroll on menu click + keep active in sync
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    setActiveSection(href.slice(1));
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Reveal sections (1-time)
const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      obs.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => revealObserver.observe(section));

// Scroll-spy: keep menu active matching current section
const spyObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    const id = visible.target.getAttribute("id");
    if (id) setActiveSection(id);
  },
  {
    root: null,
    threshold: [0.2, 0.35, 0.5, 0.65],
    rootMargin: "-20% 0px -60% 0px",
  }
);

sections.forEach((section) => spyObserver.observe(section));

// Skills progress bars (1-time)
const revealElements = Array.from(document.querySelectorAll(".reveal"));
const skillsObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("active");

      const bars = entry.target.querySelectorAll(".progress-bar");
      bars.forEach((bar) => {
        const percent = bar.dataset.percent;
        bar.style.width = `${percent}%`;
      });

      obs.unobserve(entry.target);
    });
  },
  { threshold: 0.25 }
);

revealElements.forEach((el) => skillsObserver.observe(el));

// Contact form (no backend): validate + open mailto
const contactForm = document.getElementById("contactForm");
const contactHint = document.getElementById("contactHint");

function setHint(text) {
  if (!contactHint) return;
  contactHint.textContent = text;
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setHint("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    if (!isEmail(email)) {
      setHint("Email chưa đúng định dạng.");
      return;
    }

    setHint("Đang mở email để gửi...");
    const to = "dlquangqui@gmail.com";
    const mailSubject = encodeURIComponent(`[Portfolio] Contact`);
    const body = encodeURIComponent(
      `Họ tên: ${name}\nEmail: ${email}\n\n${message}\n`
    );
    window.location.href = `mailto:${to}?subject=${mailSubject}&body=${body}`;
  });
}
