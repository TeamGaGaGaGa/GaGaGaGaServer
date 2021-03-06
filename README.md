# 서비스 소개  
### 서비스 이름 : 갸가갸가  
### 서비스 한 줄 소개 : 솝트다운 질문으로 만드는 첫인상 기록 서비스   
![image](https://user-images.githubusercontent.com/20807197/119241523-fe896000-bb91-11eb-9317-283485be6c47.png)
<img width="360" alt="Android - 70" src="https://user-images.githubusercontent.com/20807197/119241479-95095180-bb91-11eb-80e1-c10796d5d9d6.png"> <img width="360" alt="Android - 76" src="https://user-images.githubusercontent.com/20807197/119241497-b407e380-bb91-11eb-98ca-e34ad68946ce.png">



  
## Models. 
- /models/Friends.ts
       
```import mongoose from "mongoose";
import { IFriends } from "../interfaces/IFriends";

const FriendsSchema = new mongoose.Schema({
    friendsList : [
        {
            name: {
                type: String,
                required: true,
            },
            part: {
                type: String,
                required: true,
            },
            ybob: {
                type: String,
                required: true,
            },
            mbti: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            place: {
                type: String,
                required: true,
            },
            face: {
                type: String,
                required: true,
            },
            banmo: {
                type: Boolean,
                required: true,
            },
            answer1: {
                type: String,
                required: true,
            },
            answer2: {
                type: String,
                required: true,
            },
            tmi: {
              type: String
            }
        }
    ]
});

export default mongoose.model<IFriends & mongoose.Document>("Friends", FriendsSchema);
```
- /interfaces/IFriends.ts
```
import { IFriendsList } from "./IFriendsList";

export interface IFriends {
    friendsList : [IFriendsList];
}

export interface IFriendsInputDTO {
    friendsList : IFriendsList;
}
```
- /interfaces/IFriendslist.ts
```
export interface IFriendsList {
    name : string;
    part : string;
    ypob : string;
    mbti : string;
    image : string;
    place : string;
    face : string;
    banmo: Boolean;
    answer1: string;
    answer2: string;
    tmi? : string;
}
```
## API 명세서 초안
- [API 명세서 초안](https://github.com/TeamGaGaGaGa/GaGaGaGaServer/wiki)

## API 명세서 최종   
- [API 명세서 최종](https://github.com/TeamGaGaGaGa/GaGaGaGaServer/wiki/%EC%B5%9C%EC%A2%85-API-%EB%AA%85%EC%84%B8%EC%84%9C)
