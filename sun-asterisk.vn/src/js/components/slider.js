export function initProjectSlider() {
  const projects = [
    {
      client: "Kurashicom Inc",
      title: "Dự án KURASHICOM",
      desc: "Phát triển App giúp hiện thực hóa phong cách sống theo ý muốn.",
      image: "./src/assets/images/Kurashicom.png",
      link: "./du-an/index.html"
    },
    {
      client: "Công ty TNHH SSK",
      title: "Dự án SSK",
      desc: "Thử thách để tiếp thêm năng lượng cho mọi người và xã hội với sports data.",
      image: "./src/assets/images/ssk-project.png",
      link: "./du-an/index.html"
    },
    {
      client: "ZENKIGEN",
      title: "Dự án HARUTAKA",
      desc: "Dịch vụ phỏng vấn trên nền tảng web/video giúp tối ưu quy trình tuyển dụng.",
      image: "./src/assets/images/zenkigen-project.png",
      link: "./du-an/index.html"
    }
  ];

  let currentIndex = 0;
  const card = document.getElementById("project-card");
  const img = document.getElementById("project-img");
  const client = document.getElementById("project-client");
  const title = document.getElementById("project-title");
  const desc = document.getElementById("project-desc");
  const link = document.getElementById("project-link");
  const prevBtn = document.getElementById("prev-project");
  const nextBtn = document.getElementById("next-project");

  if (!card || !img || !client || !title || !desc || !prevBtn || !nextBtn) return;

  function showProject(index) {
    // Fade out
    card.classList.remove("opacity-100");
    card.classList.add("opacity-0");

    setTimeout(() => {
      const proj = projects[index];
      img.src = proj.image;
      img.alt = proj.title;
      client.textContent = proj.client;
      title.textContent = proj.title;
      desc.textContent = proj.desc;
      if (link) link.href = proj.link;

      // Fade in
      card.classList.remove("opacity-0");
      card.classList.add("opacity-100");
    }, 300); // match Tailwind duration-300
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    showProject(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projects.length;
    showProject(currentIndex);
  });
}
