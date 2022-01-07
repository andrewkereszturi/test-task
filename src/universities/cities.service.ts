import { Injectable } from '@nestjs/common';
import { City } from './entities/city.entity';
import { universities } from './universities.json';

@Injectable()
export class CitiesService {
  private cities: City[] = [];

  constructor() {
    const allCities = universities.map(university => university.city);
    const allUniqueCities = [];
    allCities.forEach(city => {
      if (!allUniqueCities.find(c => c.id === city.id)) {
        allUniqueCities.push({id: city.id, name: city.name, stateId: city.state.id});
      }
    })
    this.cities = allUniqueCities;
  }

  findAll() {
    return this.cities;
  }

  findOne(id: number) {
    return this.cities.find(city => city.id === id);
  }
}
