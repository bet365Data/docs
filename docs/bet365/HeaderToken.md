# Get bet365 Token(X-Net-Sync-Term)


## HTTP Request 


### Request Example

```shell
curl -X POST -H "x-token: Bearer Please contact us by Telegram to get token" http:// request address +bet365/getHeaderdata
```

### Response Example
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