package com.eazy.app.repositorys;

import com.eazy.app.models.dataWarehouse.OrderDM.ProductDim;
import org.springframework.data.repository.CrudRepository;

public interface ProductDimRepository extends CrudRepository<ProductDim,Long> {
}
