/* =========================================
   ROGITHA G — PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   CURSOR GLOW
========================================= */

const glow = document.querySelector(".cursor-glow");

if (glow) {

  window.addEventListener("pointermove", (event) => {

    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";

  });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
  document.querySelectorAll(".reveal");


const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


if (prefersReducedMotion) {

  revealElements.forEach((element) => {

    element.classList.add("visible");

  });

} else {

  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },

      {
        threshold:0.12
      }

    );


  revealElements.forEach((element) => {

    observer.observe(element);

  });

}


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton =
  document.getElementById("menuBtn");

const navLinks =
  document.getElementById("navLinks");


if (menuButton && navLinks) {

  menuButton.addEventListener("click", () => {

    const isOpen =
      navLinks.classList.toggle("mobile-open");


    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );


    menuButton.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
    );


    menuButton.textContent =
      isOpen ? "×" : "☰";

  });


  /* Close menu after clicking a link */

  navLinks
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove(
          "mobile-open"
        );


        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );


        menuButton.setAttribute(
          "aria-label",
          "Open navigation menu"
        );


        menuButton.textContent = "☰";

      });

    });

}


/* =========================================
   CERTIFICATE MODAL
========================================= */

const certificateModal =
  document.getElementById(
    "certificateModal"
  );

const modalClose =
  document.getElementById(
    "modalClose"
  );

const modalImage =
  document.getElementById(
    "modalCertificateImage"
  );

const modalTitle =
  document.getElementById(
    "modalCertificateTitle"
  );

const modalIssuer =
  document.getElementById(
    "modalCertificateIssuer"
  );

const modalYear =
  document.getElementById(
    "modalCertificateYear"
  );

const modalPdf =
  document.getElementById(
    "modalCertificatePdf"
  );


let lastFocusedElement = null;


/* =========================================
   OPEN CERTIFICATE
========================================= */

function openCertificate(card) {

  if (!certificateModal) {
    return;
  }


  const title =
    card.dataset.title ||
    "Certificate";


  const issuer =
    card.dataset.issuer ||
    "Issuer";


  const year =
    card.dataset.year ||
    "";


  const image =
    card.dataset.image ||
    "";


  const pdf =
    card.dataset.pdf ||
    "#";


  if (modalTitle) {

    modalTitle.textContent = title;

  }


  if (modalIssuer) {

    modalIssuer.textContent = issuer;

  }


  if (modalYear) {

    modalYear.textContent = year;

  }


  if (modalImage) {

    modalImage.src = image;

    modalImage.alt =
      title + " certificate";

  }


  if (modalPdf) {

    modalPdf.href = pdf;

  }


  lastFocusedElement =
    document.activeElement;


  certificateModal.classList.add(
    "active"
  );


  certificateModal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";


  if (modalClose) {

    modalClose.focus();

  }

}


/* =========================================
   CLOSE CERTIFICATE
========================================= */

function closeCertificate() {

  if (!certificateModal) {
    return;
  }


  certificateModal.classList.remove(
    "active"
  );


  certificateModal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow =
    "";


  if (modalImage) {

    modalImage.src = "";

  }


  if (
    lastFocusedElement &&
    typeof lastFocusedElement.focus ===
      "function"
  ) {

    lastFocusedElement.focus();

  }

}


/* =========================================
   CERTIFICATE BUTTONS
========================================= */

const certificateCards =
  document.querySelectorAll(
    "[data-certificate]"
  );


certificateCards.forEach((card) => {

  const openButton =
    card.querySelector(
      "[data-open-certificate]"
    );


  if (openButton) {

    openButton.addEventListener(
      "click",
      () => {

        openCertificate(card);

      }
    );

  }

});


/* =========================================
   MODAL CLOSE EVENTS
========================================= */

if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeCertificate
  );

}


document
  .querySelectorAll("[data-close-modal]")
  .forEach((element) => {

    element.addEventListener(
      "click",
      closeCertificate
    );

  });


/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      certificateModal &&
      certificateModal.classList.contains(
        "active"
      )
    ) {

      closeCertificate();

    }

  }
);


/* =========================================
   MODAL IMAGE ERROR
========================================= */

if (modalImage) {

  modalImage.addEventListener(
    "error",
    () => {

      modalImage.alt =
        "Certificate preview unavailable";

    }
  );

}


/* =========================================
   CURRENT YEAR
========================================= */

const footerYear =
  document.querySelector(
    ".footer span:first-child"
  );


if (footerYear) {

  footerYear.textContent =
    `© ${new Date().getFullYear()} Rogitha G`;

}


/* =========================================
   SMOOTH INTERNAL LINKS
========================================= */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        const targetId =
          link.getAttribute("href");


        if (
          !targetId ||
          targetId === "#"
        ) {

          return;

        }


        const target =
          document.querySelector(
            targetId
          );


        if (target) {

          event.preventDefault();


          target.scrollIntoView({
            behavior:
              prefersReducedMotion
                ? "auto"
                : "smooth"
          });

        }

      }
    );

  });