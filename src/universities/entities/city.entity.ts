import { ObjectType, Field } from '@nestjs/graphql';
import { State } from './state.entity';

@ObjectType()
export class City {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  stateId: number;

  @Field()
  state?: State;
}
