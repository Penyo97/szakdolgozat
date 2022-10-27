package com.eazy.app.repositorys;

import java.util.Optional;
import com.eazy.app.models.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee,Long> {
     Optional<Employee> findByMailAndAndPassword(String mail, String password);
}
