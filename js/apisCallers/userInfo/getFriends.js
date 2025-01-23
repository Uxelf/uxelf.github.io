import userInfoGet from "./userInfoGet.js";

export default async() => {
    
    //const data = await userInfoGet('get_friends', null);
    const data = {
        "friends": [
          {
            "alias": "Friend1",
            "wins": 10,
            "loses": 5,
            "photo_profile": "images/default_profile_photo.jpg",
            "elo": 1400,
            "status": "Online"
          },
          {
            "alias": "Friend2",
            "wins": 20,
            "loses": 15,
            "photo_profile": "images/default_profile_photo.jpg",
            "elo": 1350,
            "status": "Offline"
          },
          {
            "alias": "Friend3",
            "wins": 5,
            "loses": 10,
            "photo_profile": "images/default_profile_photo.jpg",
            "elo": 1200,
            "status": "Online"
          }
        ]
      }
    return data;
}