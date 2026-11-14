"""
Gro-Hit Rural Support Platform - Streamlit Cloud Entrypoint
============================================================
Launches the Gro-Hit Village Support & Panchayat Portal on Streamlit Cloud.
"""

import os
import re
import base64
import streamlit as st
import streamlit.components.v1 as components

# ─── Page Configuration ─────────────────────────────────────
st.set_page_config(
    page_title="Gro-Hit | Rural Support & Village Portal",
    page_icon="🌾",
    layout="wide",
    initial_sidebar_state="expanded"
)

# ─── Global Styling ─────────────────────────────────────────
st.markdown("""
<style>
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
    .block-container {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        max-width: 100%;
    }
    iframe {
        border: none;
        border-radius: 8px;
        box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    }
    .stSelectbox label {
        font-weight: 600;
        color: #1b5e20;
    }
</style>
""", unsafe_allow_html=True)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

PAGES = {
    "🏠 Home Portal": "index.html",
    "📜 Govt Schemes & DBT Checker": "schemes.html",
    "🌾 Crop Disease AI Diagnosis": "crop.html",
    "🧾 Mandi Live Market Rates": "mandi.html",
    "🏛️ GramConnect Transparency": "gramconnect.html",
    "🤝 Pardesh Setu Elder Care": "pardesh-setu.html",
    "📍 Report Village Grievance": "report.html",
    "📣 Official Bulletins": "announcements.html",
    "💼 Rural Employment Board": "jobs.html",
    "📻 Community Radio & Stories": "radio.html",
    "🤝 Mutual Aid & Micro-Donations": "donation.html",
    "💡 Village Suggestion Box": "suggestion.html",
    "🚨 Emergency SOS Dispatch": "sos.html",
    "🔒 Panchayat Admin Console": "admin.html",
    "📝 Create Village Digital ID": "create.html",
    "📴 Offline Cached Records": "offline.html",
}

def load_text_file(filename):
    paths = [
        os.path.join(BASE_DIR, filename),
        os.path.join(BASE_DIR, "static", filename)
    ]
    for p in paths:
        if os.path.exists(p):
            with open(p, "r", encoding="utf-8", errors="ignore") as f:
                return f.read()
    return ""

def get_base64_data_uri(filename):
    paths = [
        os.path.join(BASE_DIR, filename),
        os.path.join(BASE_DIR, "static", filename)
    ]
    for p in paths:
        if os.path.exists(p):
            ext = filename.split(".")[-1].lower()
            mime = "image/png" if ext == "png" else ("image/svg+xml" if ext == "svg" else "image/jpeg")
            with open(p, "rb") as f:
                b64 = base64.b64encode(f.read()).decode("utf-8")
            return f"data:{mime};base64,{b64}"
    return ""

def prepare_inlined_html(filename):
    html = load_text_file(filename)
    if not html:
        return f"<h3>Page '{filename}' not found</h3>"

    # Inline CSS
    css = load_text_file("styles.css")
    if css:
        html = re.sub(
            r'<link[^>]*rel=["\']stylesheet["\'][^>]*href=["\']styles\.css["\'][^>]*\/?>',
            f'<style>\n{css}\n</style>',
            html,
            flags=re.IGNORECASE
        )

    # Inline JavaScript modules
    for js in ["i18n.js", "app.js", "ai-assistant.js", "gramconnect.js", "pardesh-setu.js", "save-submission.js"]:
        js_code = load_text_file(js)
        if js_code:
            html = re.sub(
                rf'<script[^>]*src=["\']{re.escape(js)}["\'][^>]*><\/script>',
                f'<script>\n{js_code}\n</script>',
                html,
                flags=re.IGNORECASE
            )

    # Inline images (logos & themes)
    for img in ["logo.png.png", "logo.png", "background-theme.svg", "farmer-theme.svg"]:
        uri = get_base64_data_uri(img)
        if uri:
            html = html.replace(f'src="{img}"', f'src="{uri}"')
            html = html.replace(f"src='{img}'", f"src='{uri}'")

    return html

# ─── Sidebar Controls ───────────────────────────────────────
with st.sidebar:
    st.markdown("## 🌾 **GRO-HIT**")
    st.markdown("*Rural-First Village Support & Panchayat Portal*")
    st.markdown("---")

    selected_page_label = st.selectbox(
        "Select Portal / Service:",
        options=list(PAGES.keys()),
        index=0
    )
    selected_file = PAGES[selected_page_label]

    display_mode = st.radio(
        "Display Mode:",
        options=["⚡ Inlined Interactive View", "🌐 Static PWA Route"],
        index=0,
        help="Inlined bundles styles & scripts directly. Static PWA serves directly via Streamlit static routes."
    )

    st.markdown("---")
    st.markdown("### 🌐 **Supported Languages**")
    st.caption("23 Indian Scheduled Languages + English with native scripts and voice assistance.")

    st.markdown("### 📞 **Helplines**")
    st.caption("🌾 Kisan: `1800-180-1551`")
    st.caption("🚑 Ambulance: `108`")
    st.caption("🩺 Health: `104`")
    st.caption("🛡️ Cyber Crime: `1930`")

# ─── Main Portal Display ────────────────────────────────────
if display_mode == "🌐 Static PWA Route":
    static_url = f"app/static/{selected_file}"
    components.iframe(static_url, height=950, scrolling=True)
else:
    inlined_content = prepare_inlined_html(selected_file)
    components.html(inlined_content, height=950, scrolling=True)
