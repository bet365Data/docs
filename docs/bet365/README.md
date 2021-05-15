# Bet365 Summary

# Introduction
It covers all markets/odds that you can find in Bet365 website.

# Login 
bet365 Login

# betting
bet365 betting by Marker

# InPlay

use Bet365 InPlay ID (type=EV) or Bet365 InPlay Filter id.

then call Bet365 Inplay Event with the id to get scores/stats and all markets/odds.

# Prematch

use Bet365 Upcoming Events to get the id (which is FI)

then call Bet365 PreMatch Odds with the id to get prematch markets/odds.

Note PreMatch Odds won't be updated once it enters into INPLAY.


# Get bet365 Token(X-Net-Sync-Term)

```json
{
    "code":0,
    "data":{
        "syncTerm":"6j+bYA==.ETXV/tflJn/xxxxxx=",
        "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4469.0 Safari/537.36",
        "cookies":[
            {
                "domain":".365-868.com",
                "expires":1621391020.312995,
                "httpOnly":false,
                "name":"pstk",
                "path":"/",
                "sameParty":false,
                "sameSite":"None",
                "secure":true,
                "session":false,
                "size":42,
                "sourcePort":443,
                "sourceScheme":"Secure",
                "value":"29BA9FA4B902CB3C9C721FBC09B1CC15000003"
            },
            {
                "domain":"www.365-868.com",
                "expires":1936319689.414025,
                "httpOnly":false,
                "name":"aps03",
                "path":"/",
                "sameParty":false,
                "sameSite":"None",
                "secure":true,
                "session":false,
                "size":51,
                "sourcePort":443,
                "sourceScheme":"Secure",
                "value":"cf=N&cg=2&cst=0&ct=42&hd=N&lng=10&oty=2&tzi=27"
            },
            {
                "domain":"www.365-868.com",
                "expires":1635444852.634254,
                "httpOnly":false,
                "name":"rmbs",
                "path":"/",
                "sameParty":false,
                "sameSite":"None",
                "secure":true,
                "session":false,
                "size":5,
                "sourcePort":443,
                "sourceScheme":"Secure",
                "value":"3"
            }
        ],
        "createTime":1620786891051
    },
    "msg":"Success"
}
```