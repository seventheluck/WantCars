package com.wantcars.service;

import com.wantcars.WantCarsApplication;
import com.wantcars.entity.VehicleFilterContent;
import com.wantcars.entity.VehicleFilterSelected;
import com.wantcars.mapper.FilterMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = WantCarsApplication.class)
public class FilterServiceTest {

    @Autowired
    private FilterService filterService;

    @Test
    public void queryTypeWithoutList() {
        VehicleFilterSelected v = new VehicleFilterSelected("10130");
        VehicleFilterContent vehicleFilterContent = filterService.getFilterContent(v);
        assertEquals("10130", vehicleFilterContent.getDealerID());
    }
}
