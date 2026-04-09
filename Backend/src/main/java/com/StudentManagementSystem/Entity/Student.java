package com.StudentManagementSystem.Entity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;


@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull(message = "Must Fill")
    private String name;
    private String email;
    private LocalDate dateOfBirth;
    private String degree;
    private String gender;
	private double attendance = 0;
    private int totalMarks = 0;
    private int obtainedMarks = 0;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getDegree() {
		return degree;
	}
	public void setDegree(String degree) {
		this.degree = degree;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public double getAttendance() {
		return attendance;
	}
	public void setAttendance(double attendance) {
		this.attendance = attendance;
	}
	public int getTotalMarks() {
		return totalMarks;
	}
	public void setTotalMarks(int totalMarks) {
		this.totalMarks = totalMarks;
	}
	public int getObtainedMarks() {
		return obtainedMarks;
	}
	public void setObtainedMarks(int obtainedMarks) {
		this.obtainedMarks = obtainedMarks;
	}
    
    
    
    
    
}