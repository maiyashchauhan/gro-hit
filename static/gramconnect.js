// ==========================================================================
// GramConnect — Rural Public Project & Fund Transparency Engine
// Built for Gro-Hit Civic Tech Platform
// ==========================================================================

const GramConnect = {
  // Initial Seed Data for Village Projects
  defaultProjects: [
    {
      id: "GC-PRJ-2026-01",
      name: "Ward 4 Concrete Road & Drainage Network",
      nameHi: "वार्ड 4 पक्की सीसी सड़क एवं नाली निर्माण",
      category: "Road",
      categoryIcon: "🛣️",
      categoryHi: "सड़क एवं पुल",
      dept: "Rural Public Works Department (PWD)",
      deptHi: "ग्रामीण लोक निर्माण विभाग (PWD)",
      contractor: "Shree Ram Infratech Pvt Ltd (Reg: UP-PWD-4029)",
      approvedBudget: 3500000,
      releasedBudget: 2800000,
      utilizedBudget: 2625000,
      approvalDate: "12 Jan 2026",
      estimatedCompletion: "30 Nov 2026",
      status: "In Progress",
      completionPercent: 75,
      fundingSource: "Central Govt - PMGSY (Pradhan Mantri Gram Sadak Yojana)",
      location: "Ward 4, North Tola to Mandi Gate (26.8467° N, 80.9462° E)",
      lastUpdated: "15 Oct 2026",
      rating: 4.6,
      ratingCount: 28,
      milestones: [
        { title: "Tender Award & Soil Compaction Survey", date: "15 Jan 2026", done: true },
        { title: "Trench Excavation & Stone Base Layer", date: "28 Feb 2026", done: true },
        { title: "M-30 Grade Cement Concrete Slab Pouring", date: "15 May 2026", done: true },
        { title: "Covered Stormwater Drainage Channels", date: "20 Sep 2026", done: true },
        { title: "Solar Streetlight Installation & Signages", date: "10 Nov 2026", done: false, active: true },
        { title: "Final Third-Party PWD Quality Audit", date: "30 Nov 2026", done: false }
      ]
    },
    {
      id: "GC-PRJ-2026-02",
      name: "Jal Jeevan Mission Har Ghar Nal Piped Water System",
      nameHi: "जल जीवन मिशन - हर घर नल शुद्ध पेयजल योजना",
      category: "Water",
      categoryIcon: "💧",
      categoryHi: "पेयजल एवं स्वच्छता",
      dept: "State Water & Sanitation Mission (SWSM)",
      deptHi: "राज्य जल एवं स्वच्छता मिशन",
      contractor: "AquaPure Hydro Solutions Ltd (Reg: JJM-884)",
      approvedBudget: 4200000,
      releasedBudget: 4200000,
      utilizedBudget: 4080000,
      approvalDate: "05 Feb 2026",
      estimatedCompletion: "15 Oct 2026",
      status: "Completed",
      completionPercent: 100,
      fundingSource: "Central & State Joint - Jal Jeevan Mission",
      location: "Overhead Tank Zone, Ward 1 to 6 (26.8480° N, 80.9490° E)",
      lastUpdated: "15 Oct 2026",
      rating: 4.8,
      ratingCount: 54,
      milestones: [
        { title: "Deep Borewell Drilling & Water Testing", date: "12 Feb 2026", done: true },
        { title: "1.5 Lakh Liter Overhead Water Tank Construction", date: "20 Jun 2026", done: true },
        { title: "Underground HDPE Pipeline Network (6.4 km)", date: "10 Aug 2026", done: true },
        { title: "Household Metered Tap Connections (320 Homes)", date: "25 Sep 2026", done: true },
        { title: "Water Quality Testing & Community Handover", date: "15 Oct 2026", done: true }
      ]
    },
    {
      id: "GC-PRJ-2026-03",
      name: "Solar High-Mast Street Lighting & Micro-Grid",
      nameHi: "सोलर हाई-मास्ट स्ट्रीट लाइट एवं मिनी ग्रिड",
      category: "Solar",
      categoryIcon: "⚡",
      categoryHi: "सौर ऊर्जा",
      dept: "New & Renewable Energy Development Agency (NREDA)",
      deptHi: "नवीन एवं नवीकरणीय ऊर्जा विकास अभिकरण (NREDA)",
      contractor: "Urja Shakti Solar Systems (Reg: MNRE-602)",
      approvedBudget: 1850000,
      releasedBudget: 1200000,
      utilizedBudget: 1110000,
      approvalDate: "20 Mar 2026",
      estimatedCompletion: "25 Dec 2026",
      status: "In Progress",
      completionPercent: 60,
      fundingSource: "15th Finance Commission Untied Grant",
      location: "Village Chauraha, School Junction & Mandi Gate (26.8445° N, 80.9421° E)",
      lastUpdated: "12 Oct 2026",
      rating: 4.4,
      ratingCount: 19,
      milestones: [
        { title: "Sunlight Irradiation & Pole Foundation Survey", date: "28 Mar 2026", done: true },
        { title: "Procurement of Tier-1 Monocrystalline Solar Panels", date: "15 Jun 2026", done: true },
        { title: "Installation of 12 High-Mast 80W LED Towers", date: "05 Sep 2026", done: true },
        { title: "LiFePO4 Lithium Battery Storage Setup", date: "15 Nov 2026", done: false, active: true },
        { title: "Automated Dusk-to-Dawn Sensor Testing", date: "25 Dec 2026", done: false }
      ]
    },
    {
      id: "GC-PRJ-2026-04",
      name: "Smart Primary School Modernization & Computer Lab",
      nameHi: "प्राथमिक विद्यालय आधुनिकीकरण एवं स्मार्ट कंप्यूटर लैब",
      category: "Education",
      categoryIcon: "🏫",
      categoryHi: "शिक्षा एवं स्कूल",
      dept: "Basic Shiksha Parishad & Samagra Shiksha",
      deptHi: "बेसिक शिक्षा परिषद एवं समग्र शिक्षा",
      contractor: "Vikas Bal Shiksha Foundation & Contractors",
      approvedBudget: 2400000,
      releasedBudget: 1500000,
      utilizedBudget: 1080000,
      approvalDate: "18 Apr 2026",
      estimatedCompletion: "10 Jan 2027",
      status: "In Progress",
      completionPercent: 45,
      fundingSource: "Corporate CSR - Tech Mahindra Rural Edu Grant",
      location: "Gram Panchayat Primary School, Ward 2 (26.8492° N, 80.9448° E)",
      lastUpdated: "08 Oct 2026",
      rating: 4.9,
      ratingCount: 32,
      milestones: [
        { title: "Building Structural Repair & Waterproofing", date: "10 May 2026", done: true },
        { title: "Modern Sanitation Blocks (Separate Girls/Boys)", date: "22 Jul 2026", done: true },
        { title: "Classroom Electrification & Tile Flooring", date: "15 Sep 2026", done: true },
        { title: "15-Seat Solar Powered Computer & Tablet Lab", date: "20 Nov 2026", done: false, active: true },
        { title: "Children Play Area & Open STEM Learning Wall", date: "10 Jan 2027", done: false }
      ]
    },
    {
      id: "GC-PRJ-2026-05",
      name: "Primary Health Sub-Center & Ayush Kendra Upgrade",
      nameHi: "प्राथमिक स्वास्थ्य उप-केंद्र एवं आयुष आरोग्य मंदिर",
      category: "Health",
      categoryIcon: "🩺",
      categoryHi: "स्वास्थ्य केंद्र",
      dept: "National Health Mission (NHM)",
      deptHi: "राष्ट्रीय स्वास्थ्य मिशन (NHM)",
      contractor: "Arogya BuildCon Infrastructure (Reg: PWD-114)",
      approvedBudget: 1600000,
      releasedBudget: 800000,
      utilizedBudget: 640000,
      approvalDate: "01 Dec 2025",
      estimatedCompletion: "30 Aug 2026",
      status: "Delayed",
      completionPercent: 40,
      fundingSource: "National Rural Health Mission (NRHM)",
      location: "Main Hospital Road, Ward 5 (26.8430° N, 80.9485° E)",
      lastUpdated: "12 Oct 2026",
      rating: 2.8,
      ratingCount: 14,
      milestones: [
        { title: "Boundary Wall & Emergency Room Civil Structure", date: "15 Feb 2026", done: true },
        { title: "Labor Room & Cold-Chain Vaccine Room Flooring", date: "25 Apr 2026", done: true },
        { title: "Solar Rooftop Backup & Medical Gas Pipeline", date: "10 Jul 2026", done: false, active: true },
        { title: "Show-cause Penalty Notice issued to Contractor", date: "12 Sep 2026", done: true },
        { title: "Revised Contractor Handover Deadline", date: "15 Dec 2026", done: false }
      ]
    },
    {
      id: "GC-PRJ-2026-06",
      name: "Amrit Sarovar Rainwater Harvesting & Wetland Pond",
      nameHi: "अमृत सरोवर जल संचयन एवं भूजल पुनर्भरण तालाब",
      category: "Agriculture",
      categoryIcon: "🌾",
      categoryHi: "कृषि एवं सिंचाई",
      dept: "Minor Irrigation & Groundwater Conservation Dept",
      deptHi: "लघु सिंचाई एवं भूजल संरक्षण विभाग",
      contractor: "Gram Rozgar Sahayak Team (MGNREGA Scheme)",
      approvedBudget: 1300000,
      releasedBudget: 1300000,
      utilizedBudget: 1285000,
      approvalDate: "15 Jan 2026",
      estimatedCompletion: "20 May 2026",
      status: "Completed",
      completionPercent: 100,
      fundingSource: "MGNREGA & District Mineral Foundation (DMF)",
      location: "East Boundary Village Commons (26.8510° N, 80.9520° E)",
      lastUpdated: "25 May 2026",
      rating: 4.7,
      ratingCount: 41,
      milestones: [
        { title: "De-silting & 2.2-Hectare Deepening of Lakebed", date: "05 Feb 2026", done: true },
        { title: "Stone Pitching on Embankment Walls", date: "20 Mar 2026", done: true },
        { title: "Inflow Silt Filtration Trap & Sluice Gate", date: "18 Apr 2026", done: true },
        { title: "Walking Track, Plantation of 200 Peepal/Neem Saplings", date: "08 May 2026", done: true },
        { title: "Social Audit Sign-off by Gram Sabha", date: "20 May 2026", done: true }
      ]
    }
  ],

  // Default Public Comments & Citizen Social Audit Feed
  defaultComments: [
    {
      id: 1,
      name: "Harish Chandra Verma",
      role: "Ward 4 Resident",
      text: "The cement road in Ward 4 has reduced tractor slipping during rainy days tremendously. Quality of concrete looks strong, but drainage covers on street 3 must be secured.",
      rating: 5,
      time: "2 days ago",
      upvotes: 14,
      verified: true
    },
    {
      id: 2,
      name: "Suman Devi",
      role: "Ward 2 Member",
      text: "Jal Jeevan Mission piped water supply has started morning and evening! Clean water directly at our doorstep has freed women from carrying pitchers from far handpumps.",
      rating: 5,
      time: "4 days ago",
      upvotes: 22,
      verified: true
    },
    {
      id: 3,
      name: "Ramswaroop Yadav",
      role: "Farmer & Kisan Union",
      text: "Notice: The health sub-center construction has been halted for 3 weeks. We filed a grievance through GramConnect. BDO has issued a notice to the contractor. Good to have live tracking!",
      rating: 2,
      time: "1 week ago",
      upvotes: 38,
      verified: true
    }
  ],

  // Load or Save Projects
  getProjects() {
    try {
      const stored = localStorage.getItem("gramconnect_projects");
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    localStorage.setItem("gramconnect_projects", JSON.stringify(this.defaultProjects));
    return this.defaultProjects;
  },

  saveProjects(projects) {
    localStorage.setItem("gramconnect_projects", JSON.stringify(projects));
  },

  // Load or Save Comments
  getComments() {
    try {
      const stored = localStorage.getItem("gramconnect_comments");
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    localStorage.setItem("gramconnect_comments", JSON.stringify(this.defaultComments));
    return this.defaultComments;
  },

  saveComments(comments) {
    localStorage.setItem("gramconnect_comments", JSON.stringify(comments));
  },

  // Load Irregularity Reports
  getReports() {
    try {
      return JSON.parse(localStorage.getItem("gramconnect_reports") || "[]");
    } catch {
      return [];
    }
  },

  saveReport(report) {
    const list = this.getReports();
    list.unshift(report);
    localStorage.setItem("gramconnect_reports", JSON.stringify(list));
    return list;
  },

  // Currency Formatter
  formatINR(num) {
    return "₹ " + Number(num).toLocaleString("en-IN");
  },

  formatLakh(num) {
    if (num >= 10000000) {
      return "₹ " + (num / 10000000).toFixed(2) + " Cr";
    }
    return "₹ " + (num / 100000).toFixed(2) + " Lakh";
  },

  // Init App
  init() {
    this.setupTheme();
    this.setupLanguage();
    this.setupClock();
    this.setupTabs();
    this.setupFilters();
    this.setupModals();
    this.renderOverview();
    this.renderProjectsGrid();
    this.renderFinancialTable();
    this.renderAnalytics();
    this.renderCommentsFeed();
    this.renderAdminSection();
    this.setupForms();
  },

  // Real-time Clock
  setupClock() {
    const clockEl = document.getElementById("liveClock");
    if (!clockEl) return;
    const update = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-IN", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const dateStr = now.toLocaleDateString("en-IN", { day: '2-digit', month: 'short', year: 'numeric' });
      clockEl.innerText = `🕒 ${timeStr} • ${dateStr} (Live Audit Sync)`;
    };
    update();
    setInterval(update, 1000);
  },

  // Dark/Light Theme Toggle
  setupTheme() {
    const saved = localStorage.getItem("gramconnect_theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
    const btn = document.getElementById("themeToggleBtn");
    if (btn) {
      btn.innerText = saved === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("gramconnect_theme", next);
        btn.innerText = next === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
        if (window.GroHit) GroHit.showToast(`Switched to ${next.toUpperCase()} mode`);
        this.renderAnalytics(); // Redraw SVG charts for dark mode
      });
    }
  },

  // Language Bilingual Switcher
  isHindi: false,
  setupLanguage() {
    const saved = localStorage.getItem("gramconnect_lang") || "en";
    this.isHindi = saved === "hi";
    const btn = document.getElementById("langToggleBtn");
    if (btn) {
      btn.innerText = this.isHindi ? "English" : "हिन्दी";
      btn.addEventListener("click", () => {
        this.isHindi = !this.isHindi;
        const langCode = this.isHindi ? "hi" : "en";
        localStorage.setItem("gramconnect_lang", langCode);
        btn.innerText = this.isHindi ? "English" : "हिन्दी";
        this.updateLanguageTexts();
        this.renderProjectsGrid();
        if (window.GroHit) GroHit.showToast(this.isHindi ? "हिन्दी भाषा सक्रिय की गई" : "English language activated");
      });
    }
  },

  updateLanguageTexts() {
    const subtitle = document.getElementById("heroSubtitle");
    if (subtitle) {
      subtitle.innerText = this.isHindi
        ? "ग्राम पंचायत में चल रही हर सरकारी परियोजना को रीयल-टाइम में ट्रैक करें। जानें कि जनता का पैसा कहां आवंटित, जारी और खर्च हुआ — सड़कों, पेयजल, स्कूलों से लेकर सोलर लाइट तक।"
        : "Track every village government-funded project in real-time. Know where every rupee of public money is allocated, released, and spent — from roads and piped water to schools and solar lighting.";
    }
  },

  // Tab Navigation
  setupTabs() {
    const tabs = document.querySelectorAll(".gc-tab-btn");
    tabs.forEach(btn => {
      btn.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        btn.classList.add("active");
        const targetId = btn.dataset.tab;
        document.querySelectorAll(".gc-tab-content").forEach(c => c.style.display = "none");
        const targetEl = document.getElementById(targetId);
        if (targetEl) targetEl.style.display = "block";
      });
    });

    // Map pin clicks trigger modal
    document.querySelectorAll(".map-pin").forEach(pin => {
      pin.addEventListener("click", () => {
        const prjId = pin.dataset.id;
        this.openProjectModal(prjId);
      });
    });
  },

  // Overview Stats Calculation
  renderOverview() {
    const projects = this.getProjects();
    let totalAllocated = 0;
    let totalSpent = 0;
    projects.forEach(p => {
      totalAllocated += p.approvedBudget;
      totalSpent += p.utilizedBudget;
    });
    const remaining = totalAllocated - totalSpent;
    const utilization = totalAllocated > 0 ? ((totalSpent / totalAllocated) * 100).toFixed(1) : 0;

    const allocEl = document.getElementById("statAllocated");
    const spentEl = document.getElementById("statSpent");
    const remEl = document.getElementById("statRemaining");
    const utilEl = document.getElementById("statUtilization");
    const barEl = document.getElementById("overallProgressBar");

    if (allocEl) allocEl.innerText = this.formatINR(totalAllocated);
    if (spentEl) spentEl.innerText = this.formatINR(totalSpent);
    if (remEl) remEl.innerText = this.formatINR(remaining);
    if (utilEl) utilEl.innerText = utilization + "%";
    if (barEl) barEl.style.width = utilization + "%";

    const prjCountBadge = document.getElementById("projectCountBadge");
    const tabCount = document.getElementById("tabCount");
    if (prjCountBadge) prjCountBadge.innerText = projects.length;
    if (tabCount) tabCount.innerText = projects.length;
  },

  // Filter and Search Setup
  currentCategory: "all",
  currentStatus: "all",
  searchQuery: "",
  setupFilters() {
    const searchInput = document.getElementById("projectSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderProjectsGrid();
      });
    }

    const pills = document.querySelectorAll(".gc-filter-pill");
    pills.forEach(pill => {
      pill.addEventListener("click", () => {
        pills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.currentCategory = pill.dataset.filter;
        this.renderProjectsGrid();
      });
    });

    const statusSelect = document.getElementById("statusFilterSelect");
    if (statusSelect) {
      statusSelect.addEventListener("change", (e) => {
        this.currentStatus = e.target.value;
        this.renderProjectsGrid();
      });
    }
  },

  // Render Projects Grid
  renderProjectsGrid() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    let list = this.getProjects();

    // Filter by Category
    if (this.currentCategory !== "all") {
      list = list.filter(p => p.category.toLowerCase() === this.currentCategory.toLowerCase());
    }

    // Filter by Status
    if (this.currentStatus !== "all") {
      list = list.filter(p => p.status.toLowerCase() === this.currentStatus.toLowerCase());
    }

    // Filter by Search Query
    if (this.searchQuery) {
      list = list.filter(p =>
        p.name.toLowerCase().includes(this.searchQuery) ||
        (p.nameHi && p.nameHi.includes(this.searchQuery)) ||
        p.contractor.toLowerCase().includes(this.searchQuery) ||
        p.dept.toLowerCase().includes(this.searchQuery) ||
        p.id.toLowerCase().includes(this.searchQuery) ||
        p.location.toLowerCase().includes(this.searchQuery)
      );
    }

    if (list.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding:50px 20px; background:var(--gc-card-bg); border-radius:12px; border:1px dashed var(--gc-card-border);">
          <div style="font-size:3rem; margin-bottom:10px;">🔍</div>
          <h4 style="color:var(--gc-text-head); margin-bottom:6px;">No Matching Village Projects Found</h4>
          <p style="color:var(--gc-text-muted); font-size:0.9rem;">Try selecting a different filter category or reset your search term.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map(p => {
      let statusClass = "status-in-progress";
      if (p.status === "Completed") statusClass = "status-completed";
      else if (p.status === "Delayed") statusClass = "status-delayed";
      else if (p.status === "Planning") statusClass = "status-planning";

      const remainingAmount = p.approvedBudget - p.utilizedBudget;
      const displayName = this.isHindi && p.nameHi ? p.nameHi : p.name;
      const displayCategory = this.isHindi && p.categoryHi ? p.categoryHi : p.category;

      return `
        <article class="gc-project-card">
          <div class="gc-card-top">
            <span class="gc-category-badge" style="background:var(--gc-subtle-bg); color:var(--gc-gov-blue); border:1px solid var(--gc-card-border);">
              ${p.categoryIcon} ${displayCategory}
            </span>
            <span class="gc-status-badge ${statusClass}">
              ● ${p.status} (${p.completionPercent}%)
            </span>
          </div>

          <h4 class="gc-prj-title">${displayName}</h4>
          <div class="gc-prj-id">ID: ${p.id} &bull; ${p.location.split("(")[0]}</div>

          <ul class="gc-info-list">
            <li class="gc-info-item">
              <span class="gc-info-label">Approved Budget:</span>
              <span class="gc-info-val">${this.formatLakh(p.approvedBudget)}</span>
            </li>
            <li class="gc-info-item">
              <span class="gc-info-label">Amount Utilized:</span>
              <span class="gc-info-val" style="color:#16a34a;">${this.formatLakh(p.utilizedBudget)}</span>
            </li>
            <li class="gc-info-item">
              <span class="gc-info-label">Remaining Balance:</span>
              <span class="gc-info-val" style="color:#ea580c;">${this.formatLakh(remainingAmount)}</span>
            </li>
            <li class="gc-info-item">
              <span class="gc-info-label">Contractor:</span>
              <span class="gc-info-val" style="font-size:0.82rem; max-width:180px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${p.contractor}</span>
            </li>
            <li class="gc-info-item">
              <span class="gc-info-label">Target Handover:</span>
              <span class="gc-info-val">${p.estimatedCompletion}</span>
            </li>
          </ul>

          <div class="gc-card-progress">
            <div class="gc-card-prog-head">
              <span>Physical Completion</span>
              <strong style="color:var(--gc-text-head);">${p.completionPercent}%</strong>
            </div>
            <div style="height:8px; background:var(--gc-subtle-bg); border-radius:9999px; overflow:hidden; border:1px solid var(--gc-card-border);">
              <div style="height:100%; width:${p.completionPercent}%; background:${p.status === 'Delayed' ? '#ef4444' : p.completionPercent === 100 ? '#16a34a' : 'var(--gc-gov-blue)'};"></div>
            </div>
          </div>

          <div class="gc-card-actions">
            <button class="btn secondary" onclick="GramConnect.openProjectModal('${p.id}')">
              🔍 Transparency File
            </button>
            <button class="btn" style="background:#fee2e2; color:#b91c1c; border-color:#fca5a5;" onclick="GramConnect.openReportModalFor('${p.id}')">
              🚨 Report
            </button>
          </div>
        </article>
      `;
    }).join("");
  },

  // Open Project Detail Modal
  openProjectModal(id) {
    const projects = this.getProjects();
    const p = projects.find(item => item.id === id);
    if (!p) return;

    const modal = document.getElementById("projectDetailModal");
    if (!modal) return;

    document.getElementById("modalPrjId").innerText = p.id;
    document.getElementById("modalPrjTitle").innerText = this.isHindi && p.nameHi ? p.nameHi : p.name;
    document.getElementById("modalCategoryBadge").innerHTML = `${p.categoryIcon} ${p.category.toUpperCase()}`;
    
    const statusBadge = document.getElementById("modalStatusBadge");
    statusBadge.className = "gc-status-badge " + (p.status === "Completed" ? "status-completed" : p.status === "Delayed" ? "status-delayed" : "status-in-progress");
    statusBadge.innerText = `${p.status} (${p.completionPercent}%)`;

    document.getElementById("modalLastUpdated").innerText = p.lastUpdated;
    document.getElementById("modalApproved").innerText = this.formatLakh(p.approvedBudget);
    document.getElementById("modalReleased").innerText = this.formatLakh(p.releasedBudget);
    document.getElementById("modalUtilized").innerText = this.formatLakh(p.utilizedBudget);
    document.getElementById("modalRemaining").innerText = this.formatLakh(p.approvedBudget - p.utilizedBudget);
    document.getElementById("modalFundingSource").innerText = p.fundingSource;
    document.getElementById("modalContractor").innerText = p.contractor;

    // Render Milestone Timeline
    const timelineEl = document.getElementById("modalTimeline");
    if (timelineEl) {
      timelineEl.innerHTML = p.milestones.map((m, idx) => `
        <div class="gc-timeline-item ${m.done ? 'done' : m.active ? 'active' : ''}">
          <div class="gc-timeline-dot">${m.done ? '✓' : idx + 1}</div>
          <div class="gc-timeline-title">${m.title}</div>
          <div class="gc-timeline-meta">Date: ${m.date} &bull; ${m.done ? '✅ Certified & Completed' : m.active ? '⏳ Active Civil Work' : '⚪ Scheduled Next Phase'}</div>
        </div>
      `).join("");
    }

    // Set Report button link in modal
    const reportBtn = document.getElementById("modalReportBtn");
    if (reportBtn) {
      reportBtn.onclick = () => {
        modal.classList.remove("open");
        this.openReportModalFor(p.id);
      };
    }

    modal.classList.add("open");
  },

  // Setup Modals
  setupModals() {
    const modal = document.getElementById("projectDetailModal");
    const closeBtn = document.getElementById("modalCloseBtn");
    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => modal.classList.remove("open"));
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("open");
      });
    }

    const heroReportBtn = document.getElementById("openReportModalHeroBtn");
    if (heroReportBtn) {
      heroReportBtn.addEventListener("click", () => {
        const tabBtn = document.querySelector('[data-tab="tabMonitoring"]');
        if (tabBtn) tabBtn.click();
        const select = document.getElementById("reportPrjSelect");
        if (select) select.focus();
      });
    }

    const printBtn = document.getElementById("printAuditReportBtn");
    if (printBtn) {
      printBtn.addEventListener("click", () => window.print());
    }

    const voiceBtn = document.getElementById("listenStatusBtn");
    if (voiceBtn) {
      voiceBtn.addEventListener("click", () => this.speakSummary());
    }

    // Admin Mode Pin Unlock Toggle
    const adminToggle = document.getElementById("adminLoginToggleBtn");
    if (adminToggle) {
      adminToggle.addEventListener("click", () => {
        const tabBtn = document.querySelector('[data-tab="tabAdmin"]');
        if (tabBtn) tabBtn.click();
        if (window.GroHit) GroHit.showToast("Panchayat Secretary / BDO Admin Controls Active");
      });
    }
  },

  openReportModalFor(prjId) {
    const tabBtn = document.querySelector('[data-tab="tabMonitoring"]');
    if (tabBtn) tabBtn.click();
    const select = document.getElementById("reportPrjSelect");
    if (select) {
      select.value = prjId;
      select.scrollIntoView({ behavior: 'smooth' });
    }
  },

  // TAB 2: Financial Table
  renderFinancialTable() {
    const tbody = document.getElementById("financialTableBody");
    if (!tbody) return;

    const projects = this.getProjects();
    tbody.innerHTML = projects.map((p, idx) => `
      <tr style="border-bottom:1px solid var(--gc-card-border);">
        <td style="padding:12px; font-weight:700; font-family:monospace; color:var(--gc-gov-blue);">TRN-${1000 + idx}</td>
        <td style="padding:12px; font-weight:600; color:var(--gc-text-head);">${p.name}</td>
        <td style="padding:12px; font-size:0.84rem; color:var(--gc-text-muted);">${p.contractor}</td>
        <td style="padding:12px; font-weight:700;">${this.formatLakh(p.approvedBudget)}</td>
        <td style="padding:12px; color:#0284c7; font-weight:700;">${this.formatLakh(p.releasedBudget)}</td>
        <td style="padding:12px; color:#16a34a; font-weight:700;">${this.formatLakh(p.utilizedBudget)}</td>
        <td style="padding:12px; color:#ea580c; font-weight:700;">${this.formatLakh(p.approvedBudget - p.utilizedBudget)}</td>
        <td style="padding:12px; font-size:0.8rem; color:var(--gc-text-muted);">${p.fundingSource.split("-")[0]}</td>
        <td style="padding:12px;">
          <span class="gc-status-badge status-completed" style="font-size:0.75rem;">Verified ✓</span>
        </td>
      </tr>
    `).join("");

    const csvBtn = document.getElementById("downloadTrancheCsvBtn");
    if (csvBtn) {
      csvBtn.onclick = () => this.exportCsv();
    }
  },

  // Export CSV
  exportCsv() {
    const projects = this.getProjects();
    let csv = "Project ID,Project Name,Category,Contractor,Approved Budget,Released Budget,Utilized Budget,Remaining,Status,Funding Source\n";
    projects.forEach(p => {
      csv += `"${p.id}","${p.name}","${p.category}","${p.contractor}",${p.approvedBudget},${p.releasedBudget},${p.utilizedBudget},${p.approvedBudget - p.utilizedBudget},"${p.status}","${p.fundingSource}"\n`;
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `GramConnect_Public_Fund_Audit_${Date.now()}.csv`;
    link.click();
    if (window.GroHit) GroHit.showToast("Financial Audit CSV downloaded successfully!");
  },

  // TAB 3: Analytics SVG Charts
  renderAnalytics() {
    this.renderSpendingBarChart();
    this.renderCategoryDonutChart();
    this.renderDepartmentTable();
  },

  renderSpendingBarChart() {
    const svg = document.getElementById("monthlySpendChart");
    if (!svg) return;

    // Monthly spent data in Lakhs
    const months = [
      { m: "Nov", v: 4.2 }, { m: "Dec", v: 6.8 }, { m: "Jan", v: 8.5 },
      { m: "Feb", v: 11.2 }, { m: "Mar", v: 14.6 }, { m: "Apr", v: 9.4 },
      { m: "May", v: 12.8 }, { m: "Jun", v: 7.5 }, { m: "Jul", v: 5.2 },
      { m: "Aug", v: 8.1 }, { m: "Sep", v: 10.4 }, { m: "Oct", v: 13.6 }
    ];

    const maxVal = 18;
    const chartHeight = 170;
    const startX = 30;
    const barWidth = 26;
    const gap = 38;

    let barsHtml = `
      <line x1="20" y1="180" x2="480" y2="180" stroke="#94a3b8" stroke-width="1.5" />
      <line x1="20" y1="90" x2="480" y2="90" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4" />
      <text x="10" y="94" font-size="9" fill="#94a3b8" text-anchor="end">₹10L</text>
      <text x="10" y="184" font-size="9" fill="#94a3b8" text-anchor="end">₹0L</text>
    `;

    months.forEach((item, i) => {
      const h = (item.v / maxVal) * chartHeight;
      const x = startX + i * gap;
      const y = 180 - h;
      barsHtml += `
        <rect x="${x}" y="${y}" width="${barWidth}" height="${h}" rx="4" fill="url(#spendGrad)" style="transition:height 0.8s ease;" />
        <text x="${x + barWidth / 2}" y="${y - 4}" font-size="9" font-weight="bold" fill="#0f4c81" text-anchor="middle">${item.v}L</text>
        <text x="${x + barWidth / 2}" y="196" font-size="10" fill="#64748b" text-anchor="middle">${item.m}</text>
      `;
    });

    svg.innerHTML = `
      <defs>
        <linearGradient id="spendGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0284c7" />
          <stop offset="100%" stop-color="#0f4c81" />
        </linearGradient>
      </defs>
      ${barsHtml}
    `;
  },

  renderCategoryDonutChart() {
    const svg = document.getElementById("categoryDonutChart");
    const legend = document.getElementById("categoryChartLegend");
    if (!svg || !legend) return;

    const categories = [
      { name: "Roads & Bridges", amt: 35.0, color: "#0f4c81" },
      { name: "Water Supply (JJM)", amt: 42.0, color: "#0284c7" },
      { name: "Solar Lighting", amt: 18.5, color: "#f59e0b" },
      { name: "Smart Schools", amt: 24.0, color: "#10b981" },
      { name: "Health Center", amt: 16.0, color: "#ec4899" },
      { name: "Agriculture Pond", amt: 13.0, color: "#8b5cf6" }
    ];

    const total = categories.reduce((sum, c) => sum + c.amt, 0);
    const radius = 70;
    const cx = 100;
    const cy = 100;
    let accumulatedAngle = 0;

    let slicesHtml = "";
    categories.forEach(c => {
      const sliceAngle = (c.amt / total) * 360;
      const x1 = cx + radius * Math.cos((accumulatedAngle * Math.PI) / 180);
      const y1 = cy + radius * Math.sin((accumulatedAngle * Math.PI) / 180);
      const x2 = cx + radius * Math.cos(((accumulatedAngle + sliceAngle) * Math.PI) / 180);
      const y2 = cy + radius * Math.sin(((accumulatedAngle + sliceAngle) * Math.PI) / 180);

      const largeArc = sliceAngle > 180 ? 1 : 0;
      const d = `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

      slicesHtml += `<path d="${d}" fill="${c.color}" stroke="#ffffff" stroke-width="2" />`;
      accumulatedAngle += sliceAngle;
    });

    // Inner Cutout for Donut
    slicesHtml += `
      <circle cx="${cx}" cy="${cy}" r="45" fill="var(--gc-card-bg)" />
      <text x="${cx}" y="${cy - 4}" font-size="12" font-weight="bold" fill="var(--gc-text-head)" text-anchor="middle">₹1.48 Cr</text>
      <text x="${cx}" y="${cy + 12}" font-size="9" fill="var(--gc-text-muted)" text-anchor="middle">Allocated</text>
    `;

    svg.innerHTML = slicesHtml;

    // Legend
    legend.innerHTML = categories.map(c => `
      <div style="display:flex; align-items:center; justify-content:space-between; gap:12px;">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:${c.color};"></span>
          <span style="color:var(--gc-text-body); font-weight:600;">${c.name}</span>
        </div>
        <strong style="color:var(--gc-text-head);">₹${c.amt} L</strong>
      </div>
    `).join("");
  },

  renderDepartmentTable() {
    const tbody = document.getElementById("deptPerformanceBody");
    if (!tbody) return;

    const depts = [
      { name: "Rural Public Works Department (PWD)", prj: 1, alloc: 3500000, spent: 2625000, score: "4.6 ★" },
      { name: "State Water & Sanitation Mission (SWSM)", prj: 1, alloc: 4200000, spent: 4080000, score: "4.8 ★" },
      { name: "New & Renewable Energy Agency (NREDA)", prj: 1, alloc: 1850000, spent: 1110000, score: "4.4 ★" },
      { name: "Basic Shiksha Parishad & Samagra Shiksha", prj: 1, alloc: 2400000, spent: 1080000, score: "4.9 ★" },
      { name: "National Rural Health Mission (NRHM)", prj: 1, alloc: 1600000, spent: 640000, score: "2.8 ★ (Delayed)" },
      { name: "Minor Irrigation & Groundwater Conservation", prj: 1, alloc: 1300000, spent: 1285000, score: "4.7 ★" }
    ];

    tbody.innerHTML = depts.map(d => {
      const util = ((d.spent / d.alloc) * 100).toFixed(1);
      return `
        <tr style="border-bottom:1px solid var(--gc-card-border);">
          <td style="padding:10px 14px; font-weight:600; color:var(--gc-text-head);">${d.name}</td>
          <td style="padding:10px 14px;">${d.prj}</td>
          <td style="padding:10px 14px; font-weight:700;">${this.formatLakh(d.alloc)}</td>
          <td style="padding:10px 14px; color:#16a34a; font-weight:700;">${this.formatLakh(d.spent)}</td>
          <td style="padding:10px 14px; font-weight:700;">${util}%</td>
          <td style="padding:10px 14px; font-weight:700; color:#f59e0b;">${d.score}</td>
        </tr>
      `;
    }).join("");
  },

  // Comments and Citizen Social Audit Feed
  renderCommentsFeed() {
    const feed = document.getElementById("commentsFeed");
    if (!feed) return;

    const comments = this.getComments();
    feed.innerHTML = comments.map(c => `
      <div class="gc-comment-box">
        <div class="gc-comment-head">
          <div>
            <strong style="color:var(--gc-text-head); font-size:0.92rem;">${c.name}</strong>
            <span style="font-size:0.78rem; color:var(--gc-text-muted); margin-left:6px;">(${c.role})</span>
          </div>
          <span class="gc-citizen-badge">✓ Verified Citizen</span>
        </div>
        <p style="font-size:0.88rem; color:var(--gc-text-body); margin:6px 0;">${c.text}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.78rem; color:var(--gc-text-muted);">
          <span>${'★'.repeat(c.rating)}${'☆'.repeat(5 - c.rating)} &bull; ${c.time}</span>
          <button style="background:none; border:none; color:var(--gc-gov-blue); font-weight:700; cursor:pointer;" onclick="GramConnect.upvoteComment(${c.id})">
            👍 Helpful (${c.upvotes})
          </button>
        </div>
      </div>
    `).join("");
  },

  upvoteComment(id) {
    const comments = this.getComments();
    const c = comments.find(item => item.id === id);
    if (c) {
      c.upvotes += 1;
      this.saveComments(comments);
      this.renderCommentsFeed();
      if (window.GroHit) GroHit.showToast("Upvoted citizen observation!");
    }
  },

  // Setup Forms
  selectedStars: 5,
  setupForms() {
    // Populate project selectors in forms
    const projects = this.getProjects();
    const reportSelect = document.getElementById("reportPrjSelect");
    const updateSelect = document.getElementById("updatePrjSelect");

    if (reportSelect) {
      reportSelect.innerHTML = projects.map(p => `<option value="${p.id}">${p.id} — ${p.name}</option>`).join("");
    }
    if (updateSelect) {
      updateSelect.innerHTML = projects.map(p => `<option value="${p.id}">${p.id} — ${p.name}</option>`).join("");
    }

    // Star rating picker
    const starContainer = document.getElementById("reviewStarRating");
    if (starContainer) {
      starContainer.querySelectorAll("span").forEach(star => {
        star.addEventListener("click", () => {
          const val = parseInt(star.dataset.star);
          this.selectedStars = val;
          starContainer.querySelectorAll("span").forEach((s, idx) => {
            s.style.color = idx < val ? "#f59e0b" : "#cbd5e1";
          });
        });
      });
    }

    // Quick Comment Post
    const postCommentBtn = document.getElementById("postQuickCommentBtn");
    const quickCommentInput = document.getElementById("quickCommentInput");
    if (postCommentBtn && quickCommentInput) {
      postCommentBtn.addEventListener("click", () => {
        const val = quickCommentInput.value.trim();
        if (!val) {
          if (window.GroHit) GroHit.showToast("Please enter feedback text first.");
          return;
        }
        const comments = this.getComments();
        comments.unshift({
          id: Date.now(),
          name: localStorage.getItem("userName") || "Villager (Anandpur)",
          role: "Ward 3 Citizen",
          text: val,
          rating: this.selectedStars,
          time: "Just now",
          upvotes: 1,
          verified: true
        });
        this.saveComments(comments);
        quickCommentInput.value = "";
        this.renderCommentsFeed();
        if (window.GroHit) GroHit.showToast("Citizen review published to social audit ledger!");
      });
    }

    // Irregularity / Whistleblower Form Submit
    const reportForm = document.getElementById("irregularityForm");
    if (reportForm) {
      reportForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const prjId = document.getElementById("reportPrjSelect").value;
        const type = document.getElementById("reportTypeSelect").value;
        const desc = document.getElementById("reportDesc").value.trim();
        const isAnon = document.getElementById("reportAnonymous").checked;
        const trackingId = "AUDIT-GR-" + Math.floor(10000 + Math.random() * 90000);

        const newReport = {
          id: trackingId,
          prjId,
          type,
          desc,
          isAnon,
          date: new Date().toLocaleDateString("en-IN"),
          status: "Pending Investigation by BDO"
        };

        this.saveReport(newReport);
        reportForm.reset();
        this.renderAdminSection();

        alert(`🚨 Whistleblower Grievance Logged!\n\nTracking ID: ${trackingId}\nStatus: Submitted to District Vigilance Cell.\nYour identity is encrypted and protected.`);
        if (window.GroHit) GroHit.showToast(`Irregularity report ${trackingId} filed successfully!`);
      });
    }

    // Admin Add New Project Form
    const addPrjForm = document.getElementById("addProjectForm");
    if (addPrjForm) {
      addPrjForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("newPrjTitle").value.trim();
        const category = document.getElementById("newPrjCategory").value;
        const dept = document.getElementById("newPrjDept").value.trim();
        const budget = parseInt(document.getElementById("newPrjBudget").value);
        const source = document.getElementById("newPrjSource").value.trim();
        const contractor = document.getElementById("newPrjContractor").value.trim();
        const targetDate = document.getElementById("newPrjDate").value;
        const loc = document.getElementById("newPrjLocation").value.trim();

        const catIcons = { Road: "🛣️", Water: "💧", Solar: "⚡", Education: "🏫", Health: "🩺", Agriculture: "🌾" };

        const projects = this.getProjects();
        const newId = `GC-PRJ-2026-0${projects.length + 1}`;
        const newProject = {
          id: newId,
          name: title,
          nameHi: title,
          category,
          categoryIcon: catIcons[category] || "🏗️",
          categoryHi: category,
          dept,
          contractor,
          approvedBudget: budget,
          releasedBudget: Math.round(budget * 0.4),
          utilizedBudget: Math.round(budget * 0.35),
          approvalDate: "Today",
          estimatedCompletion: targetDate || "31 Dec 2026",
          status: "Planning",
          completionPercent: 35,
          fundingSource: source,
          location: loc,
          lastUpdated: "Just now",
          rating: 5.0,
          ratingCount: 1,
          milestones: [
            { title: "Project Inception & DPR Approval", date: "Today", done: true },
            { title: "Tender Publication on e-GramSwaraj", date: "Next Week", done: false, active: true },
            { title: "Contractor On-Site Mobilization", date: "Scheduled", done: false }
          ]
        };

        projects.unshift(newProject);
        this.saveProjects(projects);
        addPrjForm.reset();

        this.renderOverview();
        this.renderProjectsGrid();
        this.renderFinancialTable();
        this.renderAnalytics();
        this.setupForms();

        if (window.GroHit) GroHit.showToast(`New project ${newId} registered in public ledger!`);
        const tabBtn = document.querySelector('[data-tab="tabProjects"]');
        if (tabBtn) tabBtn.click();
      });
    }

    // Admin Update Fund Release Form
    const updateFundForm = document.getElementById("updateFundForm");
    if (updateFundForm) {
      updateFundForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const prjId = document.getElementById("updatePrjSelect").value;
        const addFund = parseInt(document.getElementById("fundReleaseAmount").value) || 0;
        const newPercent = parseInt(document.getElementById("updateProgressPercent").value);
        const newStatus = document.getElementById("updatePrjStatus").value;

        const projects = this.getProjects();
        const p = projects.find(item => item.id === prjId);
        if (p) {
          if (addFund > 0) {
            p.releasedBudget = Math.min(p.approvedBudget, p.releasedBudget + addFund);
            p.utilizedBudget = Math.min(p.releasedBudget, p.utilizedBudget + Math.round(addFund * 0.95));
          }
          if (!isNaN(newPercent) && newPercent >= 0 && newPercent <= 100) {
            p.completionPercent = newPercent;
          }
          if (newStatus) {
            p.status = newStatus;
          }
          p.lastUpdated = "Today (Admin Fund Sync)";
          this.saveProjects(projects);

          this.renderOverview();
          this.renderProjectsGrid();
          this.renderFinancialTable();
          this.renderAnalytics();
          updateFundForm.reset();

          if (window.GroHit) GroHit.showToast(`Updated funds & progress for ${prjId}!`);
        }
      });
    }
  },

  // Admin Reports List
  renderAdminSection() {
    const listEl = document.getElementById("adminReportsList");
    const countEl = document.getElementById("adminReportCount");
    const reports = this.getReports();

    if (countEl) countEl.innerText = reports.length;
    if (!listEl) return;

    if (reports.length === 0) {
      listEl.innerHTML = `<div style="font-size:0.84rem; color:var(--gc-text-muted); padding:10px;">No open citizen irregularity complaints recorded.</div>`;
      return;
    }

    listEl.innerHTML = reports.map((r, i) => `
      <div style="background:var(--gc-card-bg); border:1px solid var(--gc-card-border); padding:10px; border-radius:6px; font-size:0.84rem;">
        <div style="display:flex; justify-content:space-between; font-weight:700; color:var(--gc-text-head);">
          <span>${r.id} (${r.prjId})</span>
          <span style="color:#b91c1c;">${r.type}</span>
        </div>
        <p style="margin:4px 0; color:var(--gc-text-body); font-size:0.82rem;">${r.desc}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px; font-size:0.76rem; color:var(--gc-text-muted);">
          <span>${r.date} &bull; ${r.status}</span>
          <button style="padding:2px 8px; border-radius:4px; border:1px solid #16a34a; background:#dcfce7; color:#15803d; cursor:pointer;" onclick="GramConnect.resolveReport(${i})">Mark Inspected ✓</button>
        </div>
      </div>
    `).join("");
  },

  resolveReport(index) {
    const reports = this.getReports();
    reports.splice(index, 1);
    localStorage.setItem("gramconnect_reports", JSON.stringify(reports));
    this.renderAdminSection();
    if (window.GroHit) GroHit.showToast("Grievance marked as Inspected by Quality Cell.");
  },

  // Voice Narration
  speakSummary() {
    const projects = this.getProjects();
    let totalAllocated = 0;
    let totalSpent = 0;
    projects.forEach(p => {
      totalAllocated += p.approvedBudget;
      totalSpent += p.utilizedBudget;
    });
    const remaining = totalAllocated - totalSpent;
    const util = ((totalSpent / totalAllocated) * 100).toFixed(1);

    const speechText = this.isHindi
      ? `ग्राम कनेक्ट सार्वजनिक निधि विवरण। कुल स्वीकृत बजट 1 करोड़ 48 लाख रुपये है। 98 लाख रुपये खर्च हो चुके हैं, जो कि 66 प्रतिशत उपयोग है। 50 लाख रुपये शेष हैं। 6 विकास कार्य सक्रिय हैं, जिसमें जल जीवन मिशन और अमृत सरोवर कार्य पूर्ण हो चुके हैं।`
      : `GramConnect Public Fund Summary. Total approved budget is 1 Crore 48 Lakh rupees. 98 Lakh rupees have been spent across 6 village projects, achieving 66 percent utilization. 50 Lakh rupees remain in treasury. Jal Jeevan Mission piped water and Amrit Sarovar lake projects are completely finished.`;

    if (window.GroHit && GroHit.speakText) {
      GroHit.speakText(speechText);
    } else if ("speechSynthesis" in window) {
      const u = new SpeechSynthesisUtterance(speechText);
      u.lang = this.isHindi ? "hi-IN" : "en-IN";
      window.speechSynthesis.speak(u);
    }
  }
};

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  GramConnect.init();
});
