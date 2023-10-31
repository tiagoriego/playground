const line_console = [];
if (typeof VERSION != "undefined") {
  const simbol = "------------------------------------";
  line_console.push(simbol);
  line_console.push("Versão do App: " + VERSION);
  line_console.push(simbol + "\n");
}
const ID_EL_CONSOLE = "console";

export function getElById(id) {
  return document.getElementById(id);
}

export function createElById(elm) {
  return document.createElement(elm);
}

export function generateCharRandom(limit) {
  const chr = "abcdefghijklmnopqrstuvwxyz123456789".split("");
  const rdn = [];
  let count = 0;
  while (count < limit) {
    let idx = Number.parseInt(Math.random() * (chr.length - 1));
    rdn.push(chr[idx]);
    count++;
  }
  return rdn.join("");
}

function writeLine(value) {
  const appConsole = getElById(ID_EL_CONSOLE);
  value = value instanceof Object ? JSON.stringify(value) : value;
  line_console.push(value);
  appConsole.innerText = line_console.join("\n");
}

function buildConsole() {
  const cls = document.createElement("div");
  cls.setAttribute("id", "console");
  document.getElementsByTagName("body")[0].appendChild(cls);
}

function existsConsole() {
  return getElById(ID_EL_CONSOLE) ? true : false;
}

export const consoleApp = {
  logger: function (value) {
    if (existsConsole()) {
      writeLine(value);
    } else {
      buildConsole();
      writeLine(value);
    }
  },
  parseObj: function (value) {
    return JSON.stringify(value);
  },
};
