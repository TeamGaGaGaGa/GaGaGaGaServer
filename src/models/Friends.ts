import mongoose from "mongoose";
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
            tmi : {
                type: String,
            }
        }
    ]
});

export default mongoose.model<IFriends & mongoose.Document>("Friends", FriendsSchema);