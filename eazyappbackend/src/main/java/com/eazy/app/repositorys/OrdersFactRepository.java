package com.eazy.app.repositorys;

import com.eazy.app.models.dataWarehouse.OrderDM.OrderFact;
import org.springframework.data.repository.CrudRepository;

public interface OrdersFactRepository extends CrudRepository<OrderFact,Long> {
}
