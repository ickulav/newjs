document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEYS = {
    projects: "proektor_projects_v1",
    tasks: "proektor_tasks_v1",
    messages: "proektor_messages_v1",
    notifications: "proektor_notifications_v1",
    draft: "proektor_draft_v1",
    workspace: "proektor_workspace_v1"
  };

  const DEFAULT_PROJECTS = [
    {
      id: "p1",
      title: "Навігатор університету",
      university: "КПІ ім. Ігоря Сікорського",
      description: "Інтерактивна мапа корпусів і аудиторій, щоб першокурсники легко знаходили шлях на заняття.",
      skills: ["React", "TypeScript", "UI/UX"],
      year: "2027",
      status: "open",
      members: ["АК", "МД", "ОО"],
      maxMembers: 5,
      iconClass: "icon-green",
      bookmarked: false,
      applied: false
    },
    {
      id: "p2",
      title: "Розумна бібліотека",
      university: "КНУ ім. Тараса Шевченка",
      description: "Сервіс пошуку та бронювання книжок із персональними рекомендаціями для студентів.",
      skills: ["Python", "Django", "React"],
      year: "2026",
      status: "open",
      members: ["ІП", "ДК"],
      maxMembers: 4,
      iconClass: "icon-blue",
      bookmarked: false,
      applied: false
    },
    {
      id: "p3",
      title: "Екомоніторинг кампусу",
      university: "Львівська політехніка",
      description: "Збираємо дані про якість повітря й створюємо відкриту панель екологічних показників.",
      skills: ["Python", "IoT", "UI/UX"],
      year: "2027",
      status: "open",
      members: ["ЮМ", "АС", "НП", "ВР"],
      maxMembers: 6,
      iconClass: "icon-emerald",
      bookmarked: true,
      applied: false
    },
    {
      id: "p4",
      title: "Платформа наставництва",
      university: "НаУКМА",
      description: "Допомагаємо студентам знайти наставника серед випускників і спланувати свій кар'єрний шлях.",
      skills: ["React", "Node.js", "UI/UX"],
      year: "2028",
      status: "open",
      members: ["МО", "ЯТ"],
      maxMembers: 5,
      iconClass: "icon-purple",
      bookmarked: false,
      applied: false
    },
    {
      id: "p5",
      title: "Помічник із розкладу",
      university: "ХНУ ім. В. Н. Каразіна",
      description: "Застосунок із розкладом, нагадуваннями про дедлайни та спільним календарем навчальної групи.",
      skills: ["React Native", "Firebase"],
      year: "2026",
      status: "open",
      members: ["ОБ", "КР", "ДМ"],
      maxMembers: 4,
      iconClass: "icon-amber",
      bookmarked: false,
      applied: false
    },
    {
      id: "p6",
      title: "Доступний кампус",
      university: "ЛНУ ім. Івана Франка",
      description: "Досліджуємо безбар'єрність університету та проєктуємо зручні маршрути для кожного студента.",
      skills: ["UI/UX", "Figma", "React"],
      year: "2027",
      status: "open",
      members: ["НС", "ІК"],
      maxMembers: 4,
      iconClass: "icon-sky",
      bookmarked: false,
      applied: false
    },
    {
      id: "p7",
      title: "Cybersecurity Web App",
      university: "ДТЕУ, ФІТ",
      description: "Вебзастосунок для моніторингу загроз і захисту даних користувачів у реальному часі.",
      skills: ["Python", "React", "Security"],
      year: "2026",
      status: "open",
      members: ["МК", "ОБ", "ІП", "АС"],
      maxMembers: 5,
      iconClass: "icon-blue",
      bookmarked: true,
      applied: true
    },
    {
      id: "p8",
      title: "Архів студентських хакатонів",
      university: "ДТЕУ, ФІТ",
      description: "Каталог кейсів і рішень переможців міжуніверситетських змагань із програмування.",
      skills: ["HTML", "CSS", "JavaScript"],
      year: "2026",
      status: "closed",
      members: ["ТК", "СЛ", "РМ", "ОГ"],
      maxMembers: 4,
      iconClass: "icon-purple",
      bookmarked: false,
      applied: false
    }
  ];

  const DEFAULT_TASKS = [
    {
      id: "SEC-07",
      title: "Налаштувати двофакторну автентифікацію",
      description: "Додати підтвердження входу через TOTP.",
      tag: "Безпека",
      tagClass: "tag-blue",
      status: "todo",
      date: "14 жовт.",
      priority: "high",
      assignee: "Олег Бондар",
      initials: "ОБ",
      avatarClass: "av-2"
    },
    {
      id: "SEC-08",
      title: "Перевірити API на вразливості",
      description: "Протестувати захист від SQL-ін'єкцій та XSS.",
      tag: "Тестування",
      tagClass: "tag-amber",
      status: "todo",
      date: "15 жовт.",
      priority: "high",
      assignee: "Ірина Петренко",
      initials: "ІП",
      avatarClass: "av-3"
    },
    {
      id: "SEC-09",
      title: "Підготувати інструкцію користувача",
      description: "Описати вхід і роботу з панеллю загроз.",
      tag: "Документація",
      tagClass: "tag-slate",
      status: "todo",
      date: "16 жовт.",
      priority: "normal",
      assignee: "Марія Коваль",
      initials: "МК",
      avatarClass: "av-1"
    },
    {
      id: "SEC-04",
      title: "Реалізувати ролі та права доступу",
      description: "Розмежувати доступ користувача й адміністратора.",
      tag: "Розробка",
      tagClass: "tag-indigo",
      status: "inprogress",
      date: "12 жовт.",
      priority: "normal",
      assignee: "Олег Бондар",
      initials: "ОБ",
      avatarClass: "av-2"
    },
    {
      id: "SEC-05",
      title: "Створити панель моніторингу загроз",
      description: "Відобразити події безпеки та рівень ризику.",
      tag: "Інтерфейс",
      tagClass: "tag-sky",
      status: "inprogress",
      date: "13 жовт.",
      priority: "normal",
      assignee: "Марія Коваль",
      initials: "МК",
      avatarClass: "av-1"
    },
    {
      id: "SEC-06",
      title: "Додати журнал подій безпеки",
      description: "Зберігати спроби входу та зміни налаштувань.",
      tag: "Розробка",
      tagClass: "tag-indigo",
      status: "inprogress",
      date: "13 жовт.",
      priority: "normal",
      assignee: "Андрій Савчук",
      initials: "АС",
      avatarClass: "av-4"
    },
    {
      id: "SEC-01",
      title: "Визначити вимоги до захисту даних",
      description: "Узгоджено модель загроз і критерії безпеки.",
      tag: "Дослідження",
      tagClass: "tag-purple",
      status: "done",
      date: "7 жовт.",
      priority: "normal",
      assignee: "Ірина Петренко",
      initials: "ІП",
      avatarClass: "av-3"
    },
    {
      id: "SEC-02",
      title: "Налаштувати репозиторій і CI",
      description: "Додано перевірки коду та автоматичну збірку.",
      tag: "Інфраструктура",
      tagClass: "tag-teal",
      status: "done",
      date: "8 жовт.",
      priority: "normal",
      assignee: "Андрій Савчук",
      initials: "АС",
      avatarClass: "av-4"
    },
    {
      id: "SEC-03",
      title: "Спроєктувати сторінку входу",
      description: "Готові макети входу та відновлення пароля.",
      tag: "Інтерфейс",
      tagClass: "tag-sky",
      status: "done",
      date: "9 жовт.",
      priority: "normal",
      assignee: "Марія Коваль",
      initials: "МК",
      avatarClass: "av-1"
    }
  ];

  const DEFAULT_MESSAGES = [
    {
      author: "Олег Бондар",
      time: "10:15",
      text: "Привіт! Я оновив ендпоінти автентифікації, можна підключати форму входу."
    },
    {
      author: "Марія Коваль",
      time: "10:22",
      text: "Супер, сьогодні до вечора завершу адаптивну верстку панелі моніторингу."
    }
  ];

  const DEFAULT_NOTIFICATIONS = [
    {
      id: "n1",
      text: "Вас додано до команди Cybersecurity Web App",
      time: "Сьогодні, 09:40",
      unread: true
    },
    {
      id: "n2",
      text: "Олег Бондар оновив завдання SEC-04",
      time: "Вчора, 18:15",
      unread: false
    }
  ];

  function loadData(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : structuredClone(fallback);
    } catch (e) {
      return structuredClone(fallback);
    }
  }

  function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  function addNotification(text) {
    const items = loadData(STORAGE_KEYS.notifications, DEFAULT_NOTIFICATIONS);
    items.unshift({
      id: "n-" + Date.now(),
      text,
      time: "Щойно",
      unread: true
    });
    saveData(STORAGE_KEYS.notifications, items);
    renderNotifications();
  }

  function renderNotifications() {
    const list = document.getElementById("notify-list");
    const dot = document.getElementById("notify-dot");
    if (!list) return;
    const items = loadData(STORAGE_KEYS.notifications, DEFAULT_NOTIFICATIONS);
    const hasUnread = items.some((item) => item.unread);
    if (dot) dot.hidden = !hasUnread;

    list.innerHTML = items.length
      ? items
          .map(
            (item) => `
            <div class="notify-item ${item.unread ? "unread" : ""}">
              <div>${item.text}</div>
              <small>${item.time}</small>
            </div>`
          )
          .join("")
      : `<div class="notify-item">Нових сповіщень немає</div>`;
  }

  function initHeader() {
    renderNotifications();

    const notifyBtn = document.getElementById("notify-btn");
    const notifyDropdown = document.getElementById("notify-dropdown");
    const profileBtn = document.getElementById("profile-btn");
    const profileDropdown = document.getElementById("profile-dropdown");
    const clearNotifyBtn = document.getElementById("clear-notify-btn");
    const resetDemoBtn = document.getElementById("reset-demo-btn");
    const searchInput = document.getElementById("global-search-input");

    if (notifyBtn && notifyDropdown) {
      notifyBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isHidden = notifyDropdown.hidden;
        if (profileDropdown) profileDropdown.hidden = true;
        notifyDropdown.hidden = !isHidden;
        notifyBtn.setAttribute("aria-expanded", String(isHidden));
      });
    }

    if (profileBtn && profileDropdown) {
      profileBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isHidden = profileDropdown.hidden;
        if (notifyDropdown) notifyDropdown.hidden = true;
        profileDropdown.hidden = !isHidden;
        profileBtn.setAttribute("aria-expanded", String(isHidden));
      });
    }

    document.addEventListener("click", () => {
      if (notifyDropdown) notifyDropdown.hidden = true;
      if (profileDropdown) profileDropdown.hidden = true;
    });

    if (notifyDropdown) {
      notifyDropdown.addEventListener("click", (e) => e.stopPropagation());
    }
    if (profileDropdown) {
      profileDropdown.addEventListener("click", (e) => e.stopPropagation());
    }

    if (clearNotifyBtn) {
      clearNotifyBtn.addEventListener("click", () => {
        const items = loadData(STORAGE_KEYS.notifications, DEFAULT_NOTIFICATIONS).map((n) => ({
          ...n,
          unread: false
        }));
        saveData(STORAGE_KEYS.notifications, items);
        renderNotifications();
        showToast("Усі сповіщення позначено як прочитані");
      });
    }

    if (resetDemoBtn) {
      resetDemoBtn.addEventListener("click", () => {
        Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
        showToast("Демо-дані скинуто до початкових");
        setTimeout(() => window.location.reload(), 500);
      });
    }

    if (searchInput) {
      document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
          e.preventDefault();
          searchInput.focus();
        }
      });
    }
  }

  function initCatalogPage() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    const state = {
      search: new URLSearchParams(window.location.search).get("q") || "",
      year: "all",
      skills: [],
      showOpen: true,
      showClosed: false,
      sort: "newest",
      page: 1,
      perPage: 6
    };

    const searchInput = document.getElementById("global-search-input");
    const searchForm = document.getElementById("global-search-form");
    const yearSelect = document.getElementById("grad-year");
    const techInput = document.getElementById("tech-input");
    const popularWrap = document.getElementById("popular-skills");
    const openCb = document.getElementById("status-open-cb");
    const closedCb = document.getElementById("status-closed-cb");
    const resetBtn = document.getElementById("reset-filters-btn");
    const sortSelect = document.getElementById("sort-select");

    if (searchInput && state.search) {
      searchInput.value = state.search;
    }

    if (searchForm && searchInput) {
      searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        state.search = searchInput.value.trim();
        state.page = 1;
        renderCatalog();
      });

      searchInput.addEventListener("input", () => {
        state.search = searchInput.value.trim();
        state.page = 1;
        renderCatalog();
      });
    }

    yearSelect.addEventListener("change", () => {
      state.year = yearSelect.value;
      state.page = 1;
      renderCatalog();
    });

    techInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const val = techInput.value.trim();
        if (val && !state.skills.some((s) => s.toLowerCase() === val.toLowerCase())) {
          state.skills.push(val);
          state.page = 1;
          renderCatalog();
        }
        techInput.value = "";
      }
    });

    popularWrap.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-skill]");
      if (!btn) return;
      const skill = btn.dataset.skill;
      const idx = state.skills.findIndex((s) => s.toLowerCase() === skill.toLowerCase());
      if (idx >= 0) {
        state.skills.splice(idx, 1);
      } else {
        state.skills.push(skill);
      }
      state.page = 1;
      renderCatalog();
    });

    openCb.addEventListener("change", () => {
      state.showOpen = openCb.checked;
      state.page = 1;
      renderCatalog();
    });

    closedCb.addEventListener("change", () => {
      state.showClosed = closedCb.checked;
      state.page = 1;
      renderCatalog();
    });

    sortSelect.addEventListener("change", () => {
      state.sort = sortSelect.value;
      state.page = 1;
      renderCatalog();
    });

    resetBtn.addEventListener("click", () => {
      state.search = "";
      state.year = "all";
      state.skills = [];
      state.showOpen = true;
      state.showClosed = false;
      state.sort = "newest";
      state.page = 1;
      if (searchInput) searchInput.value = "";
      yearSelect.value = "all";
      openCb.checked = true;
      closedCb.checked = false;
      sortSelect.value = "newest";
      renderCatalog();
      showToast("Фільтри скинуто");
    });

    function renderCatalog() {
      const projects = loadData(STORAGE_KEYS.projects, DEFAULT_PROJECTS);

      const openCountTotal = projects.filter((p) => p.status === "open").length;
      const closedCountTotal = projects.filter((p) => p.status === "closed").length;
      const totalStudents = projects.reduce((sum, p) => sum + p.members.length, 0);

      document.getElementById("open-total-count").textContent = openCountTotal;
      document.getElementById("closed-total-count").textContent = closedCountTotal;
      document.getElementById("stat-open-projects").textContent = openCountTotal;
      document.getElementById("stat-students-count").textContent = totalStudents;

      popularWrap.querySelectorAll("[data-skill]").forEach((chip) => {
        const active = state.skills.some(
          (s) => s.toLowerCase() === chip.dataset.skill.toLowerCase()
        );
        chip.classList.toggle("active", active);
      });

      let filtered = projects.filter((project) => {
        if (!state.showOpen && !state.showClosed) return true;
        if (project.status === "open" && !state.showOpen) return false;
        if (project.status === "closed" && !state.showClosed) return false;
        return true;
      });

      if (state.year !== "all") {
        filtered = filtered.filter((p) => p.year === state.year);
      }

      if (state.skills.length > 0) {
        filtered = filtered.filter((p) =>
          state.skills.every((reqSkill) =>
            p.skills.some((ps) => ps.toLowerCase().includes(reqSkill.toLowerCase()))
          )
        );
      }

      if (state.search) {
        const q = state.search.toLowerCase();
        filtered = filtered.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.university.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.skills.some((s) => s.toLowerCase().includes(q))
        );
      }

      if (state.sort === "popular") {
        filtered.sort((a, b) => b.members.length - a.members.length);
      } else if (state.sort === "slots") {
        filtered.sort(
          (a, b) => b.maxMembers - b.members.length - (a.maxMembers - a.members.length)
        );
      }

      const totalFiltered = filtered.length;
      const totalPages = Math.max(1, Math.ceil(totalFiltered / state.perPage));
      if (state.page > totalPages) state.page = totalPages;

      const startIdx = (state.page - 1) * state.perPage;
      const pageItems = filtered.slice(startIdx, startIdx + state.perPage);

      let activeFiltersNum = 0;
      if (state.showOpen) activeFiltersNum++;
      if (state.showClosed) activeFiltersNum++;
      if (state.year !== "all") activeFiltersNum++;
      activeFiltersNum += state.skills.length;
      if (state.search) activeFiltersNum++;
      document.getElementById("active-filter-count").textContent = activeFiltersNum;

      const pillsWrap = document.getElementById("active-pills-wrap");
      pillsWrap.innerHTML = `<span class="results-count">${totalFiltered} проєктів</span>`;

      if (state.showOpen) {
        pillsWrap.insertAdjacentHTML(
          "beforeend",
          `<button type="button" class="active-filter-pill" data-clear="open">Відкриті ×</button>`
        );
      }
      if (state.showClosed) {
        pillsWrap.insertAdjacentHTML(
          "beforeend",
          `<button type="button" class="active-filter-pill" data-clear="closed">Закриті ×</button>`
        );
      }
      if (state.year !== "all") {
        pillsWrap.insertAdjacentHTML(
          "beforeend",
          `<button type="button" class="active-filter-pill" data-clear="year">${state.year} рік ×</button>`
        );
      }
      state.skills.forEach((skill) => {
        pillsWrap.insertAdjacentHTML(
          "beforeend",
          `<button type="button" class="active-filter-pill" data-clear-skill="${skill}">${skill} ×</button>`
        );
      });

      pillsWrap.querySelectorAll("[data-clear]").forEach((pill) => {
        pill.addEventListener("click", () => {
          const type = pill.dataset.clear;
          if (type === "open") {
            state.showOpen = false;
            openCb.checked = false;
          } else if (type === "closed") {
            state.showClosed = false;
            closedCb.checked = false;
          } else if (type === "year") {
            state.year = "all";
            yearSelect.value = "all";
          }
          renderCatalog();
        });
      });

      pillsWrap.querySelectorAll("[data-clear-skill]").forEach((pill) => {
        pill.addEventListener("click", () => {
          const sk = pill.dataset.clearSkill;
          state.skills = state.skills.filter((s) => s !== sk);
          renderCatalog();
        });
      });

      if (pageItems.length === 0) {
        grid.innerHTML = `
          <div class="empty-state">
            <h3>За обраними параметрами проєктів не знайдено</h3>
            <p>Спробуйте змінити пошуковий запит або скинути активні фільтри.</p>
          </div>`;
      } else {
        grid.innerHTML = pageItems
          .map((project) => {
            const visibleMembers = project.members.slice(0, 3);
            const extraCount = project.members.length - visibleMembers.length;
            const avatarsHtml = visibleMembers
              .map(
                (initials, idx) =>
                  `<span class="avatar-xs av-${(idx % 4) + 1}">${initials}</span>`
              )
              .join("");
            const extraHtml =
              extraCount > 0 ? `<span class="avatar-xs av-more">+${extraCount}</span>` : "";

            const statusBadge =
              project.status === "open"
                ? `<span class="status-open"><span class="dot-green"></span>Відкритий набір</span>`
                : `<span class="status-closed"><span class="dot-gray"></span>Набір завершено</span>`;

            let actionBtnHtml = "";
            if (project.status === "closed") {
              actionBtnHtml = `<button type="button" class="btn btn-disabled btn-full" disabled>Набір закрито</button>`;
            } else if (project.applied) {
              actionBtnHtml = `<button type="button" class="btn btn-applied btn-full" data-apply-id="${project.id}">Заявку подано ✓</button>`;
            } else {
              actionBtnHtml = `<button type="button" class="btn btn-primary btn-full" data-apply-id="${project.id}">Подати заявку</button>`;
            }

            return `
              <article class="project-card">
                <div class="card-header">
                  <div class="card-status-wrap">
                    <span class="card-type-icon ${project.iconClass}" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                        <polyline points="2 17 12 22 22 17"></polyline>
                      </svg>
                    </span>
                    ${statusBadge}
                  </div>
                  <button type="button" class="bookmark-btn ${project.bookmarked ? "bookmarked" : ""}" data-bookmark-id="${project.id}" aria-label="Зберегти проєкт">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="${project.bookmarked ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
                      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                    </svg>
                  </button>
                </div>

                <div class="card-body">
                  <h2><a href="board.html">${project.title}</a></h2>
                  <p class="uni-name">${project.university}</p>
                  <p class="card-desc">${project.description}</p>
                  <div class="tag-cloud">
                    ${project.skills.map((skill) => `<span class="chip">${skill}</span>`).join("")}
                  </div>
                </div>

                <div class="card-footer">
                  <div class="team-row">
                    <div class="avatar-stack">
                      ${avatarsHtml}${extraHtml}
                    </div>
                    <span class="team-spots"><strong>${project.members.length}/${project.maxMembers}</strong> у команді</span>
                  </div>
                  ${actionBtnHtml}
                </div>
              </article>`;
          })
          .join("");
      }

      grid.querySelectorAll("[data-bookmark-id]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const all = loadData(STORAGE_KEYS.projects, DEFAULT_PROJECTS);
          const item = all.find((p) => p.id === btn.dataset.bookmarkId);
          if (!item) return;
          item.bookmarked = !item.bookmarked;
          saveData(STORAGE_KEYS.projects, all);
          renderCatalog();
          showToast(
            item.bookmarked
              ? `Проєкт «${item.title}» збережено`
              : `Проєкт «${item.title}» видалено зі збережених`
          );
        });
      });

      grid.querySelectorAll("[data-apply-id]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const all = loadData(STORAGE_KEYS.projects, DEFAULT_PROJECTS);
          const item = all.find((p) => p.id === btn.dataset.applyId);
          if (!item) return;

          if (!item.applied) {
            if (item.members.length >= item.maxMembers) {
              showToast("У цій команді вже заповнені всі місця");
              return;
            }
            item.applied = true;
            if (!item.members.includes("МК")) {
              item.members.push("МК");
            }
            addNotification(`Ви подали заявку до проєкту «${item.title}»`);
            showToast(`Заявку до «${item.title}» успішно надіслано!`);
          } else {
            item.applied = false;
            item.members = item.members.filter((m) => m !== "МК");
            showToast(`Заявку до «${item.title}» скасовано`);
          }

          saveData(STORAGE_KEYS.projects, all);
          renderCatalog();
        });
      });

      const infoEl = document.getElementById("pagination-info");
      const controlsEl = document.getElementById("pagination-controls");
      const fromNum = totalFiltered === 0 ? 0 : startIdx + 1;
      const toNum = Math.min(startIdx + state.perPage, totalFiltered);
      infoEl.textContent = `Показано ${fromNum}-${toNum} із ${totalFiltered} проєктів`;

      let paginationHtml = `<button type="button" class="page-btn" data-page="${state.page - 1}" ${state.page === 1 ? "disabled" : ""}>‹</button>`;
      for (let i = 1; i <= totalPages; i++) {
        paginationHtml += `<button type="button" class="page-btn ${i === state.page ? "active" : ""}" data-page="${i}">${i}</button>`;
      }
      paginationHtml += `<button type="button" class="page-btn" data-page="${state.page + 1}" ${state.page === totalPages ? "disabled" : ""}>Далі ›</button>`;
      controlsEl.innerHTML = paginationHtml;

      controlsEl.querySelectorAll("[data-page]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const nextPage = Number(btn.dataset.page);
          if (nextPage >= 1 && nextPage <= totalPages) {
            state.page = nextPage;
            renderCatalog();
          }
        });
      });
    }

    renderCatalog();
  }

  function initCreatePage() {
    const form = document.getElementById("create-project-form");
    if (!form) return;

    const titleInput = document.getElementById("project-title");
    const uniInput = document.getElementById("project-uni");
    const figmaInput = document.getElementById("project-figma");
    const descInput = document.getElementById("project-desc");
    const editorBox = document.getElementById("editor-box");
    const counterEl = document.getElementById("desc-counter");
    const skillInput = document.getElementById("skill-input");
    const skillsBox = document.getElementById("skills-box");
    const selectedSkillsWrap = document.getElementById("selected-skills");
    const teamSizeSelect = document.getElementById("team-size");
    const saveDraftBtn = document.getElementById("save-draft-btn");

    let skills = ["React", "Python"];

    const savedDraft = loadData(STORAGE_KEYS.draft, null);
    if (savedDraft) {
      titleInput.value = savedDraft.title || "";
      if (savedDraft.university) uniInput.value = savedDraft.university;
      if (savedDraft.figmaUrl) figmaInput.value = savedDraft.figmaUrl;
      descInput.value = savedDraft.description || "";
      if (Array.isArray(savedDraft.skills)) skills = savedDraft.skills;
      if (savedDraft.teamSize) teamSizeSelect.value = savedDraft.teamSize;
    }

    function setFieldState(targetEl, errorId, message) {
      const errorEl = document.getElementById(errorId);
      if (errorEl) errorEl.textContent = message;
      if (!targetEl) return;
      targetEl.classList.toggle("input-invalid", Boolean(message));
      targetEl.classList.toggle("input-valid", !message);
    }

    function validateTitle() {
      const val = titleInput.value.trim();
      if (!val) {
        setFieldState(titleInput, "error-title", "Введіть назву проєкту, це поле є обов'язковим для заповнення.");
        return false;
      }
      if (val.length < 5) {
        setFieldState(titleInput, "error-title", "Назва занадто коротка, введіть щонайменше 5 символів.");
        return false;
      }
      setFieldState(titleInput, "error-title", "");
      return true;
    }

    function validateUniversity() {
      const val = uniInput.value.trim();
      if (val.length < 3) {
        setFieldState(uniInput, "error-uni", "Вкажіть назву закладу освіти або факультету (мінімум 3 символи).");
        return false;
      }
      setFieldState(uniInput, "error-uni", "");
      return true;
    }

    function validateFigmaUrl() {
      const val = figmaInput.value.trim();
      if (!val) {
        const errorEl = document.getElementById("error-figma");
        if (errorEl) errorEl.textContent = "";
        figmaInput.classList.remove("input-invalid", "input-valid");
        return true;
      }
      const figmaPattern = /^https:\/\/(www\.)?figma\.com\/.+/i;
      if (!figmaPattern.test(val)) {
        setFieldState(figmaInput, "error-figma", "Некоректне посилання, адреса має починатися з https:// та вести на домен figma.com.");
        return false;
      }
      setFieldState(figmaInput, "error-figma", "");
      return true;
    }

    function validateDescription() {
      const val = descInput.value.trim();
      if (!val) {
        setFieldState(editorBox, "error-desc", "Опишіть ідею та мету проєкту, поле опису не може бути порожнім.");
        return false;
      }
      if (val.length < 30) {
        setFieldState(
          editorBox,
          "error-desc",
          `Опис занадто короткий (зараз ${val.length} із мінімальних 30 символів), додайте більше деталей для команди.`
        );
        return false;
      }
      setFieldState(editorBox, "error-desc", "");
      return true;
    }

    function validateSkills() {
      if (skills.length === 0) {
        setFieldState(skillsBox, "error-skills", "Додайте хоча б одну технологію або навичку та натисніть Enter.");
        return false;
      }
      if (skills.length > 8) {
        setFieldState(skillsBox, "error-skills", "Можна вказати не більше 8 навичок для одного проєкту.");
        return false;
      }
      setFieldState(skillsBox, "error-skills", "");
      return true;
    }

    function validateTeamSize() {
      const num = Number(teamSizeSelect.value);
      if (Number.isNaN(num) || num < 2 || num > 10) {
        setFieldState(teamSizeSelect, "error-team", "Оберіть коректну кількість учасників команди від 2 до 10 осіб.");
        return false;
      }
      setFieldState(teamSizeSelect, "error-team", "");
      return true;
    }

    function updateCounter() {
      counterEl.textContent = `${descInput.value.length} / 3 000`;
    }

    function renderSkills() {
      selectedSkillsWrap.innerHTML = skills
        .map(
          (skill) => `
          <span class="skill-token">
            ${skill}
            <button type="button" class="skill-remove-btn" data-remove-skill="${skill}" aria-label="Видалити ${skill}">×</button>
          </span>`
        )
        .join("");

      selectedSkillsWrap.querySelectorAll("[data-remove-skill]").forEach((btn) => {
        btn.addEventListener("click", () => {
          skills = skills.filter((s) => s !== btn.dataset.removeSkill);
          renderSkills();
          validateSkills();
        });
      });
    }

    updateCounter();
    renderSkills();

    titleInput.addEventListener("blur", validateTitle);
    titleInput.addEventListener("input", () => {
      if (titleInput.classList.contains("input-invalid")) validateTitle();
    });

    uniInput.addEventListener("blur", validateUniversity);
    figmaInput.addEventListener("blur", validateFigmaUrl);
    figmaInput.addEventListener("input", () => {
      if (figmaInput.classList.contains("input-invalid")) validateFigmaUrl();
    });

    descInput.addEventListener("input", () => {
      updateCounter();
      if (editorBox.classList.contains("input-invalid")) validateDescription();
    });
    descInput.addEventListener("blur", validateDescription);

    document.querySelectorAll("[data-format]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const format = btn.dataset.format;
        const start = descInput.selectionStart;
        const end = descInput.selectionEnd;
        const selected = descInput.value.substring(start, end) || "текст";
        let replacement = selected;

        if (format === "bold") replacement = `**${selected}**`;
        if (format === "italic") replacement = `_${selected}_`;
        if (format === "underline") replacement = `<u>${selected}</u>`;
        if (format === "list") replacement = `\n- ${selected}`;
        if (format === "link") replacement = `[${selected}](https://figma.com)`;

        descInput.setRangeText(replacement, start, end, "end");
        descInput.focus();
        updateCounter();
      });
    });

    skillInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === ",") {
        e.preventDefault();
        const val = skillInput.value.replace(",", "").trim();
        if (val) {
          if (skills.length >= 8) {
            setFieldState(skillsBox, "error-skills", "Можна вказати не більше 8 навичок для одного проєкту.");
          } else if (!skills.some((s) => s.toLowerCase() === val.toLowerCase())) {
            skills.push(val);
            renderSkills();
            validateSkills();
          }
        }
        skillInput.value = "";
      }
    });

    saveDraftBtn.addEventListener("click", () => {
      saveData(STORAGE_KEYS.draft, {
        title: titleInput.value,
        university: uniInput.value,
        figmaUrl: figmaInput.value,
        description: descInput.value,
        skills,
        teamSize: teamSizeSelect.value
      });
      showToast("Чернетку проєкту збережено");
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const isTitleOk = validateTitle();
      const isUniOk = validateUniversity();
      const isFigmaOk = validateFigmaUrl();
      const isDescOk = validateDescription();
      const isSkillsOk = validateSkills();
      const isTeamOk = validateTeamSize();

      if (!isTitleOk || !isUniOk || !isFigmaOk || !isDescOk || !isSkillsOk || !isTeamOk) {
        showToast("Перевірте правильність заповнення виділених полів форми");
        const firstInvalid = form.querySelector(".input-invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const projects = loadData(STORAGE_KEYS.projects, DEFAULT_PROJECTS);
      const newProject = {
        id: "p-" + Date.now(),
        title: titleInput.value.trim(),
        university: uniInput.value.trim(),
        description: descInput.value.trim(),
        skills: [...skills],
        year: "2026",
        status: "open",
        members: ["МК"],
        maxMembers: Number(teamSizeSelect.value),
        iconClass: "icon-blue",
        bookmarked: true,
        applied: true
      };

      projects.unshift(newProject);
      saveData(STORAGE_KEYS.projects, projects);
      localStorage.removeItem(STORAGE_KEYS.draft);
      addNotification(`Ви опублікували новий проєкт «${newProject.title}»`);
      showToast("Проєкт опубліковано! Перехід до каталогу...");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 700);
    });
  }

  function initBoardPage() {
    const colTodo = document.getElementById("col-todo");
    if (!colTodo) return;

    const colInProgress = document.getElementById("col-inprogress");
    const colDone = document.getElementById("col-done");
    const taskSearchInput = document.getElementById("task-search-input");
    const toggleFilterBtn = document.getElementById("toggle-task-filter-btn");
    const taskFilterBar = document.getElementById("task-filter-bar");

    let taskSearch = "";
    let taskFilter = "all";
    let draggedTaskId = null;

    const workspaceInfo = loadData(STORAGE_KEYS.workspace, {
      title: "Cybersecurity Web App",
      description: "Вебзастосунок для моніторингу загроз і захисту даних користувачів."
    });

    function applyWorkspaceInfo() {
      document.getElementById("workspace-title").textContent = workspaceInfo.title;
      document.getElementById("workspace-desc").textContent = workspaceInfo.description;
      document.getElementById("crumb-project-name").textContent = workspaceInfo.title;
    }

    applyWorkspaceInfo();

    const tabNames = {
      overview: "Огляд",
      board: "Дошка завдань",
      files: "Файли",
      discussion: "Обговорення"
    };

    document.querySelectorAll(".tab-item").forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => {
        const target = tabBtn.dataset.tab;
        document.querySelectorAll(".tab-item").forEach((b) => {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        tabBtn.classList.add("active");
        tabBtn.setAttribute("aria-selected", "true");

        document.querySelectorAll(".tab-panel").forEach((panel) => {
          panel.hidden = panel.id !== `tab-${target}`;
        });
        document.getElementById("crumb-tab-name").textContent = tabNames[target] || "";
      });
    });

    toggleFilterBtn.addEventListener("click", () => {
      taskFilterBar.hidden = !taskFilterBar.hidden;
    });

    taskFilterBar.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-task-filter]");
      if (!btn) return;
      taskFilter = btn.dataset.taskFilter;
      taskFilterBar.querySelectorAll("[data-task-filter]").forEach((b) => {
        b.classList.toggle("active", b === btn);
      });
      renderBoard();
    });

    taskSearchInput.addEventListener("input", () => {
      taskSearch = taskSearchInput.value.trim().toLowerCase();
      renderBoard();
    });

    function moveTask(taskId, targetStatus) {
      const tasks = loadData(STORAGE_KEYS.tasks, DEFAULT_TASKS);
      const task = tasks.find((t) => t.id === taskId);
      if (!task || task.status === targetStatus) return;
      task.status = targetStatus;
      saveData(STORAGE_KEYS.tasks, tasks);
      renderBoard();
      showToast(`Завдання ${task.id} переміщено`);
    }

    function renderBoard() {
      const allTasks = loadData(STORAGE_KEYS.tasks, DEFAULT_TASKS);

      const doneTotal = allTasks.filter((t) => t.status === "done").length;
      const percent = allTasks.length ? Math.round((doneTotal / allTasks.length) * 100) : 0;
      document.getElementById("overview-progress-text").textContent =
        `Виконано ${doneTotal} із ${allTasks.length} завдань (${percent}%)`;
      document.getElementById("overview-progress-fill").style.width = `${percent}%`;

      let visibleTasks = [...allTasks];
      if (taskFilter === "mine") {
        visibleTasks = visibleTasks.filter((t) => t.initials === "МК");
      } else if (taskFilter === "high") {
        visibleTasks = visibleTasks.filter((t) => t.priority === "high");
      }

      if (taskSearch) {
        visibleTasks = visibleTasks.filter(
          (t) =>
            t.title.toLowerCase().includes(taskSearch) ||
            t.description.toLowerCase().includes(taskSearch) ||
            t.tag.toLowerCase().includes(taskSearch) ||
            t.id.toLowerCase().includes(taskSearch)
        );
      }

      document.getElementById("total-tasks-label").textContent = `${visibleTasks.length} завдань`;

      const groups = {
        todo: visibleTasks.filter((t) => t.status === "todo"),
        inprogress: visibleTasks.filter((t) => t.status === "inprogress"),
        done: visibleTasks.filter((t) => t.status === "done")
      };

      document.getElementById("count-todo").textContent = groups.todo.length;
      document.getElementById("count-inprogress").textContent = groups.inprogress.length;
      document.getElementById("count-done").textContent = groups.done.length;

      function createCardHtml(task) {
        const moveLeftBtn =
          task.status !== "todo"
            ? `<button type="button" class="move-btn" data-move-id="${task.id}" data-dir="left" title="Перемістити ліворуч">←</button>`
            : "";
        const moveRightBtn =
          task.status !== "done"
            ? `<button type="button" class="move-btn" data-move-id="${task.id}" data-dir="right" title="Перемістити праворуч">→</button>`
            : "";

        const rightMeta =
          task.priority === "high" && task.status !== "done"
            ? `<span class="priority-high">Високий пріоритет</span>`
            : `<span class="task-id">${task.id}</span>`;

        return `
          <article class="task-card" draggable="true" data-task-id="${task.id}">
            <div class="task-top-row">
              <span class="task-tag ${task.tagClass}">${task.tag}</span>
              <div class="task-move-btns">
                ${moveLeftBtn}
                ${moveRightBtn}
              </div>
            </div>
            <h4>${task.title}</h4>
            <p>${task.description}</p>
            <div class="task-meta">
              <span class="${task.status === "done" ? "done-date" : ""}">${task.date}</span>
              ${rightMeta}
            </div>
            <div class="task-footer">
              <div class="assignee">
                <span class="avatar-xs ${task.avatarClass}">${task.initials}</span>
                <span>${task.assignee}</span>
              </div>
              <span class="task-id">${task.id}</span>
            </div>
          </article>`;
      }

      colTodo.innerHTML = groups.todo.map(createCardHtml).join("");
      colInProgress.innerHTML = groups.inprogress.map(createCardHtml).join("");
      colDone.innerHTML = groups.done.map(createCardHtml).join("");

      document.querySelectorAll("[data-move-id]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const order = ["todo", "inprogress", "done"];
          const tasks = loadData(STORAGE_KEYS.tasks, DEFAULT_TASKS);
          const task = tasks.find((t) => t.id === btn.dataset.moveId);
          if (!task) return;
          const idx = order.indexOf(task.status);
          const nextIdx = btn.dataset.dir === "left" ? idx - 1 : idx + 1;
          if (order[nextIdx]) {
            moveTask(task.id, order[nextIdx]);
          }
        });
      });

      document.querySelectorAll(".task-card[draggable='true']").forEach((card) => {
        card.addEventListener("dragstart", () => {
          draggedTaskId = card.dataset.taskId;
        });
      });
    }

    document.querySelectorAll(".kanban-col").forEach((col) => {
      col.addEventListener("dragover", (e) => {
        e.preventDefault();
        col.classList.add("drag-over");
      });

      col.addEventListener("dragleave", () => {
        col.classList.remove("drag-over");
      });

      col.addEventListener("drop", (e) => {
        e.preventDefault();
        col.classList.remove("drag-over");
        if (draggedTaskId) {
          moveTask(draggedTaskId, col.dataset.status);
          draggedTaskId = null;
        }
      });
    });

    const newTaskModal = document.getElementById("new-task-modal");
    const openNewTaskBtn = document.getElementById("open-new-task-btn");
    const taskStatusSelect = document.getElementById("task-status-select");
    const newTaskForm = document.getElementById("new-task-form");

    openNewTaskBtn.addEventListener("click", () => {
      taskStatusSelect.value = "todo";
      newTaskModal.hidden = false;
    });

    document.querySelectorAll("[data-quick-status]").forEach((btn) => {
      btn.addEventListener("click", () => {
        taskStatusSelect.value = btn.dataset.quickStatus;
        newTaskModal.hidden = false;
      });
    });

    newTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const tasks = loadData(STORAGE_KEYS.tasks, DEFAULT_TASKS);
      const assignee = document.getElementById("task-assignee-select").value;
      const tag = document.getElementById("task-tag-select").value;
      const tagMap = {
        Інтерфейс: "tag-sky",
        Розробка: "tag-indigo",
        Безпека: "tag-blue",
        Тестування: "tag-amber",
        Документація: "tag-slate"
      };
      const initialsMap = {
        "Марія Коваль": ["МК", "av-1"],
        "Олег Бондар": ["ОБ", "av-2"],
        "Ірина Петренко": ["ІП", "av-3"],
        "Андрій Савчук": ["АС", "av-4"]
      };

      const [initials, avatarClass] = initialsMap[assignee] || ["МК", "av-1"];
      const newTask = {
        id: "SEC-" + String(tasks.length + 1).padStart(2, "0"),
        title: document.getElementById("task-title-input").value.trim(),
        description: document.getElementById("task-desc-input").value.trim(),
        tag,
        tagClass: tagMap[tag] || "tag-blue",
        status: taskStatusSelect.value,
        date: "14 лист.",
        priority: document.getElementById("task-priority-select").value,
        assignee,
        initials,
        avatarClass
      };

      tasks.unshift(newTask);
      saveData(STORAGE_KEYS.tasks, tasks);
      newTaskForm.reset();
      newTaskModal.hidden = true;
      renderBoard();
      showToast(`Завдання ${newTask.id} додано на дошку`);
    });

    const settingsModal = document.getElementById("settings-modal");
    const openSettingsBtn = document.getElementById("open-settings-btn");
    const settingsForm = document.getElementById("settings-form");

    openSettingsBtn.addEventListener("click", () => {
      document.getElementById("settings-title-input").value = workspaceInfo.title;
      document.getElementById("settings-desc-input").value = workspaceInfo.description;
      settingsModal.hidden = false;
    });

    settingsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      workspaceInfo.title = document.getElementById("settings-title-input").value.trim();
      workspaceInfo.description = document.getElementById("settings-desc-input").value.trim();
      saveData(STORAGE_KEYS.workspace, workspaceInfo);
      applyWorkspaceInfo();
      settingsModal.hidden = true;
      showToast("Налаштування проєкту збережено");
    });

    document.querySelectorAll("[data-close-modal]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const modal = document.getElementById(btn.dataset.closeModal);
        if (modal) modal.hidden = true;
      });
    });

    document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
          backdrop.hidden = true;
        }
      });
    });

    document.querySelectorAll(".file-download-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        showToast(`Завантаження файлу ${btn.dataset.filename}...`);
      });
    });

    document.getElementById("upload-demo-file-btn").addEventListener("click", () => {
      const filesList = document.getElementById("files-list");
      const fileName = `Lab4_JS_Module_${Math.floor(Math.random() * 90 + 10)}.js`;
      filesList.insertAdjacentHTML(
        "afterbegin",
        `<div class="file-row">
          <div>
            <strong>${fileName}</strong>
            <span class="subtitle">Модуль клієнтської логіки, 28 КБ, завантажила Марія Коваль</span>
          </div>
          <button type="button" class="btn btn-outline btn-sm">Завантажено ✓</button>
        </div>`
      );
      showToast(`Файл ${fileName} додано до репозиторію`);
    });

    const chatMessages = document.getElementById("chat-messages");
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");

    function renderChat() {
      const msgs = loadData(STORAGE_KEYS.messages, DEFAULT_MESSAGES);
      chatMessages.innerHTML = msgs
        .map(
          (m) => `
          <div class="chat-bubble">
            <div class="chat-bubble-head">
              <strong>${m.author}</strong>
              <span class="count-muted">${m.time}</span>
            </div>
            <p>${m.text}</p>
          </div>`
        )
        .join("");
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (!text) return;
      const msgs = loadData(STORAGE_KEYS.messages, DEFAULT_MESSAGES);
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
      msgs.push({
        author: "Марія Коваль",
        time: timeStr,
        text
      });
      saveData(STORAGE_KEYS.messages, msgs);
      chatInput.value = "";
      renderChat();
    });

    renderBoard();
    renderChat();
  }

  initHeader();
  initCatalogPage();
  initCreatePage();
  initBoardPage();
});