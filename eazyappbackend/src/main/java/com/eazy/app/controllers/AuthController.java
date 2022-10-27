package com.eazy.app.controllers;


import java.util.Optional;
import com.eazy.app.models.Employee;
import com.eazy.app.repositorys.EmployeeRepository;
import com.eazy.app.requestClasses.Login;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final EmployeeRepository employeeRepository;

    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public boolean auth(@RequestBody Login body) {

        Optional<Employee> emp = employeeRepository.findByMailAndAndPassword(body.mail,body.password);
        return emp.isPresent();
    }
}
