package com.eazy.app.models.dataWarehouse.OrderDM;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@Data
@NoArgsConstructor
@SuperBuilder
public class ManufacturDim {
    @Id
    @Column(name = "manufactur_dim_id", nullable = false)
    private Long id;

    @Column(length = 100)
    private String name;

    @Column(length = 100)
    private String city;

    @Column(length = 100)
    private String street;
}
