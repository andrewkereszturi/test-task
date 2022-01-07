import { Module } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { UniversitiesResolver } from './universities.resolver';
import { CitiesResolver } from './cities.resolver';
import { CitiesService } from './cities.service';
import { StatesResolver } from './state.resolver';
import { StatesService } from './states.service';

@Module({
  providers: [UniversitiesResolver, UniversitiesService, CitiesResolver, CitiesService, StatesResolver, StatesService]
})
export class UniversitiesModule {}
