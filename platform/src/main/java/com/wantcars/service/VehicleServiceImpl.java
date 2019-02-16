package com.wantcars.service;

import com.wantcars.dao.VehicleManager;
import com.wantcars.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.*;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class VehicleServiceImpl implements VehicleService {

    private VehicleFilterSelected parameter;
    private int pageCount;
    @Autowired
    private VehicleManager vehicleManager;

    public List<Vehicle> Query(VehicleFilterSelected parameter) {

        try {
            return vehicleManager.Query(parameter);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Deprecated
    public List<List<ImageIcon>> getImages() {
        List<List<ImageIcon>> res = new ArrayList<>();

        return res;
    }


    public VehicleFilterContent getFilterContent() {
        return vehicleManager.getVehicleFilterContent();
    }

    public List<Vehicle> getVehicleList() {
        return vehicleManager.getVehicles();
    }

    public int getPageCount() {
        return vehicleManager.getPageCount();
    }

    public Vehicle findVehicleById(int vehicleId) throws SQLException {
        return vehicleManager.findVehicleById(vehicleId);
    }

    public List<Vehicle> findAllVehiclesByDealerId(String dealerId) throws SQLException {
        return vehicleManager.findAllVehiclesByDealerId(dealerId);
    }

    public String maintainVehicle(Vehicle vehicle) throws SQLException {
        return vehicleManager.maintainVehicle(vehicle);
    }

    public boolean deleteVehicleByVehicleId(String vehicleId) throws SQLException {
        return vehicleManager.deleteVehicle(vehicleId);
    }
}
