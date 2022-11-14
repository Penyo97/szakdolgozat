package com.eazy.app.repositorys;

import java.util.Optional;
import com.eazy.app.models.Manufacturer;
import com.eazy.app.models.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product,Long> {

    Iterable<Product> getProductsByCategory(String category);

    Iterable<Product> getProductsByManufacturer(Manufacturer manufacturer);

    Optional<Product> findProductBySku(Integer sku);
}
