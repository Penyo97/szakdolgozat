package com.eazy.app.repositorys;

import com.eazy.app.models.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product,Long> {

    Iterable<Product> getProductsByCategory(String category);

}
