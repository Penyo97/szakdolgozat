package com.eazy.app.services;

import com.eazy.app.models.Product;

import java.util.Set;

public interface ProductService {
    Set<Product> getProducts(Long id);

    Set<Product> getProductsByCategory(String category);
}
