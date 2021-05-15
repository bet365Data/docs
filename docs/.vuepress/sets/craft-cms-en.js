module.exports = {
  selectText: "Language",
  label: "English",
  editLinkText: "Edit this page on GitHub",
  searchPlaceholder: "Search the Craft docs (Press “/” to focus)",
  sidebar: {
    "bet365": {
      "/extend/": [
      ],
      "/": [
        {
          title: "Login API",
          collapsable: false,
          children: [
            "Login",
            "Validation",
            "AccountData",
          ],
        },
        {
          title: "Betting API",
          collapsable: false,
          children: [
            "Betting",
          ]
        },
        {
          title: "Pre Match API",
          collapsable: false,
          children: [
            "PreMatch1X2",
            "BasketballPreMatch",
          ],
        },
        {
          title: "Inplay API",
          collapsable: false,
          children: [
            'BasketballPreMatch',
            "AsianHandiCap",
            "FullTimeFullWin",
            "MatchGoal",
            "OverUnder",
          ],
        },
      ]
    },
  },
  sidebarExtra: {
    "bet365": {
      "/": [
        {
          title: "Bet365 X-Net-Sync-Term",
          icon: "/icons/icon-token.svg",
          link: "HeaderToken"
        },
        {
          title: "Fields Explanation",
          icon: "/icons/icon-book.svg",
          link: "FieldsExplanation"
        },
        {
          title: "FAQ",
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
