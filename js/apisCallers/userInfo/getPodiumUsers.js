export default async() => {
    /* try{
        
        let url = '/user_info/get_all_users_info?order_by=elo&limit=10';

        const response = fetch(url,{
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')

            }
        })
        if (!(await response).ok)
            throw new Error('API response not ok: ' + (await response).statusText);
        const data = (await response).json();
        return data;
    }
    catch (error){
        console.error('Error:', error.message);
        return null;
    } */

    const data = {
        "users": [
            {
                "alias": "Player1",
                "status": "Online",
                "photo_profile": "images/MarvinBisbal.png",
                "elo": 1800,
                "wins": 45,
                "ranking": 1
            },
            {
                "alias": "Player2",
                "status": "Offline",
                "photo_profile": "images/default_profile_photo.jpg",
                "elo": 1700,
                "wins": 40,
                "ranking": 2
            },
            {
                "alias": "Player3",
                "status": "Online",
                "photo_profile": "images/MarvinBisbal.png",
                "elo": 1600,
                "wins": 35,
                "ranking": 3
            },
            {
                "alias": "Player4",
                "status": "Offline",
                "photo_profile": "images/default_profile_photo.jpg",
                "elo": 1500,
                "wins": 30,
                "ranking": 4
            },
            {
                "alias": "Player5",
                "status": "Online",
                "photo_profile": "images/MarvinBisbal.png",
                "elo": 1400,
                "wins": 25,
                "ranking": 5
            },
            {
                "alias": "Player6",
                "status": "Offline",
                "photo_profile": "images/default_profile_photo.jpg",
                "elo": 1300,
                "wins": 20,
                "ranking": 6
            },
            {
                "alias": "Player7",
                "status": "Online",
                "photo_profile": "images/MarvinBisbal.png",
                "elo": 1200,
                "wins": 15,
                "ranking": 7
            },
            {
                "alias": "Player8",
                "status": "Offline",
                "photo_profile": "images/default_profile_photo.jpg",
                "elo": 1100,
                "wins": 10,
                "ranking": 8
            },
            {
                "alias": localStorage.getItem('jwtToken'),
                "status": "Online",
                "photo_profile": "images/MarvinBisbal.png",
                "elo": 1000,
                "wins": 24,
                "ranking": 9
            },
            {
                "alias": "Player10",
                "status": "Offline",
                "photo_profile": "images/default_profile_photo.jpg",
                "elo": 900,
                "wins": 0,
                "ranking": 10
            }
        ]
      }
    return data
}