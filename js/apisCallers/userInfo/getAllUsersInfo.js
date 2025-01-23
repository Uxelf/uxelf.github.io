import userInfoGet from "./userInfoGet.js";

export default async(userName) => {

    //const data = await userInfoGet('get_all_users_info', null);
    const data = {
        "users": [
          {
            "alias": "Player1",
            "status": true,
            "photo_profile": "images/default_profile_photo.jpg",
            "elo": 1500,
            "wins": 25,
            "ranking": 1
          },
          {
            "alias": "Player2",
            "status": false,
            "photo_profile": "images/default_profile_photo.jpg",
            "elo": 1400,
            "wins": 20,
            "ranking": 2
          },
          {
            "alias": "Player3",
            "status": true,
            "photo_profile": "images/default_profile_photo.jpg",
            "elo": 1300,
            "wins": 15,
            "ranking": 3
          }
        ]
      }
    return data;
}