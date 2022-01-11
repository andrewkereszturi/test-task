import { Injectable } from '@nestjs/common';
import { identity } from 'rxjs';
import { City } from './entities/city.entity';
import { universities } from './universities.json';

@Injectable()
export class CitiesService {
  private cities: { [id: number] : City; }  = {};

  constructor() {

    const allCities = universities.map(university => university.city);
    allCities.forEach(city => {
      if(!this.cities[city.id]){
        this.cities[city.id] = {...city, stateId: city.state.id};
      }
    })    
  }

  findAll() {
    return this.cities;
  }

  findOne(id: number) {
    return this.cities[id];
  }
}
