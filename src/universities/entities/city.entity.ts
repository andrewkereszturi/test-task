import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class City {
  @Field()
  id: number;

  @Field()
  name: string;
}
