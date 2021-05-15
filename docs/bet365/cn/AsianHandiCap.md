# 滚球亚洲盘API


## HTTP Request 
```POST http:// Please contact us by Telegram to request address +/bet365/v0/api/AsianHandiCap```


### Request Example

```zsh
curl -X POST -H "x-token: Bearer Please contact us by Telegram to get token" http:// request address +/bet365/v0/api/AsianHandiCap
```
###  Request Header

| 参数 | 是否必须传 | 描述 |
| --------   | ----- | ---- |
| x-token | Yes |请联系 Telegram 获取7天免费测试token|
| Method | Yes |POST|

## Response Parameter

|Parameter| Description |
| --------|-----|
| msg |成功或请求失败的描述|
| code |请求状态代码，0表示成功，请参见错误代码以获取其他详细信息|
| data |Response 对象|
| data.sync_time |消息同步时间|
| data.data.channel |数据来源|
| data.data.data.team_pair |队伍名称|
| data.data.data.team_score |球队总得分|
| data.data.data.play_time |比赛时间|
| data.data.data.handicap_list |大小|
| data.data.data.odds_list |赔率|

### HTTP Response

```
{
    "msg": "Success",
    "data": {
        "data": {
            "channel": [
                "滚球亚洲盘"
            ],
            "data": [
                {
                    "team_pair": [
                        "El 萨梅雷克",
                        "塔拉埃阿杰艾斯"
                    ],
                    "team_score": [
                        "1",
                        "1"
                    ],
                    "play_time": [
                        "45:00"
                    ],
                    "handicap_list": [
                        "0.0",
                        "0.0"
                    ],
                    "odds_list": [
                        "1.800",
                        "2.000"
                    ]
                },
                {
                    "team_pair": [
                        "东里发",
                        "布达亚"
                    ],
                    "team_score": [
                        "2",
                        "0"
                    ],
                    "play_time": [
                        "51:27"
                    ],
                    "handicap_list": [
                        "0.0,-0.5",
                        "0.0,+0.5"
                    ],
                    "odds_list": [
                        "1.950",
                        "1.850"
                    ]
                },
                {
                    "team_pair": [
                        "Al-Najma麦纳麦",
                        "马勒基亚"
                    ],
                    "team_score": [
                        "1",
                        "0"
                    ],
                    "play_time": [
                        "57:19"
                    ],
                    "handicap_list": [
                        "0.0",
                        "0.0"
                    ],
                    "odds_list": [
                        "1.950",
                        "1.850"
                    ]
                },
                {
                    "team_pair": [
                        "伊塔尔足球俱乐部",
                        "特萨斯科塞洛2015"
                    ],
                    "team_score": [
                        "1",
                        "0"
                    ],
                    "play_time": [
                        "25:03"
                    ],
                    "handicap_list": [
                        "0.0,+0.5",
                        "0.0,-0.5"
                    ],
                    "odds_list": [
                        "1.925",
                        "1.925"
                    ]
                },
                {
                    "team_pair": [
                        "皇家梅斯克伦精英",
                        "圣图尔登"
                    ],
                    "team_score": [
                        "0",
                        "0"
                    ],
                    "play_time": [
                        "00:00"
                    ],
                    "handicap_list": [
                        "0.0",
                        "0.0"
                    ],
                    "odds_list": [
                        "1.925",
                        "1.925"
                    ]
                },
                {
                    "team_pair": [
                        "伯拉治",
                        "斯洛波达"
                    ],
                    "team_score": [
                        "0",
                        "0"
                    ],
                    "play_time": [
                        "00:00"
                    ],
                    "handicap_list": [
                        "-1.0,-1.5",
                        "+1.0,+1.5"
                    ],
                    "odds_list": [
                        "2.050",
                        "1.750"
                    ]
                },
                {
                    "team_pair": [
                        "阿尔姆埃达",
                        "Al Bidda SC"
                    ],
                    "team_score": [
                        "1",
                        "0"
                    ],
                    "play_time": [
                        "45:00"
                    ],
                    "handicap_list": [
                        "0.0,-0.5",
                        "0.0,+0.5"
                    ],
                    "odds_list": [
                        "2.050",
                        "1.750"
                    ]
                },
                {
                    "team_pair": [
                        "克勒拉希",
                        "Turris-Oltul图尔努默古雷莱"
                    ],
                    "team_score": [
                        "0",
                        "1"
                    ],
                    "play_time": [
                        "56:55"
                    ],
                    "handicap_list": [
                        "0.0,-0.5",
                        "0.0,+0.5"
                    ],
                    "odds_list": [
                        "2.050",
                        "1.750"
                    ]
                },
                {
                    "team_pair": [
                        "孟买城",
                        "东孟加拉俱乐部"
                    ],
                    "team_score": [
                        "3",
                        "0"
                    ],
                    "play_time": [
                        "96:16"
                    ],
                    "handicap_list": [],
                    "odds_list": []
                },
                {
                    "team_pair": [
                        "马卡比比内拉纳",
                        "Hapoel Bnei Arrara Ara"
                    ],
                    "team_score": [
                        "0",
                        "0"
                    ],
                    "play_time": [
                        "45:00"
                    ],
                    "handicap_list": [
                        "-1",
                        "+1"
                    ],
                    "odds_list": [
                        "1.900",
                        "1.900"
                    ]
                },
                {
                    "team_pair": [
                        "阿什凯泽夏普尔",
                        "AS耶路撒冷"
                    ],
                    "team_score": [
                        "0",
                        "0"
                    ],
                    "play_time": [
                        "00:00"
                    ],
                    "handicap_list": [
                        "0.0,-0.5",
                        "0.0,+0.5"
                    ],
                    "odds_list": [
                        "1.800",
                        "2.000"
                    ]
                },
                {
                    "team_pair": [
                        "匈牙利 女子",
                        "冰岛 女子"
                    ],
                    "team_score": [
                        "0",
                        "1"
                    ],
                    "play_time": [
                        "72:05"
                    ],
                    "handicap_list": [
                        "+0.5,+1.0",
                        "-0.5,-1.0"
                    ],
                    "odds_list": [
                        "1.925",
                        "1.875"
                    ]
                },
                {
                    "team_pair": [
                        "以色列 女子",
                        "马耳他 女子"
                    ],
                    "team_score": [
                        "0",
                        "2"
                    ],
                    "play_time": [
                        "70:30"
                    ],
                    "handicap_list": [
                        "0.0",
                        "0.0"
                    ],
                    "odds_list": [
                        "2.200",
                        "1.650"
                    ]
                },
                {
                    "team_pair": [
                        "Im Not Over (PNZ) Esports",
                        "Rattata 522 (NFC) Esports"
                    ],
                    "team_score": [
                        "0",
                        "0"
                    ],
                    "play_time": [
                        "00:00"
                    ],
                    "handicap_list": [
                        "0.0,+0.5",
                        "0.0,-0.5"
                    ],
                    "odds_list": [
                        "1.850",
                        "1.850"
                    ]
                },
                {
                    "team_pair": [
                        "Dortmund (BlackStar98) Esports",
                        "Chelsea (xShilito) Esports"
                    ],
                    "team_score": [
                        "2",
                        "0"
                    ],
                    "play_time": [
                        "08:00"
                    ],
                    "handicap_list": [],
                    "odds_list": []
                },
                {
                    "team_pair": [
                        "AC Milan (Foggy) Esports",
                        "Leicester (Inquisitor) Esports"
                    ],
                    "team_score": [
                        "0",
                        "0"
                    ],
                    "play_time": [
                        "03:26"
                    ],
                    "handicap_list": [
                        "0.0",
                        "0.0"
                    ],
                    "odds_list": [
                        "1.650",
                        "2.100"
                    ]
                },
                {
                    "team_pair": [
                        "Arsenal (Olle) Esports",
                        "Leverkusen (white_boy1927) Esports"
                    ],
                    "team_score": [
                        "0",
                        "0"
                    ],
                    "play_time": [
                        "02:56"
                    ],
                    "handicap_list": [
                        "0.0,-0.5",
                        "0.0,+0.5"
                    ],
                    "odds_list": [
                        "1.900",
                        "1.800"
                    ]
                },
                {
                    "team_pair": [
                        "Atletico Madrid (FEARGGWP) Esports",
                        "Chelsea (xShilito) Esports"
                    ],
                    "team_score": [
                        "0",
                        "0"
                    ],
                    "play_time": [
                        "00:00"
                    ],
                    "handicap_list": [
                        "0.0,-0.5",
                        "0.0,+0.5"
                    ],
                    "odds_list": [
                        "1.800",
                        "1.900"
                    ]
                }
            ]
        },
        "sync_time": 1606838274
    }
}
```