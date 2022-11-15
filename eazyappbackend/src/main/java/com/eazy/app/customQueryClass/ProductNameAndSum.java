package com.eazy.app.customQueryClass;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ProductNameAndSum {
    public String name;
    public Integer sum;

    public ProductNameAndSum(String key, Integer valueOf) {
        name = key;
        sum = valueOf;
    }

}
