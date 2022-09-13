package com.eazy.app.services.imp;

import com.eazy.app.models.Manufacturer;
import com.eazy.app.models.Product;
import com.eazy.app.repositorys.ManufacturerRepository;
import com.eazy.app.repositorys.ProductRepository;
import com.eazy.app.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class ProductServiceImp implements ProductService {

    private final ProductRepository productRepository;

    private final ManufacturerRepository manufacturerRepository;

    @Override
    public Set<Product> getProducts(Long id) {

        Set<Product> products = new HashSet<>();

        Optional<Manufacturer> manufacturer = manufacturerRepository.findById(id);
        if (manufacturer.isPresent()) {
            productRepository.getProductsByManufacturer(manufacturer.get()).iterator().forEachRemaining(products::add);
        }
        return products;
    }

    @Override
    public Set<Product> getProductsByCategory(String category) {
        Set<Product> productsbycategory = new HashSet<>();
        productRepository.getProductsByCategory(category).iterator().forEachRemaining(productsbycategory::add);
        return productsbycategory;
    }
}
