package com.eazy.app.repositorys;

import com.eazy.app.models.Position;
import org.springframework.data.repository.CrudRepository;

public interface PositionRepository extends CrudRepository<Position,Long> {
}
