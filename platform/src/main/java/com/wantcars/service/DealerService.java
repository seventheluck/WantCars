package com.wantcars.service;

import com.wantcars.entity.Dealer;
import com.wantcars.entity.DealerQueryResponse;

import java.sql.SQLException;

public interface DealerService {
    DealerQueryResponse getDealerList(String dealerName, String city, int pageNumber) throws SQLException;
    Dealer queryDealerDetail(String id) throws SQLException;
}
