document.addEventListener("DOMContentLoaded", function () {

  const links = [
    { keyword: "gene editing", url: "/oncology/2026/04/10/gene-editing-nucleic-acid-therapy/" },
    { keyword: "thalassemia", url: "/rare-diseases/2026/04/08/thalassemia-gene-therapy-access/" },
    { keyword: "liver cancer", url: "/oncology/2026/04/11/liver-cancer-drug-market-outlook/" }
  ];

  function replaceText(node) {
    if (node.nodeType === 3) { // 只处理文本节点
      let text = node.nodeValue;

      links.forEach(link => {
        const regex = new RegExp(`\\b${link.keyword}\\b`, "gi");
        text = text.replace(regex, `<a href="${link.url}">${link.keyword}</a>`);
      });

      if (text !== node.nodeValue) {
        const span = document.createElement("span");
        span.innerHTML = text;
        node.replaceWith(span);
      }
    } else {
      node.childNodes.forEach(replaceText);
    }
  }

  replaceText(document.body);
});
