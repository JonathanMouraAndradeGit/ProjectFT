import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Con01 } from './Controllers/con01.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entities/User.entity';
import { UserServiceDB } from './Service/UserDB.service';
import { Init } from './Service/init.service';
import { Roles } from './Entities/Roles.entity';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './Service/AuthService.service';
import { PassportStrategy } from '@nestjs/passport';
import { JwtStrategy } from './Service/JwtSetrategy.service';
import { Points } from './Entities/Points.entity';

import { OptionAnswer } from './Entities/OptionAnswer.entity';
import { QuestionE } from './Entities/Question.entity';
import { QuestionService } from './Service/Question.service';
import { Syllabs } from './Entities/Syllabs.entity';
import { SyllabsService } from './Service/Syllabs.service';
import { SingleSyllab } from './Entities/SingleSyllab.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:"sqlite",
    database:"sql.db",
    entities:[User,Roles,Points,OptionAnswer,QuestionE,Syllabs,SingleSyllab],
    synchronize:true
  }),
TypeOrmModule.forFeature([User,Roles,Points,OptionAnswer,QuestionE,Syllabs,SingleSyllab]),
JwtModule.register({
  signOptions:{expiresIn:"1h"},
  secret:"123"
})
],
  controllers: [AppController,Con01],
  providers: [AppService,UserServiceDB,Init,AuthService,JwtStrategy,QuestionService,SyllabsService],
  exports:[AuthService,SyllabsService]
})
export class AppModule {}
