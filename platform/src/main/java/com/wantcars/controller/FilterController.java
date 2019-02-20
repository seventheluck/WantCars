package com.wantcars.controller;

import com.wantcars.entity.Vehicle;
import com.wantcars.entity.VehicleFilterContent;
import com.wantcars.entity.VehicleFilterSelected;
import com.wantcars.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FilterController {

    @Autowired
    private VehicleService vehicleService;

    @GetMapping("/vehicle")
    public VehicleFilterContent queryVehicleList(@RequestParam String dealerID,
                                          @RequestParam List<String> years,
                                          @RequestParam List<String> brand,
                                          @RequestParam List<String> model,
                                          @RequestParam List<String> isNew,
                                          @RequestParam List<String> price,
                                          @RequestParam List<String> exteriorColor,
                                          @RequestParam List<String> interiorColor,
                                          @RequestParam List<String> bodyType,
                                          @RequestParam List<String> miles) {

        VehicleFilterSelected vehicleFilterSelected = new VehicleFilterSelected(dealerID);
        vehicleFilterSelected.setYears(years);
        vehicleFilterSelected.setBrand(brand);
        vehicleFilterSelected.setModel(model);
        vehicleFilterSelected.setIsNew(isNew);
        vehicleFilterSelected.setPrice(price);
        vehicleFilterSelected.setExteriorColor(exteriorColor);
        vehicleFilterSelected.setInteriorColor(interiorColor);
        vehicleFilterSelected.setBodyType(bodyType);
        vehicleFilterSelected.setMiles(miles);
        VehicleFilterContent result = vehicleService.getFilterContent();
        return result;
    }
}