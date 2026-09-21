(() => {
  "use strict";

  const STORAGE_KEY = "liberl-field-guide-v1";

  const copy = {
    en: {
      skip: "Skip to guide",
      brandSub: "Trails in the Sky FC",
      navDesk: "Field desk",
      navWalkthrough: "Walkthrough",
      navRequests: "Requests",
      navCollectibles: "Collectibles",
      fieldRecord: "BRACER FIELD RECORD 01",
      chapterTitle: "Prologue: A Father's Departure",
      rolentRegion: "Rolent Region",
      editionLabel: "Original FC edition",
      chapterLabel: "Chapter",
      prologueOption: "Prologue · Rolent",
      chapter1Option: "Chapter 1 · Bose (coming soon)",
      journeyProgress: "Journey progress",
      continueJourney: "Continue journey",
      checked: "checked",
      bracerPoints: "Bracer points",
      juniorBracer: "Junior Bracer",
      prologueMaximum: "Prologue maximum",
      bpNote: "Bonus BP depends on a few choices. Open each request before advancing the story.",
      beforeYouMove: "Before you move on",
      dontLeaveRolent: "Don't leave Rolent yet",
      viewChecklist: "View full checklist",
      quickLookup: "Quick lookup",
      findAnything: "Find a request, item, or place",
      searchLabel: "Search the field guide",
      searchPlaceholder: "Try “Carnelia”, “BP”, or “Rolent”",
      chapterContents: "Chapter contents",
      yourProgress: "Your progress",
      spoilerLight: "SPOILER-LIGHT WALKTHROUGH",
      walkthroughTitle: "Prologue field route",
      walkthroughIntro: "A safe order for every main objective, request, and one-time pickup in Rolent.",
      bracerBoard: "ROLENT BRACER BOARD",
      requestsTitle: "Requests",
      requestsIntro: "Track deadlines, bonus conditions, and report status before the story moves on.",
      reported: "reported",
      filterAll: "All",
      filterMain: "Main",
      filterSide: "Side",
      filterMissable: "Missable",
      filterIncomplete: "Incomplete",
      archiveRecord: "ROLENT ARCHIVE RECORD",
      collectiblesTitle: "Missables & collectibles",
      collectiblesIntro: "A compact, spoiler-conscious list for the prologue's one-time pickups.",
      secured: "secured",
      editionNoteTitle: "Edition note",
      editionNoteText: "This MVP tracks the original Trails in the Sky FC release. The 2025 remake has different quest and exploration details.",
      fieldNotesComplete: (done, total) => `${done} of ${total} field notes complete`,
      bpRemaining: value => `${value} BP remaining`,
      statusUrgent: "Time-sensitive",
      statusMissable: "Missable",
      statusCarryover: "Carries to Ch. 1",
      noResults: "No matching field notes found.",
      saved: "Progress saved to this device.",
      reportRequest: "Mark request as reported",
      undoReport: "Mark request as incomplete",
      deadline: "Deadline",
      route: "Route",
      bonus: "Bonus condition",
      completeStep: "Mark this field step complete",
      collected: "Mark as secured"
    },
    zh: {
      skip: "跳转到攻略内容",
      brandSub: "英雄传说 空之轨迹 FC",
      navDesk: "攻略首页",
      navWalkthrough: "流程攻略",
      navRequests: "任务委托",
      navCollectibles: "收集清单",
      fieldRecord: "游击士行动记录 01",
      chapterTitle: "序章：父亲、启程",
      rolentRegion: "洛连特地区",
      editionLabel: "原版 FC",
      chapterLabel: "章节",
      prologueOption: "序章 · 洛连特",
      chapter1Option: "第一章 · 柏斯（即将推出）",
      journeyProgress: "旅程进度",
      continueJourney: "继续攻略",
      checked: "项已完成",
      bracerPoints: "游击士点数",
      juniorBracer: "准游击士",
      prologueMaximum: "序章最高点数",
      bpNote: "部分选择会影响额外 BP。推进主线前请先查看每项委托的条件。",
      beforeYouMove: "推进剧情之前",
      dontLeaveRolent: "先别离开洛连特",
      viewChecklist: "查看完整清单",
      quickLookup: "快速查找",
      findAnything: "查找任务、道具或地点",
      searchLabel: "搜索攻略",
      searchPlaceholder: "试试“红耀石”“BP”或“洛连特”",
      chapterContents: "章节目录",
      yourProgress: "当前进度",
      spoilerLight: "轻剧透流程攻略",
      walkthroughTitle: "序章行动路线",
      walkthroughIntro: "按安全顺序完成洛连特地区的主线、支线和一次性收集内容。",
      bracerBoard: "洛连特游击士协会公告板",
      requestsTitle: "任务委托",
      requestsIntro: "在剧情推进前确认截止时间、额外 BP 条件和报告状态。",
      reported: "已报告",
      filterAll: "全部",
      filterMain: "主线",
      filterSide: "支线",
      filterMissable: "易错过",
      filterIncomplete: "未完成",
      archiveRecord: "洛连特地区收集档案",
      collectiblesTitle: "易错过内容与收集品",
      collectiblesIntro: "序章限定收集内容的简洁清单，尽量避免剧情剧透。",
      secured: "已取得",
      editionNoteTitle: "版本说明",
      editionNoteText: "此 MVP 对应原版《空之轨迹 FC》。2025 年重制版的任务与探索细节有所不同。",
      fieldNotesComplete: (done, total) => `已完成 ${done} / ${total} 项行动记录`,
      bpRemaining: value => `还可获得 ${value} BP`,
      statusUrgent: "限时",
      statusMissable: "易错过",
      statusCarryover: "第一章完成",
      noResults: "没有找到匹配的攻略内容。",
      saved: "进度已保存在当前设备。",
      reportRequest: "标记为已报告",
      undoReport: "标记为未完成",
      deadline: "截止时间",
      route: "行动路线",
      bonus: "额外条件",
      completeStep: "标记此步骤为已完成",
      collected: "标记为已取得"
    }
  };

  const content = {
    alerts: [
      {
        icon: "01",
        status: "missable",
        en: { title: "Collect Carnelia, Chapter 1", text: "Speak to Rhett in the northwest apartments after the Bracer Exam." },
        zh: { title: "取得《红耀石》第 1 卷", text: "游击士考试结束后，与西北公寓里的雷特交谈。" }
      },
      {
        icon: "02",
        status: "urgent",
        en: { title: "Finish the short-deadline requests", text: "Lost Kitten and several board requests expire when the story advances." },
        zh: { title: "优先完成短期委托", text: "寻找小猫等公告板委托会在主线推进后失效。" }
      },
      {
        icon: "03",
        status: "carryover",
        en: { title: "Accept Letter Carrier", text: "Take Father Divine's letter now; delivery happens after you reach Bose." },
        zh: { title: "接取“送亲笔信”", text: "现在从迪拜恩教区长处取得信件，抵达柏斯后再交付。" }
      }
    ],
    steps: [
      {
        id: "training",
        bp: 1,
        en: { nav: "Bracer training", title: "Complete the retrieval training", meta: "Rolent Sewers · 1 BP", body: "Meet Scherazard at the guild, prepare Estelle and Joshua's orbments, then retrieve both training chests from the sewers.", callout: "Check every treasure chest a second time if you are pursuing the chest achievement.", check: "Training reported to the Rolent Guild" },
        zh: { nav: "游击士训练", title: "完成地下水路训练", meta: "洛连特地下水路 · 1 BP", body: "在协会与雪拉扎德会合，设置艾丝蒂尔和约修亚的导力器，并从地下水路取回两个训练宝箱。", callout: "如果要完成宝箱成就，每个宝箱都需要再次调查。", check: "已向洛连特协会报告训练结果" }
      },
      {
        id: "rescue",
        bp: 4,
        en: { nav: "Child rescue", title: "Rescue Luke and Pat", meta: "Jade Tower · 3+1 BP", body: "Follow the Malga Trail to Jade Tower. At the critical choice, go in together with Joshua to secure the bonus BP.", callout: "Bonus BP: choose to charge in together. Keep both children standing during the escort battles.", check: "Children rescued with bonus BP" },
        zh: { nav: "救出孩子", title: "救出鲁克与帕特", meta: "翡翠之塔 · 3+1 BP", body: "沿玛鲁加山道前往翡翠之塔。关键选择中与约修亚一起冲进去，可取得额外 BP。", callout: "额外 BP：选择与约修亚一起冲入。护送战中不能让两个孩子倒下。", check: "已救出孩子并取得额外 BP" }
      },
      {
        id: "rolent-sweep",
        bp: 5,
        en: { nav: "Rolent sweep", title: "Make a first sweep of Rolent", meta: "Rolent · Missables", body: "Visit the northwest apartments for Carnelia, Chapter 1. Pick up the Liberl News and Recipe Book at Rinon's General Goods.", callout: "Missable: Rhett's Carnelia volume is the one pickup you should verify before leaving town.", check: "Rolent's early pickups secured" },
        zh: { nav: "洛连特收集", title: "完成洛连特首次收集", meta: "洛连特 · 易错过", body: "前往西北公寓取得《红耀石》第 1 卷，并在里农杂货铺取得《利贝尔通讯》和料理手册。", callout: "易错过：《红耀石》第 1 卷是离开城镇前最需要确认的收集品。", check: "已取得洛连特前期收集品" }
      },
      {
        id: "farm",
        bp: 3,
        en: { nav: "Perzel Farm", title: "Clear the Perzel Farm monsters", meta: "Milch Main Road · 3+2 BP", body: "Travel to Perzel Farm, investigate the damage, and finish the night battle without letting the monsters reach their targets.", callout: "Prepare before the night sequence. A clean defense earns the full bonus.", check: "Farm request reported with full BP" },
        zh: { nav: "帕赛尔农场", title: "消灭帕赛尔农场的魔兽", meta: "米尔西街道 · 3+2 BP", body: "前往帕赛尔农场调查损失，并在夜间战斗中阻止魔兽接近目标。", callout: "进入夜间事件前先完成准备。成功保护目标才能获得全部额外 BP。", check: "已以最高 BP 完成农场任务" }
      },
      {
        id: "requests",
        bp: 15,
        en: { nav: "Board requests", title: "Clear the first request batch", meta: "Rolent Region · 15 BP", body: "Complete Find the Shiny Rock, Mushroom Hunt, Soldier Training, Orbment Replacement, and Medical Necessities before visiting Mayor Klaus.", callout: "Deadline warning: finish every available request before entering the mayor's residence to continue the story.", check: "First request batch fully reported" },
        zh: { nav: "公告板委托", title: "清理第一批支线委托", meta: "洛连特地区 · 15 BP", body: "在拜访克劳斯市长前，完成寻找发光的石头、采蘑菇、士兵训练、导力器更换和采集药材。", callout: "截止提示：进入市长官邸推进主线前，请完成所有当前可接委托。", check: "第一批支线委托已全部报告" }
      },
      {
        id: "mine",
        bp: 4,
        en: { nav: "Malga Mine", title: "Answer Mayor Klaus's request", meta: "Malga Mine · 4 BP", body: "Travel north through Malga Trail, enter the mine, and handle the emergency below. Return to the mayor, then report at the guild.", callout: "The mine sequence closes part of the earlier free-roam window, so finish your available requests first.", check: "Malga Mine incident reported" },
        zh: { nav: "玛鲁加矿山", title: "完成市长的委托", meta: "玛鲁加矿山 · 4 BP", body: "沿玛鲁加山道向北进入矿山，处理地下发生的紧急事件，返回市长官邸后再向协会报告。", callout: "矿山事件会结束前一个自由行动阶段，请先完成可接支线。", check: "玛鲁加矿山事件已报告" }
      },
      {
        id: "media",
        bp: 10,
        en: { nav: "Liberl Media", title: "Guide the Liberl News team", meta: "Esmelas Tower · 10 BP batch", body: "Meet the reporters, solve the Lost Kitten request around Rolent, and escort the team to Esmelas Tower after preparing supplies.", callout: "Carry EP Charges and healing food. The guests must remain standing during escort battles.", check: "Media and related requests reported" },
        zh: { nav: "利贝尔通讯", title: "协助利贝尔通讯社记者", meta: "艾斯梅拉斯塔 · 10 BP 批次", body: "与记者会合，完成洛连特城内的寻找小猫任务，并在补充物资后护送记者前往艾斯梅拉斯塔。", callout: "准备 EP 回复道具和料理，护送战中不能让同行者倒下。", check: "通讯社与同期委托已报告" }
      },
      {
        id: "departure",
        bp: 11,
        en: { nav: "Departure", title: "Close the prologue and depart", meta: "Rolent · Up to 53 BP total", body: "Resolve the final incident, report every open request, accept Letter Carrier from Father Divine, then leave for Bose.", callout: "Final check: 53 BP is the prologue maximum in the original FC release.", check: "Departed Rolent with the prologue complete" },
        zh: { nav: "启程", title: "结束序章并启程", meta: "洛连特 · 最高累计 53 BP", body: "解决序章最后的事件，报告所有委托，从迪拜恩教区长处接取送信任务，随后前往柏斯。", callout: "最终确认：原版 FC 序章最高累计点数为 53 BP。", check: "已完成序章并离开洛连特" }
      }
    ],
    quests: [
      { id: "training", type: "main", missable: false, bp: 1, en: { title: "Training: Retrieval", client: "Scherazard", deadline: "Story", route: "Retrieve the two training items in Rolent Sewers.", bonus: "None" }, zh: { title: "实地研修·回收宝物", client: "雪拉扎德", deadline: "主线", route: "在洛连特地下水路回收两件训练物品。", bonus: "无" } },
      { id: "child-rescue", type: "main", missable: false, bp: 4, en: { title: "Child Rescue", client: "Rolent Guild", deadline: "Story", route: "Follow Malga Trail to Jade Tower and rescue both children.", bonus: "Charge in together with Joshua for +1 BP." }, zh: { title: "孩子们的营救", client: "洛连特协会", deadline: "主线", route: "沿玛鲁加山道前往翡翠之塔，救出两个孩子。", bonus: "与约修亚一起冲进去可得 +1 BP。" } },
      { id: "perzel-farm", type: "main", missable: false, bp: 3, en: { title: "Perzel Farm Monsters", client: "Rolent Guild", deadline: "Story", route: "Investigate Perzel Farm at night and eliminate the Crop Munchers.", bonus: "Sneak up successfully on the first attempt for +2 BP." }, zh: { title: "帕赛尔农场的魔兽", client: "洛连特协会", deadline: "主线", route: "夜间调查帕赛尔农场并消灭田地里的魔兽。", bonus: "第一次就从背后成功接近可得 +2 BP。" } },
      { id: "shiny-rock", type: "side", missable: true, bp: 2, en: { title: "Find the Shiny Rock", client: "Charles", deadline: "Short", route: "Search the Rolent Sewers below the southern grate and return the stone.", bonus: "None" }, zh: { title: "寻找发光的石头", client: "查尔斯", deadline: "短期", route: "从洛连特南侧格栅进入地下水路寻找石头并归还。", bonus: "无" } },
      { id: "milch-monster", type: "side", missable: true, bp: 3, en: { title: "Milch Main Road Monster", client: "Rolent Guild", deadline: "Short", route: "Defeat the Pine Plant in the western area of Milch Main Road.", bonus: "Use Fire arts and keep your distance before its final attack." }, zh: { title: "米尔西街道的通缉魔兽", client: "洛连特协会", deadline: "短期", route: "在米尔西街道西侧消灭菠萝怪。", bonus: "使用火属性魔法，并在其最后攻击前保持距离。" } },
      { id: "mushroom", type: "side", missable: true, bp: 3, en: { title: "Mushroom Hunt", client: "Orvid", deadline: "Short", route: "Find the mushroom in the third Malga Trail area.", bonus: "Be ready for the battle when you pick it." }, zh: { title: "采蘑菇", client: "奥维德", deadline: "短期", route: "在玛鲁加山道第三区域找到蘑菇。", bonus: "取得蘑菇时会立刻进入战斗。" } },
      { id: "soldier-training", type: "side", missable: true, bp: 5, en: { title: "Soldier Training", client: "CWO Ashton", deadline: "Short", route: "Travel to Verte Bridge and complete the mock battle.", bonus: "Win on the first attempt for +2 BP." }, zh: { title: "士兵训练", client: "阿斯顿队长", deadline: "短期", route: "前往威尔特桥并完成模拟战。", bonus: "第一次挑战就获胜可得 +2 BP。" } },
      { id: "orbment", type: "side", missable: true, bp: 4, en: { title: "Orbment Replacement", client: "Freddy", deadline: "Short", route: "Replace the sixth road lamp from Rolent on Milch Main Road.", bonus: "Let Estelle work and enter 544818 correctly for +1 BP." }, zh: { title: "更换导力灯", client: "弗莱迪", deadline: "短期", route: "更换米尔西街道上从洛连特数起第六盏路灯。", bonus: "让艾丝蒂尔维修并正确输入 544818 可得 +1 BP。" } },
      { id: "medical", type: "side", missable: true, bp: 3, en: { title: "Medical Necessities", client: "Father Divine", deadline: "Short", route: "Bring a Savory Pinion and Bear Claw to Rolent Chapel.", bonus: "Collect Bear Claw in Mistwald; monsters can drop Savory Pinion." }, zh: { title: "采集药材", client: "迪拜恩教区长", deadline: "短期", route: "向洛连特教会交付魔兽羽翼与熊刺草。", bonus: "熊刺草可在神秘森林采集，魔兽羽翼由部分魔兽掉落。" } },
      { id: "mayor-request", type: "main", missable: false, bp: 4, en: { title: "Mayor Klaus' Request", client: "Rolent Guild", deadline: "Story", route: "Collect the Septium Crystal at Malga Mine and rescue the miners.", bonus: "None" }, zh: { title: "市长的委托", client: "洛连特协会", deadline: "主线", route: "前往玛鲁加矿山取得七耀石结晶，并救出矿工。", bonus: "无" } },
      { id: "lost-kitten", type: "side", missable: true, bp: 2, en: { title: "Lost Kitten", client: "Ida", deadline: "Short", route: "Follow the clues around Rolent and search above the chapel.", bonus: "None" }, zh: { title: "寻找小猫", client: "伊妲", deadline: "短期", route: "根据洛连特城内线索搜寻，最后检查教会高处。", bonus: "无" } },
      { id: "elize-monster", type: "side", missable: false, bp: 4, en: { title: "Elize Highway Monster", client: "Rolent Guild", deadline: "Story", route: "Defeat the Rhinocider blocking the bridge on Elize Highway.", bonus: "Offensive arts work well against its heavy armor." }, zh: { title: "艾利兹街道的通缉魔兽", client: "洛连特协会", deadline: "主线", route: "消灭挡住艾利兹街道桥梁的犀牛怪。", bonus: "攻击魔法能有效对付它的高防御。" } },
      { id: "liberl-media", type: "main", missable: false, bp: 4, en: { title: "The Liberl Media", client: "Rolent Guild", deadline: "Story", route: "Escort Nial and Dorothy to the top of Esmelas Tower.", bonus: "Keep both guests standing during escort battles." }, zh: { title: "利贝尔通讯社", client: "洛连特协会", deadline: "主线", route: "护送奈尔与朵洛希前往艾斯梅拉斯塔塔顶。", bonus: "护送战中不能让两位记者倒下。" } },
      { id: "mayoral-theft", type: "main", missable: false, bp: 11, en: { title: "Mayoral Theft", client: "Rolent Guild", deadline: "Story", route: "Investigate the mayor's residence, follow the evidence, and recover the crystal.", bonus: "Answer all four questions correctly and listen before the final fight for +5 BP." }, zh: { title: "市长官邸的强盗事件", client: "洛连特协会", deadline: "主线", route: "调查市长官邸、追踪证据并取回结晶。", bonus: "正确回答四个问题，并在最终战前先听对方说话，可得 +5 BP。" } },
      { id: "letter", type: "side", missable: true, bp: 2, countsForPrologue: false, en: { title: "Letter Carrier", client: "Father Divine", deadline: "Long", route: "Accept the letter in Rolent, then deliver it to Father Holstein in Bose.", bonus: "Completion and its 2 BP carry into Chapter 1." }, zh: { title: "送亲笔信", client: "迪拜恩教区长", deadline: "长期", route: "在洛连特接取信件，抵达柏斯后交给霍尔斯教区长。", bonus: "任务与 2 BP 在第一章完成。" } }
    ],
    collectibles: [
      { id: "carnelia-1", en: { title: "Carnelia, Chapter 1", text: "Rhett, northwest apartments in Rolent, after the Bracer Exam." }, zh: { title: "《红耀石》第 1 卷", text: "游击士考试后，与洛连特西北公寓里的雷特交谈。" } },
      { id: "liberl-news-1", en: { title: "Liberl News, Issue 1", text: "Obtain it at Rinon's General Goods while running Cassius's errand." }, zh: { title: "《利贝尔通讯》第 1 号", text: "为卡西乌斯跑腿时，在里农杂货铺取得。" } },
      { id: "recipe-book", en: { title: "Recipe Book", text: "Rinon gives it to you alongside the early general-store visit." }, zh: { title: "料理手册", text: "前期拜访里农杂货铺时一并取得。" } },
      { id: "maple-cookie", en: { title: "Maple Cookie recipe", text: "Learn it during the early Rolent food and recipe tutorial." }, zh: { title: "枫糖曲奇食谱", text: "在洛连特前期的料理教学阶段习得。" } },
      { id: "potluck-shell", en: { title: "Potluck in a Shell recipe", text: "Open the recipe chest during the Esmelas Tower route." }, zh: { title: "大盘料理“贝壳杂烩”", text: "前往艾斯梅拉斯塔的路线中开启料理宝箱。" } },
      { id: "letter-item", en: { title: "Father Divine's letter", text: "Accept Letter Carrier before leaving Rolent; deliver it in Bose." }, zh: { title: "迪拜恩教区长的信", text: "离开洛连特前接取“送亲笔信”，之后在柏斯交付。" } }
    ]
  };

  const state = loadState();
  let currentFilter = "all";
  let toastTimer;

  function loadState() {
    const fallback = { locale: "en", theme: "light", checks: {} };
    try {
      return { ...fallback, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
    } catch {
      return fallback;
    }
  }

  function saveState(showToast = false) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    if (showToast) notify(copy[state.locale].saved);
  }

  function notify(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
  }

  function applyTranslations() {
    const t = copy[state.locale];
    document.documentElement.lang = state.locale === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach(node => {
      const value = t[node.dataset.i18n];
      if (typeof value === "string") node.textContent = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(node => {
      node.placeholder = t[node.dataset.i18nPlaceholder];
    });
    document.querySelectorAll("[data-locale-option]").forEach(node => {
      node.classList.toggle("is-active", node.dataset.localeOption === state.locale);
    });
  }

  function renderAlerts() {
    const t = copy[state.locale];
    const statusMap = { urgent: t.statusUrgent, missable: t.statusMissable, carryover: t.statusCarryover };
    document.getElementById("alertList").innerHTML = content.alerts.map(item => `
      <article class="alert-item">
        <span class="alert-icon" aria-hidden="true">${item.icon}</span>
        <div><h3>${item[state.locale].title}</h3><p>${item[state.locale].text}</p></div>
        <span class="status-tag">${statusMap[item.status]}</span>
      </article>
    `).join("");
  }

  function renderWalkthrough() {
    const t = copy[state.locale];
    document.getElementById("stepNav").innerHTML = content.steps.map((step, index) => `
      <a href="#step-${step.id}"><span>${String(index + 1).padStart(2, "0")}</span><span>${step[state.locale].nav}</span></a>
    `).join("");

    document.getElementById("walkthroughTimeline").innerHTML = content.steps.map((step, index) => {
      const checked = Boolean(state.checks[`step:${step.id}`]);
      return `
        <section class="timeline-step ${checked ? "is-complete" : ""}" id="step-${step.id}">
          <span class="step-number">${checked ? "✓" : String(index + 1).padStart(2, "0")}</span>
          <div class="step-body">
            <div class="step-heading"><h2>${step[state.locale].title}</h2><span class="step-meta">${step[state.locale].meta}</span></div>
            <p>${step[state.locale].body}</p>
            <div class="guide-callout ${step.id === "rolent-sweep" || step.id === "requests" ? "danger" : ""}">${step[state.locale].callout}</div>
            <div class="check-row">
              <input class="native-check" type="checkbox" id="check-step-${step.id}" data-check-key="step:${step.id}" ${checked ? "checked" : ""} />
              <label class="check-control" for="check-step-${step.id}" aria-hidden="true">✓</label>
              <label for="check-step-${step.id}">${step[state.locale].check}</label>
            </div>
          </div>
        </section>
      `;
    }).join("");
  }

  function requestMatches(quest) {
    if (currentFilter === "all") return true;
    if (currentFilter === "missable") return quest.missable;
    if (currentFilter === "incomplete") return !state.checks[`quest:${quest.id}`];
    return quest.type === currentFilter;
  }

  function renderQuests() {
    const t = copy[state.locale];
    const list = content.quests.filter(requestMatches);
    document.getElementById("requestList").innerHTML = list.map(quest => {
      const checked = Boolean(state.checks[`quest:${quest.id}`]);
      const q = quest[state.locale];
      return `
        <article class="request-card ${checked ? "is-complete" : ""}" data-type="${quest.type}">
          <button class="request-summary" type="button" aria-expanded="false">
            <span class="request-type">${quest.type === "main" ? "M" : "S"}</span>
            <span class="request-name"><strong>${q.title}</strong><small>${q.client}</small></span>
            <span class="deadline">${t.deadline}: ${q.deadline}</span>
            <span class="request-bp">${quest.bp} BP</span>
            <span class="request-status">${checked ? t.reported : quest.missable ? t.statusMissable : ""}</span>
            <span class="request-toggle" aria-hidden="true">+</span>
          </button>
          <div class="request-details">
            <div><strong>${t.route}</strong><p>${q.route}</p></div>
            <div><strong>${t.bonus}</strong><p>${q.bonus}</p></div>
            <div class="check-row">
              <input class="native-check" type="checkbox" id="check-quest-${quest.id}" data-check-key="quest:${quest.id}" ${checked ? "checked" : ""} />
              <label class="check-control" for="check-quest-${quest.id}" aria-hidden="true">✓</label>
              <label for="check-quest-${quest.id}">${checked ? t.undoReport : t.reportRequest}</label>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderCollectibles() {
    const t = copy[state.locale];
    document.getElementById("collectionGrid").innerHTML = content.collectibles.map((item, index) => {
      const checked = Boolean(state.checks[`collectible:${item.id}`]);
      return `
        <article class="collection-card ${checked ? "is-complete" : ""}">
          <span class="collection-index">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <h2>${item[state.locale].title}</h2>
            <p>${item[state.locale].text}</p>
            <div class="check-row">
              <input class="native-check" type="checkbox" id="check-collectible-${item.id}" data-check-key="collectible:${item.id}" ${checked ? "checked" : ""} />
              <label class="check-control" for="check-collectible-${item.id}" aria-hidden="true">✓</label>
              <label for="check-collectible-${item.id}">${t.collected}</label>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  function updateProgress() {
    const t = copy[state.locale];
    const stepDone = content.steps.filter(step => state.checks[`step:${step.id}`]).length;
    const questDone = content.quests.filter(quest => state.checks[`quest:${quest.id}`]).length;
    const collectibleDone = content.collectibles.filter(item => state.checks[`collectible:${item.id}`]).length;
    const total = content.steps.length + content.quests.length + content.collectibles.length;
    const completed = stepDone + questDone + collectibleDone;
    const percent = Math.round((completed / total) * 100);
    const earnedBp = content.quests.reduce((sum, quest) => sum + (state.checks[`quest:${quest.id}`] && quest.countsForPrologue !== false ? quest.bp : 0), 0);

    document.getElementById("progressPercent").textContent = percent;
    document.getElementById("progressSummary").textContent = t.fieldNotesComplete(completed, total);
    document.getElementById("dialCompleted").textContent = completed;
    document.getElementById("progressDial").style.background = `conic-gradient(var(--gold) ${percent * 3.6}deg, var(--paper-2) 0deg)`;
    document.getElementById("earnedBp").textContent = Math.min(53, earnedBp);
    document.getElementById("remainingBp").textContent = t.bpRemaining(Math.max(0, 53 - earnedBp));
    document.getElementById("bpTrack").style.width = `${Math.min(100, earnedBp / 53 * 100)}%`;
    document.getElementById("railProgress").textContent = `${stepDone} / ${content.steps.length}`;
    document.getElementById("questCount").textContent = `${questDone} / ${content.quests.length}`;
    document.getElementById("collectibleCount").textContent = `${collectibleDone} / ${content.collectibles.length}`;
  }

  function renderSearchResults(query) {
    const resultsBox = document.getElementById("searchResults");
    const clean = query.trim().toLocaleLowerCase(state.locale === "zh" ? "zh-CN" : "en-US");
    if (!clean) {
      resultsBox.hidden = true;
      resultsBox.innerHTML = "";
      return;
    }

    const entries = [
      ...content.steps.map(item => ({ href: `#walkthrough`, title: item[state.locale].title, text: item[state.locale].body })),
      ...content.quests.map(item => ({ href: "#quests", title: item[state.locale].title, text: `${item[state.locale].client} · ${item[state.locale].route}` })),
      ...content.collectibles.map(item => ({ href: "#collectibles", title: item[state.locale].title, text: item[state.locale].text }))
    ];
    const results = entries.filter(item => `${item.title} ${item.text}`.toLocaleLowerCase().includes(clean)).slice(0, 7);
    resultsBox.hidden = false;
    resultsBox.innerHTML = results.length
      ? results.map(item => `<a class="search-result" href="${item.href}"><strong>${item.title}</strong><span>${item.text}</span></a>`).join("")
      : `<div class="search-result"><strong>${copy[state.locale].noResults}</strong></div>`;
  }

  function renderAll() {
    applyTranslations();
    renderAlerts();
    renderWalkthrough();
    renderQuests();
    renderCollectibles();
    updateProgress();
    document.documentElement.dataset.theme = state.theme;
  }

  function route() {
    const requested = location.hash.slice(1).split("?")[0] || "home";
    const valid = ["home", "walkthrough", "quests", "collectibles"];
    const active = valid.includes(requested) ? requested : "home";
    document.querySelectorAll("[data-view]").forEach(view => { view.hidden = view.dataset.view !== active; });
    document.querySelectorAll("[data-route]").forEach(link => link.classList.toggle("is-active", link.dataset.route === active));
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  document.addEventListener("click", event => {
    const summary = event.target.closest(".request-summary");
    if (summary) {
      const card = summary.closest(".request-card");
      card.classList.toggle("is-open");
      summary.setAttribute("aria-expanded", card.classList.contains("is-open"));
      return;
    }

    const filter = event.target.closest("[data-filter]");
    if (filter) {
      currentFilter = filter.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach(button => button.classList.toggle("is-active", button === filter));
      renderQuests();
    }
  });

  document.addEventListener("change", event => {
    const checkbox = event.target.closest("[data-check-key]");
    if (!checkbox) return;
    state.checks[checkbox.dataset.checkKey] = checkbox.checked;
    saveState(true);
    renderWalkthrough();
    renderQuests();
    renderCollectibles();
    updateProgress();
  });

  document.getElementById("localeSwitch").addEventListener("click", () => {
    state.locale = state.locale === "en" ? "zh" : "en";
    saveState();
    renderAll();
    document.getElementById("siteSearch").value = "";
    renderSearchResults("");
  });

  document.getElementById("themeToggle").addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    saveState();
    document.documentElement.dataset.theme = state.theme;
  });

  document.getElementById("siteSearch").addEventListener("input", event => renderSearchResults(event.target.value));
  document.getElementById("searchForm").addEventListener("submit", event => event.preventDefault());

  document.addEventListener("keydown", event => {
    if (event.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName)) {
      event.preventDefault();
      location.hash = "home";
      setTimeout(() => document.getElementById("siteSearch").focus(), 0);
    }
  });

  window.addEventListener("hashchange", route);
  renderAll();
  route();
})();
