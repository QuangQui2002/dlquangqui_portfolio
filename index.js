const sections = Array.from(document.querySelectorAll(".section"));
const navLinks = Array.from(document.querySelectorAll(".top-menu nav a"));
const topMenu = document.querySelector(".top-menu");
let scrollSpyTicking = false;

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
    const topMenuHeight = topMenu?.offsetHeight || 0;
    const scrollOffset = topMenuHeight + 40;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - scrollOffset;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: "smooth",
    });
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

// Scroll-spy: choose the section that crosses a stable scan line under the menu.
function updateActiveSection() {
  scrollSpyTicking = false;

  const topMenuHeight = topMenu?.offsetHeight || 0;
  const scanY = window.scrollY + topMenuHeight + window.innerHeight * 0.28;
  let currentSection = sections[0];

  sections.forEach((section) => {
    if (section.offsetTop <= scanY) {
      currentSection = section;
    }
  });

  const id = currentSection?.getAttribute("id");
  if (id) setActiveSection(id);
}

function requestActiveSectionUpdate() {
  if (scrollSpyTicking) return;
  scrollSpyTicking = true;
  window.requestAnimationFrame(updateActiveSection);
}

window.addEventListener("scroll", requestActiveSectionUpdate, { passive: true });
window.addEventListener("resize", requestActiveSectionUpdate);
requestActiveSectionUpdate();

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
