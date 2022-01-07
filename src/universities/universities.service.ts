import { Injectable } from '@nestjs/common';
import { CreateUniversityInput } from './dto/create-university.input';
import { UpdateUniversityInput } from './dto/update-university.input';
import { University } from './entities/university.entity';

import { universities } from './universities.json';

@Injectable()
export class UniversitiesService {
  private universities: University[] = [];

  constructor() {
    this.universities = universities.map(u => ({ id: u.id, name: u.name, cityId: u.city.id }));
  }

  create(createUniversityInput: CreateUniversityInput) {
    return 'This action adds a new university';
  }

  findAll() {
    return this.universities;
  }

  findOne(id: number) {
    return universities.find(university => university.id === id);
  }

  update(id: number, updateUniversityInput: UpdateUniversityInput) {
    return `This action updates a #${id} university`;
  }

  remove(id: number) {
    return `This action removes a #${id} university`;
  }
}
