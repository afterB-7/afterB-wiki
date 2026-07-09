(function() {
  const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTCxe5dR-f__-YzE3N6t52BLqnXi3o8o2frws4AXpU-5zl50rXIhHUIzHPRKlT1IsroGLvDdr9v_qmQ/pub?gid=0&single=true&output=csv";

  function slugify(code) {
    return "card-" + code.trim().replace(/[^a-zA-Z0-9]/g, "-");
  }

  function renderCards() {
    const cardListEl = document.getElementById("card-list");
    if (!cardListEl) return;

    const tocListEl = document.getElementById("toc-list");
    const setPrefixEl = document.getElementById("set-prefix");
    const setPrefix = setPrefixEl ? setPrefixEl.textContent.trim() + "/" : "";

    Papa.parse(CSV_URL, {
      download: true,
      header: true,
      complete: function(results) {
        cardListEl.innerHTML = "";
        if (tocListEl) tocListEl.innerHTML = "";

        const filtered = results.data.filter(card => card.code && card.code.startsWith(setPrefix));

        filtered.forEach(card => {
          const anchorId = slugify(card.code);
          const imageUrl = `https://www.unionarena-tcg.com/jp/images/cardlist/card/${card.code.replace("/", "_")}.png`;

          cardListEl.innerHTML += `
            <h3 id="${anchorId}">${card.code} ${card.name}</h3>
            <div class="card-entry">
              <img src="${imageUrl}" alt="${card.name}">
                <div class="card-info-grid">
                <div class="label">รหัส</div><div class="value">${card.code}</div>
                <div class="label">ชื่อ</div><div class="value">${card.name}</div>
                <div class="label">ประเภท</div><div class="value">${card.type}</div>
                <div class="label">ลักษณะพิเศษ</div><div class="value">${card.trait}</div>
                <div class="label">ความสามารถ</div><div class="value">${card.ability}</div>
                <div class="label">Raid</div><div class="value">${card["ability-r"]}</div>
                <div class="label">ทริกเกอร์</div><div class="value">${card.trigger}</div>
                </div>
            </div>
            <hr>
          `;

          if (tocListEl) {
            tocListEl.innerHTML += `<li><a href="#${anchorId}">${card.code} ${card.name}</a></li>`;
          }
        });
      }
    });
  }

  document.addEventListener("DOMContentLoaded", renderCards);
})();