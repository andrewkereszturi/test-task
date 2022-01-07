import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { UniversitiesModule } from './universities/universities.module';


@Module({
  imports: [  
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    UsersModule,
    UniversitiesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
