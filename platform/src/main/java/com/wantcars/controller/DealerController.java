package com.wantcars.controller;

import com.wantcars.entity.Dealer;
import com.wantcars.entity.DealerQueryResponse;
import com.wantcars.service.DealerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;

@RestController
public class DealerController {

    @Autowired
    private DealerService dealerService;

    @GetMapping("/dealer")
    public List<Dealer> queryDealerList(@RequestParam final String name,
                                        @RequestParam final String location,
                                        @RequestParam final int limit,
                                        @RequestParam final int pageSize) throws SQLException {
        DealerQueryResponse dealerQueryResponse = dealerService.getDealerList(name, location, limit);
        return dealerQueryResponse.getDealerList();
    }

    @GetMapping("/dealer/detail")
    public Dealer queryDealerList(@RequestParam final String id) throws SQLException {
        return dealerService.queryDealerDetail(id);
    }
}