window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});(() => {
  const installStyle = () => {
    if (document.querySelector('#pakeplus-chatgpt-input-fix')) {
      return;
    }

    const style = document.createElement('style');
    style.id = 'pakeplus-chatgpt-input-fix';
    style.textContent = `
      #prompt-textarea,
      #prompt-textarea *,
      textarea,
      [contenteditable="true"],
      [contenteditable="true"] * {
        color: var(--text-primary, CanvasText) !important;
        -webkit-text-fill-color: currentColor !important;
        caret-color: currentColor !important;
        opacity: 1 !important;
      }
    `;

    (document.head || document.documentElement).appendChild(style);
  };

  installStyle();
  document.addEventListener('DOMContentLoaded', installStyle, { once: true });
})();
