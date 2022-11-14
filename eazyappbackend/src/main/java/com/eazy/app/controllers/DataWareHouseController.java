package com.eazy.app.controllers;


import java.util.List;
import com.eazy.app.requestClasses.DataMart;
import com.eazy.app.requestClasses.DataMartDatas;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class DataWareHouseController {

    @PostMapping(value = "/datawarehouse")
    public void modifyItem(@RequestBody DataMart dataMartDatas){
      String valami =  dataMartDatas.dataMartDatasList.get(2).mail;
    }
}
