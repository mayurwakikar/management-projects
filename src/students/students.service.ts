import { Injectable, NotFoundException } from '@nestjs/common';
import { Students } from './students.model';
@Injectable()
export class StudentsService {
  private student: Students[] = [];

  insertStudent(Name: string, Address: string, MobileNo: number) {
    const studentID = Math.random().toString();
    const newStudent = new Students(studentID, Name, Address, MobileNo);

    this.student.push(newStudent);

    return studentID;
  }

  getStudents() {
    return [...this.student];
  }

  getSingleStudent(studentsId: string) {
    const Students = this.findStudent(studentsId)[0];
    return { ...Students };
  }

  updateStudent(
    studentsId: string,
    Name: string,
    Address: string,
    MobileNo: number,
  ) {
    const [Students, index] = this.findStudent(studentsId);

    const updatedStudent = { ...Students };

    if (Name) {
      updatedStudent.Name = Name;
    }
    if (Address) {
      updatedStudent.Address = Address;
    }
    if (MobileNo) {
      updatedStudent.MobileNo = MobileNo;
    }

    this.student[index] = updatedStudent;
  }

  private findStudent(id: string): [Students, number] {
    const StudentsIndex = this.student.findIndex((stud) => stud.id === id);
    const Students = this.student[StudentsIndex];
    if (!Students) {
      throw new NotFoundException('Could not find student.');
    }
    return [Students, StudentsIndex];
  }
}
