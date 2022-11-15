package com.eazy.app.repositorys;

import java.util.Optional;
import com.eazy.app.models.Manufacturer;
import com.eazy.app.models.Product;
import org.springframework.data.repository.CrudRepository;

public interface ManufacturerRepository extends CrudRepository<Manufacturer,Long> {

    Optional<Manufacturer> findManufacturerByProducts(Product product);
}
