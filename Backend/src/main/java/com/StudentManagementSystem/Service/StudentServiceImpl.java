package com.StudentManagementSystem.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.StudentManagementSystem.Entity.Student;
import com.StudentManagementSystem.Repository.StudentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository repo;

    @Override
    public Student addStudent(Student s) {
    	
    	if (!repo.existsByemail(s.getEmail())) {
			
    		return repo.save(s);
		} 
    	
    	return repo.findByEmail(s.getEmail());
        
    }

    @Override
    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    @Override
    public Student updateStudent(int id, Student s) {
        s.setId(id);
        return repo.save(s);
    }

    @Override
    public void deleteStudent(int id) {
        repo.deleteById(id);
    }
    
    
    @Override
    public Student findById(int id) {
    	return repo.findById(id).orElse(null);
    }
    
    
}