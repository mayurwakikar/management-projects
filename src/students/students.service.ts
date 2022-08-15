import { Injectable } from "@nestjs/common";
import{Students} from './students.model';
@Injectable()
export class StudentsService{
    student:Students[]=[];

    insertStudent(Name:string, Address:string,MobileNo:number){
        const studentID=new Date().toString();
        const newStudent= new Students(Name ,Address,MobileNo)
    }

    this.student.push(newStudent);

      return studentID;

}