package com.eazy.app.controllers;


import java.awt.*;
import java.util.Optional;
import com.eazy.app.models.Employee;
import com.eazy.app.repositorys.EmployeeRepository;
import com.eazy.app.requestClasses.Login;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final EmployeeRepository employeeRepository;

    @PostMapping(value = "/login",produces = {MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin(origins = "http://localhost:3000")
    public String auth(@RequestBody Login body) {

        Optional<Employee> emp = employeeRepository.findByMailAndAndPassword(body.mail,body.password);
        Employee employee;
        if (emp.isPresent()){
            employee = emp.get();
            return true+","+employee.getPosition().getId();
        }
        else {
            return false+","+0;
        }

    }
}
