package com.eazy.app.services.imp;

import com.eazy.app.models.Product;
import com.eazy.app.repositorys.ProductRepository;
import com.eazy.app.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class ProductServiceImp implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public Set<Product> getProducts() {
        Set<Product> products = new HashSet<>();
        productRepository.findAll().iterator().forEachRemaining(products::add);
        return products;
    }

    @Override
    public Set<Product> getProductsByCategory(String category) {
        Set<Product> productsbycategory = new HashSet<>();
        productRepository.getProductsByCategory(category).iterator().forEachRemaining(productsbycategory::add);
        return productsbycategory;
    }
}
