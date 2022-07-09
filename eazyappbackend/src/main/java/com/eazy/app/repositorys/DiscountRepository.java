package com.eazy.app.repositorys;

import com.eazy.app.models.Discount;
import org.springframework.data.repository.CrudRepository;

public interface DiscountRepository extends CrudRepository<Discount,Long> {
}
