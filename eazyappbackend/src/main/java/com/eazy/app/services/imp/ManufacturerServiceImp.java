package com.eazy.app.services.imp;

import java.util.HashSet;
import java.util.Set;
import com.eazy.app.models.Manufacturer;
import com.eazy.app.repositorys.ManufacturerRepository;
import com.eazy.app.services.ManufacturerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ManufacturerServiceImp implements ManufacturerService {

    private final ManufacturerRepository manufacturerRepository;

    @Override
    public Set<Manufacturer> getManufacturers() {
        Set<Manufacturer> manufacturers = new HashSet<>();
        manufacturerRepository.findAll().iterator().forEachRemaining(manufacturers::add);
        return manufacturers;
    }
}
