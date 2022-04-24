import { IsNotEmpty } from 'class-validator';

export class NoteDTO{
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description : string;

    @IsNotEmpty()
    tag : string;

}