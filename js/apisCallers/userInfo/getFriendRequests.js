import userInfoGet from "./userInfoGet.js";

export default async() => {
    
    //const data = await userInfoGet('get_friend_requests', null);
    const data = {
        "friend_requests": [
          {
            "from_user": "User123",
            "timestamp": "01-01-2025",
            "photo_profile": "images/default_profile_photo.jpg"
          },
          {
            "from_user": "User456",
            "timestamp": "01-01-2025",
            "photo_profile": "images/default_profile_photo.jpg"
          }
        ]
      }
    return data;
}