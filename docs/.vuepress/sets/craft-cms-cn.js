module.exports = {
  selectText: "语言",
  label: "简体中文",
  editLinkText: "このページを GitHub で編集",
  searchPlaceholder: "Search the Craft docs (Press “/” to focus)",
  sidebar: {
    "bet365": {
      "/extend/": [
      ],
      "/cn/": [
        {
          title: "登录",
          collapsable: false,
          children: [
            "Login",
            "Validation",
            "AccountData",
          ]
        },
        {
          title: "投注",
          collapsable: false,
          children: [
            "Betting",
          ]
        },
        {
          title: "赛前",
          collapsable: false,
          children: [
            "Soccer",
            "BasketballPreMatch",
          ]
        },
        {
          title: "滚球盘",
          collapsable: false,
          children: [
            "AsianHandiCap",
            "FullTimeFullWin",
            "BasketballInPlay",
            // "MatchGoal",
            // "滚球大小盘API"
          ]
        },
      ]
    },
  },
  sidebarExtra: {
    "bet365": {
      "/cn": [
        {
          title: "Bet365 X-Net-Sync-Term",
          icon: "/icons/icon-token.svg",
          link: "HeaderToken"
        },
        {
          title: "字段说明",
          icon: "/icons/icon-book.svg",
          link: "FieldsExplanation"
        },
        {
          title: "常见问题",
          icon: "/icons/icon-fqa.svg",
          link: "fqa"
        },
        {
          title: "Bet365 SDK",
          icon: "/icons/icon-sdk.svg",
          link: "https://github.com/bet365Data"
        },
      ]
    },
  },
  primarySet: true,
  locales: {
    "/": {
      lang: "en-US",
      name: "English",
      title: "Bet365Data Documentation | %v",
      config: require("./craft-cms-en.js")
    },
    "/ja/": {
      lang: "ja",
      title: "Bet365Data ドキュメント | %v",
      config: require("./craft-cms-ja.js")
    },
    "/fr/": {
      lang: "fr",
      title: "Bet365Data Documentation | %v",
      config: require("./craft-cms-fr.js")
    }
  }
};
