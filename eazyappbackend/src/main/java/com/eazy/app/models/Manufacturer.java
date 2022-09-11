package com.eazy.app.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "MANUFACTURER",schema = "public")
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

    @ToString.Exclude
    @JsonManagedReference
    @OneToMany(mappedBy = "manufacturer",cascade = CascadeType.ALL)
    private List<Employee> employees;

    @ToString.Exclude
    @JsonManagedReference
    @OneToMany(mappedBy = "manufacturer",cascade = CascadeType.ALL)
    private List<Product>products;
}
