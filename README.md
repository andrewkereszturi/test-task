## Description

Test task for AstrumU in GraphQL and NestJS

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Interacting with the app

Navigate to http://localhost:3000/graphql

### A note on auth

Mutations have a guard, but it's only a boolean that must be toggled in order to allow requests through.
Inside src/universities/gql-auth.guard.ts change line 11 to true to authenticate.


### Queries

To get all universities with cities and states:

```
{
  universities {
	id,
  name,
  city {
    id,
    name
    state {
      id,
      name
    }
   } 
  }
}
```

To get one university by id:

```
{
  university(id:1) {
	id,
  name,
  city {
    id,
    name
    state {
      id,
      name
    }
  } 
 }
}
```

### Mutations

To create a new university:

```
mutation {
  createUniversity(createUniversityInput: {name: "New University", cityId: 1}) {
    id,
    name, 
    cityId
  }
}
```

To update an existing university:

```
mutation {
  updateUniversity(updateUniversityInput: {id: 21, name:"Updated University", cityId: 2}) {
    id,
    name, 
    cityId
  }
}
```
