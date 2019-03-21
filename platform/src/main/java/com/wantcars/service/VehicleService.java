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

    public List<Vehicle> query(VehicleFilterSelected parameter);
    public int queryTotalNumbers(VehicleFilterSelected parameter);
    public Vehicle QueryOne(int id);
}
