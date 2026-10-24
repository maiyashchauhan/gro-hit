// ==========================================================================
// GRO-HIT - Rural Empowerment Web Platform
// Global Application State, Data Layer & Shared Utilities
// ==========================================================================

const GroHit = {
  // --- Current User State ---
  state: {
    role: localStorage.getItem("role") || "villager",
    userId: localStorage.getItem("userUniqueID") || localStorage.getItem("userId") || "VID-7842",
    userName: localStorage.getItem("userName") || "Ramesh Kumar",
    userPhone: localStorage.getItem("userPhone") || "9876543210"
  },

  // --- Initialize Seed Data on First Load ---
  initDefaultData() {
    // 1. Village Issues / Grievance Store
    if (!localStorage.getItem("grohit_issues")) {
      const defaultIssues = [
        {
          id: "REP-10241",
          category: "water",
          categoryName: "💧 Water Supply",
          title: "Broken handpump near Primary School",
          description: "The main handpump handle is broken and leaking muddy water. 40+ families dependent on this point.",
          location: "Ward 3, Near Primary School",
          status: "pending",
          userId: "VID-7842",
          userName: "Ramesh Kumar",
          photo: "",
          createdAt: Date.now() - 86400000 * 2,
          contractor: "",
          budget: "",
          adminNotes: ""
        },
        {
          id: "REP-10198",
          category: "electricity",
          categoryName: "⚡ Electricity",
          title: "Transformer sparking on North Canal road",
          description: "Frequent voltage fluctuation and spark during evening hours. Risk of power outage in farm pump sets.",
          location: "North Canal Pole #14",
          status: "in_progress",
          userId: "VID-3921",
          userName: "Sunita Devi",
          photo: "",
          createdAt: Date.now() - 86400000 * 5,
          contractor: "Electricity Substation Team B",
          budget: "₹18,500",
          adminNotes: "Replacement transformer parts dispatched. Line repair in progress."
        },
        {
          id: "REP-10045",
          category: "road",
          categoryName: "🛣️ Road & Bridges",
          title: "Potholes filled on Main Mandi Link Road",
          description: "Heavy rain damaged the connecting link road making tractor transport hazardous.",
          location: "Mandi Link Road KM 2",
          status: "resolved",
          userId: "VID-7842",
          userName: "Ramesh Kumar",
          photo: "",
          createdAt: Date.now() - 86400000 * 9,
          contractor: "Gram Panchayat Nirman Samiti",
          budget: "₹45,000",
          adminNotes: "Gravel filling and bitumen patch work completed on 15 Aug. Inspected by Sarpanch."
        }
      ];
      localStorage.setItem("grohit_issues", JSON.stringify(defaultIssues));
    }

    // 2. Announcements Store
    if (!localStorage.getItem("grohit_announcements")) {
      const defaultAnnouncements = [
        {
          id: "ANN-501",
          title: "🩺 Free Health & Eye Checkup Camp",
          details: "Specialist doctors visiting Community Health Center this Saturday (9 AM - 4 PM). Free blood sugar, BP, and eye checkup with free medicines for elders.",
          authorRole: "health",
          authorName: "Dr. Anjali Verma (Primary Health Worker)",
          date: "2026-08-23",
          audio: "",
          video: "",
          priority: "high",
          createdAt: Date.now() - 3600000 * 12
        },
        {
          id: "ANN-502",
          title: "🌾 PM-Kisan E-KYC & Soil Testing Drive",
          details: "All farmers must complete biometric E-KYC at Panchayat Bhavan before end of month to receive the 18th installment. Free soil testing kits available.",
          authorRole: "admin",
          authorName: "Panchayat Sachiv & Gram Pradhan",
          date: "2026-08-25",
          audio: "",
          video: "",
          priority: "normal",
          createdAt: Date.now() - 86400000 * 1
        },
        {
          id: "ANN-503",
          title: "💧 Canal Water Schedule for Rabi Season",
          details: "Water release schedule: North canal open on Mon-Wed-Fri; South feeder open on Tue-Thu-Sat. Report unauthorized blockage to water guard.",
          authorRole: "admin",
          authorName: "Panchayat Irrigation Committee",
          date: "2026-08-20",
          audio: "",
          video: "",
          priority: "normal",
          createdAt: Date.now() - 86400000 * 3
        }
      ];
      localStorage.setItem("grohit_announcements", JSON.stringify(defaultAnnouncements));
    }

    // 3. Government Schemes Store
    if (!localStorage.getItem("grohit_schemes")) {
      const defaultSchemes = [
        {
          id: 1,
          title: "PM Kisan Samman Nidhi",
          hindiTitle: "पीएम किसान सम्मान निधि",
          category: "Farming",
          benefit: "₹6,000 yearly in 3 installments directly in bank account.",
          description: "Central income support scheme for all landholding farmer families across India.",
          link: "https://pmkisan.gov.in/"
        },
        {
          id: 2,
          title: "PM Fasal Bima Yojana (PMFBY)",
          hindiTitle: "प्रधानमंत्री फसल बीमा योजना",
          category: "Insurance",
          benefit: "Comprehensive crop loss coverage at low 1.5% - 2% premium.",
          description: "Financial support to farmers suffering crop loss/damage arising out of unforeseen weather events.",
          link: "https://pmfby.gov.in/"
        },
        {
          id: 3,
          title: "Ayushman Bharat (PM-JAY)",
          hindiTitle: "आयुष्मान भारत - जन आरोग्य योजना",
          category: "Health",
          benefit: "Free hospital treatment coverage up to ₹5 Lakh per family per year.",
          description: "Cashless secondary and tertiary healthcare coverage at all empanelled hospitals.",
          link: "https://pmjay.gov.in/"
        },
        {
          id: 4,
          title: "PM Awas Yojana - Gramin",
          hindiTitle: "प्रधानमंत्री ग्रामीण आवास योजना",
          category: "Housing",
          benefit: "Financial assistance of ₹1.20 Lakh to ₹1.30 Lakh for building pucca house.",
          description: "Pucca house with basic amenities to all rural families living in kutcha/dilapidated homes.",
          link: "https://pmayg.nic.in/"
        },
        {
          id: 5,
          title: "PM Ujjwala Yojana 2.0",
          hindiTitle: "प्रधानमंत्री उज्ज्वला योजना",
          category: "Energy",
          benefit: "Free LPG connection with first refill and stove for rural women.",
          description: "Clean cooking fuel access to rural women from economically weaker households.",
          link: "https://www.pmuy.gov.in/"
        },
        {
          id: 6,
          title: "Kisan Credit Card (KCC)",
          hindiTitle: "किसान क्रेडिट कार्ड",
          category: "Credit",
          benefit: "Subsidized farm credit up to ₹3 Lakh at effectively 4% interest rate.",
          description: "Affordable short-term loans for agriculture, fisheries, animal husbandry, and dairy farming.",
          link: "https://www.myscheme.gov.in/schemes/kcc"
        }
      ];
      localStorage.setItem("grohit_schemes", JSON.stringify(defaultSchemes));
    }

    // 4. Mandi Rates Store
    if (!localStorage.getItem("grohit_mandi")) {
      const defaultMandi = [
        { id: 1, commodity: "Wheat (गेहूं)", category: "Grains", price: 2350, unit: "Quintal", trend: "up", change: "+₹40" },
        { id: 2, commodity: "Mustard (सरसों)", category: "Oilseeds", price: 5400, unit: "Quintal", trend: "up", change: "+₹90" },
        { id: 3, commodity: "Paddy/Basmati (धान)", category: "Grains", price: 3600, unit: "Quintal", trend: "down", change: "-₹50" },
        { id: 4, commodity: "Tomato (टमाटर)", category: "Vegetables", price: 35, unit: "Kg", trend: "down", change: "-₹10" },
        { id: 5, commodity: "Potato (आलू)", category: "Vegetables", price: 24, unit: "Kg", trend: "stable", change: "0" },
        { id: 6, commodity: "Onion (प्याज)", category: "Vegetables", price: 32, unit: "Kg", trend: "up", change: "+₹4" },
        { id: 7, commodity: "Green Chili (हरी मिर्च)", category: "Vegetables", price: 50, unit: "Kg", trend: "stable", change: "0" },
        { id: 8, commodity: "Milk (दूध - Cow/Buffalo)", category: "Dairy", price: 58, unit: "Liter", trend: "stable", change: "0" }
      ];
      localStorage.setItem("grohit_mandi", JSON.stringify(defaultMandi));
    }

    // 5. Jobs Store
    if (!localStorage.getItem("grohit_jobs")) {
      const defaultJobs = [
        {
          id: 1,
          title: "Tractor & Harvester Driver",
          contractor: "Ravi Krishi Seva Kendra",
          location: "Ward 4 / Farm Block C",
          wage: "₹650 / day + Lunch",
          skills: "Tractor Driving, Basic maintenance",
          gender: "any",
          contact: "9876501234"
        },
        {
          id: 2,
          title: "Solar Water Pump Technician",
          contractor: "Surya Urja Samiti",
          location: "Village Substation",
          wage: "₹18,000 / month",
          skills: "Solar panel cleaning & wiring",
          gender: "any",
          contact: "9876505678"
        },
        {
          id: 3,
          title: "Anganwadi Kitchen & Care Assistant",
          contractor: "Gram Bal Vikas Samiti",
          location: "Primary Anganwadi Center",
          wage: "₹9,500 / month",
          skills: "Cooking, Childcare, Hygiene",
          gender: "F",
          contact: "9876509999"
        },
        {
          id: 4,
          title: "Organic Dairy Farm Helper",
          contractor: "Gau Seva Dairy",
          location: "East Village Dairy Shed",
          wage: "₹500 / day",
          skills: "Cattle care, Milking, Feed prep",
          gender: "any",
          contact: "9876511122"
        }
      ];
      localStorage.setItem("grohit_jobs", JSON.stringify(defaultJobs));
    }

    // 6. Registered Users Store
    if (!localStorage.getItem("users")) {
      const defaultUsers = [
        { name: "Ramesh Kumar", phone: "9876543210", id: "VID-7842", role: "villager", time: "18 Aug 2026, 10:30 AM" },
        { name: "Dr. Anjali Verma", phone: "9876500001", id: "VID-DOC01", role: "health", time: "18 Aug 2026, 09:15 AM" },
        { name: "Suresh Patel (Pradhan)", phone: "9876500002", id: "VID-ADM01", role: "admin", time: "18 Aug 2026, 08:45 AM" },
        { name: "Sunita Devi", phone: "9876533344", id: "VID-3921", role: "villager", time: "18 Aug 2026, 11:20 AM" }
      ];
      localStorage.setItem("users", JSON.stringify(defaultUsers));
    }
  },

  // --- Data Access Helpers ---
  getIssues() {
    try {
      return JSON.parse(localStorage.getItem("grohit_issues") || "[]");
    } catch {
      return [];
    }
  },

  saveIssue(issue) {
    const issues = this.getIssues();
    issues.unshift(issue);
    localStorage.setItem("grohit_issues", JSON.stringify(issues));
    return issue;
  },

  updateIssue(issueId, updates) {
    const issues = this.getIssues();
    const idx = issues.findIndex(i => i.id === issueId);
    if (idx !== -1) {
      issues[idx] = { ...issues[idx], ...updates, updatedAt: Date.now() };
      localStorage.setItem("grohit_issues", JSON.stringify(issues));
      return issues[idx];
    }
    return null;
  },

  deleteIssue(issueId) {
    let issues = this.getIssues();
    issues = issues.filter(i => i.id !== issueId);
    localStorage.setItem("grohit_issues", JSON.stringify(issues));
  },

  getAnnouncements() {
    try {
      return JSON.parse(localStorage.getItem("grohit_announcements") || "[]");
    } catch {
      return [];
    }
  },

  saveAnnouncement(ann) {
    const arr = this.getAnnouncements();
    arr.unshift(ann);
    localStorage.setItem("grohit_announcements", JSON.stringify(arr));
    return ann;
  },

  deleteAnnouncement(annId) {
    let arr = this.getAnnouncements();
    arr = arr.filter(a => a.id !== annId);
    localStorage.setItem("grohit_announcements", JSON.stringify(arr));
  },

  // --- Toast System ---
  showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(() => {
      toast.className = "toast";
    }, 3200);
  },

  // --- Speech Assistance for Rural Accessibility ---
  speakText(text) {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      // Try to find a Hindi or Indian English voice if available
      const voices = window.speechSynthesis.getVoices();
      const matchVoice = voices.find(v => v.lang.includes("hi") || v.lang.includes("en-IN"));
      if (matchVoice) utterance.voice = matchVoice;
      window.speechSynthesis.speak(utterance);
      this.showToast("🔊 Reading aloud...");
    } else {
      this.showToast("Voice playback not supported on this browser.");
    }
  },

  // --- Header & Role Badge Setup & Role-based UI visibility ---
  applyRole() {
    const role = this.state.role;
    const userId = this.state.userId;

    // Update User ID in header
    const showIdEl = document.getElementById("showId");
    if (showIdEl) {
      showIdEl.textContent = userId || "VID-7842";
    }

    // Render Role Badge
    const headerActions = document.querySelector(".header-actions");
    if (headerActions) {
      let roleBadge = document.getElementById("roleBadge");
      if (!roleBadge) {
        roleBadge = document.createElement("div");
        roleBadge.id = "roleBadge";
        headerActions.prepend(roleBadge);
      }

      const roleLabels = {
        villager: { text: "🟢 Villager / ग्रामीण", cls: "role-villager" },
        health:   { text: "🔵 Health Worker / स्वास्थ्य कर्मी", cls: "role-health" },
        admin:    { text: "🔴 Panchayat Admin / पंचायत", cls: "role-admin" },
        guest:    { text: "👤 Guest / अतिथि", cls: "role-guest" }
      };

      const info = roleLabels[role] || roleLabels.villager;
      roleBadge.textContent = info.text;
      roleBadge.className = "role-badge " + info.cls;
    }

    // Handle role modal switch
    const openLoginBtn = document.getElementById("openLoginBtn");
    if (openLoginBtn) {
      openLoginBtn.textContent = role === "guest" ? "Login" : "Switch Role (" + role + ")";
    }

    // Strictly hide Admin Navigation Buttons and Cards from Villagers & Non-Admins
    const adminElements = document.querySelectorAll('a[href="admin.html"], .admin-only, .nav-admin');
    adminElements.forEach(el => {
      if (role === "admin") {
        el.style.display = el.classList.contains("nav-btn") ? "flex" : (el.classList.contains("service-card") ? "flex" : "");
      } else {
        el.style.display = "none";
      }
    });
  },


  // --- Quick Role Switcher ---
  switchRole(newRole) {
    this.state.role = newRole;
    localStorage.setItem("role", newRole);
    if (newRole === "admin") {
      this.state.userId = "VID-ADM01";
      this.state.userName = "Suresh Patel (Pradhan)";
    } else if (newRole === "health") {
      this.state.userId = "VID-DOC01";
      this.state.userName = "Dr. Anjali Verma";
    } else {
      this.state.userId = localStorage.getItem("userUniqueID") || "VID-7842";
      this.state.userName = localStorage.getItem("userName") || "Ramesh Kumar";
    }
    localStorage.setItem("userId", this.state.userId);
    localStorage.setItem("userName", this.state.userName);
    this.applyRole();
    this.showToast("Switched active role to: " + newRole.toUpperCase());
    
    // Dispatch global event so page listeners can react
    window.dispatchEvent(new CustomEvent("grohit-role-changed", { detail: { role: newRole } }));
  },

  // --- Setup Shared Login / Switch Modal ---
  setupLoginModal() {
    let modal = document.getElementById("loginModal");
    if (!modal) {
      modal = document.createElement("dialog");
      modal.id = "loginModal";
      modal.innerHTML = `
        <form method="dialog" id="quickRoleForm" class="form" style="display:grid; gap:14px;">
          <h3 style="color:#1b5e20; font-size:1.3rem;">Switch Role / Login</h3>
          <p style="color:#4a5c4d; font-size:0.9rem;">Select your role to test access permissions:</p>
          
          <label style="display:grid; gap:6px; font-weight:bold;">
            Role
            <select name="role" id="modalRoleSelect" style="padding:10px; border-radius:8px; border:2px solid #d0ded0; font-size:1rem;">
              <option value="villager">🟢 Villager (Submit issues, view updates)</option>
              <option value="health">🔵 Health Worker (Post health announcements, clinics)</option>
              <option value="admin">🔴 Panchayat Admin (Resolve issues, manage platform)</option>
            </select>
          </label>
          
          <label style="display:grid; gap:6px; font-weight:bold;">
            Village ID or Phone
            <input type="text" name="id" id="modalUserIdInput" value="${this.state.userId}" style="padding:10px; border-radius:8px; border:2px solid #d0ded0;" />
          </label>
          
          <div class="row" style="justify-content:flex-end; margin-top:8px;">
            <button type="button" id="closeModalBtn" class="secondary" style="padding:8px 16px;">Cancel</button>
            <button type="submit" class="primary" style="padding:8px 18px;">Apply Role</button>
          </div>
        </form>
      `;
      document.body.appendChild(modal);
    }

    const openBtn = document.getElementById("openLoginBtn");
    if (openBtn) {
      openBtn.addEventListener("click", () => {
        const sel = document.getElementById("modalRoleSelect");
        if (sel) sel.value = this.state.role;
        modal.showModal();
      });
    }

    const closeBtn = document.getElementById("closeModalBtn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => modal.close());
    }

    const quickForm = document.getElementById("quickRoleForm");
    if (quickForm) {
      quickForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const chosenRole = document.getElementById("modalRoleSelect").value;
        const chosenId = document.getElementById("modalUserIdInput").value.trim() || "VID-" + Math.floor(1000 + Math.random()*9000);
        this.state.userId = chosenId;
        localStorage.setItem("userId", chosenId);
        localStorage.setItem("userUniqueID", chosenId);
        this.switchRole(chosenRole);
        modal.close();
      });
    }
  },

  // --- Voice Assistance Trigger on Homepage ---
  setupVoiceHelp() {
    const voiceBtn = document.getElementById("voiceAssistBtn");
    if (voiceBtn) {
      voiceBtn.addEventListener("click", () => {
        const text = "Namaste! Welcome to Gro-Hit Rural Support. You can report village problems, check announcements, view government schemes, find crop solutions, and consult health assistance. Press any button to begin.";
        this.speakText(text);
      });
    }
  },

  // --- Bootstrap on Page Load ---
  init() {
    this.initDefaultData();
    this.applyRole();
    this.setupLoginModal();
    this.setupVoiceHelp();
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    }
  }
};

// Auto-run when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  GroHit.init();
});

