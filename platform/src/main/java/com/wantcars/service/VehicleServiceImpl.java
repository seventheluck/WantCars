package com.wantcars.service;

import com.wantcars.entity.*;
import com.wantcars.mapper.VehicleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    private VehicleMapper vehicleMapper;

    public List<Vehicle> Query(VehicleFilterSelected parameter) {

        try {
            return vehicleMapper.queryAll(parameter);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ArrayList<Vehicle>();
    }

    @Override
    public Vehicle QueryOne(int id) {
        return vehicleMapper.queryOne(id);
    }
}
