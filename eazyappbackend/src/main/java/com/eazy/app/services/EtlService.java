package com.eazy.app.services;

import java.util.List;
import com.eazy.app.requestClasses.DataMartDatas;
import org.springframework.stereotype.Service;

@Service
public interface EtlService {

    void ETL(List<DataMartDatas> dataMartDatasList);
}
