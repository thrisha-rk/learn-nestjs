import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteController } from './note/note.controller';
import { NoteModule } from './note/note.module';
import { NoteService } from './note/note.service';
import { typeOrmConfig } from './config/typeorm.config';
@Module({
  imports: [NoteModule, TypeOrmModule.forRoot( typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
