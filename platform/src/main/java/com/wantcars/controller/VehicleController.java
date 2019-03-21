package com.wantcars.controller;

import com.wantcars.entity.Vehicle;
import com.wantcars.entity.VehicleFilterSelected;
import com.wantcars.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @CrossOrigin(origins = {"http://wantcars-front.s3-website-us-west-2.amazonaws.com", "http://localhost:3000"})
    @GetMapping("/vehicle")
    public List<Vehicle> queryVehicleList(@RequestParam String dealerID,
                                          @RequestParam(required = false) List<String> years,
                                          @RequestParam(required = false) List<String> brand,
                                          @RequestParam(required = false) List<String> model,
                                          @RequestParam(required = false) List<Integer> isNew,
                                          @RequestParam(required = false) List<String> price,
                                          @RequestParam(required = false) List<String> exteriorColor,
                                          @RequestParam(required = false) List<String> interiorColor,
                                          @RequestParam(required = false) List<String> bodyType,
                                          @RequestParam(required = false) List<String> miles,
                                          @RequestParam int pageSize,
                                          @RequestParam int pageNumber) {

        VehicleFilterSelected vehicleFilterSelected = new VehicleFilterSelected(dealerID, pageNumber, pageSize);
        vehicleFilterSelected.setYears(years);
        vehicleFilterSelected.setBrand(brand);
        vehicleFilterSelected.setModel(model);
        vehicleFilterSelected.setIsNew(isNew);
        vehicleFilterSelected.setPrice(price);
        vehicleFilterSelected.setExteriorColor(exteriorColor);
        vehicleFilterSelected.setInteriorColor(interiorColor);
        vehicleFilterSelected.setBodyType(bodyType);
        vehicleFilterSelected.setMiles(miles);
        List<Vehicle> result = vehicleService.query(vehicleFilterSelected);
        return result;
    }
}
