package com.eazy.app.services.imp;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import com.eazy.app.customQueryClass.ProductNameAndSum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class CustomQuerys {

    @Autowired
    private JdbcTemplate jdbcTemplate;

     private  final String GET_PRODUCT_AND_SUM = "select name,sum(price)from order_fact ord inner join product_dim pd" +
         "    on ord.product_dim_id = pd.product_dim_id group by name";

    public List<ProductNameAndSum> productNamesAndSum(){
        List<Map<String, Object>> list = jdbcTemplate.queryForList(GET_PRODUCT_AND_SUM);
        var productandSum = new ArrayList<ProductNameAndSum>();
        for (int i = 0; i < list.size(); i++) {
           productandSum.add(new ProductNameAndSum(list.get(i).get("name").toString(),
               Integer.valueOf(String.valueOf(list.get(i).get("sum")))));
        }
        return productandSum;
    }
}
