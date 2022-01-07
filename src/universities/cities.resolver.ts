import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CitiesService } from './cities.service';
import { City } from './entities/city.entity';

@Resolver(() => City)
export class CitiesResolver {
  constructor(private readonly citiesService: CitiesService) {}

  @Query(() => [City], { name: 'cities' })
  findAll() {
    return this.citiesService.findAll();
  }

  @Query(() => City, { name: 'city' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.citiesService.findOne(id);
  }

}
