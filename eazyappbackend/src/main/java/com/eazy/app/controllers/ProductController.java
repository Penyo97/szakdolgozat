package com.eazy.app.controllers;


import com.eazy.app.models.Product;
import com.eazy.app.repositorys.ProductRepository;
import com.eazy.app.requestClasses.ModifyProduct;
import com.eazy.app.services.ProductService;
import lombok.RequiredArgsConstructor;
import java.util.Optional;
import java.util.Set;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    private final ProductService productService;

    private final ProductRepository productRepository;

    @GetMapping(path = "/getProductByManufacturer/{id}")
    public Set<Product> getAllProduct(@PathVariable String id){
        return productService.getProducts(Long.parseLong(id));
    }

    @GetMapping(value = "/getProductByCategory/{category}")
    public Set<Product> getAllProductByCategory(@PathVariable String category){
            return productService.getProductsByCategory(category);
    }

    @PostMapping(value = "/modifyItem")
    public void modifyItem(@RequestBody ModifyProduct product){
        Optional<Product> prod = productRepository.findProductBySku(product.sku);
        var modProduct = prod.get();
        modProduct.setBrutto_price(product.brutto);
        modProduct.setFree(product.free);
        modProduct.setNetto_price(product.netto);
        productRepository.save(modProduct);
    }
}
