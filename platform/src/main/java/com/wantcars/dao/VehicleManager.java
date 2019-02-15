package com.wantcars.dao;

import com.wantcars.entity.Vehicle;

import java.sql.SQLException;

public interface VehicleManager {
    String maintainVehicle(Vehicle vehicle) throws SQLException;
    boolean deleteVehicle(String vehicleId) throws SQLException;
}
