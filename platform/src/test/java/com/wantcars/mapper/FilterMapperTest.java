package com.wantcars.mapper;

import com.wantcars.WantCarsApplication;
import com.wantcars.entity.VehicleFilterSelected;
import org.junit.Test;
import org.junit.jupiter.api.Tag;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = WantCarsApplication.class)
@Tag("development")
public class FilterMapperTest {

    @Autowired
    FilterMapper filterMapper;

    @Test
    public void queryTypeWithoutList() {
        VehicleFilterSelected v = new VehicleFilterSelected("10130");
        List<String> list = filterMapper.queryType(v);
        assertEquals(2, list.size());
    }

    @Test
    public void queryTypeWithZeroSizeList() {
        VehicleFilterSelected v = new VehicleFilterSelected("10130");
        v.setYears(new ArrayList<String>());
        List<String> list = filterMapper.queryType(v);
        assertEquals(2, list.size());
    }

    @Test
    public void queryBrandWithoutList() {
        VehicleFilterSelected v = new VehicleFilterSelected("10130");
        List<String> list = filterMapper.queryBrand(v);
        assertThat(list, hasItem(containsString("Ford")));
    }

    @Test
    public void queryBrandWithZeroSizeList() {
        VehicleFilterSelected v = new VehicleFilterSelected("10130");
        v.setYears(new ArrayList<String>());
        List<String> list = filterMapper.queryBrand(v);
        assertThat(list, hasItem(containsString("Toyota")));
    }

    @Test
    public void queryYearWithoutList() {
        VehicleFilterSelected v = new VehicleFilterSelected("10130");
        List<String> list = filterMapper.queryYear(v);
        assertThat(list, hasItem(containsString("20")));
    }

    @Test
    public void queryYearWithZeroSizeList() {
        VehicleFilterSelected v = new VehicleFilterSelected("10130");
        v.setYears(new ArrayList<String>());
        List<String> list = filterMapper.queryYear(v);
        assertThat(list, hasItem(containsString("20")));
    }
}
