package com.StudentManagementSystem.Service;

import java.util.List;


import com.StudentManagementSystem.Entity.Student;

public interface StudentService {

    Student addStudent(Student s);

    List<Student> getAllStudents();

    Student updateStudent(int id, Student s);

    void deleteStudent(int id);
    
     Student findById(int id);
}