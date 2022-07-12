package com.eazy.app.repositorys;

import com.eazy.app.models.Schedule;
import org.springframework.data.repository.CrudRepository;

public interface ScheduleRepository extends CrudRepository<Schedule,Long> {
}
