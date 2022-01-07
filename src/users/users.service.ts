import { Injectable } from "@nestjs/common";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { User } from "./models/user";

// const universities = require("../universities.json")
// const usersData = require("../users.json")

const usersData = [
    {
        "userId": "asdf",
        "email": "asdfasdf",
        "age": 23,
        "isSubscribed": null
    }
]

@Injectable()
export class UsersService {
    private users: User[] = [];


    public getUser(getUserArgs: GetUserArgs): User {
        return this.users.find(user => user.userId === getUserArgs.userId);
    }

    public getUsers(getUsersArgs: GetUsersArgs): User[] {
        return getUsersArgs.userIds.map(userId => this.getUser({ userId }));
    }


}