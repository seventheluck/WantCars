package com.wantcars.dao;

import com.wantcars.entity.*;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public interface VehicleManager {
    public String maintainVehicle(Vehicle vehicle) throws SQLException;

    public boolean deleteVehicle(String vehicleId) throws SQLException;

    public Vehicle findVehicleById(int vehicleId) throws SQLException;

    public int getPageCount();

    public List<Vehicle> findAllVehiclesByDealerId(String dealerId) throws SQLException;

    //A specified simplified query port ONLY used for apply specials.
    public List<Vehicle> getAllVehiclesByFilter(VehicleFilterSelected p) throws SQLException;

    public List<Vehicle> Query(VehicleFilterSelected p) throws SQLException;

    public List<Vehicle> getVehicles();

    public void generateVehicleBySQL(String sql, Vehicle v) throws SQLException;

    public void updateFinalPriceAndDiscount(List<Vehicle> vehicles) throws SQLException;
}
