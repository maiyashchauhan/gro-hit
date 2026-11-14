"""
Gro-Hit Streamlit Application Entrypoint
========================================
Delegates directly to streamlit_app.py
"""
import runpy

if __name__ == "__main__":
    runpy.run_module("streamlit_app", run_name="__main__")

