package com.wantcars.service;

import com.wantcars.WantCarsApplication;
import com.wantcars.entity.Dealer;
import com.wantcars.entity.DealerParameter;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.SQLException;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = WantCarsApplication.class)
public class DealerServiceTest {

    @Autowired
    DealerService dealerService;

    @Test
    public void queryAllDealersSize() {
        try {
            List<Dealer> list = dealerService.getDealerList("g", "seattle","98006", 20, 0);
            assertEquals(20, list.size());
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void queryAllDealersName() {
        try {
            List<Dealer> list = dealerService.getDealerList("g", "seattle","98006", 20, 0);
            assertThat(list, hasItem(allOf(hasProperty("name", containsString("g")))));
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
