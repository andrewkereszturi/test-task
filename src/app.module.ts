import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UniversitiesModule } from './universities/universities.module';

@Module({
  imports: [  
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    UniversitiesModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ]
})
export class AppModule {}
