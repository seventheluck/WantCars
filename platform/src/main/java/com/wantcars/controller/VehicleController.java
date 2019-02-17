package com.wantcars.controller;

import com.wantcars.entity.Vehicle;
import com.wantcars.entity.VehicleFilterSelected;
import com.wantcars.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @GetMapping("/vehicle")
    public List<Vehicle> queryVehicleList(@RequestParam String dealerID,
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
        List<Vehicle> result = vehicleService.Query(vehicleFilterSelected);
        return result;
    }



}
