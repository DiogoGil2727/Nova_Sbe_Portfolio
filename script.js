// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Dark mode toggle
const toggle = document.getElementById("dark-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const text1 = "Risk Trainee @ BNP Paribas ";
  const text2 = "Aspiring International Finance Professional";

  const el1 = document.getElementById("typing-text-1");
  const el2 = document.getElementById("typing-text-2");

  let i1 = 0;
  let i2 = 0;

  function typeWriter1() {
    if (i1 < text1.length) {
      el1.innerHTML += text1.charAt(i1);
      i1++;
      setTimeout(typeWriter1, 70); // velocidade
    }
  }

  function typeWriter2() {
    if (i2 < text2.length) {
      el2.innerHTML += text2.charAt(i2);
      i2++;
      setTimeout(typeWriter2, 70);
    }
  }

  // começam ao mesmo tempo
  typeWriter1();
  typeWriter2();
});

 document.querySelectorAll('.testimonial').forEach(card => {
    const textEl = card.querySelector('.testimonial-text');
    const btn = card.querySelector('.toggle-btn');

    // colapsado por defeito via CSS (line-clamp); o texto original
    // nunca é alterado, só a classe que controla quantas linhas mostra
    btn.addEventListener('click', () => {
      const expanded = textEl.classList.toggle('expanded');
      btn.textContent = expanded ? 'Show less' : 'Show more';
    });
  });

   document.querySelectorAll('.card.project-vertical').forEach(card => {
    const list = card.querySelector('.exp-list');
    const btn = card.querySelector('.exp-toggle');
    if (!list || !btn) return;

    // altura máxima inicial (2 linhas de lista aprox.)
    list.style.maxHeight = "3.5rem";
    list.style.overflow = "hidden";
    let expanded = false;

    btn.addEventListener('click', () => {
      expanded = !expanded;
      if (expanded) {
        list.style.maxHeight = list.scrollHeight + "px";
        btn.textContent = "Show less";
      } else {
        list.style.maxHeight = "3.5rem";
        btn.textContent = "Show more";
      }
    });
  });


// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");
if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Active nav link on scroll
const navLinks = document.querySelectorAll('#main-nav a[href^="#"]');
const navSections = Array.from(navLinks)
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && navSections.length) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = "#" + entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

  navSections.forEach(section => navObserver.observe(section));
}

// Scroll reveal for cards, testimonials, timeline items and skill bars
if ("IntersectionObserver" in window) {
  const revealTargets = document.querySelectorAll(
    ".card, .cert-card, .testimonial, .edu-item, .skill"
  );
  revealTargets.forEach(el => el.classList.add("reveal"));

  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => revealObserver.observe(el));
}
