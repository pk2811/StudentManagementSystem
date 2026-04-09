package com.StudentManagementSystem.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.StudentManagementSystem.Entity.Student;
public interface StudentRepository extends JpaRepository<Student, Integer> { 
	
	
	Boolean  existsByemail(String email); 
	Student findByEmail(String email);
	
	
}
