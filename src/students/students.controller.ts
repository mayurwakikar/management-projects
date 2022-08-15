import { Controller,Post,Body} from "@nestjs/common";
import { StudentsService} from './students.service';
@Controller('students')
export class StudentsController{
    constructor (private readonly studentsService:StudentsService){}

       @post()
       addStudent(
        @Body('Name') studName:string,
        @Body('Address') studAddress:string,
        @Body('MobileNo') studMobile:number,
        ):any{

              this.studentsService.insertStudent(studName,studAddress,studMobile);
       }
}