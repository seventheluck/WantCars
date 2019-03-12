package com.wantcars.service;

import com.wantcars.dao.VehicleManager;
import com.wantcars.entity.VehicleFilterContent;
import com.wantcars.entity.VehicleFilterSelected;
import com.wantcars.mapper.FilterMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FilterServiceImpl implements FilterService{
    @Autowired
    private FilterMapper filterMapper;

    public VehicleFilterContent getFilterContent(VehicleFilterSelected vehicleFilterSelected) {

        VehicleFilterContent vehicleFilterContent = new VehicleFilterContent();
        vehicleFilterContent.setBodyType(filterMapper.queryBodyType(vehicleFilterSelected));
        vehicleFilterContent.setBrand(filterMapper.queryBrand(vehicleFilterSelected));
        vehicleFilterContent.setExteriorColor(filterMapper.queryExColor(vehicleFilterSelected));
        vehicleFilterContent.setInteriorColor(filterMapper.queryInColor(vehicleFilterSelected));
        vehicleFilterContent.setIsNew(filterMapper.queryType(vehicleFilterSelected));
        vehicleFilterContent.setModel(filterMapper.queryModel(vehicleFilterSelected));
        vehicleFilterContent.setMiles(filterMapper.queryMile(vehicleFilterSelected));
        vehicleFilterContent.setPrice(filterMapper.queryPrice(vehicleFilterSelected));
        vehicleFilterContent.setYears(filterMapper.queryYear(vehicleFilterSelected));
        return vehicleFilterContent;
    }
}
