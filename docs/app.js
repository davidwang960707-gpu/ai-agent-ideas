const state = {
  cards: [],
  filter: "all",
  query: ""
};

const grid = document.querySelector("#card-grid");
const template = document.querySelector("#card-template");
const resultCount = document.querySelector("#result-count");
const searchInput = document.querySelector("#search");
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const modal = document.querySelector("#detail-modal");
const modalContent = document.querySelector("#modal-content");
const modalClose = document.querySelector(".modal-close");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function matchesFilter(card) {
  if (state.filter === "all") return true;
  return [card.type, card.status, card.priority, card.domain, ...card.tags].includes(state.filter);
}

function matchesQuery(card) {
  if (!state.query) return true;
  const haystack = [
    card.title,
    card.subtitle,
    card.type,
    card.domain,
    card.status,
    card.priority,
    card.pain,
    card.agent,
    card.value,
    ...card.tags
  ].join(" ");
  return haystack.toLowerCase().includes(state.query.toLowerCase());
}

function getVisibleCards() {
  return state.cards.filter((card) => matchesFilter(card) && matchesQuery(card));
}

function renderCards() {
  const cards = getVisibleCards();
  grid.innerHTML = "";

  if (cards.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <span>NO SIGNAL</span>
        <h3>这组筛选暂时没有命中场景</h3>
        <p>换个关键词，或者去 GitHub 投喂一个新的 Agent 痛点。</p>
      </div>
    `;
    resultCount.textContent = `当前显示 0 / ${state.cards.length} 张场景卡`;
    return;
  }

  cards.forEach((card) => {
    const node = template.content.cloneNode(true);
    const article = node.querySelector(".idea-card");
    const type = node.querySelector(".type");
    const priority = node.querySelector(".priority");
    const title = node.querySelector("h3");
    const subtitle = node.querySelector(".subtitle");
    const pain = node.querySelector(".pain");
    const meter = node.querySelector(".signal-meter span");
    const tags = node.querySelector(".tag-row");
    const action = node.querySelector(".card-action");

    article.dataset.cardId = card.id;
    type.textContent = `${card.type} · ${card.domain}`;
    priority.textContent = `${card.priority} · ${card.status}`;
    title.textContent = card.title;
    subtitle.textContent = card.subtitle;
    pain.textContent = card.pain;
    meter.style.setProperty("--signal", `${card.signal}%`);

    card.tags.forEach((tag) => {
      const tagNode = document.createElement("span");
      tagNode.textContent = tag;
      tags.appendChild(tagNode);
    });

    action.addEventListener("click", () => openDetail(card));
    grid.appendChild(node);
  });

  resultCount.textContent = `当前显示 ${cards.length} / ${state.cards.length} 张场景卡`;
}

function renderMetrics() {
  const demoCount = state.cards.filter((card) => card.status === "Demo Candidate").length;
  const avgSignal = Math.round(state.cards.reduce((sum, card) => sum + card.signal, 0) / state.cards.length);

  document.querySelector("#metric-cards").textContent = state.cards.length;
  document.querySelector("#metric-demo").textContent = demoCount;
  document.querySelector("#metric-signal").textContent = avgSignal;
}

function renderList(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function openDetail(card) {
  modalContent.innerHTML = `
    <div class="card-meta">
      <span class="badge type">${escapeHtml(card.type)} · ${escapeHtml(card.domain)}</span>
      <span class="badge priority">${escapeHtml(card.priority)} · ${escapeHtml(card.status)}</span>
      <span class="badge">Signal ${escapeHtml(card.signal)}%</span>
    </div>
    <h2 id="modal-title">${escapeHtml(card.title)}</h2>
    <p class="modal-subtitle">${escapeHtml(card.subtitle)}</p>
    <div class="detail-grid">
      <section class="detail-block wide">
        <h3>当前痛点</h3>
        <p>${escapeHtml(card.pain)}</p>
      </section>
      <section class="detail-block wide">
        <h3>Agent 机会</h3>
        <p>${escapeHtml(card.agent)}</p>
      </section>
      <section class="detail-block wide">
        <h3>价值判断</h3>
        <p>${escapeHtml(card.value)}</p>
      </section>
      <section class="detail-block">
        <h3>输入</h3>
        ${renderList(card.inputs)}
      </section>
      <section class="detail-block">
        <h3>输出</h3>
        ${renderList(card.outputs)}
      </section>
    </div>
  `;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeDetail() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

function bindControls() {
  searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderCards();
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      state.filter = button.dataset.filter;
      renderCards();
    });
  });

  modalClose.addEventListener("click", closeDetail);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeDetail();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeDetail();
  });
}

async function loadCards() {
  const response = await fetch("./data/cards.json");
  state.cards = await response.json();
  renderMetrics();
  renderCards();
}

function startSignalCanvas() {
  const canvas = document.querySelector("#signal-canvas");
  const context = canvas.getContext("2d");
  const particles = Array.from({ length: 74 }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.00045,
    vy: (Math.random() - 0.5) * 0.00045,
    size: 1 + Math.random() * 2.2
  }));

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function frame() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    context.clearRect(0, 0, width, height);

    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0 || particle.x > 1) particle.vx *= -1;
      if (particle.y < 0 || particle.y > 1) particle.vy *= -1;

      const x = particle.x * width;
      const y = particle.y * height;
      context.beginPath();
      context.arc(x, y, particle.size, 0, Math.PI * 2);
      context.fillStyle = "rgba(34, 211, 238, 0.42)";
      context.fill();

      for (let j = index + 1; j < particles.length; j += 1) {
        const other = particles[j];
        const ox = other.x * width;
        const oy = other.y * height;
        const distance = Math.hypot(x - ox, y - oy);
        if (distance < 140) {
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(ox, oy);
          context.strokeStyle = `rgba(96, 165, 250, ${0.12 * (1 - distance / 140)})`;
          context.lineWidth = 1;
          context.stroke();
        }
      }
    });

    requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", resize);
  frame();
}

bindControls();
startSignalCanvas();
loadCards().catch((error) => {
  resultCount.textContent = "场景数据加载失败，请检查 docs/data/cards.json";
  console.error(error);
});
