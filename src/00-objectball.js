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
function numPointsScored(name) {

    if (teamNames("home").find(element => element === name)) {
        return gameObject().home.players[name].points
    }
    else if (teamNames("away").find(element => element === name)) {
        return gameObject().away.players[name].points
    }
    else {
        return `${name} is not a player`
    }
}
function ShoeSize(name) {
    if (teamNames("home").find(element => element === name)) {
        return gameObject().home.players[name].shoe
    }
    else if (teamNames("away").find(element => element === name)) {
        return gameObject().away.players[name].shoe
    }
    else {
        return `${name} is not a player`
    }

}
function teamColors(name) {
    return gameObject()[name].colors
}

function teamNames(team) {
    return Object.keys(gameObject()[team]["players"])
}
function playerNumbers(team) {
    return teamNames(team).map(
        player => gameObject()[team]["players"][player]["number"])
}
function playerStats(name) {
    if (teamNames("home").find(player => player === name)) {
        return gameObject().home.players[name]
    }
    else if (teamNames("away").find(player => player === name)) {
        return gameObject().away.players[name]
    }
    else {
        return `${name} is not a player`
    }
}
function bigShoeRebounds() {
    let shoeSizeHome = 0;
    let shoeSizeAway = 0;
    let homeT = teamNames("home").reduce(((string, player) => {
        if (gameObject().home.players[player].shoe > shoeSizeHome) {
            shoeSizeHome = gameObject().home.players[player].shoe
            string = `${player}-${shoeSizeHome}`
            return string
        }
        else {
            return string
        }
    }), "")
    let awayT = teamNames("away").reduce(((string, player) => {
        if (gameObject().away.players[player].shoe > shoeSizeAway) {
            shoeSizeAway = gameObject().away.players[player].shoe
            string = `${player}-${shoeSizeAway}`
            return string
        }
        else {
            return string
        }
    }), homeT)

    homeT = homeT.split("-")
    awayT = awayT.split("-")


    let mrBigshoe = parseInt(awayT[1], 10) > parseInt(homeT[1], 10) ? [awayT[0], "away"] : [homeT[0], "home"]
    return gameObject()[mrBigshoe[1]].players[mrBigshoe[0]].rebounds

}
function mostPointsScored() {
    let pointsHome = 0;
    let pointsAway = 0;
    let homeT = teamNames("home").reduce(((string, player) => {
        if (gameObject().home.players[player].points > pointsHome) {
            pointsHome = gameObject().home.players[player].points
            string = `${player}-${pointsHome}`
            return string
        }
        else {
            return string
        }
    }), "")
    let awayT = teamNames("away").reduce(((string, player) => {
        if (gameObject().away.players[player].points > pointsAway) {
            pointsAway = gameObject().away.players[player].points
            string = `${player}-${pointsAway}`
            return string
        }
        else {
            return string
        }
    }), homeT)

    homeT = homeT.split("-")
    awayT = awayT.split("-")


    let mrTopScorer = parseInt(awayT[1], 10) > parseInt(homeT[1], 10) ? awayT : homeT[0]
    return `Top Scorer: ${mrTopScorer[0]}, ${mrTopScorer[1]} points`

}
function playerWithLongestName() {

    let homeT = teamNames("home").reduce(((longestName, playerName) => {
        if (playerName.length > longestName.length) {
            longestName = playerName
            return longestName
        }
        else {
            return longestName
        }
    }), "")
    let awayT = teamNames("away").reduce(((longestName, playerName) => {
        if (playerName.length > longestName.length) {
            longestName = playerName
            return longestName
        }
        else {
            return longestName
        }
    }), homeT)

    return awayT
}
function doesLongNameStealATon()
{
    const longestName=playerWithLongestName()
    let stealsHome = 0;
    let stealsAway = 0;
    let homeT = teamNames("home").reduce(((string, player) => {
        if (gameObject().home.players[player].steals > stealsHome) {
            stealsHome = gameObject().home.players[player].steals
            string = `${player}-${stealsHome}`
            return string
        }
        else {
            return string
        }
    }), "")
    let awayT = teamNames("away").reduce(((string, player) => {
        if (gameObject().away.players[player].steals > stealsAway) {
            stealsAway = gameObject().away.players[player].steals
            string = `${player}-${stealsAway}`
            return string
        }
        else {
            return string
        }
    }), homeT)

    homeT = homeT.split("-")
    awayT = awayT.split("-")


    let mrTopStealer = parseInt(awayT[1], 10) > parseInt(homeT[1], 10) ? awayT[0] : homeT[0]
    return longestName==mrTopStealer

}
console.log(doesLongNameStealATon())
console.log(playerWithLongestName())
console.log(mostPointsScored())
console.log(bigShoeRebounds())
console.log(playerStats("Brook Lopez"))
console.log(playerNumbers("away"))
console.log(teamNames("away"))
console.log(teamColors("away"))
console.log(ShoeSize("Brook Lopez"))
console.log(numPointsScored("Jeff Adrien"))


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
