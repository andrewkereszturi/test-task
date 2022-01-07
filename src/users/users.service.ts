import { Injectable } from "@nestjs/common";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { User } from "./models/user";
import { OnModuleInit } from "@nestjs/common";
const usersData = {
    "data": {
        "user": {
            "userId": "asdf",
            "email": "asdfasdf",
            "age": 23,
            "isSubscribed": null
        }
    }

}
abstract class DataInitializer implements OnModuleInit {
    member: string[];
    onModuleInit() {
      const jsonData = usersData// ...
    }
  }

@Injectable()
export class UsersService extends DataInitializer{
    // private users: User[] = [];

    onModuleInit() {
       const jsonData = usersData;
    }

    public getUser(getUserArgs: GetUserArgs): User {
        return this.jsonData.find(user => user.userId === getUserArgs.userId);
    }

    public getUsers(getUsersArgs: GetUsersArgs): User[] {
        return getUsersArgs.userIds.map(userId => this.getUser({ userId }));
    }


}