package com.wantcars.service;

import com.wantcars.dao.VehicleManager;
import com.wantcars.entity.VehicleFilterContent;
import com.wantcars.entity.VehicleFilterSelected;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FilterServiceImpl implements FilterService{
    @Autowired
    private VehicleManager vehicleManager;

    public VehicleFilterContent getFilterContent(VehicleFilterSelected vehicleFilterSelected) {
//        return vehicleManager.getVehicleFilterContent();
        return null;
    }
}
