package com.eazy.app.models.dataWarehouse;

import javax.persistence.*;
import java.time.LocalDate;
import com.eazy.app.models.Brand;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class ProductHistory {

    @Id
    @Column(name = "product_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer sku;

    private Integer product_group;

    @Column(length = 100)
    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "brand_id")
    private Brand brand;

    @Column(length = 255)
    private String description;

    private String category;

    @Column(length = 255)
    private String image;

    private Integer manufacturer;

    private Integer netto_price;

    private Integer brutto_price;

    private LocalDate validFrom;

    private LocalDate validTo;
}
