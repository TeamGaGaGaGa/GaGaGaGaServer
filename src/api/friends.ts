 import express from "express";
import Friends from "../models/Friends";
import { IFriendsInputDTO } from "../interfaces/IFriends";
 const router = express.Router();
 
 /**
 * @route GET /friends
 * @desc Get all friends list
 * @access Public
 */

 router.get("/", async(req, res) => {
    try{
        const list = await Friends.find();
        if(list)  {
            const response = {
                "success" : true,
                "data" : {
                    "FreindsList": [list]
                }
            };
            res.json(response);
        }
        else {
            const response = {
                "success" : true,
                "data" : null
            };
            res.json(response);
        }
    } catch (err) {
        res.status(500).send("전체 프로필 조회 실패")
    }
   
 });
  
 /**
 * @route GET /friends/:id
 * @desc Get friend list
 * @access Public
 */

 router.get("/:id", async (req, res) => {
    try{
        const profile = await Friends.findById(req.params.id);
        if(!profile){
            return res.status(400).json({ success: false, message : "친구 프로필 조회 실패"});
        }
        res.json(profile);
    } catch (err) {
        if (err.kind == "ObjectId") {
            return res.status(400).json({success: false, message: "친구 프로필 조회 실패" });
          }
        res.status(500).send("친구 프로필 조회 실패");
    }
 });
 /**
  * @route POST /friends
  * @desc Post friend's profile
  * @access Public
  */
router.post("/", async(req, res) => {
    const {
        name, 
        part,
        mbti,
        image,
        place,
        face,
        banmo,
        answer1,
        answer2,
    }= req.body;
    try{
        const Profile= {
            name: name,
            part: part,
            mbti: mbti,
            image: image,
            place: place,
            face: face,
            banmo: banmo,
            answer1: answer1,
            answer2: answer2
        };
        let profiles : IFriendsInputDTO = {
            friendsList : Profile
        };

        //const profiles = await Friends.find();
        const profile = await Friends.findById("60a93af1d13ad10435e4faaa");
        if(!profile){
            //create
            const profileData = new Friends(profiles);
            await profileData.save();
            return res.status(200).json({ success: true, message : "프로필 저장 성공"});
        }
        profile.friendsList.unshift(Profile);
        await profile.save();

        res.status(200).json({ success: true, message : "프로필 저장 성공"});
    }catch(err) {
        res.status(500).send("프로필 저장 실패");
    }
});

 module.exports  = router;