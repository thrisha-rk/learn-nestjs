import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { NoteService } from './note.service';
import {NoteDTO} from './dto/note.dto'
@Controller('api/note')
export class NoteController {

    constructor(private readonly noteService : NoteService){}

    @Get('/')
    getNotes(){
        return this.noteService.getNotes();
    }
    
    @Get('/:id')
    getNote(@Param() params){
        return this.noteService.getNote(params.id);
    }

    @Post('/')
    @UsePipes(ValidationPipe)
    async createNote(@Body() notedata: NoteDTO){
        return await this.noteService.createNotes(notedata);
    }

    @Put('/:id')
    async updateNote(@Body() notedata: NoteDTO, @Param() params){
        try {
            return await this.noteService.updateNote(notedata, params.id);
        }
        catch(error){
            return error
        }
    }

    @Delete('/:id')
    deleteNote(@Param() params){
        return this.noteService.deleteNote(params.id);
    }
}
