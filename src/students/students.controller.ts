import { Controller, Post, Body, Get, Param,Patch } from '@nestjs/common';
import { StudentsService } from './students.service';
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  addStudent(
    @Body('Name') studName: string,
    @Body('Address') studAddress: string,
    @Body('MobileNo') studMobile: number,
  ): any {
    const generatedId = this.studentsService.insertStudent(
      studName,
      studAddress,
      studMobile,
    );
    return { id: generatedId };
  }

  @Get()
  getAllProducts() {
    return this.studentsService.getStudents();
  }

  @Get(':id')
  getStudent(@Param('id') studentID: string) {
    return this.studentsService.getSingleStudent(studentID);
  }

   @Patch(':id')
   updateStudent(
       @Param('id') studentsId:string,
       @Body('Name') studName:string,
       @Body('Address')studAddress:string,
       @Body('MobileNo') studMobile:number,
   ){
      this.studentsService.updateStudent(studentsId,studName,studAddress,studMobile);
      return null;
   }



}
