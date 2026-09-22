(() => {
  const store = "liberl-2nd-settings";
  let state = { locale: "en", theme: "light", checks: {} };
  try { state = { ...state, ...JSON.parse(localStorage.getItem(store) || "{}") }; } catch {}
  const save = () => localStorage.setItem(store, JSON.stringify(state));
  const apply = () => {
    document.documentElement.dataset.locale = state.locale;
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.lang = state.locale === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-lang]").forEach(x => x.classList.toggle("active", x.dataset.lang === state.locale));
    document.querySelectorAll("[data-check]").forEach(x => x.checked = Boolean(state.checks[x.dataset.check]));
    const navLabels = {
      home: ["Home", "首页"], walkthrough: ["Walkthrough", "流程攻略"], quests: ["Quests", "任务"],
      treasures: ["Treasures", "宝箱"], missables: ["Missables", "易错过"], builds: ["Builds", "配装"], bosses: ["Bosses", "Boss"]
    };
    document.querySelectorAll(".nav > a").forEach(link => {
      const parts = new URL(link.href).pathname.split("/").filter(Boolean);
      const key = !parts.length || parts.at(-1) === "liberl-field-guide" ? "home" : parts.at(-1);
      const labels = navLabels[key];
      if (labels) link.textContent = labels[state.locale === "zh" ? 1 : 0];
    });
    const sideLabels = {
      "Field rules": "实用规则", "Game start": "游戏开始", "Partner choice": "同伴选择",
      "Preparation": "战前准备", "Milestones": "里程碑", "Method": "方法", "Sources": "来源",
      "Prologue": "序章", "Chapter 1": "第一章", "Audit queue": "核对队列", "Routine": "日常检查",
      "Roles": "角色定位", "Quartz": "回路", "Checklist": "清单"
    };
    document.querySelectorAll(".side-nav > a").forEach(link => {
      link.dataset.en ||= link.textContent.trim();
      link.textContent = state.locale === "zh" ? (sideLabels[link.dataset.en] || link.dataset.en) : link.dataset.en;
    });
  };
  document.getElementById("locale")?.addEventListener("click", () => { state.locale = state.locale === "en" ? "zh" : "en"; save(); apply(); });
  document.getElementById("theme")?.addEventListener("click", () => { state.theme = state.theme === "light" ? "dark" : "light"; save(); apply(); });
  document.querySelectorAll("[data-check]").forEach(x => x.addEventListener("change", () => { state.checks[x.dataset.check] = x.checked; save(); }));
  apply();
})();
