package com.eazy.app.services.imp;

import java.util.List;
import com.eazy.app.models.dataWarehouse.OrderDM.OrderFact;
import com.eazy.app.repositorys.OrdersFactRepository;
import com.eazy.app.requestClasses.DataMartDatas;
import com.eazy.app.services.EtlService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class EtlServiceImp implements EtlService {

    private final OrdersFactRepository ordersFactRepository;

    public void ETL(List<DataMartDatas> dataMartDatasList){
        dataMartDatasList.stream().forEach((dm) -> {
            dm.rents.stream().forEach(ord -> {
                var orderFact = OrderFact
                    .builder()
                    .count(ord.count)
                    .price(ord.price)
                    .build();
            });

        });

    }
}
