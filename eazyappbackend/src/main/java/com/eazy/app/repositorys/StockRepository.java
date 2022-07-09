package com.eazy.app.repositorys;

import com.eazy.app.models.Stock;
import org.springframework.data.repository.CrudRepository;

public interface StockRepository extends CrudRepository<Stock,Long> {
}
