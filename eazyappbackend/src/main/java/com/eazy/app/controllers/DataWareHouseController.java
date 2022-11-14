package com.eazy.app.controllers;

import com.eazy.app.requestClasses.DataMart;
import com.eazy.app.services.EtlService;
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

    @PostMapping(value = "/datawarehouse")
    public void modifyItem(@RequestBody DataMart dataMartDatas){
         etlService.ETL(dataMartDatas.dataMartDatasList);
    }
}
