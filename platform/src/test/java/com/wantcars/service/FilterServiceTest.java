package com.wantcars.service;

import com.wantcars.WantCarsApplication;
import com.wantcars.mapper.FilterMapper;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = WantCarsApplication.class)
public class FilterServiceTest {

    @Autowired
    private FilterMapper filterMapper;


}
