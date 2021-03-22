import {Deserializable} from "./deserializable.model";
import { Band } from "../models/band";
import { Post } from "../models/post";
import { PostComment } from "../models/post-comment";
import { QuestionResponse } from "../models/question-response";

export class User implements Deserializable {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    bands: Band[];
    likedPosts:Post[];
    likedComments: PostComment[];
    likedQotdResponses: QuestionResponse[];

    constructor(username: string, password: string, firstName: string, lastName: string) {
        this.id = null;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    deserialize(input: any): this{
        Object.assign(this, input);
        return this;
    }
}
