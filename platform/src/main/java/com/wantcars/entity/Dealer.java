package com.wantcars.entity;

public class Dealer {
    private String id;
    private String name;
    private Address address;


    public Dealer(String name) {
        this.name = name;
    }

    public Dealer(String name, Address address) {
        this.name = name;
        this.address = address;
    }

    public Dealer(int id, String name, String add1, String add2, String city, String state, String zip) {
        Address address = new Address(add1, add2, city, state, zip);
        this.id = String.valueOf(id);
        this.name = name;
        this.address = address;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(Address add){  this.address = add; }

    public Address getAddress(){ return this.address; }

    public String getAddress1() {
        return this.address.getAddress1();
    }

    public String getAddress2() {
        return this.address.getAddress2();
    }

    public String getCity() {
        return this.address.getCity();
    }

    public String getState() {
        return this.address.getState();
    }

    public String getZip() {
        return this.address.getZip();
    }

}
