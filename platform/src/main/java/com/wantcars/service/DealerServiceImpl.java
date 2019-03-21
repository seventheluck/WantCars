package com.wantcars.service;

import com.wantcars.entity.Dealer;
import com.wantcars.entity.DealerParameter;
import com.wantcars.mapper.DealerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class DealerServiceImpl implements DealerService {

    @Autowired
    private DealerMapper dealerMapper;

    public List<Dealer> getDealerList(String dealerName, String city, String zip, int pageSize, int pageNumber) {
        // TODO
        List<String> postCode = null;
        DealerParameter dealerParameter = new DealerParameter(0, dealerName, city
                , postCode, pageNumber, pageSize);
        try {
            return dealerMapper.searchDealers(dealerParameter);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return new ArrayList<Dealer>();
    }

    @Override
    public int getDealerCount(String dealerName, String city, String zip) {
        // TODO
        List<String> postCode = null;
        DealerParameter dealerParameter = new DealerParameter(0, dealerName, city
                , postCode, 0, 0);
        try {
            return dealerMapper.searchDealerCount(dealerParameter);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return 0;
    }

    @Override
    public Dealer queryDealerDetail(String id) throws SQLException {
        Dealer dealer = dealerMapper.queryDealerDetail(Integer.valueOf(id));
        return dealer;
    }
}
