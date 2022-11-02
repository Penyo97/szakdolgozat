package com.eazy.app.controllers;


import com.eazy.app.models.Product;
import com.eazy.app.services.ProductService;
import lombok.RequiredArgsConstructor;
import java.util.Set;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    private final ProductService productService;

    @GetMapping(path = "/getProductByManufacturer/{id}")
    public Set<Product> getAllProduct(@PathVariable String id){
        return productService.getProducts(Long.parseLong(id));
    }

    @RequestMapping(value = "/getProductByCategory/{category}")
    public Set<Product> getAllProductByCategory(@PathVariable String category){
            return productService.getProductsByCategory(category);
    }
}
