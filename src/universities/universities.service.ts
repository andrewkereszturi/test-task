import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUniversityInput } from './dto/create-university.input';
import { UpdateUniversityInput } from './dto/update-university.input';
import { University } from './entities/university.entity';

import { universities as universitiesJSON} from './universities.json';



@Injectable()
export class UniversitiesService {
  private universities: University[] = [];
  private nextId: number;

  constructor() {
    this.universities = universitiesJSON.map(u => ({ id: u.id, name: u.name, cityId: u.city.id }));

    // This assumes universities are in ascending order by id
    this.nextId = this.universities[this.universities.length - 1].id + 1;
   }

  create(createUniversityInput: CreateUniversityInput) {
    const university: University = {
      id: this.nextId++,
      ...createUniversityInput
    }

    if (this.universities.find(university => university.cityId === createUniversityInput.cityId)) {
      this.universities.push(university)
      return university;
    } else {
       throw new NotFoundException('Not Found');
    }
    

  }

  findAll() {
    return this.universities;
  }

  findOne(id: number) {
    return this.universities.find(university => university.id === id);
  }

  update(id: number, updateUniversityInput: UpdateUniversityInput) {
    const university = this.universities.find(university => university.id === updateUniversityInput.id)

    Object.assign(university, updateUniversityInput)

    return university;
  }

  remove(id: number) {
    return `This action removes a #${id} university`;
  }
}
