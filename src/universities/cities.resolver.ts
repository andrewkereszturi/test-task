import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { CitiesService } from './cities.service';
import { StatesService } from './states.service';
import { City } from './entities/city.entity';

@Resolver(() => City)
export class CitiesResolver {
  constructor(private readonly citiesService: CitiesService, private readonly statesService: StatesService) {}

  @Query(() => [City], { name: 'cities' })
  findAll() {
    return this.citiesService.findAll();
  }

  @Query(() => City, { name: 'city' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.citiesService.findOne(id);
  }

  @ResolveField()
  state(@Parent() city: City) {
    return this.statesService.findOne(city.stateId);
  }
}
