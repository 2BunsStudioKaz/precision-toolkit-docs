# Instancer documentation starter

This is the editable source for the Precision Toolkit documentation website. It uses MkDocs and the Read the Docs theme. Instancer is the first documented tool; product details are intentionally placeholders until the supported Blender versions and final feature list are confirmed.

## Preview on your computer

1. Install Python if it is not already installed.
2. Open PowerShell in this folder.
3. Create a local Python environment with `python -m venv .venv`.
4. Install MkDocs into that environment with `.\.venv\Scripts\python.exe -m pip install mkdocs`.
5. Start the preview with `.\.venv\Scripts\python.exe -m mkdocs serve`.
6. Open the local address printed in the terminal (usually `http://127.0.0.1:8000/`).

Stop the preview by pressing `Ctrl+C` in the terminal. If `python` is not recognized by PowerShell, close and reopen PowerShell after installing Python, or use the full path to your Python executable to create `.venv`.

## Edit the documentation

The pages are Markdown files in `docs/`. Open a `.md` file in a text editor and change its text. The navigation and site settings are in `mkdocs.yml`.

## Before publishing

- Replace all `[To be confirmed]` notes with verified product information.
- Add genuine screenshots or short demonstrations under `docs/images/` and link them from the relevant pages.
- Choose a hosting service and connect `docs.2bunsstudio.com` only after reviewing the preview.

The GitHub repository and domain have not been connected by this starter project.
