package com.wantcars.service;

import com.wantcars.entity.Vehicle;
import com.wantcars.entity.VehicleFilterContent;
import com.wantcars.entity.VehicleFilterSelected;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public interface VehicleService {

    public List<Vehicle> Query(VehicleFilterSelected parameter);

    public List<List<ImageIcon>> getImages();




    public List<Vehicle> getVehicleList();

    public int getPageCount();

    public Vehicle findVehicleById(int vehicleId) throws SQLException;

    public List<Vehicle> findAllVehiclesByDealerId(String dealerId) throws SQLException;

    public String maintainVehicle(Vehicle vehicle) throws SQLException;

    public boolean deleteVehicleByVehicleId(String vehicleId) throws SQLException;
}
