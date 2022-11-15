package com.eazy.app.services.imp;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import com.eazy.app.models.dataWarehouse.OrderDM.*;
import com.eazy.app.repositorys.*;
import com.eazy.app.requestClasses.DataMartDatas;
import com.eazy.app.services.EtlService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class EtlServiceImp implements EtlService {

    private final OrdersFactRepository ordersFactRepository;
    private final DateDimRepository dateDimRepository;
    private final ProductRepository productRepository;
    private final ManufacturerRepository manufacturerRepository;
    private final CustomerDimRepository customerDimRepository;
    private final ManufacturerDimRepository manufacturerDimRepository;
    private final ProductDimRepository productDimRepository;

    public void ETL(List<DataMartDatas> dataMartDatasList) {
        if (dateDimRepository.count() < 1) {
            FillDateDim();
        }

        dataMartDatasList.stream().forEach((dm) -> {
            dm.rents.stream().forEach(ord -> {
                var dateDim = dateDimRepository.
                    findDateDimByYearAndMonthAndDayAndHourAndMinute(
                        LocalDateTime.now().getYear(),
                        LocalDateTime.now().getMonthValue(),
                        LocalDateTime.now().getDayOfMonth(),
                        LocalDateTime.now().getHour(),
                        LocalDateTime.now().getMinute()
                    ).get();
                var customerDim = CustomerDim
                    .builder()
                    .id(1L)
                    .firstName(dm.firstName)
                    .lastName(dm.lastName)
                    .mail(dm.mail)
                    .userName(dm.userName)
                    .build();
                customerDimRepository.save(customerDim);
                var productDim = ProductDim
                    .builder()
                    .id(productRepository.findProductByName(ord.name).get().getId())
                    .name(ord.name)
                    .category(productRepository.findProductByName(ord.name).get().getCategory())
                    .build();
                productDimRepository.save(productDim);
                var manufacturerDim = ManufacturDim.
                    builder()
                    .id(manufacturerRepository.
                        findManufacturerByProducts(
                            productRepository.findProductByName(ord.name).get()
                        ).get().getId())
                    .name(manufacturerRepository.
                        findManufacturerByProducts(
                            productRepository.findProductByName(ord.name).get()
                        ).get().getName())
                    .city(manufacturerRepository.
                        findManufacturerByProducts(
                            productRepository.findProductByName(ord.name).get()
                        ).get().getCity())
                    .street(manufacturerRepository.
                        findManufacturerByProducts(
                            productRepository.findProductByName(ord.name).get()
                        ).get().getStreet())
                    .build();
                manufacturerDimRepository.save(manufacturerDim);
                var orderFact = OrderFact
                    .builder()
                    .count(ord.count)
                    .price(ord.price)
                    .dateDim(dateDim)
                    .customerDim(customerDim)
                    .productDim(productDim)
                    .manufacturDim(manufacturerDim)
                    .build();
                ordersFactRepository.save(orderFact);
            });

        });

    }

    private void FillDateDim() {
        var start = LocalDateTime.of(2022,11,15,0,0);
        dateDimRepository.saveAll(Stream.iterate(start, date -> date.plusMinutes(1))
            .limit(10000)
            .map((date) -> {
                var DMDate = DateDim
                    .builder()
                    .date(date)
                    .year(date.getYear())
                    .month(date.getMonthValue())
                    .day(date.getDayOfMonth())
                    .hour(date.getHour())
                    .minute(date.getMinute())
                    .build();
                return DMDate;
            }).collect(Collectors.toList()));
    }
}
