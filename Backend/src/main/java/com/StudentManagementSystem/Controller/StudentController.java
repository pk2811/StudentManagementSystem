package com.StudentManagementSystem.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.StudentManagementSystem.Entity.Student;
import com.StudentManagementSystem.Service.StudentService;

import java.util.List;

@RestController
@CrossOrigin("*")
public class StudentController {

    @Autowired
    private StudentService service;

    @PostMapping("/students")
    public Student add(@RequestBody Student s) {
        return service.addStudent(s);
    }

    @GetMapping("/viewStudents")
    public List<Student> getAll() {
        return service.getAllStudents();
    }

    @PutMapping("/students/{id}")
    public Student update(@PathVariable int id, @RequestBody Student s) {
        return service.updateStudent(id, s);
    }

    @DeleteMapping("/students/{id}")
    public void delete(@PathVariable int id) {
        service.deleteStudent(id);
    }
//    @GetMapping("/viewStudent/{id}")
//    public Student findById(@PathVariable int id) {
//    	return service.findById(id);
//    }
    
    
}