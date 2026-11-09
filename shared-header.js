
(function () {
  "use strict";

  // Shared header for all La Experiencia Dixeebe pages.
  // This replaces only the header, not the page content.

  const css = document.createElement("style");

  css.textContent = `
    .dixeebe-header,
    .dixeebe-header * {
      box-sizing: border-box;
    }

    .dixeebe-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      padding: 12px 30px;
      background: #091a32;
      border-bottom: 1px solid #a77d4555;
      position: relative;
      z-index: 100;
    }

    .dixeebe-header-left {
      display: flex;
      align-items: center;
      gap: 18px;
      min-width: 0;
    }

    .dixeebe-logo-link {
      display: block;
      flex-shrink: 0;
      line-height: 0;
    }

    .dixeebe-logo {
      display: block;
      width: 95px;
      height: 110px;
      object-fit: contain;
    }

    .dixeebe-header-text {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }

    .dixeebe-title {
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(17px, 2vw, 29px);
      font-weight: normal;
      color: #e1ae62;
      text-decoration: none;
      letter-spacing: 0.04em;
      line-height: 1.2;
    }

    .dixeebe-subtitle {
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(15px, 1.7vw, 23px);
      color: #ffffff;
      line-height: 1.25;
    }

    .dixeebe-date {
      font-family: Arial, sans-serif;
      font-size: clamp(13px, 1.3vw, 18px);
      color: #e1ae62;
      line-height: 1.3;
    }

    .dixeebe-nav {
      position: relative;
      flex-shrink: 0;
    }

    .dixeebe-nav summary {
      display: block;
      list-style: none;
      cursor: pointer;
      border: 1px solid #b78a51;
      border-radius: 5px;
      padding: 11px 20px;
      color: #e1ae62;
      background: #091a32;
      font: bold 14px Arial, sans-serif;
      white-space: nowrap;
    }

    .dixeebe-nav summary::-webkit-details-marker {
      display: none;
    }

    .dixeebe-nav summary::after {
      content: " ▾";
    }

    .dixeebe-menu {
      position: absolute;
      right: 0;
      top: calc(100% + 7px);
      width: 235px;
      max-width: calc(100vw - 20px);
      background: #102541;
      border: 1px solid #b78a51;
      border-radius: 6px;
      padding: 6px;
      box-shadow: 0 16px 40px #0009;
      z-index: 200;
    }

    .dixeebe-menu a {
      display: block;
      padding: 12px;
      color: #f4e9d8;
      text-decoration: none;
      font: 15px Arial, sans-serif;
      border-radius: 4px;
    }

    .dixeebe-menu a:hover,
    .dixeebe-menu a:focus {
      background: #29405c;
    }

    @media (max-width: 650px) {
      .dixeebe-header {
        padding: 10px;
        gap: 8px;
      }

      .dixeebe-header-left {
        gap: 8px;
      }

      .dixeebe-logo {
        width: 52px;
        height: 65px;
      }

      .dixeebe-title {
        font-size: 13px;
      }

      .dixeebe-subtitle {
        font-size: 12px;
      }

      .dixeebe-date {
        font-size: 11px;
      }

      .dixeebe-nav summary {
        padding: 8px 10px;
        font-size: 12px;
      }
    }

    @media (max-width: 380px) {
      .dixeebe-logo {
        width: 40px;
        height: 55px;
      }

      .dixeebe-title {
        font-size: 11px;
      }

      .dixeebe-subtitle {
        font-size: 10px;
      }

      .dixeebe-date {
        font-size: 10px;
      }
    }
  `;

  function installHeader() {
    const existingHeader = document.querySelector(
      "header.top, header.topbar, header.dixeebe-header"
    );

    const header = document.createElement("header");
    header.className = "dixeebe-header";

    header.innerHTML = `
      <div class="dixeebe-header-left">

        <a
          class="dixeebe-logo-link"
          href="index.html"
          aria-label="La Experiencia Dixeebe Home"
        >
          <img
            class="dixeebe-logo"
            src="dixeebe-logo.png"
            alt="Gold bat and agave logo"
          >
        </a>

        <div class="dixeebe-header-text">

          <a class="dixeebe-title" href="index.html">
            LA EXPERIENCIA DIXEEBE
          </a>

          <div class="dixeebe-subtitle">
            An Evening of Mezcal, Music &amp; Culture
          </div>

          <div class="dixeebe-date">
            Saturday, November 28, 2026
          </div>

        </div>
      </div>

      <details class="dixeebe-nav">
        <summary>MENU</summary>

        <nav
          class="dixeebe-menu"
          aria-label="Main navigation"
        >
          <a href="index.html">Home</a>
          <a href="casa-huichol.html">Casa Huichol</a>
          <a href="location.html">Location / Directions</a>
          <a href="tickets.html">Buy Event Tickets</a>
          <a href="contact.html">Contact Us</a>
        </nav>
      </details>
    `;

    if (existingHeader) {
      existingHeader.replaceWith(header);
    } else {
      document.body.prepend(header);
    }
  }

  document.head.appendChild(css);

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      installHeader,
      { once: true }
    );
  } else {
    installHeader();
  }
})();
