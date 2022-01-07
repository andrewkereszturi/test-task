import { Resolver, Query, Args } from "@nestjs/graphql"
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";


import { User } from './models/user';
import { UsersService } from "./users.service";

@Resolver(() => User)
export class UsersResolver {

    constructor(private readonly usersService: UsersService) {}


    @Query(() => User, { name: 'user', nullable: true })
    getUser(@Args() getUserArgs: GetUserArgs): User {
        return this.usersService.getUser(getUserArgs);
    }

    @Query(() => [User], { name: 'users', nullable: 'items' })
    getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
        return this.usersService.getUsers(getUsersArgs);
    }
    @Query(() => String)
    sayHello(): string {
      return 'Hello World!';
    }
}