---
hide:
  - toc
---
# Code Geass Starter Deck
Card set: **UA01ST**
Set code: **CGH**
---

<div class="card-page" markdown="1">
<div class="card-page-layout">

<details class="custom-toc" open>
<summary>Table of Contents</summary>
<ul id="toc-list">Loading...</ul>
</details>

<div class="card-content">

<div id="card-list">Loading cards...</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js"></script>
<script>
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTCxe5dR-f__-YzE3N6t52BLqnXi3o8o2frws4AXpU-5zl50rXIhHUIzHPRKlT1IsroGLvDdr9v_qmQ/pub?gid=0&single=true&output=csv";

function slugify(code) {
  return "card-" + code.trim().replace(/[^a-zA-Z0-9]/g, "-");
}

Papa.parse(SHEET_CSV_URL, {
  download: true,
  header: true,
  complete: function(results) {
    const cardListEl = document.getElementById("card-list");
    const tocListEl = document.getElementById("toc-list");
    cardListEl.innerHTML = "";
    tocListEl.innerHTML = "";

    results.data.forEach(card => {
      if (!card.code) return;
      const anchorId = slugify(card.code);

      cardListEl.innerHTML += `
        <h3 id="${anchorId}">${card.code} ${card.name}</h3>
        <div class="card-entry">
          <img src="${card["img-url"]}" alt="${card.name}">
          <table>
            <tr><th>รหัส</th><td>${card.code}</td></tr>
            <tr><th>ชื่อ</th><td>${card.name}</td></tr>
            <tr><th>ประเภท</th><td>${card.type}</td></tr>
            <tr><th>ลักษณะพิเศษ</th><td>${card.trait}</td></tr>
            <tr><th>ความสามารถ</th><td>${card.ability}</td></tr>
            <tr><th>Raid</th><td>${card["ability-r"]}</td></tr>
            <tr><th>ทริกเกอร์</th><td>${card.trigger}</td></tr>
          </table>
        </div>
        <hr>
      `;

      tocListEl.innerHTML += `
        <li><a href="#${anchorId}">${card.code} ${card.name}</a></li>
      `;
    });
  }
});
</script>

</div>
</div>
</div>