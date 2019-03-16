package com.wantcars.mapper;

import com.wantcars.WantCarsApplication;
import com.wantcars.entity.Dealer;
import com.wantcars.entity.DealerParameter;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Tags;
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
@DisplayName("Test case for Dealer")
@Tag("development")
public class DealerMapperTest {

    @Autowired
    DealerMapper dealerMapper;


    @Test
    public void queryDealerSize() {
        try {
            List<String> postCode = null;
            DealerParameter dealerParameter = new DealerParameter(0, "m", "seattle", postCode, 0, 20);
            List<Dealer> list = dealerMapper.searchDealers(dealerParameter);
            assertEquals(20, list.size());
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void queryDealerName() {
        try {
            List<String> postCode = null;
            DealerParameter dealerParameter = new DealerParameter(0, "m", "seattle", postCode, 0, 20);
            List<Dealer> list = dealerMapper.searchDealers(dealerParameter);
            assertThat(list, hasItem(allOf(hasProperty("name", containsString("m")))));
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
