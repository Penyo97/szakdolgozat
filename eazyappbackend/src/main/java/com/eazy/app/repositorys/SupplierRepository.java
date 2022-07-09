package com.eazy.app.repositorys;

import com.eazy.app.models.Supplier;
import org.springframework.data.repository.CrudRepository;

public interface SupplierRepository extends CrudRepository<Supplier,Long> {
}
