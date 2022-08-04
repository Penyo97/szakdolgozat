package com.eazy.app.controllers;


import com.eazy.app.models.Product;
import com.eazy.app.services.ProductService;
import lombok.RequiredArgsConstructor;
import java.util.Set;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api")
public class ProductController {

    private final ProductService productService;

    @RequestMapping(value = "/getAllProduct")
    public Set<Product> getAllProduct(){
       return productService.getProducts();
    }

    @RequestMapping(value = "/getProductByCategory/{category}")
    public Set<Product> getAllProductByCategory(@PathVariable String category){
            return productService.getProductsByCategory(category);
    }
}
