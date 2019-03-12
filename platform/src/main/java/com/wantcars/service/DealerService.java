package com.wantcars.service;

import com.wantcars.entity.Dealer;
import com.wantcars.entity.DealerParameter;
import com.wantcars.entity.DealerQueryResponse;

import java.sql.SQLException;
import java.util.List;

public interface DealerService {
    List<Dealer> getDealerList(String dealerName, String city, String zip, int pageSize, int pageNumber) throws SQLException;
    Dealer queryDealerDetail(String id) throws SQLException;
}
