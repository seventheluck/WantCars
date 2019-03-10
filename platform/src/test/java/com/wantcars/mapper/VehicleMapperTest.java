package com.wantcars.mapper;

import com.wantcars.WantCarsApplication;
import com.wantcars.entity.Vehicle;
import com.wantcars.entity.VehicleFilterSelected;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = WantCarsApplication.class)
public class VehicleMapperTest {

    @Autowired
    VehicleMapper vehicleMapper;

    @Test
    public void queryAllWithoutList() {
        VehicleFilterSelected v = new VehicleFilterSelected("10130");
        List<Vehicle> list = vehicleMapper.queryAll(v);
        for (Vehicle vehicle : list) {
            v.getBodyType();
        }
    }

    @Test
    public void queryAllWithZeroSizeList() {
        VehicleFilterSelected v = new VehicleFilterSelected("10130");
        v.setYears(new ArrayList<String>());
        List<Vehicle> list = vehicleMapper.queryAll(v);
        for (Vehicle vehicle : list) {
            v.getBodyType();
        }
    }

    @Test
    public void queryAllWithYears() {
        VehicleFilterSelected v = new VehicleFilterSelected("10130");
        List<String> years = new ArrayList<String>();
        years.add("2015");
        v.setYears(years);
        List<Vehicle> list = vehicleMapper.queryAll(v);
        for (Vehicle vehicle : list) {
            v.getBodyType();
        }
    }

    @Test
    public void queryOne() {
        VehicleFilterSelected v = new VehicleFilterSelected("10130");
        Vehicle vehicle = vehicleMapper.queryOne(v);
    }
}
