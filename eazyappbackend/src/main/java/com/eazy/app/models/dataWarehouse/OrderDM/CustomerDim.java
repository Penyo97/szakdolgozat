package com.eazy.app.models.dataWarehouse.OrderDM;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class CustomerDim {
    @Id
    @Column(name = "customer_dim_id", nullable = false)
    private Long id;

    private String firstName;

    private String lastName;

    private String mail;

    private String userName;
}
