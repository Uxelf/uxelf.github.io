import userInfoGet from "./userInfoGet.js";


export default async() => {
    
    //const data = await userInfoGet('get_my_user_info', null);
    
    const data = {
        "alias": localStorage.getItem('jwtToken'),
        "status": "online",
        "elo": 1000,
        "photo_profile": "images/MarvinBisbal.png",
        "wins": 24,
        "loses": 11,
        "ranking": 9,
        "cups": 4,
        "matchHistory": [
            {
            "opponent": "Player2",
            "userPoints": 10,
            "opponentPoints": 8,
            "match_type": "Casual",
            "elo_earn": 15,
            "date": "10-01-2025"
            },
            {
            "opponent": "Player3",
            "userPoints": 7,
            "opponentPoints": 10,
            "match_type": "Casual",
            "elo_earn": -5,
            "date": "10-01-2025"
            },
            {
            "opponent": "Player4",
            "userPoints": 15,
            "opponentPoints": 12,
            "match_type": "Tournament",
            "elo_earn": 20,
            "date": "11-01-2025"
            },
            {
            "opponent": "Player2",
            "userPoints": 15,
            "opponentPoints": 12,
            "match_type": "Tournament",
            "elo_earn": 20,
            "date": "12-01-2025"
            },
            {
            "opponent": "Player2",
            "userPoints": 15,
            "opponentPoints": 12,
            "match_type": "Casual",
            "elo_earn": 20,
            "date": "13-01-2025"
            },
            {
            "opponent": "Player2",
            "userPoints": 15,
            "opponentPoints": 12,
            "match_type": "Casual",
            "elo_earn": 20,
            "date": "13-01-2025"
            },
            {
            "opponent": "Player2",
            "userPoints": 15,
            "opponentPoints": 12,
            "match_type": "Casual",
            "elo_earn": 20,
            "date": "14-01-2025"
            },
            {
            "opponent": "Player2",
            "userPoints": 15,
            "opponentPoints": 12,
            "match_type": "Casual",
            "elo_earn": 20,
            "date": "15-01-2025"
            }
        ]
    }
    return data;
}