# PreMatchOverUnderList API For Bet365

# Interface

## 1) Request address

>http://api.bet365data.com/bet365/preMatch/overUnder?LangCode=1

## 2) Calling method: HTTP get

## 3) Interface description:

* Interface description details

## 4) Request parameters:

## GET parameters:

|Field name |Field description |Type |Required |Remarks |
| -------------|--------------|--------------| --------------| ------|
|LangCode|Game language|string|N (default is 1 English)|For details, please refer to LangCodeModel|



## Request Example
```zsh
curl --location --request GET 'http://api.bet365data.com/bet365/preMatch/overUnder?LangCode=2' \
--header 'x-token: Please contact us by Telegram to get token" http://api.bet365data.com/bet365/preMatch/overUnder?LangCode=1'
```

## LangCodeModel:
|LangType |LangCode |Remarks |
|-------------|--------------|-------------|
|English|1|-|
|Traditional Chinese|2|-|
|Español|3|-|
|Deutsch|5|-|
|Italiano|6|-|
|Dansk|7|-|
|Svenska|8|-|
|Norsk|9|-|
|Simplified Chinese|10||
|Български|19|-|
|Ελληνικά|20|-|
|Polski|21|-|
|Português|22|-|
|Română|23|-|
|Česky|24|-|
|Magyar|25|-|
|Slovenčina|26|-|
|Nederlands|28|-|
|Eesti|29|-|
|Русский|31|-|


## GET parameters:
|Field name |Field description |Type |Required |Remarks |
| -------------|--------------| -------------- |  -------------- | ------ |
|Code|interface code status |int|N|See CodeModel|
|Data|Competition Information|DataModel|N|See DataModel|
|Msg|interface code message|MsgModel|N|-|

#### DataModel parameters:

|Field name |Field description |Type |Required |Remarks |
| -------------| --------------| -------------- | -------------- | ------ |
|List|Game List Information|Array|N|See ListModel|
|Total|Total number of matches|int|N|-|
|Channel|Current market name|string|N|-|
|SyncTime|Data synchronization time|int64|N|-|


## ListModel:

|Field name |Field description |Type |Required |Remarks |
| -------------| --------------| -------------- | -------------- | ------|
|TeamID|Unique ID of the competition team|string|N|See ListModel|
|TeamIt|Can be used to place an order|string|N|Total number of matches|
|TeamMr|Team Heat|string|N|See LangCodeModel|
|TeamName|Team name|string|N|See LangCodeModel|
|Fi|Unique ID of the current game|string|N|For details, see LangCodeModel, which can be used to query the complete details of the game|
|Pd|Detailed page address|string|N|Domain + current information to enter the official website detailed competition page|
|Bc|Game time|int64|N|The game time depends on the region|
|League|League name|string|N|See LangCodeModel|
|Over|Large Object|N|See OverModel|
|Under|小|Object|N|See UnderModel|
|Vi|Is there a live broadcast|string|N|0 means unavailable, 1 means available|


## OverModel parameters:

|Field name |Field description |Type |Required |Remarks |
| -------------| --------------| -------------- | -------------- | ------ |
|Types||int|N|See ListModel|
|ID||int|N|Total number of matches|
|Fi||string|N|See LangCodeModel|
|Odd||int64|N|See LangCodeModel|

## UnderModel parameters:

|Field name |Field description |Type |Required |Remarks |
| -------------| --------------| -------------- | -------------- | ------|
|Types||int|N|See ListModel|
|ID||int|N|Total number of matches|
|Fi||string|N|See LangCodeModel|
|Odd||int64|N|See LangCodeModel|



## 5) Request to return result:
```json
{
    "code": 0,
    "data": {
        "list": [
            {
                "team_id": "PC1845689814",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104293273F3P56Q0",
                "team_mr": "14",
                "team_name": "Pakhtakor Tashkent Women v AGMK Women",
                "fi": "104293273",
                "pd": "/#/AC/B1/C1/D8/E104293273/F3/P^56/Q^0/",
                "bc": "20210622083000",
                "league": "Uzbekistan League Women",
                "over": {
                    "types": "Yes",
                    "id": "1845689814",
                    "fi": "104293273",
                    "odd": "1.222"
                },
                "under": {
                    "types": "No",
                    "id": "1845689820",
                    "fi": "104293273",
                    "odd": "4.200"
                }
            },
            {
                "team_id": "PC1846409767",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104303773F3P56Q0",
                "team_mr": "14",
                "team_name": "Rakow II Czestochowa v Odra Wodzislaw",
                "fi": "104303773",
                "pd": "/#/AC/B1/C1/D8/E104303773/F3/P^56/Q^0/",
                "bc": "20210622150000",
                "league": "Poland IV Liga",
                "over": {
                    "types": "Yes",
                    "id": "1846409767",
                    "fi": "104303773",
                    "odd": "1.500"
                },
                "under": {
                    "types": "No",
                    "id": "1846409769",
                    "fi": "104303773",
                    "odd": "2.500"
                }
            },
            {
                "team_id": "PC1844283528",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104269213F3P56Q0",
                "team_mr": "14",
                "team_name": "Paro FC v Paro Rinpung FC",
                "fi": "104269213",
                "pd": "/#/AC/B1/C1/D8/E104269213/F3/P^56/Q^0/",
                "bc": "20210622100000",
                "league": "Bhutan Premier League",
                "over": {
                    "types": "Yes",
                    "id": "1844283528",
                    "fi": "104269213",
                    "odd": "1.182"
                },
                "under": {
                    "types": "No",
                    "id": "1844283529",
                    "fi": "104269213",
                    "odd": "4.500"
                }
            },
            {
                "team_id": "PC1843258693",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104255849F3P56Q0",
                "team_mr": "71",
                "team_name": "Bohemians Dublin v Shamrock Rovers",
                "fi": "104255849",
                "pd": "/#/AC/B1/C1/D8/E104255849/F3/P^56/Q^0/",
                "bc": "20210621194500",
                "vi": "7",
                "league": "Republic of Ireland Premier Division",
                "over": {
                    "types": "Yes",
                    "id": "1843258693",
                    "fi": "104255849",
                    "odd": "2.150"
                },
                "under": {
                    "types": "No",
                    "id": "1843258698",
                    "fi": "104255849",
                    "odd": "1.667"
                }
            },
            {
                "team_id": "PC1845685252",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104293137F3P56Q0",
                "team_mr": "14",
                "team_name": "Fortis FC v Kawran Bazar Progoti",
                "fi": "104293137",
                "pd": "/#/AC/B1/C1/D8/E104293137/F3/P^56/Q^0/",
                "bc": "20210622140000",
                "league": "Bangladesh Championship League",
                "over": {
                    "types": "Yes",
                    "id": "1845685252",
                    "fi": "104293137",
                    "odd": "2.750"
                },
                "under": {
                    "types": "No",
                    "id": "1845685256",
                    "fi": "104293137",
                    "odd": "1.425"
                }
            },
            {
                "team_id": "PC1826835166",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104028576F3P56Q0",
                "team_mr": "19",
                "team_name": "FC Astana v Ordabasy Shymkent",
                "fi": "104028576",
                "pd": "/#/AC/B1/C1/D8/E104028576/F3/P^56/Q^0/",
                "bc": "20210622140000",
                "league": "Kazakhstan Premier League",
                "over": {
                    "types": "Yes",
                    "id": "1826835166",
                    "fi": "104028576",
                    "odd": "1.900"
                },
                "under": {
                    "types": "No",
                    "id": "1826835170",
                    "fi": "104028576",
                    "odd": "1.900"
                }
            },
            {
                "team_id": "PC1846328917",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104302889F3P56Q0",
                "team_mr": "22",
                "team_name": "1. FC Burg v SG Aumund Vegesack",
                "fi": "104302889",
                "pd": "/#/AC/B1/C1/D8/E104302889/F3/P^56/Q^0/",
                "bc": "20210621183000",
                "league": "Germany Landespokal",
                "over": {
                    "types": "Yes",
                    "id": "1846328917",
                    "fi": "104302889",
                    "odd": "1.444"
                },
                "under": {
                    "types": "No",
                    "id": "1846328920",
                    "fi": "104302889",
                    "odd": "2.700"
                }
            },
            {
                "team_id": "PC1845688371",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104293242F3P56Q0",
                "team_mr": "14",
                "team_name": "FK Yenisey Women v Krasnodar Women",
                "fi": "104293242",
                "pd": "/#/AC/B1/C1/D8/E104293242/F3/P^56/Q^0/",
                "bc": "20210622090000",
                "league": "Russia Premier Women",
                "over": {
                    "types": "Yes",
                    "id": "1845688371",
                    "fi": "104293242",
                    "odd": "1.900"
                },
                "under": {
                    "types": "No",
                    "id": "1845688376",
                    "fi": "104293242",
                    "odd": "1.900"
                }
            },
            {
                "team_id": "PC1838929913",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104189993F3P56Q0",
                "team_mr": "22",
                "team_name": "Politecnico J.I.C. v Inder Girardota",
                "fi": "104189993",
                "pd": "/#/AC/B1/C1/D8/E104189993/F3/P^56/Q^0/",
                "bc": "20210621180000",
                "league": "Colombia Regional League",
                "over": {
                    "types": "Yes",
                    "id": "1838929913",
                    "fi": "104189993",
                    "odd": "1.650"
                },
                "under": {
                    "types": "No",
                    "id": "1838929916",
                    "fi": "104189993",
                    "odd": "2.200"
                }
            },
            {
                "team_id": "PC1845689659",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104293269F3P56Q0",
                "team_mr": "14",
                "team_name": "Navbahor Women v Sevinch Women",
                "fi": "104293269",
                "pd": "/#/AC/B1/C1/D8/E104293269/F3/P^56/Q^0/",
                "bc": "20210622083000",
                "league": "Uzbekistan League Women",
                "over": {
                    "types": "Yes",
                    "id": "1845689659",
                    "fi": "104293269",
                    "odd": "1.182"
                },
                "under": {
                    "types": "No",
                    "id": "1845689660",
                    "fi": "104293269",
                    "odd": "4.500"
                }
            },
            {
                "team_id": "PC1838018017",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104180480F3P56Q0",
                "team_mr": "23",
                "team_name": "UAI Urquiza Women v River Plate Women",
                "fi": "104180480",
                "pd": "/#/AC/B1/C1/D8/E104180480/F3/P^56/Q^0/",
                "bc": "20210621183000",
                "vi": "7",
                "league": "Argentina Championship Women",
                "over": {
                    "types": "Yes",
                    "id": "1838018017",
                    "fi": "104180480",
                    "odd": "1.533"
                },
                "under": {
                    "types": "No",
                    "id": "1838018018",
                    "fi": "104180480",
                    "odd": "2.400"
                }
            },
            {
                "team_id": "PC1843684608",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104261963F3P56Q0",
                "team_mr": "14",
                "team_name": "Rayon Sports v Espoir FC",
                "fi": "104261963",
                "pd": "/#/AC/B1/C1/D8/E104261963/F3/P^56/Q^0/",
                "bc": "20210622140000",
                "league": "Rwanda National League",
                "over": {
                    "types": "Yes",
                    "id": "1843684608",
                    "fi": "104261963",
                    "odd": "1.950"
                },
                "under": {
                    "types": "No",
                    "id": "1843684616",
                    "fi": "104261963",
                    "odd": "1.850"
                }
            },
            {
                "team_id": "PC1843374121",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104257477F3P56Q0",
                "team_mr": "22",
                "team_name": "Cortulua v Deportes Quindio",
                "fi": "104257477",
                "pd": "/#/AC/B1/C1/D8/E104257477/F3/P^56/Q^0/",
                "bc": "20210621220000",
                "league": "Colombia Primera B",
                "over": {
                    "types": "Yes",
                    "id": "1843374121",
                    "fi": "104257477",
                    "odd": "2.100"
                },
                "under": {
                    "types": "No",
                    "id": "1843374126",
                    "fi": "104257477",
                    "odd": "1.700"
                }
            },
            {
                "team_id": "PC1838097542",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104181189F3P56Q0",
                "team_mr": "23",
                "team_name": "Throttur Reykjavik Women v Fylkir Reykjavik Women",
                "fi": "104181189",
                "pd": "/#/AC/B1/C1/D8/E104181189/F3/P^56/Q^0/",
                "bc": "20210621210000",
                "league": "Iceland Premier League Women",
                "over": {
                    "types": "Yes",
                    "id": "1838097542",
                    "fi": "104181189",
                    "odd": "1.400"
                },
                "under": {
                    "types": "No",
                    "id": "1838097556",
                    "fi": "104181189",
                    "odd": "2.875"
                }
            },
            {
                "team_id": "PC1805865455",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E103740845F3P56Q0",
                "team_mr": "16",
                "team_name": "Olympic Kingsway v UWA-Nedlands FC",
                "fi": "103740845",
                "pd": "/#/AC/B1/C1/D8/E103740845/F3/P^56/Q^0/",
                "bc": "20210622123000",
                "league": "Australia Western Australia State League 1",
                "over": {
                    "types": "Yes",
                    "id": "1805865455",
                    "fi": "103740845",
                    "odd": "1.444"
                },
                "under": {
                    "types": "No",
                    "id": "1805865456",
                    "fi": "103740845",
                    "odd": "2.700"
                }
            },
            {
                "team_id": "PC1838289774",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104183446F3P56Q0",
                "team_mr": "23",
                "team_name": "Santa Cruz RJ v Buzios",
                "fi": "104183446",
                "pd": "/#/AC/B1/C1/D8/E104183446/F3/P^56/Q^0/",
                "bc": "20210621190000",
                "league": "Brazil Campeonato Carioca C",
                "over": {
                    "types": "Yes",
                    "id": "1838289774",
                    "fi": "104183446",
                    "odd": "1.650"
                },
                "under": {
                    "types": "No",
                    "id": "1838289778",
                    "fi": "104183446",
                    "odd": "2.200"
                }
            },
            {
                "team_id": "PC1844151925",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104267568F3P56Q0",
                "team_mr": "4",
                "team_name": "MODFX (MOD) Esports v Im Not Over (PNZ) Esports",
                "fi": "104267568",
                "pd": "/#/AC/B1/C1/D8/E104267568/F3/P^56/Q^0/",
                "bc": "20210621170000",
                "vi": "7",
                "league": "Esoccer Liga Pro - 12 mins play",
                "over": {
                    "types": "Yes",
                    "id": "1844151925",
                    "fi": "104267568",
                    "odd": "1.170"
                },
                "under": {
                    "types": "No",
                    "id": "1844151940",
                    "fi": "104267568",
                    "odd": "4.600"
                }
            },
            {
                "team_id": "PC1844151992",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104267570F3P56Q0",
                "team_mr": "4",
                "team_name": "Tahcop73 (TAH) Esports v BlueMountState (BMS) Esports",
                "fi": "104267570",
                "pd": "/#/AC/B1/C1/D8/E104267570/F3/P^56/Q^0/",
                "bc": "20210621172500",
                "vi": "7",
                "league": "Esoccer Liga Pro - 12 mins play",
                "over": {
                    "types": "Yes",
                    "id": "1844151992",
                    "fi": "104267570",
                    "odd": "1.220"
                },
                "under": {
                    "types": "No",
                    "id": "1844151993",
                    "fi": "104267570",
                    "odd": "3.900"
                }
            },
            {
                "team_id": "PC1844571017",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104273603F3P56Q0",
                "team_mr": "22",
                "team_name": "Hapoel Ramot Menashe v Hapoel Sandala Gilboa",
                "fi": "104273603",
                "pd": "/#/AC/B1/C1/D8/E104273603/F3/P^56/Q^0/",
                "bc": "20210621180000",
                "league": "Israel Liga Bet North",
                "over": {
                    "types": "Yes",
                    "id": "1844571017",
                    "fi": "104273603",
                    "odd": "1.364"
                },
                "under": {
                    "types": "No",
                    "id": "1844571018",
                    "fi": "104273603",
                    "odd": "3.100"
                }
            },
            {
                "team_id": "PC1838097168",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104181184F3P56Q0",
                "team_mr": "23",
                "team_name": "Valur Reykjavik Women v Thor/KA Akureyri Women",
                "fi": "104181184",
                "pd": "/#/AC/B1/C1/D8/E104181184/F3/P^56/Q^0/",
                "bc": "20210621190000",
                "league": "Iceland Premier League Women",
                "over": {
                    "types": "Yes",
                    "id": "1838097168",
                    "fi": "104181184",
                    "odd": "1.300"
                },
                "under": {
                    "types": "No",
                    "id": "1838097173",
                    "fi": "104181184",
                    "odd": "3.500"
                }
            },
            {
                "team_id": "PC1803870841",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E103708415F3P56Q0",
                "team_mr": "71",
                "team_name": "Valerenga 2 v Baerum",
                "fi": "103708415",
                "pd": "/#/AC/B1/C1/D8/E103708415/F3/P^56/Q^0/",
                "bc": "20210621170000",
                "league": "Norway Division 2 Group 1",
                "over": {
                    "types": "Yes",
                    "id": "1803870841",
                    "fi": "103708415",
                    "odd": "1.571"
                },
                "under": {
                    "types": "No",
                    "id": "1803870842",
                    "fi": "103708415",
                    "odd": "2.350"
                }
            },
            {
                "team_id": "PC1844152878",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104267588F3P56Q0",
                "team_mr": "4",
                "team_name": "Saturn Rama (SAT) Esports v MODFX (MOD) Esports",
                "fi": "104267588",
                "pd": "/#/AC/B1/C1/D8/E104267588/F3/P^56/Q^0/",
                "bc": "20210621181500",
                "vi": "7",
                "league": "Esoccer Liga Pro - 12 mins play",
                "over": {
                    "types": "Yes",
                    "id": "1844152878",
                    "fi": "104267588",
                    "odd": "1.190"
                },
                "under": {
                    "types": "No",
                    "id": "1844152883",
                    "fi": "104267588",
                    "odd": "4.300"
                }
            },
            {
                "team_id": "PC1843684516",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104261959F3P56Q0",
                "team_mr": "19",
                "team_name": "Marines FC v Bugesera",
                "fi": "104261959",
                "pd": "/#/AC/B1/C1/D8/E104261959/F3/P^56/Q^0/",
                "bc": "20210622140000",
                "league": "Rwanda National League",
                "over": {
                    "types": "Yes",
                    "id": "1843684516",
                    "fi": "104261959",
                    "odd": "2.425"
                },
                "under": {
                    "types": "No",
                    "id": "1843684517",
                    "fi": "104261959",
                    "odd": "1.525"
                }
            },
            {
                "team_id": "PC1845862898",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104296014F3P56Q0",
                "team_mr": "4",
                "team_name": "Bayern (Zaha) Esports v Real Madrid (PrinceV) Esports",
                "fi": "104296014",
                "pd": "/#/AC/B1/C1/D8/E104296014/F3/P^56/Q^0/",
                "bc": "20210621171200",
                "vi": "7",
                "league": "Esoccer Battle - 8 mins play",
                "over": {
                    "types": "Yes",
                    "id": "1845862898",
                    "fi": "104296014",
                    "odd": "1.180"
                },
                "under": {
                    "types": "No",
                    "id": "1845862908",
                    "fi": "104296014",
                    "odd": "4.450"
                }
            },
            {
                "team_id": "PC1844158974",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104267694F3P56Q0",
                "team_mr": "4",
                "team_name": "Russia Today (RUS) Esports v Fints (FIN) Esports",
                "fi": "104267694",
                "pd": "/#/AC/B1/C1/D8/E104267694/F3/P^56/Q^0/",
                "bc": "20210621183000",
                "vi": "7",
                "league": "Esoccer Liga Pro - 12 mins play",
                "over": {
                    "types": "Yes",
                    "id": "1844158974",
                    "fi": "104267694",
                    "odd": "1.260"
                },
                "under": {
                    "types": "No",
                    "id": "1844158981",
                    "fi": "104267694",
                    "odd": "3.500"
                }
            },
            {
                "team_id": "PC1838725689",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104187330F3P56Q0",
                "team_mr": "71",
                "team_name": "Eskilstuna Utd Women v Linköpings FC Women",
                "fi": "104187330",
                "pd": "/#/AC/B1/C1/D8/E104187330/F3/P^56/Q^0/",
                "bc": "20210621180000",
                "league": "Sweden Damallsvenskan",
                "over": {
                    "types": "Yes",
                    "id": "1838725689",
                    "fi": "104187330",
                    "odd": "1.850"
                },
                "under": {
                    "types": "No",
                    "id": "1838725690",
                    "fi": "104187330",
                    "odd": "1.950"
                }
            },
            {
                "team_id": "PC1840923252",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104220913F3P56Q0",
                "team_mr": "22",
                "team_name": "Bjorninn v KA Asvellir",
                "fi": "104220913",
                "pd": "/#/AC/B1/C1/D8/E104220913/F3/P^56/Q^0/",
                "bc": "20210621213000",
                "league": "Iceland 4 Deild",
                "over": {
                    "types": "Yes",
                    "id": "1840923252",
                    "fi": "104220913",
                    "odd": "1.222"
                },
                "under": {
                    "types": "No",
                    "id": "1840923257",
                    "fi": "104220913",
                    "odd": "4.200"
                }
            },
            {
                "team_id": "PC1845689339",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104293261F3P56Q0",
                "team_mr": "19",
                "team_name": "Tanzania Prisons v Coastal Union",
                "fi": "104293261",
                "pd": "/#/AC/B1/C1/D8/E104293261/F3/P^56/Q^0/",
                "bc": "20210622140000",
                "league": "Tanzania Premier League",
                "over": {
                    "types": "Yes",
                    "id": "1845689339",
                    "fi": "104293261",
                    "odd": "2.750"
                },
                "under": {
                    "types": "No",
                    "id": "1845689348",
                    "fi": "104293261",
                    "odd": "1.425"
                }
            },
            {
                "team_id": "PC1845145196",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104283308F3P56Q0",
                "team_mr": "63",
                "team_name": "Johor Darul Takzim v Nagoya Grampus",
                "fi": "104283308",
                "pd": "/#/AC/B1/C1/D8/E104283308/F3/P^56/Q^0/",
                "bc": "20210622150000",
                "league": "AFC Champions League",
                "over": {
                    "types": "Yes",
                    "id": "1845145196",
                    "fi": "104283308",
                    "odd": "1.571"
                },
                "under": {
                    "types": "No",
                    "id": "1845145197",
                    "fi": "104283308",
                    "odd": "2.350"
                }
            },
            {
                "team_id": "PC1805535844",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E103735032F3P56Q0",
                "team_mr": "27",
                "team_name": "Santa Cruz FC v Jacuipense",
                "fi": "103735032",
                "pd": "/#/AC/B1/C1/D8/E103735032/F3/P^56/Q^0/",
                "bc": "20210622000000",
                "league": "Brazil Serie C",
                "over": {
                    "types": "Yes",
                    "id": "1805535844",
                    "fi": "103735032",
                    "odd": "2.350"
                },
                "under": {
                    "types": "No",
                    "id": "1805535845",
                    "fi": "103735032",
                    "odd": "1.571"
                }
            },
            {
                "team_id": "PC1733811030",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E102765211F3P56Q0",
                "team_mr": "147",
                "team_name": "Uruguay v Chile",
                "fi": "102765211",
                "pd": "/#/AC/B1/C1/D8/E102765211/F3/P^56/Q^0/",
                "bc": "20210621220000",
                "vi": "7",
                "league": "Copa America",
                "over": {
                    "types": "Yes",
                    "id": "1733811030",
                    "fi": "102765211",
                    "odd": "2.500"
                },
                "under": {
                    "types": "No",
                    "id": "1733811031",
                    "fi": "102765211",
                    "odd": "1.533"
                }
            },
            {
                "team_id": "PC1845690411",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104293290F3P56Q0",
                "team_mr": "14",
                "team_name": "Sogdiana Women v Metalourg Bekabad Women",
                "fi": "104293290",
                "pd": "/#/AC/B1/C1/D8/E104293290/F3/P^56/Q^0/",
                "bc": "20210622083000",
                "league": "Uzbekistan League Women",
                "over": {
                    "types": "Yes",
                    "id": "1845690411",
                    "fi": "104293290",
                    "odd": "1.143"
                },
                "under": {
                    "types": "No",
                    "id": "1845690415",
                    "fi": "104293290",
                    "odd": "5.500"
                }
            },
            {
                "team_id": "PC1805330378",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E103731381F3P56Q0",
                "team_mr": "71",
                "team_name": "Vikingur Reykjavik v KR Reykjavik",
                "fi": "103731381",
                "pd": "/#/AC/B1/C1/D8/E103731381/F3/P^56/Q^0/",
                "bc": "20210621201500",
                "vi": "7",
                "league": "Iceland Premier League",
                "over": {
                    "types": "Yes",
                    "id": "1805330378",
                    "fi": "103731381",
                    "odd": "1.900"
                },
                "under": {
                    "types": "No",
                    "id": "1805330382",
                    "fi": "103731381",
                    "odd": "1.900"
                }
            },
            {
                "team_id": "PC1784064109",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E103437925F3P56Q0",
                "team_mr": "91",
                "team_name": "Atletico Mineiro v Chapecoense",
                "fi": "103437925",
                "pd": "/#/AC/B1/C1/D8/E103437925/F3/P^56/Q^0/",
                "bc": "20210622000000",
                "vi": "7",
                "league": "Brazil Serie A",
                "over": {
                    "types": "Yes",
                    "id": "1784064109",
                    "fi": "103437925",
                    "odd": "1.750"
                },
                "under": {
                    "types": "No",
                    "id": "1784064116",
                    "fi": "103437925",
                    "odd": "2.050"
                }
            },
            {
                "team_id": "PC1833647123",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104124137F3P56Q0",
                "team_mr": "23",
                "team_name": "Wallidan FC v Elite United",
                "fi": "104124137",
                "pd": "/#/AC/B1/C1/D8/E104124137/F3/P^56/Q^0/",
                "bc": "20210621170000",
                "league": "Gambia GFA League",
                "over": {
                    "types": "Yes",
                    "id": "1833647123",
                    "fi": "104124137",
                    "odd": "2.700"
                },
                "under": {
                    "types": "No",
                    "id": "1833647124",
                    "fi": "104124137",
                    "odd": "1.444"
                }
            },
            {
                "team_id": "PC1845685777",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104293153F3P56Q0",
                "team_mr": "2",
                "team_name": "Pohja-Tallinna JK Volta U19 v JK Viljandi Tulevik U19",
                "fi": "104293153",
                "pd": "/#/AC/B1/C1/D8/E104293153/F3/P^56/Q^0/",
                "bc": "20210622150000",
                "league": "Estonia U19 League",
                "over": {
                    "types": "Yes",
                    "id": "1845685777",
                    "fi": "104293153",
                    "odd": "1.140"
                },
                "under": {
                    "types": "No",
                    "id": "1845685780",
                    "fi": "104293153",
                    "odd": "5.750"
                }
            },
            {
                "team_id": "PC1845528930",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104290184F3P56Q0",
                "team_mr": "22",
                "team_name": "FC Inter Nouakchott v AS Douanes Nouakchott",
                "fi": "104290184",
                "pd": "/#/AC/B1/C1/D8/E104290184/F3/P^56/Q^0/",
                "bc": "20210621183000",
                "league": "Mauritania Division 2",
                "over": {
                    "types": "Yes",
                    "id": "1845528930",
                    "fi": "104290184",
                    "odd": "1.950"
                },
                "under": {
                    "types": "No",
                    "id": "1845528931",
                    "fi": "104290184",
                    "odd": "1.850"
                }
            },
            {
                "team_id": "PC1844732659",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104276038F3P56Q0",
                "team_mr": "14",
                "team_name": "Utah Arrows SC Women v Utah Surf Women",
                "fi": "104276038",
                "pd": "/#/AC/B1/C1/D8/E104276038/F3/P^56/Q^0/",
                "bc": "20210622020000",
                "league": "USA WPSL Women",
                "over": {
                    "types": "Yes",
                    "id": "1844732659",
                    "fi": "104276038",
                    "odd": "1.150"
                },
                "under": {
                    "types": "No",
                    "id": "1844732667",
                    "fi": "104276038",
                    "odd": "5.500"
                }
            },
            {
                "team_id": "PC1826594591",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104023906F3P56Q0",
                "team_mr": "19",
                "team_name": "Athletic Bilbao Women v Barcelona Women",
                "fi": "104023906",
                "pd": "/#/AC/B1/C1/D8/E104023906/F3/P^56/Q^0/",
                "bc": "20210622150000",
                "league": "Spain Primera Women",
                "over": {
                    "types": "Yes",
                    "id": "1826594591",
                    "fi": "104023906",
                    "odd": "1.090"
                },
                "under": {
                    "types": "No",
                    "id": "1826594592",
                    "fi": "104023906",
                    "odd": "7.800"
                }
            },
            {
                "team_id": "PC1845861870",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104295998F3P56Q0",
                "team_mr": "4",
                "team_name": "Real Madrid (PrinceV) Esports v Barcelona (Sinner2k) Esports",
                "fi": "104295998",
                "pd": "/#/AC/B1/C1/D8/E104295998/F3/P^56/Q^0/",
                "bc": "20210621170000",
                "league": "Esoccer Battle - 8 mins play",
                "over": {
                    "types": "Yes",
                    "id": "1845861870",
                    "fi": "104295998",
                    "odd": "1.130"
                },
                "under": {
                    "types": "No",
                    "id": "1845861876",
                    "fi": "104295998",
                    "odd": "5.400"
                }
            },
            {
                "team_id": "PC1843374245",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104257479F3P56Q0",
                "team_mr": "14",
                "team_name": "SV Centro Social Dep Barber v SV SUBT",
                "fi": "104257479",
                "pd": "/#/AC/B1/C1/D8/E104257479/F3/P^56/Q^0/",
                "bc": "20210622010000",
                "league": "Curacao League",
                "over": {
                    "types": "Yes",
                    "id": "1843374245",
                    "fi": "104257479",
                    "odd": "1.400"
                },
                "under": {
                    "types": "No",
                    "id": "1843374246",
                    "fi": "104257479",
                    "odd": "2.850"
                }
            },
            {
                "team_id": "PC1845864250",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104296031F3P56Q0",
                "team_mr": "4",
                "team_name": "Liverpool (Muromets) Esports v Bayern (Zaha) Esports",
                "fi": "104296031",
                "pd": "/#/AC/B1/C1/D8/E104296031/F3/P^56/Q^0/",
                "bc": "20210621172400",
                "vi": "7",
                "league": "Esoccer Battle - 8 mins play",
                "over": {
                    "types": "Yes",
                    "id": "1845864250",
                    "fi": "104296031",
                    "odd": "1.190"
                },
                "under": {
                    "types": "No",
                    "id": "1845864251",
                    "fi": "104296031",
                    "odd": "4.300"
                }
            },
            {
                "team_id": "PC1845145117",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104283304F3P56Q0",
                "team_mr": "63",
                "team_name": "Rachaburi FC v Pohang Steelers",
                "fi": "104283304",
                "pd": "/#/AC/B1/C1/D8/E104283304/F3/P^56/Q^0/",
                "bc": "20210622110000",
                "league": "AFC Champions League",
                "over": {
                    "types": "Yes",
                    "id": "1845145117",
                    "fi": "104283304",
                    "odd": "1.600"
                },
                "under": {
                    "types": "No",
                    "id": "1845145121",
                    "fi": "104283304",
                    "odd": "2.300"
                }
            },
            {
                "team_id": "PC1846332742",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104302919F3P56Q0",
                "team_mr": "22",
                "team_name": "FC Roland Bremen 2011 v Brinkumer SV",
                "fi": "104302919",
                "pd": "/#/AC/B1/C1/D8/E104302919/F3/P^56/Q^0/",
                "bc": "20210621183000",
                "league": "Germany Landespokal",
                "over": {
                    "types": "Yes",
                    "id": "1846332742",
                    "fi": "104302919",
                    "odd": "1.125"
                },
                "under": {
                    "types": "No",
                    "id": "1846332774",
                    "fi": "104302919",
                    "odd": "6.000"
                }
            },
            {
                "team_id": "PC1845685746",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104293151F3P56Q0",
                "team_mr": "2",
                "team_name": "Keila JK U19 v JK Nomme United U19",
                "fi": "104293151",
                "pd": "/#/AC/B1/C1/D8/E104293151/F3/P^56/Q^0/",
                "bc": "20210622150000",
                "league": "Estonia U19 League",
                "over": {
                    "types": "Yes",
                    "id": "1845685746",
                    "fi": "104293151",
                    "odd": "1.140"
                },
                "under": {
                    "types": "No",
                    "id": "1845685747",
                    "fi": "104293151",
                    "odd": "5.750"
                }
            },
            {
                "team_id": "PC1838926032",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104189930F3P56Q0",
                "team_mr": "18",
                "team_name": "CD Los Del Sur v Sellos Colombianos",
                "fi": "104189930",
                "pd": "/#/AC/B1/C1/D8/E104189930/F3/P^56/Q^0/",
                "bc": "20210621174500",
                "league": "Colombia Regional League",
                "over": {
                    "types": "Yes",
                    "id": "1838926032",
                    "fi": "104189930",
                    "odd": "1.500"
                },
                "under": {
                    "types": "No",
                    "id": "1838926033",
                    "fi": "104189930",
                    "odd": "2.500"
                }
            },
            {
                "team_id": "PC1844158664",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104267683F3P56Q0",
                "team_mr": "4",
                "team_name": "Confession (CFI) Esports v Trader FC (TRD) Esports",
                "fi": "104267683",
                "pd": "/#/AC/B1/C1/D8/E104267683/F3/P^56/Q^0/",
                "bc": "20210621180500",
                "vi": "7",
                "league": "Esoccer Liga Pro - 12 mins play",
                "over": {
                    "types": "Yes",
                    "id": "1844158664",
                    "fi": "104267683",
                    "odd": "1.150"
                },
                "under": {
                    "types": "No",
                    "id": "1844158667",
                    "fi": "104267683",
                    "odd": "5.000"
                }
            },
            {
                "team_id": "PC1838097880",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104181191F3P56Q0",
                "team_mr": "23",
                "team_name": "Selfoss Women v Breidablik Women",
                "fi": "104181191",
                "pd": "/#/AC/B1/C1/D8/E104181191/F3/P^56/Q^0/",
                "bc": "20210621210000",
                "league": "Iceland Premier League Women",
                "over": {
                    "types": "Yes",
                    "id": "1838097880",
                    "fi": "104181191",
                    "odd": "1.250"
                },
                "under": {
                    "types": "No",
                    "id": "1838097891",
                    "fi": "104181191",
                    "odd": "4.000"
                }
            },
            {
                "team_id": "PC1805272261",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E103730336F3P56Q0",
                "team_mr": "78",
                "team_name": "GIF Sundsvall v Västerås SK FK",
                "fi": "103730336",
                "pd": "/#/AC/B1/C1/D8/E103730336/F3/P^56/Q^0/",
                "bc": "20210621180000",
                "vi": "7",
                "league": "Sweden Superettan",
                "over": {
                    "types": "Yes",
                    "id": "1805272261",
                    "fi": "103730336",
                    "odd": "1.650"
                },
                "under": {
                    "types": "No",
                    "id": "1805272262",
                    "fi": "103730336",
                    "odd": "2.200"
                }
            },
            {
                "team_id": "PC1803975515",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E103709694F3P56Q0",
                "team_mr": "71",
                "team_name": "Taby FK v Hammarby TFF",
                "fi": "103709694",
                "pd": "/#/AC/B1/C1/D8/E103709694/F3/P^56/Q^0/",
                "bc": "20210621180000",
                "vi": "7",
                "league": "Sweden 1.div Norra",
                "over": {
                    "types": "Yes",
                    "id": "1803975515",
                    "fi": "103709694",
                    "odd": "1.400"
                },
                "under": {
                    "types": "No",
                    "id": "1803975530",
                    "fi": "103709694",
                    "odd": "2.875"
                }
            },
            {
                "team_id": "PC1845687623",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104293213F3P56Q0",
                "team_mr": "14",
                "team_name": "FC Abdysh-Ata Kant v FC Dordoi Bishkek",
                "fi": "104293213",
                "pd": "/#/AC/B1/C1/D8/E104293213/F3/P^56/Q^0/",
                "bc": "20210622130000",
                "league": "Kyrgyzstan Top Liga",
                "over": {
                    "types": "Yes",
                    "id": "1845687623",
                    "fi": "104293213",
                    "odd": "1.550"
                },
                "under": {
                    "types": "No",
                    "id": "1845687624",
                    "fi": "104293213",
                    "odd": "2.375"
                }
            },
            {
                "team_id": "PC1844732755",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104276040F3P56Q0",
                "team_mr": "22",
                "team_name": "ESC Geestemünde v OSC Bremerhaven",
                "fi": "104276040",
                "pd": "/#/AC/B1/C1/D8/E104276040/F3/P^56/Q^0/",
                "bc": "20210621183000",
                "league": "Germany Landespokal",
                "over": {
                    "types": "Yes",
                    "id": "1844732755",
                    "fi": "104276040",
                    "odd": "1.200"
                },
                "under": {
                    "types": "No",
                    "id": "1844732756",
                    "fi": "104276040",
                    "odd": "4.333"
                }
            },
            {
                "team_id": "PC1733811123",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E102765214F3P56Q0",
                "team_mr": "147",
                "team_name": "Argentina v Paraguay",
                "fi": "102765214",
                "pd": "/#/AC/B1/C1/D8/E102765214/F3/P^56/Q^0/",
                "bc": "20210622010000",
                "vi": "7",
                "league": "Copa America",
                "over": {
                    "types": "Yes",
                    "id": "1733811123",
                    "fi": "102765214",
                    "odd": "2.200"
                },
                "under": {
                    "types": "No",
                    "id": "1733811127",
                    "fi": "102765214",
                    "odd": "1.667"
                }
            },
            {
                "team_id": "PC1838071192",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104181022F3P56Q0",
                "team_mr": "22",
                "team_name": "Deportivo Guaymallen v Lujan Sport Club Mendoza",
                "fi": "104181022",
                "pd": "/#/AC/B1/C1/D8/E104181022/F3/P^56/Q^0/",
                "bc": "20210621193000",
                "league": "Argentina Regional League",
                "over": {
                    "types": "Yes",
                    "id": "1838071192",
                    "fi": "104181022",
                    "odd": "1.600"
                },
                "under": {
                    "types": "No",
                    "id": "1838071197",
                    "fi": "104181022",
                    "odd": "2.300"
                }
            },
            {
                "team_id": "PC1843258373",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104255839F3P56Q0",
                "team_mr": "71",
                "team_name": "Drogheda United v Dundalk",
                "fi": "104255839",
                "pd": "/#/AC/B1/C1/D8/E104255839/F3/P^56/Q^0/",
                "bc": "20210621194500",
                "vi": "7",
                "league": "Republic of Ireland Premier Division",
                "over": {
                    "types": "Yes",
                    "id": "1843258373",
                    "fi": "104255839",
                    "odd": "1.800"
                },
                "under": {
                    "types": "No",
                    "id": "1843258374",
                    "fi": "104255839",
                    "odd": "2.000"
                }
            },
            {
                "team_id": "PC1840804665",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104219686F3P56Q0",
                "team_mr": "18",
                "team_name": "Vidir Gardur v Ellidi",
                "fi": "104219686",
                "pd": "/#/AC/B1/C1/D8/E104219686/F3/P^56/Q^0/",
                "bc": "20210621210000",
                "league": "Iceland 3 Deild",
                "over": {
                    "types": "Yes",
                    "id": "1840804665",
                    "fi": "104219686",
                    "odd": "1.333"
                },
                "under": {
                    "types": "No",
                    "id": "1840804666",
                    "fi": "104219686",
                    "odd": "3.400"
                }
            },
            {
                "team_id": "PC1781900130",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E103405262F3P56Q0",
                "team_mr": "71",
                "team_name": "Oygarden v Rosenborg 2",
                "fi": "103405262",
                "pd": "/#/AC/B1/C1/D8/E103405262/F3/P^56/Q^0/",
                "bc": "20210621180000",
                "league": "Norway Division 2 Group 2",
                "over": {
                    "types": "Yes",
                    "id": "1781900130",
                    "fi": "103405262",
                    "odd": "1.250"
                },
                "under": {
                    "types": "No",
                    "id": "1781900160",
                    "fi": "103405262",
                    "odd": "4.000"
                }
            },
            {
                "team_id": "PC1840913318",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104220844F3P56Q0",
                "team_mr": "22",
                "team_name": "Al Shorta SC v Al Naft SC",
                "fi": "104220844",
                "pd": "/#/AC/B1/C1/D8/E104220844/F3/P^56/Q^0/",
                "bc": "20210621171500",
                "league": "Iraq League",
                "over": {
                    "types": "Yes",
                    "id": "1840913318",
                    "fi": "104220844",
                    "odd": "2.400"
                },
                "under": {
                    "types": "No",
                    "id": "1840913325",
                    "fi": "104220844",
                    "odd": "1.533"
                }
            },
            {
                "team_id": "PC1845687662",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104293215F3P56Q0",
                "team_mr": "14",
                "team_name": "Nevezis v Suduva Marijampole",
                "fi": "104293215",
                "pd": "/#/AC/B1/C1/D8/E104293215/F3/P^56/Q^0/",
                "bc": "20210622160000",
                "league": "Lithuania Cup",
                "over": {
                    "types": "Yes",
                    "id": "1845687662",
                    "fi": "104293215",
                    "odd": "1.500"
                },
                "under": {
                    "types": "No",
                    "id": "1845687663",
                    "fi": "104293215",
                    "odd": "2.500"
                }
            },
            {
                "team_id": "PC1845689636",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104293267F3P56Q0",
                "team_mr": "14",
                "team_name": "Lokomotiv Tashkent Women v FK Buxoro Women",
                "fi": "104293267",
                "pd": "/#/AC/B1/C1/D8/E104293267/F3/P^56/Q^0/",
                "bc": "20210622083000",
                "league": "Uzbekistan League Women",
                "over": {
                    "types": "Yes",
                    "id": "1845689636",
                    "fi": "104293267",
                    "odd": "1.500"
                },
                "under": {
                    "types": "No",
                    "id": "1845689637",
                    "fi": "104293267",
                    "odd": "2.500"
                }
            },
            {
                "team_id": "PC1845685612",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104293149F3P56Q0",
                "team_mr": "14",
                "team_name": "Ida-Virumaa FC Alliance v Tallinna JK Legion II",
                "fi": "104293149",
                "pd": "/#/AC/B1/C1/D8/E104293149/F3/P^56/Q^0/",
                "bc": "20210622150000",
                "league": "Estonia Esiliiga B",
                "over": {
                    "types": "Yes",
                    "id": "1845685612",
                    "fi": "104293149",
                    "odd": "1.220"
                },
                "under": {
                    "types": "No",
                    "id": "1845685613",
                    "fi": "104293149",
                    "odd": "4.150"
                }
            },
            {
                "team_id": "PC1715112754",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E102526954F3P56Q0",
                "team_mr": "156",
                "team_name": "Russia v Denmark",
                "fi": "102526954",
                "pd": "/#/AC/B1/C1/D8/E102526954/F3/P^56/Q^0/",
                "bc": "20210621200000",
                "au": "5",
                "league": "Euro 2020",
                "over": {
                    "types": "Yes",
                    "id": "1715112754",
                    "fi": "102526954",
                    "odd": "2.000"
                },
                "under": {
                    "types": "No",
                    "id": "1715112761",
                    "fi": "102526954",
                    "odd": "1.800"
                }
            },
            {
                "team_id": "PC1845689451",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104293263F3P56Q0",
                "team_mr": "19",
                "team_name": "Simba Sports Club v Mbeya City",
                "fi": "104293263",
                "pd": "/#/AC/B1/C1/D8/E104293263/F3/P^56/Q^0/",
                "bc": "20210622140000",
                "league": "Tanzania Premier League",
                "over": {
                    "types": "Yes",
                    "id": "1845689451",
                    "fi": "104293263",
                    "odd": "1.800"
                },
                "under": {
                    "types": "No",
                    "id": "1845689453",
                    "fi": "104293263",
                    "odd": "2.000"
                }
            },
            {
                "team_id": "PC1845850325",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104295903F3P56Q0",
                "team_mr": "14",
                "team_name": "Western Strikers Reserves v Adelaide Cobras Reserves",
                "fi": "104295903",
                "pd": "/#/AC/B1/C1/D8/E104295903/F3/P^56/Q^0/",
                "bc": "20210622103000",
                "league": "Australia South Australia State League Reserves",
                "over": {
                    "types": "Yes",
                    "id": "1845850325",
                    "fi": "104295903",
                    "odd": "1.286"
                },
                "under": {
                    "types": "No",
                    "id": "1845850330",
                    "fi": "104295903",
                    "odd": "3.600"
                }
            },
            {
                "team_id": "PC1844158535",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104267673F3P56Q0",
                "team_mr": "4",
                "team_name": "Fints (FIN) Esports v Confession (CFI) Esports",
                "fi": "104267673",
                "pd": "/#/AC/B1/C1/D8/E104267673/F3/P^56/Q^0/",
                "bc": "20210621171500",
                "vi": "7",
                "league": "Esoccer Liga Pro - 12 mins play",
                "over": {
                    "types": "Yes",
                    "id": "1844158535",
                    "fi": "104267673",
                    "odd": "1.190"
                },
                "under": {
                    "types": "No",
                    "id": "1844158541",
                    "fi": "104267673",
                    "odd": "4.300"
                }
            },
            {
                "team_id": "PC1843258567",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104255845F3P56Q0",
                "team_mr": "71",
                "team_name": "Derry City v Sligo Rovers",
                "fi": "104255845",
                "pd": "/#/AC/B1/C1/D8/E104255845/F3/P^56/Q^0/",
                "bc": "20210621194500",
                "vi": "7",
                "league": "Republic of Ireland Premier Division",
                "over": {
                    "types": "Yes",
                    "id": "1843258567",
                    "fi": "104255845",
                    "odd": "2.500"
                },
                "under": {
                    "types": "No",
                    "id": "1843258568",
                    "fi": "104255845",
                    "odd": "1.500"
                }
            },
            {
                "team_id": "PC1805777110",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E103739363F3P56Q0",
                "team_mr": "27",
                "team_name": "Esteghlal Khuzestan v Fajr Shahid Sepasi",
                "fi": "103739363",
                "pd": "/#/AC/B1/C1/D8/E103739363/F3/P^56/Q^0/",
                "bc": "20210621172000",
                "league": "Iran Div 1",
                "over": {
                    "types": "Yes",
                    "id": "1805777110",
                    "fi": "103739363",
                    "odd": "2.875"
                },
                "under": {
                    "types": "No",
                    "id": "1805777114",
                    "fi": "103739363",
                    "odd": "1.400"
                }
            },
            {
                "team_id": "PC1805332238",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E103731430F3P56Q0",
                "team_mr": "64",
                "team_name": "Riga FC v Valmiera FC",
                "fi": "103731430",
                "pd": "/#/AC/B1/C1/D8/E103731430/F3/P^56/Q^0/",
                "bc": "20210621180000",
                "league": "Latvia Virsliga",
                "over": {
                    "types": "Yes",
                    "id": "1805332238",
                    "fi": "103731430",
                    "odd": "1.650"
                },
                "under": {
                    "types": "No",
                    "id": "1805332239",
                    "fi": "103731430",
                    "odd": "2.200"
                }
            },
            {
                "team_id": "PC1845688482",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104293246F3P56Q0",
                "team_mr": "14",
                "team_name": "Zvezda 2005 Perm Women v CSKA Moscow Women",
                "fi": "104293246",
                "pd": "/#/AC/B1/C1/D8/E104293246/F3/P^56/Q^0/",
                "bc": "20210622150000",
                "league": "Russia Premier Women",
                "over": {
                    "types": "Yes",
                    "id": "1845688482",
                    "fi": "104293246",
                    "odd": "2.000"
                },
                "under": {
                    "types": "No",
                    "id": "1845688488",
                    "fi": "104293246",
                    "odd": "1.800"
                }
            },
            {
                "team_id": "PC1843684211",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104261954F3P56Q0",
                "team_mr": "14",
                "team_name": "APR FC v Rutsiro FC",
                "fi": "104261954",
                "pd": "/#/AC/B1/C1/D8/E104261954/F3/P^56/Q^0/",
                "bc": "20210622140000",
                "league": "Rwanda National League",
                "over": {
                    "types": "Yes",
                    "id": "1843684211",
                    "fi": "104261954",
                    "odd": "1.700"
                },
                "under": {
                    "types": "No",
                    "id": "1843684215",
                    "fi": "104261954",
                    "odd": "2.100"
                }
            },
            {
                "team_id": "PC1838725754",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104187332F3P56Q0",
                "team_mr": "71",
                "team_name": "FC Rosengård Women v Vittsjö GIK Women",
                "fi": "104187332",
                "pd": "/#/AC/B1/C1/D8/E104187332/F3/P^56/Q^0/",
                "bc": "20210621180000",
                "league": "Sweden Damallsvenskan",
                "over": {
                    "types": "Yes",
                    "id": "1838725754",
                    "fi": "104187332",
                    "odd": "1.600"
                },
                "under": {
                    "types": "No",
                    "id": "1838725757",
                    "fi": "104187332",
                    "odd": "2.300"
                }
            },
            {
                "team_id": "PC1844152447",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104267581F3P56Q0",
                "team_mr": "4",
                "team_name": "Im Not Over (PNZ) Esports v Tahcop73 (TAH) Esports",
                "fi": "104267581",
                "pd": "/#/AC/B1/C1/D8/E104267581/F3/P^56/Q^0/",
                "bc": "20210621175000",
                "vi": "7",
                "league": "Esoccer Liga Pro - 12 mins play",
                "over": {
                    "types": "Yes",
                    "id": "1844152447",
                    "fi": "104267581",
                    "odd": "1.240"
                },
                "under": {
                    "types": "No",
                    "id": "1844152460",
                    "fi": "104267581",
                    "odd": "3.700"
                }
            },
            {
                "team_id": "PC1715113190",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E102526959F3P56Q0",
                "team_mr": "156",
                "team_name": "Finland v Belgium",
                "fi": "102526959",
                "pd": "/#/AC/B1/C1/D8/E102526959/F3/P^56/Q^0/",
                "bc": "20210621200000",
                "au": "5",
                "league": "Euro 2020",
                "over": {
                    "types": "Yes",
                    "id": "1715113190",
                    "fi": "102526959",
                    "odd": "1.909"
                },
                "under": {
                    "types": "No",
                    "id": "1715113216",
                    "fi": "102526959",
                    "odd": "1.909"
                }
            },
            {
                "team_id": "PC1844570085",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104273590F3P56Q0",
                "team_mr": "27",
                "team_name": "Iraq U20 v Comoros U20",
                "fi": "104273590",
                "pd": "/#/AC/B1/C1/D8/E104273590/F3/P^56/Q^0/",
                "bc": "20210621180000",
                "league": "Arab Cup U20",
                "over": {
                    "types": "Yes",
                    "id": "1844570085",
                    "fi": "104273590",
                    "odd": "1.533"
                },
                "under": {
                    "types": "No",
                    "id": "1844570090",
                    "fi": "104273590",
                    "odd": "2.400"
                }
            },
            {
                "team_id": "PC1845862342",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104296010F3P56Q0",
                "team_mr": "4",
                "team_name": "PSG (Xameleon) Esports v Bayern (Zaha) Esports",
                "fi": "104296010",
                "pd": "/#/AC/B1/C1/D8/E104296010/F3/P^56/Q^0/",
                "bc": "20210621170000",
                "league": "Esoccer Battle - 8 mins play",
                "over": {
                    "types": "Yes",
                    "id": "1845862342",
                    "fi": "104296010",
                    "odd": "1.475"
                },
                "under": {
                    "types": "No",
                    "id": "1845862343",
                    "fi": "104296010",
                    "odd": "2.475"
                }
            },
            {
                "team_id": "PC1843258538",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104255843F3P56Q0",
                "team_mr": "71",
                "team_name": "St Patrick's Athletic v Finn Harps",
                "fi": "104255843",
                "pd": "/#/AC/B1/C1/D8/E104255843/F3/P^56/Q^0/",
                "bc": "20210621194500",
                "league": "Republic of Ireland Premier Division",
                "over": {
                    "types": "Yes",
                    "id": "1843258538",
                    "fi": "104255843",
                    "odd": "2.250"
                },
                "under": {
                    "types": "No",
                    "id": "1843258541",
                    "fi": "104255843",
                    "odd": "1.615"
                }
            },
            {
                "team_id": "PC1844732930",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104276047F3P56Q0",
                "team_mr": "22",
                "team_name": "SC Vahr Blockdiek v VfL 07 Bremen",
                "fi": "104276047",
                "pd": "/#/AC/B1/C1/D8/E104276047/F3/P^56/Q^0/",
                "bc": "20210621183000",
                "league": "Germany Landespokal",
                "over": {
                    "types": "Yes",
                    "id": "1844732930",
                    "fi": "104276047",
                    "odd": "1.200"
                },
                "under": {
                    "types": "No",
                    "id": "1844732931",
                    "fi": "104276047",
                    "odd": "4.333"
                }
            },
            {
                "team_id": "PC1838096786",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104181182F3P56Q0",
                "team_mr": "23",
                "team_name": "Stjarnan Women v IBV Vestmannaeyjar Women",
                "fi": "104181182",
                "pd": "/#/AC/B1/C1/D8/E104181182/F3/P^56/Q^0/",
                "bc": "20210621190000",
                "league": "Iceland Premier League Women",
                "over": {
                    "types": "Yes",
                    "id": "1838096786",
                    "fi": "104181182",
                    "odd": "1.444"
                },
                "under": {
                    "types": "No",
                    "id": "1838096793",
                    "fi": "104181182",
                    "odd": "2.700"
                }
            },
            {
                "team_id": "PC1805865325",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E103740843F3P56Q0",
                "team_mr": "14",
                "team_name": "Mandurah City v Swan United",
                "fi": "103740843",
                "pd": "/#/AC/B1/C1/D8/E103740843/F3/P^56/Q^0/",
                "bc": "20210622120000",
                "league": "Australia Western Australia State League 1",
                "over": {
                    "types": "Yes",
                    "id": "1805865325",
                    "fi": "103740843",
                    "odd": "1.400"
                },
                "under": {
                    "types": "No",
                    "id": "1805865326",
                    "fi": "103740843",
                    "odd": "2.850"
                }
            },
            {
                "team_id": "PC1845684386",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104293110F3P56Q0",
                "team_mr": "19",
                "team_name": "Boca Juniors Women v San Lorenzo Women",
                "fi": "104293110",
                "pd": "/#/AC/B1/C1/D8/E104293110/F3/P^56/Q^0/",
                "bc": "20210622140000",
                "league": "Argentina Championship Women",
                "over": {
                    "types": "Yes",
                    "id": "1845684386",
                    "fi": "104293110",
                    "odd": "1.550"
                },
                "under": {
                    "types": "No",
                    "id": "1845684389",
                    "fi": "104293110",
                    "odd": "2.375"
                }
            },
            {
                "team_id": "PC1844570409",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104273593F3P56Q0",
                "team_mr": "27",
                "team_name": "Saudi Arabia U20 v Uzbekistan U20",
                "fi": "104273593",
                "pd": "/#/AC/B1/C1/D8/E104273593/F3/P^56/Q^0/",
                "bc": "20210621180000",
                "league": "Arab Cup U20",
                "over": {
                    "types": "Yes",
                    "id": "1844570409",
                    "fi": "104273593",
                    "odd": "2.150"
                },
                "under": {
                    "types": "No",
                    "id": "1844570416",
                    "fi": "104273593",
                    "odd": "1.667"
                }
            },
            {
                "team_id": "PC1844608408",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104273997F3P56Q0",
                "team_mr": "22",
                "team_name": "Blumenthaler SV v Union 60 Bremen",
                "fi": "104273997",
                "pd": "/#/AC/B1/C1/D8/E104273997/F3/P^56/Q^0/",
                "bc": "20210621183000",
                "league": "Germany Landespokal",
                "over": {
                    "types": "Yes",
                    "id": "1844608408",
                    "fi": "104273997",
                    "odd": "1.125"
                },
                "under": {
                    "types": "No",
                    "id": "1844608498",
                    "fi": "104273997",
                    "odd": "6.000"
                }
            },
            {
                "team_id": "PC1845863264",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104296016F3P56Q0",
                "team_mr": "4",
                "team_name": "Barcelona (Sinner2k) Esports v Liverpool (Muromets) Esports",
                "fi": "104296016",
                "pd": "/#/AC/B1/C1/D8/E104296016/F3/P^56/Q^0/",
                "bc": "20210621171200",
                "vi": "7",
                "league": "Esoccer Battle - 8 mins play",
                "over": {
                    "types": "Yes",
                    "id": "1845863264",
                    "fi": "104296016",
                    "odd": "1.200"
                },
                "under": {
                    "types": "No",
                    "id": "1845863267",
                    "fi": "104296016",
                    "odd": "4.150"
                }
            },
            {
                "team_id": "PC1846398858",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104303597F3P56Q0",
                "team_mr": "22",
                "team_name": "Olimpija Ljubljana v Neftchi Baku",
                "fi": "104303597",
                "pd": "/#/AC/B1/C1/D8/E104303597/F3/P^56/Q^0/",
                "bc": "20210621170000",
                "league": "Europe Friendlies",
                "over": {
                    "types": "Yes",
                    "id": "1846398858",
                    "fi": "104303597",
                    "odd": "1.700"
                },
                "under": {
                    "types": "No",
                    "id": "1846398863",
                    "fi": "104303597",
                    "odd": "2.100"
                }
            },
            {
                "team_id": "PC1843258886",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104255856F3P56Q0",
                "team_mr": "71",
                "team_name": "Longford Town v Waterford FC",
                "fi": "104255856",
                "pd": "/#/AC/B1/C1/D8/E104255856/F3/P^56/Q^0/",
                "bc": "20210621194500",
                "league": "Republic of Ireland Premier Division",
                "over": {
                    "types": "Yes",
                    "id": "1843258886",
                    "fi": "104255856",
                    "odd": "2.300"
                },
                "under": {
                    "types": "No",
                    "id": "1843258895",
                    "fi": "104255856",
                    "odd": "1.600"
                }
            },
            {
                "team_id": "PC1844570608",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104273599F3P56Q0",
                "team_mr": "18",
                "team_name": "CE Bento Goncalves RS U20 v Atletico Clube Sulbrasil U20",
                "fi": "104273599",
                "pd": "/#/AC/B1/C1/D8/E104273599/F3/P^56/Q^0/",
                "bc": "20210621190000",
                "league": "Brazil U20 Cup",
                "over": {
                    "types": "Yes",
                    "id": "1844570608",
                    "fi": "104273599",
                    "odd": "1.615"
                },
                "under": {
                    "types": "No",
                    "id": "1844570620",
                    "fi": "104273599",
                    "odd": "2.250"
                }
            },
            {
                "team_id": "PC1844283654",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104269217F3P56Q0",
                "team_mr": "19",
                "team_name": "Klepp Women v Lillestrom SK Women",
                "fi": "104269217",
                "pd": "/#/AC/B1/C1/D8/E104269217/F3/P^56/Q^0/",
                "bc": "20210622140000",
                "league": "Norway Toppserien Women",
                "over": {
                    "types": "Yes",
                    "id": "1844283654",
                    "fi": "104269217",
                    "odd": "1.600"
                },
                "under": {
                    "types": "No",
                    "id": "1844283659",
                    "fi": "104269217",
                    "odd": "2.300"
                }
            },
            {
                "team_id": "PC1715112249",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E102526950F3P56Q0",
                "team_mr": "151",
                "team_name": "Ukraine v Austria",
                "fi": "102526950",
                "pd": "/#/AC/B1/C1/D8/E102526950/F3/P^56/Q^0/",
                "bc": "20210621170000",
                "au": "5",
                "league": "Euro 2020",
                "over": {
                    "types": "Yes",
                    "id": "1715112249",
                    "fi": "102526950",
                    "odd": "2.500"
                },
                "under": {
                    "types": "No",
                    "id": "1715112267",
                    "fi": "102526950",
                    "odd": "1.533"
                }
            },
            {
                "team_id": "PC1845864782",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104296043F3P56Q0",
                "team_mr": "4",
                "team_name": "Real Madrid (PrinceV) Esports v PSG (Xameleon) Esports",
                "fi": "104296043",
                "pd": "/#/AC/B1/C1/D8/E104296043/F3/P^56/Q^0/",
                "bc": "20210621172400",
                "vi": "7",
                "league": "Esoccer Battle - 8 mins play",
                "over": {
                    "types": "Yes",
                    "id": "1845864782",
                    "fi": "104296043",
                    "odd": "1.450"
                },
                "under": {
                    "types": "No",
                    "id": "1845864783",
                    "fi": "104296043",
                    "odd": "2.550"
                }
            },
            {
                "team_id": "PC1844158605",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104267681F3P56Q0",
                "team_mr": "4",
                "team_name": "Trader FC (TRD) Esports v AB OVO (ABV) Esports",
                "fi": "104267681",
                "pd": "/#/AC/B1/C1/D8/E104267681/F3/P^56/Q^0/",
                "bc": "20210621174000",
                "vi": "7",
                "league": "Esoccer Liga Pro - 12 mins play",
                "over": {
                    "types": "Yes",
                    "id": "1844158605",
                    "fi": "104267681",
                    "odd": "1.160"
                },
                "under": {
                    "types": "No",
                    "id": "1844158606",
                    "fi": "104267681",
                    "odd": "4.800"
                }
            },
            {
                "team_id": "PC1843373982",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104257473F3P56Q0",
                "team_mr": "14",
                "team_name": "Curico Unido v Rangers de Talca",
                "fi": "104257473",
                "pd": "/#/AC/B1/C1/D8/E104257473/F3/P^56/Q^0/",
                "bc": "20210622013000",
                "league": "Chile Cup",
                "over": {
                    "types": "Yes",
                    "id": "1843373982",
                    "fi": "104257473",
                    "odd": "2.000"
                },
                "under": {
                    "types": "No",
                    "id": "1843373986",
                    "fi": "104257473",
                    "odd": "1.800"
                }
            },
            {
                "team_id": "PC1845685816",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104293155F3P56Q0",
                "team_mr": "2",
                "team_name": "FC Flora Tallinn U19 v FC Levadia Tallinn U19",
                "fi": "104293155",
                "pd": "/#/AC/B1/C1/D8/E104293155/F3/P^56/Q^0/",
                "bc": "20210622150000",
                "league": "Estonia U19 League",
                "over": {
                    "types": "Yes",
                    "id": "1845685816",
                    "fi": "104293155",
                    "odd": "1.250"
                },
                "under": {
                    "types": "No",
                    "id": "1845685819",
                    "fi": "104293155",
                    "odd": "3.800"
                }
            },
            {
                "team_id": "PC1715112470",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E102526952F3P56Q0",
                "team_mr": "156",
                "team_name": "North Macedonia v Netherlands",
                "fi": "102526952",
                "pd": "/#/AC/B1/C1/D8/E102526952/F3/P^56/Q^0/",
                "bc": "20210621170000",
                "au": "5",
                "league": "Euro 2020",
                "over": {
                    "types": "Yes",
                    "id": "1715112470",
                    "fi": "102526952",
                    "odd": "1.400"
                },
                "under": {
                    "types": "No",
                    "id": "1715112475",
                    "fi": "102526952",
                    "odd": "3.000"
                }
            },
            {
                "team_id": "PC1843684367",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E104261957F3P56Q0",
                "team_mr": "14",
                "team_name": "AS Kigali v Police FC",
                "fi": "104261957",
                "pd": "/#/AC/B1/C1/D8/E104261957/F3/P^56/Q^0/",
                "bc": "20210622140000",
                "league": "Rwanda National League",
                "over": {
                    "types": "Yes",
                    "id": "1843684367",
                    "fi": "104261957",
                    "odd": "1.800"
                },
                "under": {
                    "types": "No",
                    "id": "1843684371",
                    "fi": "104261957",
                    "odd": "2.000"
                }
            },
            {
                "team_id": "PC1803853715",
                "team_it": "ACB1C1D56F2Q1F24RCC-PA-AEACB1C1D8E103708232F3P56Q0",
                "team_mr": "71",
                "team_name": "Odd 2 v Fram",
                "fi": "103708232",
                "pd": "/#/AC/B1/C1/D8/E103708232/F3/P^56/Q^0/",
                "bc": "20210621180000",
                "league": "Norway Division 2 Group 2",
                "over": {
                    "types": "Yes",
                    "id": "1803853715",
                    "fi": "103708232",
                    "odd": "1.400"
                },
                "under": {
                    "types": "No",
                    "id": "1803853720",
                    "fi": "103708232",
                    "odd": "2.875"
                }
            }
        ],
        "total": 95,
        "channel": "AllMatchListByOverUnder",
        "sync_time": 1624291086
    },
    "msg": "Success"
}
```
