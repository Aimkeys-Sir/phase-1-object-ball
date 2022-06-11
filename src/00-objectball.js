function gameObject() {
    obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 5
                },
                "DeSagna Diop": {
                    number: 3,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                }
            }
        }
    }
    return obj
}
//console.table(gameObject().home.players)

function homeTeamName() {
    return gameObject().home.teamName
}
function awayTeamName() {
    return gameObject().away.teamName
}

function allKeys(obj,arrOfKeys) 
{
    if (typeof obj === "object") {
       let newkeys = [...Object.keys(obj)]
       for(const item of newkeys)
       {
        arrOfKeys.push(item)
       }
        for (const key of newkeys){
            if(typeof(obj[key])==="object")
            {
                allKeys(obj[key],arrOfKeys)
            }
          
        }   
    }

    return arrOfKeys
}
function findSomething(obj,something)
{
    const keys=allKeys(obj,[])
    return ` I found ${keys.find(item=>item===something)}`
}
findSomething(gameObject(),"Brook Lopez")
function numPointsScored(name) {
    gameObject().find()
    return points
}
function listPlayers(team)
{
    return Object.keys(gameObject()[team]["players"])
}
function totalTeamPoints(team) {
    let theTeam = gameObject()[team]["players"]
    let accum = 0;
    for (player in theTeam) {
        let points = theTeam[player].points
        accum += points
    }
    return accum
}


console.log(homeTeamName() + " vs " + awayTeamName())
console.log(totalTeamPoints("home") + " : " + totalTeamPoints("away"))
