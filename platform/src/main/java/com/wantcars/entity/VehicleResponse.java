package com.wantcars.entity;

import java.util.List;

public class VehicleResponse {
    private List<Vehicle> list;
    private int totalNumber;

    public VehicleResponse(List<Vehicle> list, int totalNumber) {
        this.list = list;
        this.totalNumber = totalNumber;
    }

    public List<Vehicle> getList() {
        return list;
    }

    public void setList(List<Vehicle> list) {
        this.list = list;
    }

    public int getTotalNumber() {
        return totalNumber;
    }

    public void setTotalNumber(int totalNumber) {
        this.totalNumber = totalNumber;
    }
}
