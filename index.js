const projectsData = [
  // {
  //   id: "student-management",
  //   title: "Hệ thống quản lý học viên",
  //   period: "2023 – 2026",
  //   cover: "image/project-student.svg",
  //   images: [
  //     "image/project-student.svg",
  //     "image/project-student.svg",
  //     "image/project-student.svg",
  //   ],
  //   summary:
  //     "Nền tảng quản lý học viên, lớp học, lịch học và dữ liệu học tập cho trung tâm.",
  //   description:
  //     "Website hỗ trợ quản lý danh sách học viên, lớp học, lịch dạy, bài tập, bài kiểm tra và báo cáo. Hệ thống tập trung vào thao tác nhanh, dữ liệu rõ ràng và khả năng mở rộng cho vận hành nội bộ.",
  //   highlights: [
  //     "Quản lý danh sách học viên, lớp học, lịch học và điểm danh.",
  //     "Tìm kiếm, lọc dữ liệu, phân trang và export báo cáo.",
  //     "Thiết kế module để dễ bổ sung tính năng kiểm tra, bài tập và thống kê.",
  //   ],
  //   tech: ["Node.js", "MySQL", "Sequelize", "jQuery"],
  //   demoUrl: "",
  //   download: {
  //     label: "Tải ứng dụng",
  //     file: "",
  //   },
  // },
  // {
  //   id: "teach-cooking",
  //   title: "Website Teach Cooking",
  //   period: "03/2026 – 04/2026",
  //   cover: "image/project-cooking.svg",
  //   images: [
  //     "image/project-cooking.svg",
  //     "image/project-cooking.svg",
  //     "image/project-cooking.svg",
  //   ],
  //   summary:
  //     "Website chia sẻ công thức nấu ăn, trao đổi kinh nghiệm và quản lý nội dung theo vai trò.",
  //   description:
  //     "Ứng dụng cho phép người dùng đăng, xem và trao đổi công thức nấu ăn. Phần quản trị hỗ trợ phân quyền Admin/User, kiểm soát nội dung và tối ưu trải nghiệm đọc công thức trên nhiều thiết bị.",
  //   highlights: [
  //     "Phân quyền Admin và User.",
  //     "Giao diện responsive, tối ưu typography và spacing.",
  //     "Triển khai frontend/backend trên các nền tảng cloud như Vercel, Railway và Render.",
  //   ],
  //   tech: ["Node.js", "VueJS", "MySQL", "Express", "Vercel", "Railway", "Render"],
  //   demoUrl: "https://teach-cooking.vercel.app",
  //   download: {
  //     label: "Tải ứng dụng",
  //     file: "",
  //   },
  // },
    {
    id: "so-quan-manage",
    title: "Sổ Quán Manage",
    period: "05/2026 – 05/2026",
    cover: "image/so_quan/banhang.png",
    images: [
      "image/so_quan/login_tongquan.png",
      "image/so_quan/banhang.png",
      "image/so_quan/monan.png",
      "image/so_quan/hoadon.png",
      "image/so_quan/thongke.png",
    ],
    summary:
      "Ứng dụng quản lý bán hàng cho quán nước/quán ăn với menu, giỏ hàng, hóa đơn và thống kê doanh thu.",
    description:
      "Sổ Quán Manage là ứng dụng desktop hỗ trợ quản lý hoạt động bán hàng tại quán: đăng nhập, xem tổng quan, quản lý món ăn, tạo đơn hàng, lưu hóa đơn và theo dõi thống kê. Giao diện tập trung vào thao tác nhanh, rõ giá tiền và dễ quan sát dữ liệu vận hành.",
    highlights: [
      "Màn hình bán hàng trực quan với danh mục món, tìm kiếm, giỏ hàng và tính tổng tiền.",
      "Quản lý món ăn, hóa đơn và trạng thái đơn để kiểm soát quy trình phục vụ.",
      "Dashboard thống kê giúp theo dõi doanh thu và dữ liệu hoạt động của quán.",
    ],
    tech: ["VueJS", "SQLite", "Electron"],
    demoUrl: "",
    download: {
      label: "Tải ứng dụng",
      file: `downloads/projects/SoQuan.rar`,
    },
  },
  {
  id: "passbee",
  title: "PassBee",
  period: "06/2026 – 06/2026",
  cover: "image/passbee/dashboard.png",
  images: [
    "image/passbee/dashboard.png",
    "image/passbee/add.png",
    "image/passbee/inputpass.png",
    "image/passbee/changepass.png",
  ],
  summary:
    "Ứng dụng desktop Windows giúp khóa ứng dụng bằng mật khẩu, hỗ trợ chặn file .exe và shortcut .lnk thông qua Process Monitor.",
  description:
    "PassBee là ứng dụng desktop dùng để bảo vệ các ứng dụng Windows bằng mật khẩu. Người dùng có thể thêm file .exe hoặc shortcut .lnk vào danh sách bảo vệ. Khi ứng dụng bị khóa được mở trực tiếp từ Windows, PassBee sẽ phát hiện process, đóng ứng dụng đó và hiển thị popup yêu cầu nhập mật khẩu. Sau khi xác thực đúng, PassBee sẽ mở lại ứng dụng và cho phép sử dụng trong phiên hiện tại. Ứng dụng hỗ trợ chạy nền cùng Windows, ẩn cửa sổ khi đóng, chuyển đổi Tiếng Việt/English và lưu dữ liệu cục bộ trên máy.",
  highlights: [
    "Khóa ứng dụng Windows bằng mật khẩu, hỗ trợ cả file .exe và shortcut .lnk.",
    "Process Monitor chạy nền giúp phát hiện và chặn ứng dụng chưa được xác thực.",
    "Popup mở khóa nhanh, tự mở lại ứng dụng sau khi nhập đúng mật khẩu.",
    "Hỗ trợ chạy cùng Windows, ẩn cửa sổ chính và chuyển đổi Tiếng Việt/English.",
    "Mật khẩu được hash bằng bcryptjs và dữ liệu được lưu local trên máy người dùng.",
  ],
  tech: ["Tauri", "VueJS", "Pinia", "Rust", "bcryptjs"],
  demoUrl: "",
  download: {
    label: "Tải ứng dụng",
    file: `downloads/projects/PassBee_0.1.0_x64_en-US.rar`,
  },
}
];

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

const initialId =
  (window.location.hash || "").replace("#", "") ||
  sections[0]?.getAttribute("id") ||
  "about";
setActiveSection(initialId);

window.addEventListener("hashchange", () => {
  const id = (window.location.hash || "").replace("#", "");
  if (id) setActiveSection(id);
});

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

    window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" });
  });
});

function createTechList(tech) {
  return tech.map((item) => `<li>${item}</li>`).join("");
}

function getDownloadExtension(filePath) {
  const match = String(filePath || "").match(/\.([a-z0-9]+)(?:[?#].*)?$/i);
  return match ? match[1].toLowerCase() : "zip";
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projectsData
    .map(
      (project, index) => `
        <article class="project-card reveal-card" style="--delay: ${index * 110}ms">
          <button class="project-card__open" type="button" data-project-id="${project.id}" aria-label="Xem chi tiết ${project.title}">
            <span class="project-card__media">
              <img src="${project.cover}" alt="Ảnh minh họa ${project.title}" loading="lazy"/>
            </span>
            <span class="project-card__body">
              <span class="project-card__period">${project.period}</span>
              <strong>${project.title}</strong>
              <span class="project-card__summary">${project.summary}</span>
              <span class="project-card__tech">${project.tech.slice(0, 4).join(" • ")}</span>
              <span class="project-card__cta">Xem chi tiết</span>
            </span>
          </button>
        </article>
      `
    )
    .join("");

  grid.querySelectorAll("[data-project-id]").forEach((button) => {
    button.addEventListener("click", () => openProjectModal(button.dataset.projectId));
  });
}

const projectModal = document.getElementById("projectModal");
const projectModalPanel = projectModal?.querySelector(".project-modal__panel");
const modalImage = document.getElementById("projectModalImage");
const modalPeriod = document.getElementById("projectModalPeriod");
const modalTitle = document.getElementById("projectModalTitle");
const modalDescription = document.getElementById("projectModalDescription");
const modalHighlights = document.getElementById("projectModalHighlights");
const modalTech = document.getElementById("projectModalTech");
const modalActions = document.getElementById("projectModalActions");
const galleryCounter = document.getElementById("projectGalleryCounter");
const galleryThumbs = document.getElementById("projectGalleryThumbs");
const galleryPrev = document.querySelector("[data-gallery-prev]");
const galleryNext = document.querySelector("[data-gallery-next]");
let activeProjectImages = [];
let activeProjectTitle = "";
let activeImageIndex = 0;

function updateProjectImage(nextIndex, direction = "next") {
  if (!modalImage || !activeProjectImages.length) return;

  activeImageIndex =
    (nextIndex + activeProjectImages.length) % activeProjectImages.length;
  modalImage.classList.remove("slide-next", "slide-prev");
  void modalImage.offsetWidth;
  modalImage.classList.add(direction === "prev" ? "slide-prev" : "slide-next");
  modalImage.src = activeProjectImages[activeImageIndex];
  modalImage.alt = `Ảnh ${activeImageIndex + 1} của ${activeProjectTitle}`;

  if (galleryCounter) {
    galleryCounter.textContent = `${activeImageIndex + 1} / ${activeProjectImages.length}`;
  }

  galleryThumbs?.querySelectorAll("button").forEach((button, index) => {
    button.classList.toggle("active", index === activeImageIndex);
  });
}

function renderGallery(project) {
  activeProjectImages = project.images?.length ? project.images : [project.cover];
  activeProjectTitle = project.title;
  activeImageIndex = 0;

  if (galleryThumbs) {
    galleryThumbs.innerHTML = activeProjectImages
      .map(
        (image, index) => `
          <button class="gallery-thumb ${index === 0 ? "active" : ""}" type="button" data-gallery-index="${index}" aria-label="Xem ảnh ${index + 1}">
            <img src="${image}" alt="Thumbnail ${index + 1} của ${project.title}" loading="lazy"/>
          </button>
        `
      )
      .join("");

    galleryThumbs.querySelectorAll("[data-gallery-index]").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.galleryIndex);
        updateProjectImage(index, index < activeImageIndex ? "prev" : "next");
      });
    });
  }

  const hasMultipleImages = activeProjectImages.length > 1;
  galleryPrev?.toggleAttribute("hidden", !hasMultipleImages);
  galleryNext?.toggleAttribute("hidden", !hasMultipleImages);
  galleryThumbs?.toggleAttribute("hidden", !hasMultipleImages);
  updateProjectImage(0, "next");
}

function moveGallery(direction) {
  if (!activeProjectImages.length) return;
  updateProjectImage(
    activeImageIndex + (direction === "prev" ? -1 : 1),
    direction
  );
}

galleryPrev?.addEventListener("click", () => moveGallery("prev"));
galleryNext?.addEventListener("click", () => moveGallery("next"));

function openProjectModal(projectId) {
  const project = projectsData.find((item) => item.id === projectId);
  if (!project || !projectModal) return;

  renderGallery(project);
  modalPeriod.textContent = project.period;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalHighlights.innerHTML = project.highlights.map((item) => `<li>${item}</li>`).join("");
  modalTech.innerHTML = createTechList(project.tech);

  const actionItems = [];
  if (project.demoUrl) {
    actionItems.push(
      `<a class="project-btn" href="${project.demoUrl}" target="_blank" rel="noopener">Xem Demo</a>`
    );
  }

  if (project.download?.file) {
    actionItems.push(
      `<a class="project-btn download" href="${project.download.file}" download><span>${project.download.label}</span><small>File .${getDownloadExtension(project.download.file)}</small></a>`
    );
  } else {
    actionItems.push(
      `<a class="project-btn download disabled" href="#" aria-disabled="true"><span>${project.download?.label || "Tải ứng dụng"}</span><small>Đang chờ file .zip</small></a>`
    );
  }

  modalActions.innerHTML = actionItems.join("");
  modalActions.querySelectorAll(".disabled").forEach((button) => {
    button.addEventListener("click", (event) => event.preventDefault());
  });

  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  projectModalPanel?.focus();
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeProjectModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProjectModal();
  if (!projectModal?.classList.contains("is-open")) return;
  if (event.key === "ArrowLeft") moveGallery("prev");
  if (event.key === "ArrowRight") moveGallery("next");
});

renderProjects();

const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      obs.unobserve(entry.target);
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
);

sections.forEach((section, index) => {
  section.style.setProperty("--section-delay", `${index * 90}ms`);
  revealObserver.observe(section);
});

document.querySelectorAll(".reveal-card").forEach((card) => revealObserver.observe(card));

function updateActiveSection() {
  scrollSpyTicking = false;
  const topMenuHeight = topMenu?.offsetHeight || 0;
  const scanY = window.scrollY + topMenuHeight + window.innerHeight * 0.28;
  let currentSection = sections[0];

  sections.forEach((section) => {
    if (section.offsetTop <= scanY) currentSection = section;
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

const cursorGlow = document.querySelector(".cursor-glow");
if (cursorGlow && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.addEventListener(
    "pointermove",
    (event) => {
      cursorGlow.style.left = `${event.clientX}px`;
      cursorGlow.style.top = `${event.clientY}px`;
    },
    { passive: true }
  );
}

document.addEventListener("pointermove", (event) => {
  const card = event.target.closest?.(".project-card, .project-row");
  if (!card) return;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  card.style.setProperty("--my", `${event.clientY - rect.top}px`);
});

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
    const body = encodeURIComponent(`Họ tên: ${name}\nEmail: ${email}\n\n${message}\n`);
    window.location.href = `mailto:${to}?subject=${mailSubject}&body=${body}`;
  });
}




