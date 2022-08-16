import { Injectable } from '@nestjs/common';
import { Students } from './students.model';
@Injectable()
export class StudentsService {
  private student: Students[] = [];

  insertStudent(Name: string, Address: string, MobileNo: number) {
    const studentID = new Date().toString();
    const newStudent = new Students(studentID, Name, Address, MobileNo);

    this.student.push(newStudent);

    return studentID;
  }

  getStudents() {
    return [...this.student];
  }
}
