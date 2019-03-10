package com.wantcars.service;

import com.wantcars.entity.VehicleFilterContent;
import com.wantcars.entity.VehicleFilterSelected;

public interface FilterService {

    public VehicleFilterContent getFilterContent(VehicleFilterSelected vehicleFilterSelected);
}
