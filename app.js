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
