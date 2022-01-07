import { Injectable } from '@nestjs/common';
import { State } from './entities/state.entity';
import { universities } from './universities.json';

@Injectable()
export class StatesService {
  private states: State[] = [];

  constructor() {
    const allStates = universities.map(university => university.city.state);
    const allUniqueStates = [];
    allStates.forEach(state => {
      if (!allUniqueStates.find(c => c.id === state.id)) {
        allUniqueStates.push({id: state.id, name: state.name});
      }
    })
    this.states = allUniqueStates;
  }

  findAll() {
    return this.states;
  }

  findOne(id: number) {
    return this.states.find(state => state.id === id);
  }
}
