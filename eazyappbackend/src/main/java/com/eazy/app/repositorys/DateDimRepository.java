package com.eazy.app.repositorys;

import java.time.LocalDateTime;
import java.util.Optional;
import com.eazy.app.models.dataWarehouse.OrderDM.DateDim;
import org.springframework.data.repository.CrudRepository;

public interface DateDimRepository extends CrudRepository<DateDim, LocalDateTime> {
    Optional<DateDim> findDateDimByYearAndMonthAndDayAndHourAndMinute(Integer year,Integer months,Integer day, Integer hour,Integer minute);
}
