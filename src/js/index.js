// variável global
const VERSION = "1.5.0";
console.log("Versão do App:", VERSION);

// função anônima
// as variáveis dessa função não ficam visíveis fora de seu contexto.
(function () {
  // troca o título da página
  const titlePage = document.querySelector("head > title");
  if (titlePage) {
    titlePage.innerText = "Playground - Versão: ".concat(VERSION);
  }

  const titleMenu = document.querySelector("#navbarNav > ul > li > a");
  if (titleMenu) {
    const file = document.location.href.split("/");
    let page = file[file.length - 1].split("html")[0];
    page = page ? page.concat("html") : "";
    let sTitleMenu = "Playground - ".concat("Versão do App: ", VERSION);
    if (page) {
      sTitleMenu += " - ".concat(page);
    }
    titleMenu.innerText = sTitleMenu;
  }
})();
