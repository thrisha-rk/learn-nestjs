import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteController } from './note.controller';
import { Note } from './note.entity';
import { NoteService } from './note.service';

@Module({
  providers: [NoteService],
  imports: [TypeOrmModule.forFeature([Note])],
  controllers: [NoteController],
})
export class NoteModule {}
