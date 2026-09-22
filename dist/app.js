(() => {
  "use strict";
  const D = window.GUIDE_DATA;
  const STORAGE = "liberl-field-guide-v2";
  const saved = (() => { try { return JSON.parse(localStorage.getItem(STORAGE) || "{}"); } catch { return {}; } })();
  const state = { locale: saved.locale || "en", theme: saved.theme || "light", chapter: saved.chapter || "prologue", checks: saved.checks || {} };
  let questFilter = "all";
  let archiveTab = "bosses";
  const $ = id => document.getElementById(id);
  const txt = (en, zh) => state.locale === "zh" ? zh : en;
  const loc = obj => obj[state.locale];
  const chapter = () => D.chapters.find(x => x.id === state.chapter) || D.chapters[0];
  const chapterQuests = () => D.quests.filter(x => x.ch === state.chapter);
  const key = (type, id) => `${type}:${id}`;

  function persist() { localStorage.setItem(STORAGE, JSON.stringify(state)); }
  function setText(id, value) { const el = $(id); if (el) el.textContent = value; }
  function checked(type, id) { return Boolean(state.checks[key(type, id)]); }
  function esc(s) { return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"})[c]); }

  function applyStaticCopy() {
    document.documentElement.lang = state.locale === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.theme = state.theme;
    document.querySelectorAll("[data-locale-option]").forEach(x => x.classList.toggle("is-active", x.dataset.localeOption === state.locale));
    const pairs = {
      editionText:["Original FC edition","原版 FC"], chapterLabel:["Chapter","章节"], journeyLabel:["JOURNEY PROGRESS","旅程进度"], continueText:["Continue journey","继续旅程"], checkedText:["checked","已完成"], chapterTargetText:["Chapter target","本章目标"], beforeMove:["BEFORE YOU MOVE ON","推进主线前"], checklistLink:["Open chapter checklist ↗","打开章节清单 ↗"], campaignLabel:["FULL CAMPAIGN","完整流程"], campaignTitle:["Five chapters. One complete ledger.","五个章节，一份完整档案。"], contentsLabel:["CHAPTER CONTENTS","章节目录"], yourProgress:["Your progress","你的进度"], requestsTitle:["Requests","委托"], requestsIntro:["Exact opening windows, expiry points, routes and bonus BP for the selected chapter.","当前章节所有委托的准确开放时段、失效节点、路线与奖励 BP。"], reportedText:["reported","已报告"], collectionsTitle:["Chests, recipes & Carnelia","宝箱、料理与《红耀石》"], collectionsIntro:["A chapter ledger with route counts, every recipe name and all short-window book pickups.","按章节整理的宝箱数量与内容、全部料理名称及短时限书籍。"], securedText:["secured","已取得"], archiveTitle:["Combat & party reference","战斗与队伍资料"], archiveIntro:["Boss notes, all eight playable characters, quartz families and practical arts.","Boss 要点、八名可用角色、回路类别与实用魔法。"], verifiedLabel:["LAST VERIFIED","最后核对"], verifiedFooter:["Content verified 2026-09-22.","内容最后核对：2026-09-22。"], fanNotice:["Unofficial fan guide. Nihon Falcom owns all game names and trademarks.","非官方玩家攻略；游戏名称与商标归 Nihon Falcom 所有。"]
    };
    Object.entries(pairs).forEach(([id, v]) => setText(id, txt(v[0], v[1])));
    document.querySelectorAll("[data-filter]").forEach(b => {
      const labels = { all:["All","全部"], main:["Main","主线"], side:["Side","支线"], hunt:["Wanted","通缉"], incomplete:["Incomplete","未完成"] };
      b.textContent = txt(...labels[b.dataset.filter]);
    });
    document.querySelectorAll("[data-archive]").forEach(b => {
      const labels = { bosses:["Bosses","Boss"], characters:["Characters","角色"], quartz:["Quartz","回路"], arts:["Arts","魔法"], sources:["Sources","来源"] };
      b.textContent = txt(...labels[b.dataset.archive]);
    });
  }

  function renderChapterSelector() {
    $("chapterSelect").innerHTML = D.chapters.map(c => `<option value="${c.id}" ${c.id === state.chapter ? "selected" : ""}>${c.n} · ${esc(loc(c.region))}</option>`).join("");
  }

  function renderDashboard() {
    const ch = chapter();
    setText("recordLabel", `${txt("BRACER FIELD RECORD","游击士实地记录")} ${ch.n}`);
    setText("chapterTitle", loc(ch.title)); setText("chapterRegion", loc(ch.region));
    const steps = D.walkthrough[ch.id]; const qs = chapterQuests();
    const done = steps.filter((_, i) => checked("step", `${ch.id}-${i}`)).length + qs.filter(x => checked("quest", x.id)).length;
    const total = steps.length + qs.length; const percent = total ? Math.round(done / total * 100) : 0;
    setText("progressPercent", percent); setText("dialCompleted", done); setText("progressSummary", txt(`${done} of ${total} field notes complete`, `${total} 项记录中已完成 ${done} 项`));
    $("progressDial").style.setProperty("--progress", `${percent * 3.6}deg`);
    const earned = qs.filter(x => checked("quest", x.id)).reduce((n, x) => n + x.bp + x.bonus, 0);
    setText("earnedBp", earned); setText("bpMaximum", `/ ${ch.bp} BP`); setText("remainingBp", txt(`${Math.max(0, ch.bp-earned)} BP remaining`, `还差 ${Math.max(0, ch.bp-earned)} BP`));
    $("bpTrack").style.width = `${Math.min(100, earned / ch.bp * 100)}%`;
    setText("bpNote", txt(`Cumulative perfect total after this chapter: ${ch.cumulative} BP. Chest milestone: ${D.chapters.slice(0,D.chapters.indexOf(ch)+1).reduce((n,x)=>n+x.chests,0)} / 164.`, `本章结束累计完美值：${ch.cumulative} BP；宝箱里程碑：${D.chapters.slice(0,D.chapters.indexOf(ch)+1).reduce((n,x)=>n+x.chests,0)} / 164。`));
    const last = steps[steps.length - 1];
    setText("focusTitle", txt("Lockout checkpoint", "章节锁点核对"));
    $("alertList").innerHTML = `<article class="alert-item"><span class="alert-icon">!</span><div><h3>${txt("Final chapter check","章节最终检查")}</h3><p>${esc(loc(last))}</p></div><span class="status-tag">${txt("MISSABLE","易错过")}</span></article><article class="alert-item"><span class="alert-icon">✓</span><div><h3>${txt("Perfect-file targets","完美档目标")}</h3><p>${ch.cumulative} BP · ${D.chapters.slice(0,D.chapters.indexOf(ch)+1).reduce((n,x)=>n+x.chests,0)} / 164 ${txt("chests","宝箱")}</p></div><span class="status-tag">${ch.chests} ${txt("THIS CHAPTER","本章")}</span></article>`;
    $("chapterMap").innerHTML = D.chapters.map(c => `<button class="map-stop ${c.id===ch.id?"is-current":""}" data-chapter-jump="${c.id}"><span>${c.n}</span><strong>${esc(loc(c.region))}</strong><small>${c.cumulative} BP · ${c.chests} ${txt("chests","宝箱")}</small></button>`).join("");
  }

  function renderWalkthrough() {
    const ch = chapter(); const steps = D.walkthrough[ch.id];
    setText("walkthroughTitle", loc(ch.title)); setText("walkthroughIntro", txt("Use this order to avoid expired requests, missed books and closed regions.","按此顺序可避免委托过期、书籍遗漏或区域封锁。"));
    $("stepNav").innerHTML = steps.map((_,i) => `<a href="#step-${i}"><span>${String(i+1).padStart(2,"0")}</span><span>${txt("Route step","路线步骤")} ${i+1}</span></a>`).join("");
    $("walkthroughTimeline").innerHTML = steps.map((s,i) => { const id=`${ch.id}-${i}`, done=checked("step",id); return `<section class="timeline-step ${done?"is-complete":""}" id="step-${i}"><span class="step-number">${done?"✓":String(i+1).padStart(2,"0")}</span><div class="step-body"><div class="step-heading"><h2>${txt("Route step","路线步骤")} ${i+1}</h2><span class="step-meta">${loc(ch.region)}</span></div><p>${esc(loc(s))}</p><div class="check-row"><input class="native-check" type="checkbox" id="check-step-${i}" data-check="step" data-id="${id}" ${done?"checked":""}><label class="check-control" for="check-step-${i}">✓</label><label for="check-step-${i}">${txt("Mark this route step complete","标记此路线步骤完成")}</label></div></div></section>`; }).join("");
    const done = steps.filter((_,i)=>checked("step",`${ch.id}-${i}`)).length; setText("railProgress", `${done} / ${steps.length}`);
  }

  function renderQuests() {
    const all = chapterQuests();
    const list = all.filter(x => questFilter === "all" || (questFilter === "incomplete" ? !checked("quest",x.id) : x.type === questFilter));
    $("requestList").innerHTML = list.map(x => { const done=checked("quest",x.id), t=loc(x.title); return `<article class="request-card ${done?"is-complete":""}"><button class="request-summary" aria-expanded="false"><span class="request-type">${x.type==="main"?"M":x.type==="hunt"?"W":"S"}</span><span class="request-name"><strong>${esc(t)}</strong><small>${txt("Opens","开放")}: ${esc(loc(x.open))}</small></span><span class="deadline">${txt("Expires","失效")}: ${esc(loc(x.expire))}</span><span class="request-bp">${x.bp}${x.bonus?` +${x.bonus}`:""} BP</span><span class="request-toggle">+</span></button><div class="request-details"><div><strong>${txt("Route","路线")}</strong><p>${esc(loc(x.route))}</p></div><div><strong>${txt("Availability window","有效窗口")}</strong><p>${esc(loc(x.open))} → ${esc(loc(x.expire))}</p></div><div class="check-row"><input class="native-check" type="checkbox" id="q-${x.id}" data-check="quest" data-id="${x.id}" ${done?"checked":""}><label class="check-control" for="q-${x.id}">✓</label><label for="q-${x.id}">${txt("Reported to guild","已向协会报告")}</label></div></div></article>`; }).join("") || `<p class="empty-state">${txt("No requests match this filter.","没有符合筛选条件的委托。")}</p>`;
    setText("questCount", `${all.filter(x=>checked("quest",x.id)).length} / ${all.length}`);
  }

  function renderCollections() {
    const ch=chapter(); const ledger=D.chests[ch.id]; const books=D.carnelia.filter(x=>x[1]===ch.id); const recipe=D.recipes[ch.id];
    const ids=[...ledger.map((_,i)=>`chest-${ch.id}-${i}`),...recipe.map((_,i)=>`recipe-${ch.id}-${i}`),...books.map(x=>`book-${x[0]}`)];
    setText("collectibleCount", `${ids.filter(id=>checked("collect",id)).length} / ${ids.length}`);
    const check = (id,label) => `<div class="check-row compact"><input class="native-check" type="checkbox" id="${id}" data-check="collect" data-id="${id}" ${checked("collect",id)?"checked":""}><label class="check-control" for="${id}">✓</label><label for="${id}">${esc(label)}</label></div>`;
    $("collectionContent").innerHTML = `<section class="ledger-section"><div class="ledger-heading"><div><p class="section-label">TREASURE LEDGER</p><h2>${ch.chests} ${txt("chests in this chapter","个本章宝箱")}</h2></div><strong>${D.chapters.slice(0,D.chapters.indexOf(ch)+1).reduce((n,x)=>n+x.chests,0)} / 164</strong></div><div class="ledger-grid">${ledger.map((x,i)=>`<article class="ledger-card"><div class="ledger-count">${x[1]}</div><div><h3>${esc(x[0])}</h3><p>${esc(x[2])}</p>${check(`chest-${ch.id}-${i}`,txt("Area cleared","区域已清空"))}</div></article>`).join("")}</div></section><section class="ledger-section"><div class="ledger-heading"><div><p class="section-label">RECIPE BOOK</p><h2>${recipe.length} ${txt("recipes","种料理")}</h2></div></div><div class="recipe-grid">${recipe.map((x,i)=>check(`recipe-${ch.id}-${i}`,x)).join("")}</div></section><section class="ledger-section"><div class="ledger-heading"><div><p class="section-label">CARNELIA</p><h2>${books.length} ${txt("time-limited volumes","册限时书籍")}</h2></div></div><div class="ledger-grid">${books.map(x=>`<article class="ledger-card book-card"><div class="ledger-count">${x[0]}</div><div><h3>${txt("Carnelia","红耀石")} ${x[0]}</h3><p><strong>${txt("Location","地点")}:</strong> ${esc(x[2])}<br><strong>${txt("Window","窗口")}:</strong> ${esc(x[3])}</p>${check(`book-${x[0]}`,txt("Volume secured","本卷已取得"))}</div></article>`).join("")}</div></section><aside class="edition-note"><span class="note-mark">i</span><div><strong>${txt("Chest count convention","宝箱计数口径")}</strong><p>${txt("The guide follows the walkthrough's 164 counter. The tutorial Small Box is story related and may not count toward the Steam chest achievement, but remains in the route total.","本站沿用攻略的 164 箱计数。教学阶段的小箱子属于剧情宝箱，可能不计入 Steam 宝箱成就，但仍保留在路线总数中。")}</p></div></aside>`;
  }

  function renderArchive() {
    let html="";
    if(archiveTab==="bosses") html=`<div class="archive-grid">${D.bosses.map(x=>`<article class="archive-card"><span class="chapter-chip">${x[0]}</span><h2>${esc(state.locale==="zh"?x[4]:x[1])}</h2><p class="archive-meta">${esc(state.locale==="zh"?x[5]:x[2])}</p><p>${esc(state.locale==="zh"?x[6]:x[3])}</p></article>`).join("")}</div>`;
    if(archiveTab==="characters") html=`<div class="archive-grid">${D.characters.map(x=>`<article class="archive-card"><h2>${esc(state.locale==="zh"?x[1]:x[0])}</h2><p class="archive-meta">${esc(state.locale==="zh"?x[3]:x[2])}</p><p>${esc(state.locale==="zh"?x[5]:x[4])}</p></article>`).join("")}</div>`;
    if(archiveTab==="quartz") html=`<div class="reference-table">${D.quartz.map(x=>`<div class="reference-row"><strong>${esc(state.locale==="zh"?x[2]:x[0])}</strong><span>${esc(state.locale==="zh"?x[1]:x[3])}</span><p>${esc(state.locale==="zh"?x[5]:x[4])}</p></div>`).join("")}</div><aside class="edition-note"><span class="note-mark">i</span><div><strong>${txt("How arts unlock","魔法解锁规则")}</strong><p>${txt("Add the elemental values of quartz on a single connected orbment line. If that line meets an art's requirement, the character can cast it. Check the in-game Bracer Notebook for exact values.","把同一条导力链上回路的属性值相加；达到魔法需求即可使用。精确属性需求请以游戏内游击士手册为准。")}</p></div></aside>`;
    if(archiveTab==="arts") html=`<div class="reference-table">${D.arts.map(x=>`<div class="reference-row"><strong>${esc(x[0])}</strong><p>${esc(state.locale==="zh"?x[2]:x[1])}</p></div>`).join("")}</div>`;
    if(archiveTab==="sources") html=`<div class="sources-intro"><h2>${txt("Verification record","核对记录")}</h2><p>${txt("Last verified on 2026-09-22 against the original FC PC/PSP route. Names follow the English PC localization; Chinese labels are reader aids.","最后于 2026-09-22 按原版 FC PC/PSP 流程核对。英文名称遵循 PC 英文本地化，中文名称用于辅助阅读。")}</p></div><div class="source-list">${D.sources.map(x=>`<a href="${x[1]}" target="_blank" rel="noreferrer"><strong>${esc(x[0])}</strong><span>${esc(x[2])}</span><b>↗</b></a>`).join("")}</div>`;
    $("archiveContent").innerHTML=html;
  }

  function renderAll() { applyStaticCopy(); renderChapterSelector(); renderDashboard(); renderWalkthrough(); renderQuests(); renderCollections(); renderArchive(); bindDynamic(); }
  function bindDynamic() {
    document.querySelectorAll("[data-check]").forEach(x=>x.onchange=()=>{state.checks[key(x.dataset.check,x.dataset.id)]=x.checked;persist();renderAll();});
    document.querySelectorAll(".request-summary").forEach(b=>b.onclick=()=>{const open=b.getAttribute("aria-expanded")==="true";b.setAttribute("aria-expanded",String(!open));b.parentElement.classList.toggle("is-open",!open);});
    document.querySelectorAll("[data-chapter-jump]").forEach(b=>b.onclick=()=>{state.chapter=b.dataset.chapterJump;persist();renderAll();});
  }
  function route() { const name=location.hash.slice(1)||"home"; const valid=["home","walkthrough","quests","collectibles","reference"].includes(name)?name:"home"; document.querySelectorAll("[data-view]").forEach(v=>v.hidden=v.dataset.view!==valid); document.querySelectorAll("[data-route]").forEach(a=>a.classList.toggle("is-active",a.dataset.route===valid)); window.scrollTo(0,0); }

  $("localeSwitch").onclick=()=>{state.locale=state.locale==="en"?"zh":"en";persist();renderAll();};
  $("themeToggle").onclick=()=>{state.theme=state.theme==="light"?"dark":"light";persist();applyStaticCopy();};
  $("chapterSelect").onchange=e=>{state.chapter=e.target.value;persist();renderAll();};
  document.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>{questFilter=b.dataset.filter;document.querySelectorAll("[data-filter]").forEach(x=>x.classList.toggle("is-active",x===b));renderQuests();bindDynamic();});
  document.querySelectorAll("[data-archive]").forEach(b=>b.onclick=()=>{archiveTab=b.dataset.archive;document.querySelectorAll("[data-archive]").forEach(x=>x.classList.toggle("is-active",x===b));renderArchive();});
  window.addEventListener("hashchange",route); renderAll(); route();
})();
