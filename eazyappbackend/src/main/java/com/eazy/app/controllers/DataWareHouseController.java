package com.eazy.app.controllers;

import java.util.List;
import com.eazy.app.customQueryClass.ProductNameAndSum;
import com.eazy.app.repositorys.OrdersFactRepository;
import com.eazy.app.requestClasses.DataMart;
import com.eazy.app.services.imp.CustomQuerys;
import com.eazy.app.services.imp.EtlServiceImp;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class DataWareHouseController {

    @Autowired
    private EtlServiceImp etlService;
    private final OrdersFactRepository ordersFactRepository;
    @Autowired
    private  CustomQuerys customQueries;

    @PostMapping(value = "/datawarehouse")
    public void modifyItem(@RequestBody DataMart dataMartDatas){
         etlService.ETL(dataMartDatas.dataMartDatasList);
    }

    @GetMapping("/getProductNameAndSum")
    public List<ProductNameAndSum> getOrders() {
        return customQueries.productNamesAndSum();
    }
}
