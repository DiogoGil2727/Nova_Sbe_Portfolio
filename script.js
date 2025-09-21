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
    const fullText = textEl.innerHTML;
    const shortText = fullText.slice(0, Math.floor(fullText.length / 2)) + '...';

    // começa cortado
    let expanded = false;
    textEl.innerHTML = shortText;

    btn.addEventListener('click', () => {
      expanded = !expanded;
      textEl.innerHTML = expanded ? fullText : shortText;
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


