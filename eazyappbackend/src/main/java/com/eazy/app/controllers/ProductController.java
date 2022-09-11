package com.eazy.app.controllers;


import com.eazy.app.models.Product;
import com.eazy.app.services.ProductService;
import lombok.RequiredArgsConstructor;
import java.util.Set;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ProductController {

    private final ProductService productService;

    @GetMapping(path = "/getProductByManufacturer/{id}")
    public Set<Product> getAllProduct(@PathVariable String id){
        Long lid = Long.parseLong(id);
        return productService.getProducts(lid);
    }

    @RequestMapping(value = "/getProductByCategory/{category}")
    public Set<Product> getAllProductByCategory(@PathVariable String category){
            return productService.getProductsByCategory(category);
    }
}
