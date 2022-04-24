import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { Note } from "src/note/note.entity";

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'test@123',
    database: 'notedb',
    entities: [Note],
    synchronize: true,
};