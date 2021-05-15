# PreMatch1X2 Soccer API


## HTTP Request 
```POST http:// Please contact us by Telegram to request address +/bet365/preMatch1X2```


### Request Example

```zsh
curl  -H "x-token: Bearer Please contact us by Telegram to get token" http:// request address +/bet365/preMatch1X2
```
###  Request Header

| Parameter | Required? | Description |
| --------   | ----- | ---- |
| x-token | Yes |Please contact to get 7 days free trial|
| Method | Yes | Get|

## Response Parameter

|Parameter| Description |
| --------|-----|
| msg |Success or Request failed description|
| code |Request status code, 0 means success, see error code for other details|
| data |Response object|
| data.sync_time |Message synchronization Time|
| data.data.channel |Data return channel|
| data.data.data.league |league name|
| data.data.data.market | market |
| data.data.data.market.1x2 | 1x2 Odds |
| data.data.data.play_time |Play Time|
| data.data.data.team_pair |team_pair Name|

### HTTP Response

```
{
    "code":0,
    "data":{
        "list":[
            {
                "league":"England Premier League",
                "market":{
                    "1x2":[
                        "3.30",
                        "2.10",
                        "3.60"
                    ]
                },
                "play_time":"05-16 03:00",
                "team_pair":[
                    "Brighton",
                    "West Ham"
                ]
            }
        ],
        "total":291,
        "channel":"bet365",
        "sync_time":1621099806050
    },
    "msg":"Success"
}
```