package com.wantcars.service;

import com.wantcars.dao.DealerManager;
import com.wantcars.entity.Dealer;
import com.wantcars.entity.DealerParameter;
import com.wantcars.entity.DealerQueryResponse;
import com.wantcars.mapper.DealerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class DealerServiceImpl implements DealerService {

    @Autowired
    private DealerMapper dealerMapper;

    public List<Dealer> getDealerList(String dealerName, String city, String zip, int pageSize, int pageNumber) throws SQLException {
        List<String> postCode = null;
        DealerParameter dealerParameter = new DealerParameter(0, dealerName, city
                , postCode, pageNumber, pageSize);
        return dealerMapper.searchDealers(dealerParameter);
    }

    @Override
    public Dealer queryDealerDetail(String id) throws SQLException {
        Dealer dealer = dealerMapper.queryDealerDetail(Integer.valueOf(id));
        return dealer;
    }
}
