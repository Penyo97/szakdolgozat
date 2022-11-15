package com.eazy.app.controllers;

import com.eazy.app.models.Manufacturer;
import com.eazy.app.repositorys.ManufacturerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ManufacturerController {

    private final ManufacturerRepository manufacturerRepository;

    @CrossOrigin(origins = "*")
    @GetMapping(path = "/getallmanufacturer")
    public Iterable<Manufacturer> getAllManufacturer() { return manufacturerRepository.findAll();}

}
