package com.eazy.app.repositorys;

import com.eazy.app.models.dataWarehouse.OrderDM.ManufacturDim;
import org.springframework.data.repository.CrudRepository;

public interface ManufacturerDimRepository extends CrudRepository<ManufacturDim,Long> {
}
