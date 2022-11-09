package com.eazy.app.models.dataWarehouse.OrderDM;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class ProductDim {
    @Id
    @Column(name = "product_dim_id", nullable = false)
    private Long id;

    private String productName;

    private String category;
}
