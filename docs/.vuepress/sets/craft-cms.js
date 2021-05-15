module.exports = {
  title: "Bet365 Api Documentation | %v",
  setTitle: "Bet365",
  handle: "craft",
  icon: "/icons/Bet365_Logo.svg",
  baseDir: "",
  versions: [
    ["bet365", { label: "bet365" }],
    ["bet188", { label: "bet188" }],
  ],
  defaultVersion: "bet365",
  searchPlaceholder: "Search the bet365Data docs (Press “/” to focus)",
  primarySet: true,
  locales: {
    "/": {
      lang: "en-US",
      name: "English",
      title: "bet365Data Documentation | %v",
      config: require("./craft-cms-en.js")
    },
    "/ja/": {
      lang: "ja",
      title: "bet365Data ドキュメント | %v",
      config: require("./craft-cms-ja.js")
    },
    "/fr/": {
      lang: "fr",
      title: "bet365Data Documentation | %v",
      config: require("./craft-cms-fr.js")
    },
    "/cn/": {
      lang: "cn",
      title: "bet365Data Documentation | %v",
      config: require("./craft-cms-cn.js")
    }
  }
};
