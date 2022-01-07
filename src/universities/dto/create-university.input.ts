import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUniversityInput {
  @Field()
  name: string;

  @Field(() => Int)
  cityId: number;
}
