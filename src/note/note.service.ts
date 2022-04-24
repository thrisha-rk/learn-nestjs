import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoteDTO } from './dto/note.dto';
import { Note } from './note.entity';

@Injectable()
export class NoteService {

    constructor(@InjectRepository(Note) private noteRepository : Repository<Note>){}

    getNotes(): Promise<Note[]>{

        return this.noteRepository.find();
    }

    getNote(id) :Promise<Note>{
        return this.noteRepository.findOne({
            where : {id}
        });
    }

    createNotes(notedata : NoteDTO): Promise<NoteDTO>{
        return this.noteRepository.save(notedata);
    }

    updateNote(notedata : NoteDTO, id : number){

        return this.noteRepository.update(id, notedata);
    }

    deleteNote(id : number){
        
        return this.noteRepository.delete(id);
    }
}
