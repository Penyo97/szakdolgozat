package com.eazy.app.models;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Manufacturer {

    @Id
    @Column(name = "manufacturer_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100)
    private String name;

    @Column(length = 100)
    private String city;

    @Column(length = 100)
    private String street;

    private int postal_code;

    @Column(length = 50)
    private String mail;

    @Column(length = 11)
    private String phone;

    private int open_time;

    private int close_time;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "employee_id")
    private Set<Employee> employees;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id")
    private Set<Product>products;
}
