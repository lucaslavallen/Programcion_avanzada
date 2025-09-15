// 1) Suma de números únicos
function sumUnique(nums) {
  const set = new Set();
  for (const n of nums) {
    if (Number.isFinite(n)) set.add(n);
  }
  return [...set].reduce((acc, n) => acc + n, 0);
}

// 2) Seleccionar propiedades
function pick(obj, keys) {
  const result = {};
  for (const k of keys) {
    if (k in obj) result[k] = obj[k];
  }
  return result;
}

// 3) Agrupar por clave o función
function groupBy(list, keyOrFn) {
  const result = {};
  for (const item of list) {
    const key = typeof keyOrFn === "function" ? keyOrFn(item) : item[keyOrFn];
    if (!result[key]) result[key] = [];
    result[key].push(item);
  }
  return result;
}

// 4) Ordenar por múltiples campos
function sortByMany(list, specs) {
  return [...list].sort((a, b) => {
    for (const { key, dir } of specs) {
      if (a[key] < b[key]) return dir === "asc" ? -1 : 1;
      if (a[key] > b[key]) return dir === "asc" ? 1 : -1;
    }
    return 0;
  });
}

// 5) deepEqual (objetos/arrays simples)
function deepEqual(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (typeof a !== "object" || typeof b !== "object") return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 6) Validador de paréntesis
function isBalanced(s) {
  const stack = [];
  const pairs = { ")": "(", "]": "[", "}": "{" };
  for (const ch of s) {
    if (["(", "[", "{"].includes(ch)) stack.push(ch);
    else if (ch in pairs) {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.length === 0;
}

// 7) Frecuencia de palabras
function wordFreq(text) {
  const map = new Map();
  const words = text
    .toLowerCase()
    .replace(/[.,:;!?]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  for (const w of words) {
    map.set(w, (map.get(w) || 0) + 1);
  }
  return map;
}

// 9) Debounce
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 10A) withTimeout
function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Timeout")), ms);
    promise
      .then(val => {
        clearTimeout(timer);
        resolve(val);
      })
      .catch(err => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

// 10B) allSettledLite
function allSettledLite(promises) {
  return Promise.all(
    promises.map(p =>
      Promise.resolve(p)
        .then(value => ({ status: "fulfilled", value }))
        .catch(reason => ({ status: "rejected", reason }))
    )
  );
}
