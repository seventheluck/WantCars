package com.wantcars.entity;

import java.util.List;

public class DealerResponse {

    private List<Dealer> list;
    private int totalNumber;

    public DealerResponse(List<Dealer> list, int totalNumber) {
        this.list = list;
        this.totalNumber = totalNumber;
    }

    public List<Dealer> getList() {
        return list;
    }

    public void setList(List<Dealer> list) {
        this.list = list;
    }

    public int getTotalNumber() {
        return totalNumber;
    }

    public void setTotalNumber(int totalNumber) {
        this.totalNumber = totalNumber;
    }


}
