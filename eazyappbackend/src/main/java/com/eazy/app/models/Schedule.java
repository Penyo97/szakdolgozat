package com.eazy.app.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Schedule {

    @Id
    @Column(name = "schedule_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "employee_id")
    private Employee employee;

    private Date date;

    private Integer start_hour;

    private Integer end_hour;

    private Integer duration;
}
