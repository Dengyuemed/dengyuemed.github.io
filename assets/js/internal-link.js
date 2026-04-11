document.addEventListener("DOMContentLoaded", function () {

  const links = [
    { keyword: "gene editing", url: "/oncology/2026/04/10/gene-editing-nucleic-acid-therapy/" },
    { keyword: "thalassemia", url: "/rare-diseases/2026/04/08/thalassemia-gene-therapy-access/" },
    { keyword: "liver cancer", url: "/oncology/2026/04/11/liver-cancer-drug-market-outlook/" },
    { keyword: "supply chain", url: "/supply-chain/" }
  ];

  const usedKeywords = new Set();

  function walk(node) {
    // 只处理文本节点
    if (node.nodeType === 3) {

      let text = node.nodeValue;

      links.forEach(link => {

        if (usedKeywords.has(link.keyword)) return;

        const regex = new RegExp(`\\b(${link.keyword})\\b`, "i");

        if (regex.test(text)) {

          const replaced = text.replace(regex, `<a href="${link.url}">$1</a>`);

          const span = document.createElement("span");
          span.innerHTML = replaced;

          node.replaceWith(span);

          usedKeywords.add(link.keyword);
        }
      });

    } else if (
      node.nodeType === 1 &&
      node.tagName !== "A" &&
      node.tagName !== "SCRIPT" &&
      node.tagName !== "STYLE"
    ) {
      node.childNodes.forEach(walk);
    }
  }

  walk(document.body);

});
