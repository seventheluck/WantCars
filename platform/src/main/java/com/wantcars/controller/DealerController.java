package com.wantcars.controller;

import com.wantcars.entity.Dealer;
import com.wantcars.entity.DealerQueryResponse;
import com.wantcars.service.DealerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
public class DealerController {

    @Autowired
    private DealerService dealerService;

    @CrossOrigin(origins = "http://wantcars-front.s3-website-us-west-2.amazonaws.com")
    @GetMapping("/dealer")
    public List<Dealer> queryDealerList(@RequestParam final String name,
                                        @RequestParam final String location,
                                        @RequestParam final String postCode,
                                        @RequestParam final int limit,
                                        @RequestParam final int pageSize) throws SQLException {
        List<Dealer> dealers = dealerService.getDealerList(name, location, postCode, pageSize, limit);
        return dealers;
    }

    @CrossOrigin(origins = "http://wantcars-front.s3-website-us-west-2.amazonaws.com")
    @GetMapping("/dealer/detail")
    public Dealer queryDealerList(@RequestParam final String id) throws SQLException {
        return dealerService.queryDealerDetail(id);
    }
}