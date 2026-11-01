// Общий прогресс. Ключ с префиксом, чтобы не смешаться с другими проектами на github.io
const BD = {
  key: 'bd_progress',
  dev: new URLSearchParams(location.search).has('dev'), // ?dev открывает всё для проверки
  get() { try { return JSON.parse(localStorage.getItem(this.key)) || {}; } catch (e) { return {}; } },
  set(name, val = true) {
    const p = this.get(); p[name] = val;
    try { localStorage.setItem(this.key, JSON.stringify(p)); } catch (e) {}
  }
};

// Цветочки: BD.garden(контейнер, сколько штук)
BD.garden = function (box, n = 9) {
  // [left %, top %, ширина vw, цвет]
  const spots = [[4,6,15,0],[82,4,12,1],[70,17,8,2],[7,78,14,1],[84,80,16,0],[44,91,9,3],[22,13,8,3],[91,44,8,0],[2,44,9,2]];
  const cols = [['#ff3fa4','#ffe66b'],['#1e6bff','#ffe66b'],['#ffffff','#ff3fa4'],['#ffe66b','#1e6bff']];
  const petals = [0,60,120,180,240,300].map(a => `<ellipse cx="50" cy="27" rx="13" ry="22" transform="rotate(${a} 50 50)"/>`).join('');
  box.innerHTML = spots.slice(0, n).map(([l,t,w,c], i) => {
    const [p, m] = cols[c];
    return `<svg class="fl" viewBox="0 0 100 100" aria-hidden="true" style="left:${l}%;top:${t}%;width:clamp(36px,${w}vw,96px);--d:${(i*0.25).toFixed(2)}s">
      <g class="sway"><g style="fill:${p};stroke:#16197a;stroke-width:3">${petals}</g>
      <circle cx="50" cy="50" r="11" style="fill:${m};stroke:#16197a;stroke-width:3"/></g></svg>`;
  }).join('');
};
