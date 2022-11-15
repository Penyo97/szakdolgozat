package com.eazy.app.repositorys;

import com.eazy.app.models.dataWarehouse.OrderDM.CustomerDim;
import org.springframework.data.repository.CrudRepository;

public interface CustomerDimRepository extends CrudRepository<CustomerDim,Long> {
}
