import { Module } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { UniversitiesResolver } from './universities.resolver';
import { CitiesResolver } from './cities.resolver';
import { CitiesService } from './cities.service';

@Module({
  providers: [UniversitiesResolver, UniversitiesService, CitiesResolver, CitiesService]
})
export class UniversitiesModule {}
