// ==========================================================================
// Pardesh Setu (Family Bridge / परदेस सेतु) Data & Interaction Engine
// Connecting Migrant Children in Cities with Village Parents
// ==========================================================================

const PardeshSetu = {
  // Current mode: "child" (Living in City) vs "parent" (Living in Village)
  currentPerspective: "child",
  isHindi: false,

  init() {
    this.setupTheme();
    this.setupLanguage();
    this.setupTabs();
    this.setupPerspective();
    this.setupModals();
    this.setupForms();
    this.setupAudioAndVoice();
    this.setupSuggestions();
  },

  // Dark/Light Theme Setup
  setupTheme() {
    const saved = localStorage.getItem("setu_theme") || localStorage.getItem("gramconnect_theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
    const btn = document.getElementById("setuThemeToggleBtn");
    if (btn) {
      btn.innerText = saved === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
      btn.addEventListener("click", () => {
        const cur = document.documentElement.getAttribute("data-theme");
        const next = cur === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("setu_theme", next);
        btn.innerText = next === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
        if (window.GroHit) GroHit.showToast(`Switched to ${next.toUpperCase()} mode`);
      });
    }
  },

  // Language Bilingual Setup
  setupLanguage() {
    const saved = localStorage.getItem("setu_lang") || "en";
    this.isHindi = saved === "hi";
    const btn = document.getElementById("setuLangToggleBtn");
    if (btn) {
      btn.innerText = this.isHindi ? "English" : "हिन्दी";
      btn.addEventListener("click", () => {
        this.isHindi = !this.isHindi;
        const code = this.isHindi ? "hi" : "en";
        localStorage.setItem("setu_lang", code);
        btn.innerText = this.isHindi ? "English" : "हिन्दी";
        this.updateTexts();
        if (window.GroHit) GroHit.showToast(this.isHindi ? "हिन्दी भाषा सक्रिय की गई" : "English activated");
      });
    }
  },

  updateTexts() {
    const sub = document.getElementById("setuHeroSubtitle");
    if (sub) {
      sub.innerText = this.isHindi
        ? "शहर और गांव की दूरी को मिटाएं। चाहे आप मुंबई, दुबई, बेंगलुरु या दिल्ली में नौकरी कर रहे हों, अपने बुजुर्ग माता-पिता के स्वास्थ्य, पेंशन, बिजली बिल और आपातकालीन सहायता का आसानी से ध्यान रखें।"
        : "Bridge the distance between cities and villages. Whether you are working in Mumbai, Dubai, Bengaluru, or Delhi, help your elderly parents access healthcare, government pensions, utility bill payments, and emergency support effortlessly.";
    }
  },

  // Tab Setup
  setupTabs() {
    const tabs = document.querySelectorAll(".setu-tab-btn");
    tabs.forEach(btn => {
      btn.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        btn.classList.add("active");
        const targetId = btn.dataset.tab;
        document.querySelectorAll(".setu-tab-content").forEach(c => c.style.display = "none");
        const el = document.getElementById(targetId);
        if (el) el.style.display = "block";
      });
    });

    // Inter-tab buttons
    const bookClinicBtn = document.getElementById("bookClinicQuickBtn");
    if (bookClinicBtn) {
      bookClinicBtn.onclick = () => {
        const tab = document.querySelector('[data-tab="tabHealthSupport"]');
        if (tab) tab.click();
      };
    }

    const allSchemesBtn = document.getElementById("viewAllSchemesTabBtn");
    if (allSchemesBtn) {
      allSchemesBtn.onclick = () => {
        const tab = document.querySelector('[data-tab="tabSchemeAssistant"]');
        if (tab) tab.click();
      };
    }
  },

  // Perspective Toggle: Child in City vs Parent in Village
  setupPerspective() {
    const childBtn = document.getElementById("perspectiveChildBtn");
    const parentBtn = document.getElementById("perspectiveParentBtn");

    if (childBtn && parentBtn) {
      childBtn.addEventListener("click", () => {
        this.currentPerspective = "child";
        childBtn.classList.add("active");
        parentBtn.classList.remove("active");
        if (window.GroHit) GroHit.showToast("Switched to Child Mode: Managing parent affairs from city");
      });

      parentBtn.addEventListener("click", () => {
        this.currentPerspective = "parent";
        parentBtn.classList.add("active");
        childBtn.classList.remove("active");
        if (window.GroHit) GroHit.showToast("Switched to Parent Mode: Receiving care from children");
      });
    }
  },

  // Modals & Calls
  setupModals() {
    // Video Call Modal
    const videoModal = document.getElementById("videoCallModal");
    const endCallBtn = document.getElementById("endCallBtn");
    const startCallHeroBtn = document.getElementById("startVideoCallHeroBtn");
    const directMotherBtn = document.getElementById("directCallMotherBtn");

    const openVideoCall = () => {
      if (videoModal) {
        videoModal.classList.add("open");
        if (window.GroHit) GroHit.showToast("Connecting secure family video bridge...");
      }
    };

    if (startCallHeroBtn) startCallHeroBtn.addEventListener("click", openVideoCall);
    if (directMotherBtn) directMotherBtn.addEventListener("click", openVideoCall);

    if (endCallBtn && videoModal) {
      endCallBtn.addEventListener("click", () => {
        videoModal.classList.remove("open");
        if (window.GroHit) GroHit.showToast("Video call ended (Duration: 04:12 min)");
      });
    }

    // Link Family Modal Button
    const linkBtn = document.getElementById("openLinkFamilyModalBtn");
    const linkTreeBtn = document.getElementById("addNewFamilyMemberBtn");
    const triggerLinkModal = () => {
      const name = prompt("Enter Family Member Name to Link (e.g. Daughter Sneha / Son Amit):", "Sneha Verma");
      if (name) {
        const relation = prompt("Relation (Son / Daughter / Grandchild):", "Daughter");
        const phone = prompt("Mobile Number for OTP Verification:", "9876543210");
        if (phone) {
          alert(`✅ Family Link Request Generated!\n\nMember: ${name} (${relation})\nFamily ID: FAM-SETU-4821\nAn encrypted OTP '4829' has been dispatched to ${phone}. Once approved by parents, member will join the Family Trust Tree.`);
          if (window.GroHit) GroHit.showToast(`Invite dispatched to ${name}!`);
        }
      }
    };

    if (linkBtn) linkBtn.addEventListener("click", triggerLinkModal);
    if (linkTreeBtn) linkTreeBtn.addEventListener("click", triggerLinkModal);

    // Emergency SOS Alert Button
    const sosBtn = document.getElementById("triggerEmergencySosBtn");
    if (sosBtn) {
      sosBtn.addEventListener("click", () => this.triggerFamilyEmergencyAlert());
    }
  },

  // Trigger Family Emergency Alert
  triggerFamilyEmergencyAlert() {
    const alertMsg = "🚨 URGENT FAMILY SOS ALERT!\n\nParent Shri Ramcharan Verma pressed Emergency SOS in Ward 3, Anandpur.\nGPS Coordinates: 26.8467° N, 80.9462° E\nBattery: 84% • Nearest PHC Doctor & 108 Ambulance notified.\nInstant notification sent to Rahul (Bengaluru) & Pooja (Lucknow).";
    alert(alertMsg);

    // Audio beep simulation
    if ("speechSynthesis" in window) {
      const u = new SpeechSynthesisUtterance("Emergency alert! Parent has requested assistance in village.");
      window.speechSynthesis.speak(u);
    }
    if (window.GroHit) GroHit.showToast("🚨 Emergency SOS dispatched to all family members & 108!");
  },

  // Forms Setup
  setupForms() {
    // 1. Proxy Scheme Form Submit
    const schemeForm = document.getElementById("proxySchemeForm");
    const appList = document.getElementById("proxyApplicationList");
    if (schemeForm && appList) {
      schemeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const schemeName = document.getElementById("proxySchemeSelect").value;
        const parentName = document.getElementById("proxyParentName").value;
        const appId = "SETU-APP-" + Math.floor(1000 + Math.random() * 9000);

        const card = document.createElement("div");
        card.style.cssText = "background:var(--setu-subtle-bg); border:1px solid var(--setu-card-border); padding:14px; border-radius:10px;";
        card.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <strong style="color:var(--setu-text-head); font-size:1rem;">${schemeName}</strong>
              <div style="font-size:0.82rem; color:var(--setu-text-muted); margin-top:2px;">App ID: <strong>${appId}</strong> &bull; Applied by Son for ${parentName}</div>
            </div>
            <span class="setu-status-tag" style="background:#e0f2fe; color:#0369a1;">Submitted Today ⏳</span>
          </div>
          <p style="font-size:0.85rem; color:var(--setu-text-body); margin:8px 0 0 0;">
            Aadhaar & Ration Card attached from Setu Vault. Forwarded to Gram Panchayat Secretary for inspection.
          </p>
        `;
        appList.prepend(card);
        schemeForm.reset();
        alert(`✅ Scheme Application Lodged Successfully!\n\nApplication ID: ${appId}\nScheme: ${schemeName}\nTarget: Block Development Office`);
        if (window.GroHit) GroHit.showToast(`Application ${appId} submitted successfully!`);
      });
    }

    // 2. Health Appointment Form
    const healthForm = document.getElementById("bookHealthForm");
    if (healthForm) {
      healthForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const type = document.getElementById("healthTypeSelect").value;
        const date = document.getElementById("healthDateInput").value || "Tomorrow";
        const time = document.getElementById("healthTimeSelect").value;
        const reason = document.getElementById("healthSymptomsInput").value;

        alert(`🩺 Medical Appointment Confirmed!\n\nService: ${type}\nDate & Time: ${date} at ${time}\nReason: ${reason}\nASHA Worker Sister Geeta will assist parents during the consultation.`);
        healthForm.reset();
        if (window.GroHit) GroHit.showToast("Appointment confirmed & synced with parent tablet!");
      });
    }

    // 3. Send Money Form
    const moneyForm = document.getElementById("sendMoneyForm");
    if (moneyForm) {
      moneyForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const amt = document.getElementById("transferAmountInput").value;
        const note = document.getElementById("transferNoteInput").value || "Monthly household support";

        alert(`💸 UPI Transfer Successful!\n\nAmount: ₹ ${Number(amt).toLocaleString('en-IN')}\nTo: Shri Ramcharan Verma (Bank of Baroda)\nNote: ${note}\nRef: UPI-${Date.now().toString().slice(-8)}\nZero fees deducted.`);
        moneyForm.reset();
        if (window.GroHit) GroHit.showToast(`₹ ${amt} transferred successfully via UPI!`);
      });
    }

    // 4. Add Medicine Reminder
    const addMedBtn = document.getElementById("addNewMedicineBtn");
    const medList = document.getElementById("medicineScheduleList");
    if (addMedBtn && medList) {
      addMedBtn.addEventListener("click", () => {
        const name = prompt("Enter Medicine Name (e.g. Pantoprazole 40mg):", "Pantoprazole 40mg");
        if (name) {
          const timing = prompt("Timing (e.g. Morning Empty Stomach • 7:00 AM):", "Morning Empty Stomach • 7:00 AM");
          const div = document.createElement("div");
          div.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:10px 14px; background:var(--setu-subtle-bg); border-radius:8px; border:1px solid var(--setu-card-border);";
          div.innerHTML = `
            <div>
              <strong>${name}</strong>
              <div style="font-size:0.8rem; color:var(--setu-text-muted);">${timing}</div>
            </div>
            <span class="setu-status-tag" style="background:#ffedd5; color:#c2410c;">Alarm Active ⏰</span>
          `;
          medList.appendChild(div);
          if (window.GroHit) GroHit.showToast(`Alarm set for ${name}`);
        }
      });
    }
  },

  // Pay Village Utility Bills
  payBill(type, amount) {
    if (confirm(`Confirm payment of ₹ ${amount} for ${type} for parents in Village Anandpur?`)) {
      alert(`⚡ Bill Payment Successful!\n\nService: ${type}\nAmount Paid: ₹ ${amount}\nReceipt Number: BILL-UP-${Date.now().toString().slice(-6)}\nParent electricity meter updated instantly.`);
      if (window.GroHit) GroHit.showToast(`Paid ₹ ${amount} for ${type}!`);
    }
  },

  // Call 108 Ambulance Dispatch
  callAmbulance() {
    if (confirm("Confirm dispatching 108 Emergency Ambulance to parents' address: Ward 3, Anandpur?")) {
      alert("🚨 108 AMBULANCE DISPATCHED!\n\nDestination: Ward 3, House of Shri Ramcharan Verma.\nDriver: Rameshwar (Phone: 9876500108)\nETA: 14 Minutes.\nVillage Pradhan & Doctor informed.");
      if (window.GroHit) GroHit.showToast("Ambulance dispatched to parents' residence!");
    }
  },

  // Audio and Voice Features
  setupAudioAndVoice() {
    const aiBtn = document.getElementById("aiSetuVoiceAssistBtn");
    if (aiBtn) {
      aiBtn.addEventListener("click", () => {
        const speech = this.isHindi
          ? "नमस्ते! मैं परदेस सेतु मित्र हूँ। आपके माता-पिता का स्वास्थ्य सामान्य है। आज शाम 8 बजे बीपी की दवा का समय है। अक्टूबर की वृद्धावस्था पेंशन 1000 रुपये खाते में जमा हो चुकी है। कोई भी सेवा शुरू करने के लिए मुझे बताएं।"
          : "Hello! I am your Pardesh Setu Family Assistant. Your parents in Anandpur are doing well. Father's next blood pressure medicine is at 8:00 PM tonight. October Old Age Pension of 1,000 rupees was credited to Mother's Jan Dhan account. How may I assist you today?";

        if (window.GroHit && GroHit.speakText) {
          GroHit.speakText(speech);
        } else if ("speechSynthesis" in window) {
          const u = new SpeechSynthesisUtterance(speech);
          u.lang = this.isHindi ? "hi-IN" : "en-IN";
          window.speechSynthesis.speak(u);
        }
        if (window.GroHit) GroHit.showToast("Speaking Setu family status update...");
      });
    }

    const voiceNoteBtn = document.getElementById("quickRecordVoiceNoteBtn");
    const blessingBtn = document.getElementById("sendAudioBlessingBtn");
    const recordVoice = () => {
      const msg = prompt("Record voice message for parents (type or speak text):", "Pranam Pitaji, how is your knee pain today? I have dispatched your medicines from Bengaluru.");
      if (msg) {
        alert(`🎙️ Voice Note Dispatched to Village Home!\n\nMessage: "${msg}"\nDelivered to mother's smart device with audio playback.`);
        if (window.GroHit) GroHit.showToast("Voice message sent to parents in village!");
      }
    };

    if (voiceNoteBtn) voiceNoteBtn.addEventListener("click", recordVoice);
    if (blessingBtn) blessingBtn.addEventListener("click", recordVoice);
  },

  // Village Suggestions on Behalf of Parents
  setupSuggestions() {
    const openBtn = document.getElementById("openSetuSuggestModalBtn");
    const modal = document.getElementById("setuSuggestModal");
    const closeBtn = document.getElementById("closeSetuSuggestModalBtn");
    const cancelBtn = document.getElementById("cancelSetuSuggestModalBtn");
    const form = document.getElementById("setuSuggestForm");
    const preview = document.getElementById("setuRecentSugPreview");

    // Load recent suggestion for preview if available
    const refreshPreview = () => {
      try {
        const stored = JSON.parse(localStorage.getItem("grohit_suggestions") || "[]");
        if (stored.length > 0 && preview) {
          preview.textContent = `"${stored[0].text}"`;
        }
      } catch (e) {}
    };
    refreshPreview();

    if (openBtn && modal) {
      openBtn.addEventListener("click", () => {
        modal.style.display = "flex";
      });
    }

    const closeModal = () => {
      if (modal) modal.style.display = "none";
    };

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (cancelBtn) cancelBtn.addEventListener("click", closeModal);

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const category = document.getElementById("setuSugCategory").value;
        const ward = document.getElementById("setuSugWard").value;
        const text = document.getElementById("setuSugText").value.trim();

        if (!text) return;

        const defaultSuggestions = [
          {
            id: 1,
            name: "Virender Singh (Youth Club)",
            category: "🏫 School & Youth Sports",
            text: "We should level the open ground behind the Panchayat Bhavan for volleyball and running practice for village youth preparing for army recruitment.",
            date: "16 Aug 2026"
          },
          {
            id: 2,
            name: "Sunita Sharma",
            category: "💧 Drinking Water & Pond",
            text: "Installing tree guards around the village water pond will protect the newly planted neem and banyan saplings from grazing cattle.",
            date: "12 Aug 2026"
          }
        ];

        let suggestions = [];
        try {
          suggestions = JSON.parse(localStorage.getItem("grohit_suggestions") || JSON.stringify(defaultSuggestions));
        } catch {
          suggestions = defaultSuggestions;
        }

        const newSug = {
          id: Date.now(),
          name: "Rahul Verma (Son of Ramcharan Verma - Pardesh Setu)",
          category: category,
          text: `[${ward}] ${text}`,
          date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
        };

        suggestions.unshift(newSug);
        localStorage.setItem("grohit_suggestions", JSON.stringify(suggestions));

        refreshPreview();
        closeModal();
        form.reset();

        if (window.GroHit && GroHit.showToast) {
          GroHit.showToast("💡 Suggestion submitted to Panchayat on behalf of parents!");
        } else {
          alert("💡 Suggestion registered successfully with Gram Panchayat!");
        }
      });
    }
  }
};

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  PardeshSetu.init();
});
