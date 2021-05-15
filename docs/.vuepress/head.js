module.exports = [
  [
    "script",
    {},
    `let htmlElement = document.getElementsByTagName("html")[0];
    if (localStorage && localStorage['docs.theme']) {
      htmlElement.className += (htmlElement.className ? ' ' : '') + 'theme-' + localStorage['docs.theme'];
    }`
  ],
  ["meta", { name: "theme-color", content: "#f1f5fd" }]
];
