package com.eazy.app.models.dataWarehouse.OrderDM;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Entity
@Data
@NoArgsConstructor
@SuperBuilder
public class OrderFact {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "date_dim_id")
    private DateDim dateDim;

    @ManyToOne
    @JoinColumn(name = "customer_dim_id")
    private CustomerDim customerDim;

    @ManyToOne
    @JoinColumn(name = "product_dim_id")
    private ProductDim productDim;

    @ManyToOne
    @JoinColumn(name = "manufactur_dim_id")
    private ManufacturDim manufacturDim;

    private Integer count;

    private Integer price;
}
