package com.wantcars.entity;

import java.util.List;

public class DealerParameter {

    private int id;
    private String name;
    private String city;
    private List<String> postCode;
    private int pageNumber;
    private int pageSize;

    public DealerParameter(int id, String name, String city, List<String> postCode, int pageNumber, int pageSize) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.postCode = postCode;
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
    }

    public List<String> getPostCode() {
        return postCode;
    }

    public void setPostCode(List<String> postCode) {
        this.postCode = postCode;
    }

    public int getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
