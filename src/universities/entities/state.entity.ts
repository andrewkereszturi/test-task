import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class State {
  @Field()
  id: number;

  @Field()
  name: string;
}
