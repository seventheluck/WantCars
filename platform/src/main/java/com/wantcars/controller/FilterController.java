package com.wantcars.controller;

import com.wantcars.entity.Vehicle;
import com.wantcars.entity.VehicleFilterContent;
import com.wantcars.entity.VehicleFilterSelected;
import com.wantcars.service.FilterService;
import com.wantcars.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class FilterController {

    @Autowired
    private FilterService filterService;

    @CrossOrigin(origins = {"http://wantcars-front.s3-website-us-west-2.amazonaws.com", "http://localhost:3000"})
    @GetMapping("/filter")
    public VehicleFilterContent queryVehicleList(@RequestParam String dealerID,
                                                 @RequestParam(required = false) List<String> years,
                                                 @RequestParam(required = false) List<String> brand,
                                                 @RequestParam(required = false) List<String> model,
                                                 @RequestParam(required = false) List<Integer> isNew,
                                                 @RequestParam(required = false) List<String> price,
                                                 @RequestParam(required = false) List<String> exteriorColor,
                                                 @RequestParam(required = false) List<String> interiorColor,
                                                 @RequestParam(required = false) List<String> bodyType,
                                                 @RequestParam(required = false) List<String> miles) {

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
        VehicleFilterContent result = filterService.getFilterContent(vehicleFilterSelected);
        return result;
    }
}
