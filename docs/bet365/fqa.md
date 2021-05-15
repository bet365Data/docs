# Market Odds Structure
#### For example, you get the data of below from Bet365 Inplay Event:
```json
{
    "type": "MG",
    "DO": "1",
    "FF": "",
    "I2": "1",
    "ID": "1777",
    "IT": "6V92667833C1G1777_1_1",
    "NA": "Fulltime Result",
    "OR": "0",
    "OT": "0",
    "SU": "0",
    "SY": "ig"
},
{
    "type": "MA",
    "CN": "3",
    "ID": "",
    "IT": "6V92667833-1777_1_1",
    "OR": "0",
    "PY": "dl",
    "SY": "_a"
},
{
    "type": "PA",
    "FI": "92809252",
    "ID": "989758353",
    "IT": "6VP92809252-989758353_1_1",
    "NA": "Alajuelense",
    "OD": "2\/1",
    "OR": "0",
    "SU": "0"
},
{
    "type": "PA",
    "FI": "92809252",
    "ID": "989758354",
    "IT": "6VP92809252-989758354_1_1",
    "NA": "Draw",
    "OD": "11\/5",
    "OR": "1",
    "SU": "0"
},
{
    "type": "PA",
    "FI": "92809252",
    "ID": "989758356",
    "IT": "6VP92809252-989758356_1_1",
    "NA": "Santos de Gu\u00e1piles",
    "OD": "13\/10",
    "OR": "2",
    "SU": "0"
},
````
type=MG, "MARKET GROUP", here it is ID=1777 NA="Fulltime Result"

type=MA, CN=3 means 3 columns

type=PA, "PARTICIPANT".

first PA, NA=Home Team, OD=2/1. it means Home wins and the odd is 2/1 = 1 + 2/1 = 3

second PA, NA=Draw, OD=11/5. it means Draw and the odd is 11/5 = 1 + 11/5 = 3.2

last pA, NA=Away Team, OD=13/10. it means Away wins and the odd is 13/10 = 1 + 13/10 = 2.3

SU here means "SUSPENDED". when it is 1, you can NOT bet on it.

Soccer minutes

It can be calculated with TT, TU, TM and TS from /bet365/event.

TU - kicking off time of that period with format "YearMonthDayHourMinSecs" in England/London timezone.

TT - playing or on break

TM - passed minutes

TS - passed seconds

So the rule is somehow:

```
if (TT) {  # when playing
    passed_seconds = NOW() (Epoch seconds) - TU (Convert that into Epoch seconds) + TM * 60 + TS;
} else {
    passed_seconds = TM * 60 + TS;
}
```
>>> Note you need get the passed seconds between NOW() and TU. for example, if NOW() is 2019-02-14 03:15:30 and TU is 20190214021420, the seconds are 1 hour 1 min 10 secs. you can't do 20190214031530 - 20190214021420 directly.