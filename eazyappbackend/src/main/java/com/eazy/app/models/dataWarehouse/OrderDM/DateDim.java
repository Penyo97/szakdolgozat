package com.eazy.app.models.dataWarehouse.OrderDM;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@Data
@NoArgsConstructor
@SuperBuilder
public class DateDim {

    @Id
    @Column(name = "date_dim_id", nullable = false)
    private LocalDateTime date;

    private Integer year;

    private Integer month;

    private Integer day;

    private Integer hour;

    private Integer minute;
}
