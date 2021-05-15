# OverUnder API

## HTTP Request 
```POST http:// Please contact us by Telegram to request address +/bet365/v0/api/OverUnder```


### Request Example

```zsh
curl -X POST -H "x-token: Bearer Please contact us by Telegram to get token" http:// request address +/bet365/v0/api/OverUnder
```
###  Request Header

| Parameter | Required? | Description |
| --------   | ----- | ---- |
| x-token | Yes |Please contact to get 7 days free trial|
| Method | Yes |POST|

## Response Parameter

|Parameter| Description |
| --------|-----|
| msg |Success or Request failed description|
| code |Request status code, 0 means success, see error code for other details|
| data |Response object|
| data.sync_time |Message synchronization time|
| data.data.channel |Data return channel|
| data.data.data.team_pair |Team name|
| data.data.data.team_score |Total team score|
| data.data.data.play_time |Play time|
| data.data.data.handicap_list |Handicap list|
| data.data.data.odds_list |Odds list|

### HTTP Response

```
{
    "msg": "Success",
    "data": {
        "data": {
            "channel": [
                "滚球大小盘"
            ],
            "data": [
                {
                    "team_pair": [
                        "SSGC",
                        "Masha United"
                    ],
                    "team_score": [
                        "3",
                        "1"
                    ],
                    "play_time": [
                        "90:27"
                    ],
                    "handicap_list": [
                        "4.5",
                        "4.5"
                    ],
                    "odds_list": [
                        "5.500",
                        "1.150"
                    ]
                },
                {
                    "team_pair": [
                        "贾马尔普尔Kacharipara Akadas 女子",
                        "Begum Anwara SC 女子"
                    ],
                    "team_score": [
                        "0",
                        "0"
                    ],
                    "play_time": [
                        "20:10"
                    ],
                    "handicap_list": [
                        "3.0,3.5",
                        "3.0,3.5"
                    ],
                    "odds_list": [
                        "2.000",
                        "1.800"
                    ]
                },
                {
                    "team_pair": [
                        "多乐 21岁以下",
                        "Pho Hien U21"
                    ],
                    "team_score": [
                        "0",
                        "0"
                    ],
                    "play_time": [
                        "33:22"
                    ],
                    "handicap_list": [
                        "0.5,1.0",
                        "0.5,1.0"
                    ],
                    "odds_list": [
                        "1.725",
                        "2.075"
                    ]
                },
                {
                    "team_pair": [
                        "河内FC 21岁以下",
                        "Luxury Ha Long 21岁以下"
                    ],
                    "team_score": [
                        "0",
                        "0"
                    ],
                    "play_time": [
                        "31:52"
                    ],
                    "handicap_list": [
                        "4.5,5.0",
                        "4.5,5.0"
                    ],
                    "odds_list": [
                        "1.825",
                        "1.975"
                    ]
                },
                {
                    "team_pair": [
                        "The Cong FC 21岁以下",
                        "南定 21岁以下"
                    ],
                    "team_score": [
                        "0",
                        "0"
                    ],
                    "play_time": [
                        "31:55"
                    ],
                    "handicap_list": [
                        "2.0,2.5",
                        "2.0,2.5"
                    ],
                    "odds_list": [
                        "1.875",
                        "1.925"
                    ]
                },
                {
                    "team_pair": [
                        "Cong An Nhan Dan U21",
                        "西宁 21岁以下"
                    ],
                    "team_score": [
                        "0",
                        "0"
                    ],
                    "play_time": [
                        "32:58"
                    ],
                    "handicap_list": [
                        "2.5,3.0",
                        "2.5,3.0"
                    ],
                    "odds_list": [
                        "2.000",
                        "1.800"
                    ]
                },
                {
                    "team_pair": [
                        "黄安嘉莱 21岁以下",
                        "义安蓝江 21岁以下"
                    ],
                    "team_score": [
                        "0",
                        "1"
                    ],
                    "play_time": [
                        "33:06"
                    ],
                    "handicap_list": [
                        "2.5,3.0",
                        "2.5,3.0"
                    ],
                    "odds_list": [
                        "2.000",
                        "1.800"
                    ]
                },
                {
                    "team_pair": [
                        "隆安 21岁以下",
                        "同塔 21岁以下"
                    ],
                    "team_score": [
                        "1",
                        "0"
                    ],
                    "play_time": [
                        "32:52"
                    ],
                    "handicap_list": [
                        "2.5,3.0",
                        "2.5,3.0"
                    ],
                    "odds_list": [
                        "2.000",
                        "1.800"
                    ]
                },
                {
                    "team_pair": [
                        "Im Not Over (PNZ) Esports",
                        "Megapolice (MEG) Esports"
                    ],
                    "team_score": [
                        "2",
                        "1"
                    ],
                    "play_time": [
                        "07:56"
                    ],
                    "handicap_list": [
                        "4.5",
                        "4.5"
                    ],
                    "odds_list": [
                        "1.900",
                        "1.800"
                    ]
                },
                {
                    "team_pair": [
                        "B M'gladbach (Jkey) Esports",
                        "RB Leipzig (Kodak) Esports"
                    ],
                    "team_score": [
                        "0",
                        "1"
                    ],
                    "play_time": [
                        "07:29"
                    ],
                    "handicap_list": [],
                    "odds_list": []
                },
                {
                    "team_pair": [
                        "Dortmund (vrico) Esports",
                        "Bayern (hotShot) Esports"
                    ],
                    "team_score": [
                        "1",
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
                        "Argentina (slezaintima) Esports",
                        "Netherlands (d1pseN) Esports"
                    ],
                    "team_score": [
                        "0",
                        "0"
                    ],
                    "play_time": [
                        "03:12"
                    ],
                    "handicap_list": [
                        "2",
                        "2"
                    ],
                    "odds_list": [
                        "1.925",
                        "1.775"
                    ]
                },
                {
                    "team_pair": [
                        "Spain (nikkitta) Esports",
                        "England (Bombi1t0) Esports"
                    ],
                    "team_score": [
                        "0",
                        "0"
                    ],
                    "play_time": [
                        "03:31"
                    ],
                    "handicap_list": [
                        "1",
                        "1"
                    ],
                    "odds_list": [
                        "1.850",
                        "1.850"
                    ]
                },
                {
                    "team_pair": [
                        "Man City (Dimqaa) Esports",
                        "Liverpool (Critic) Esports"
                    ],
                    "team_score": [
                        "2",
                        "0"
                    ],
                    "play_time": [
                        "04:55"
                    ],
                    "handicap_list": [
                        "3.5,4.0",
                        "3.5,4.0"
                    ],
                    "odds_list": [
                        "1.750",
                        "1.950"
                    ]
                },
                {
                    "team_pair": [
                        "Man Utd (Stig) Esports",
                        "Tottenham (CarlWhizzer) Esports"
                    ],
                    "team_score": [
                        "1",
                        "0"
                    ],
                    "play_time": [
                        "04:25"
                    ],
                    "handicap_list": [
                        "3.0,3.5",
                        "3.0,3.5"
                    ],
                    "odds_list": [
                        "1.750",
                        "1.950"
                    ]
                }
            ]
        },
        "sync_time": 1606898986
    }
}
```