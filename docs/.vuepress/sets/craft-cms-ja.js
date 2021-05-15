module.exports = {
  selectText: "言語",
  label: "日本語",
  editLinkText: "このページを GitHub で編集",
  searchPlaceholder: "Search the Craft docs (Press “/” to focus)",
  sidebar: {
    "bet365": {
      "/extend/": [
      ],
      "/": [
        {
          title: "ログイン",
          collapsable: false,
          children: [
            "Login",
            "validation",
            "AccountData",
          ],
        },
        {
          title: "劇中",
          collapsable: false,
          children: [
            "Soccer",
            "Basketball"
          ],
        },
        {
          title: "劇中",
          collapsable: false,
          children: [
            "AsianHandiCap",
            "FullTimeFullWin",
            "MatchGoal",
            "OverUnder"
          ]
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
          title: "フィールドの説明",
          icon: "/icons/icon-book.svg",
          link: "FieldsExplanation"
        },
        {
          title: "よくある質問",
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
};
