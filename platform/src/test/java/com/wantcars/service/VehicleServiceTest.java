package com.wantcars.service;

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

import static org.hamcrest.Matchers.*;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = WantCarsApplication.class)
public class VehicleServiceTest {

    @Autowired
    VehicleService vehicleService;

    @Test
    public void queryAllWithoutList() {
        VehicleFilterSelected v = new VehicleFilterSelected("10130");
        List<Vehicle> list = vehicleService.Query(v);
        assertEquals(20, list.size());
    }

    @Test
    public void queryAllWithZeroSizeList() {
        VehicleFilterSelected v = new VehicleFilterSelected("10130");
        v.setYears(new ArrayList<String>());
        List<Vehicle> list = vehicleService.Query(v);
        assertEquals(20, list.size());
    }

    @Test
    public void queryAllWithYears() {
        VehicleFilterSelected v = new VehicleFilterSelected("10130");
        List<String> years = new ArrayList<String>();
        years.add("2015");
        v.setYears(years);
        List<Vehicle> list = vehicleService.Query(v);
        assertEquals(20, list.size());
        assertThat(list, hasItem(allOf(
                hasProperty("year", is("2015"))
        )));
    }

    @Test
    public void queryAllWithYearsAndPageSizeAndNumber() {
        VehicleFilterSelected v = new VehicleFilterSelected("10130", 1, 50);
        List<String> years = new ArrayList<String>();
        years.add("2016");
        v.setYears(years);
        List<Vehicle> list = vehicleService.Query(v);
        assertEquals(50, list.size());
        assertThat(list, hasItem(allOf(hasProperty("year", is("2016")))));
    }

    @Test
    public void queryOne() {
        Vehicle vehicle = vehicleService.QueryOne(296990693);
        assertEquals("296990693", vehicle.getId());
    }
}
