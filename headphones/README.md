# Headphones – ALX HTML & CSS Project

A responsive landing page implemented **from scratch** (no frameworks) that reproduces the Figma design of the *Headphones* website.

## 🎯 Objectives
- Solid HTML5 structure and accessible semantics
- Modern, clean CSS with variables and resets
- Fully responsive layout (desktop → mobile at **480px**)
- States: links hover/active `#FF6565`, buttons hover/active `opacity: 0.9`
- Content max width: **1000px** and centered
- No external CSS libraries; Vanilla JS is used **only** in Task 8 (hamburger menu)

## 📁 Structure
```
alx_html_css/
└── headphones/
    ├── images/
    │   └── hero-bg.png
    ├── icons/              # (inline SVG is used; kept for extensibility)
    ├── 0-index.html        # Header & Hero
    ├── 0-styles.css
    ├── 1-index.html        # + What we do
    ├── 1-styles.css
    ├── 2-index.html        # + Our results
    ├── 2-styles.css
    ├── 3-index.html        # + Contact form
    ├── 3-styles.css
    ├── 4-index.html        # + Footer
    ├── 4-styles.css
    ├── 6-index.html        # Replace result pentagons with pure CSS
    ├── 6-styles.css
    ├── 7-index.html        # Fun animations
    ├── 7-styles.css
    ├── 8-index.html        # Hamburger menu (≤480px)
    ├── 8-styles.css
    └── 8-script.js
```

> **Note:** The original design uses a custom icon font, but for portability and zero-dependency, this implementation uses **inline SVG icons** styled with `currentColor`.

## 🧪 How to run
Just open any of the `*-index.html` files in a browser. Each file corresponds to the state required by the task number.

- `0-index.html` → header + hero
- `1-index.html` → + "What we do…"
- `2-index.html` → + "Our results"
- `3-index.html` → + contact form
- `4-index.html` → + footer
- `6-index.html` → results pentagons drawn with pure CSS
- `7-index.html` → animations added
- `8-index.html` → hamburger menu (≤480px) using vanilla JS

## ♿ Accessibility
- Landmarks: `header`, `nav`, `main`, `section`, `footer`
- Meaningful headings order (h1 → h2 → h3)
- Visible focus styles, adequate contrast, and labeled form inputs
- Buttons and nav toggles are keyboard operable

## 🙏 Credits
Design by **Nicolas Philippot** (UI/UX).  
Project spec by **ALX**.  
Implementation by **Mohamed Gaber (student)**.

---

Happy building! 🚀
