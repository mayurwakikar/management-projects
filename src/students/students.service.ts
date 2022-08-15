import { Injectable } from "@nestjs/common";
import{Students} from './students.model';
@Injectable()
export class StudentsService{
    student:Students[]=[];

    insertStudent(Name:string, Address:string,MobileNo:number){
        const newStudent= new Students(new Date().toString(),Name ,Address,MobileNo)
    }

    this.student.push(newStudent);



}