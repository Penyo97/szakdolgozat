package com.eazy.app.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@Table(name = "EMPLOYEE",schema = "public")
public class Employee {

    @Id
    @Column(name = "employee_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100)
    private String first_name;

    @Column(length = 100)
    private String last_name;

    @Column(length = 100)
    private String password;

    @Column(length = 50)
    private String mail;

    @Column(length = 11)
    private String phone;

    private Date hire_date;

    @ToString.Exclude
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "manufacturer_id")
    private Manufacturer manufacturer;

    @ToString.Exclude
    @JsonBackReference
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "position_id")
    private Position position;
}
