package com.wantcars.service;

import com.wantcars.dao.DealerManager;
import com.wantcars.entity.Dealer;
import com.wantcars.entity.DealerQueryResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

@Service
public class DealerServiceImpl implements DealerService {

    @Autowired
    private DealerManager dealerManager;

    public DealerQueryResponse getDealerList(String dealerName, String city, int pageNumber) throws SQLException {
        return dealerManager.searchDealers(dealerName, city, pageNumber);
    }

    @Override
    public Dealer queryDealerDetail(String id) throws SQLException {
        DealerQueryResponse response = dealerManager.queryDealerDetail(id);
        if (response.getDealerList() == null || response.getDealerList().size() == 0)
            return null;
        else
            return response.getDealerList().get(0);
    }
}
