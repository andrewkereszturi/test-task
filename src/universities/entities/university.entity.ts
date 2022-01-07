import { ObjectType, Field } from '@nestjs/graphql';
import { City } from './city.entity';

@ObjectType()
export class University {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  cityId: number;

  @Field()
  city?: City;
}
