package com.wantcars.mapper;

import com.wantcars.entity.VehicleFilterContent;
import com.wantcars.entity.VehicleFilterSelected;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FilterMapper {

    @Select({"<script>" ,
            "Select distinct(isNew) as isNew from vehicle " +
                    "where dealerID =#{dealerID}" +
                    "<when test='years != null and years.size() != 0'>" +
                    "and year in " +
                    "<foreach item='item' index='index' collection='years' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='brand!=null and brand.size() != 0'>" +
                    "and brand in " +
                    "<foreach item='item' index='index' collection='brand' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='model!=null and model.size() != 0'>" +
                    "and model in " +
                    "<foreach item='item' index='index' collection='model' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='price!=null and price.size() != 0'>" +
                    "and price in " +
                    "<foreach item='item' index='index' collection='price' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='exteriorColor!=null and exteriorColor.size() != 0'>" +
                    "and exColor in " +
                    "<foreach item='item' index='index' collection='exteriorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='interiorColor!=null and interiorColor.size() != 0'>" +
                    "and inColor in " +
                    "<foreach item='item' index='index' collection='interiorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='isNew!=null and isNew.size() != 0'>" +
                    "and isNew in " +
                    "<foreach item='item' index='index' collection='isNew' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='miles!=null and miles.size() != 0'>" +
                    "and miles in " +
                    "<foreach item='item' index='index' collection='miles' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='bodyType!=null and bodyType.size() != 0'>" +
                    "and bodyType in " +
                    "<foreach item='item' index='index' collection='bodyType' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "limit #{pageNumber}, #{pageSize}",
            "</script>"})
    public List<String> queryType(VehicleFilterSelected v);

    @Select({"<script>" ,
            "Select distinct(year) as isNew from vehicle " +
                    "where dealerID =#{dealerID}" +
                    "<when test='years != null and years.size() != 0'>" +
                    "and year in " +
                    "<foreach item='item' index='index' collection='years' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='brand!=null and brand.size() != 0'>" +
                    "and brand in " +
                    "<foreach item='item' index='index' collection='brand' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='model!=null and model.size() != 0'>" +
                    "and model in " +
                    "<foreach item='item' index='index' collection='model' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='price!=null and price.size() != 0'>" +
                    "and price in " +
                    "<foreach item='item' index='index' collection='price' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='exteriorColor!=null and exteriorColor.size() != 0'>" +
                    "and exColor in " +
                    "<foreach item='item' index='index' collection='exteriorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='interiorColor!=null and interiorColor.size() != 0'>" +
                    "and inColor in " +
                    "<foreach item='item' index='index' collection='interiorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='isNew!=null and isNew.size() != 0'>" +
                    "and isNew in " +
                    "<foreach item='item' index='index' collection='isNew' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='miles!=null and miles.size() != 0'>" +
                    "and miles in " +
                    "<foreach item='item' index='index' collection='miles' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='bodyType!=null and bodyType.size() != 0'>" +
                    "and bodyType in " +
                    "<foreach item='item' index='index' collection='bodyType' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "limit #{pageNumber}, #{pageSize}",
            "</script>"})
    public List<String> queryYear(VehicleFilterSelected v);

    @Select({"<script>" ,
            "Select distinct(brand) as isNew from vehicle " +
                    "where dealerID =#{dealerID}" +
                    "<when test='years != null and years.size() != 0'>" +
                    "and year in " +
                    "<foreach item='item' index='index' collection='years' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='brand!=null and brand.size() != 0'>" +
                    "and brand in " +
                    "<foreach item='item' index='index' collection='brand' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='model!=null and model.size() != 0'>" +
                    "and model in " +
                    "<foreach item='item' index='index' collection='model' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='price!=null and price.size() != 0'>" +
                    "and price in " +
                    "<foreach item='item' index='index' collection='price' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='exteriorColor!=null and exteriorColor.size() != 0'>" +
                    "and exColor in " +
                    "<foreach item='item' index='index' collection='exteriorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='interiorColor!=null and interiorColor.size() != 0'>" +
                    "and inColor in " +
                    "<foreach item='item' index='index' collection='interiorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='isNew!=null and isNew.size() != 0'>" +
                    "and isNew in " +
                    "<foreach item='item' index='index' collection='isNew' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='miles!=null and miles.size() != 0'>" +
                    "and miles in " +
                    "<foreach item='item' index='index' collection='miles' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='bodyType!=null and bodyType.size() != 0'>" +
                    "and bodyType in " +
                    "<foreach item='item' index='index' collection='bodyType' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "limit #{pageNumber}, #{pageSize}",
            "</script>"})
    public List<String> queryBrand(VehicleFilterSelected v);

    @Select({"<script>" ,
            "Select distinct(model) as isNew from vehicle " +
                    "where dealerID =#{dealerID}" +
                    "<when test='years != null and years.size() != 0'>" +
                    "and year in " +
                    "<foreach item='item' index='index' collection='years' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='brand!=null and brand.size() != 0'>" +
                    "and brand in " +
                    "<foreach item='item' index='index' collection='brand' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='model!=null and model.size() != 0'>" +
                    "and model in " +
                    "<foreach item='item' index='index' collection='model' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='price!=null and price.size() != 0'>" +
                    "and price in " +
                    "<foreach item='item' index='index' collection='price' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='exteriorColor!=null and exteriorColor.size() != 0'>" +
                    "and exColor in " +
                    "<foreach item='item' index='index' collection='exteriorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='interiorColor!=null and interiorColor.size() != 0'>" +
                    "and inColor in " +
                    "<foreach item='item' index='index' collection='interiorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='isNew!=null and isNew.size() != 0'>" +
                    "and isNew in " +
                    "<foreach item='item' index='index' collection='isNew' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='miles!=null and miles.size() != 0'>" +
                    "and miles in " +
                    "<foreach item='item' index='index' collection='miles' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='bodyType!=null and bodyType.size() != 0'>" +
                    "and bodyType in " +
                    "<foreach item='item' index='index' collection='bodyType' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "limit #{pageNumber}, #{pageSize}",
            "</script>"})
    public List<String> queryModel(VehicleFilterSelected v);

    @Select({"<script>" ,
            "Select distinct(price) as isNew from vehicle " +
                    "where dealerID =#{dealerID}" +
                    "<when test='years != null and years.size() != 0'>" +
                    "and year in " +
                    "<foreach item='item' index='index' collection='years' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='brand!=null and brand.size() != 0'>" +
                    "and brand in " +
                    "<foreach item='item' index='index' collection='brand' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='model!=null and model.size() != 0'>" +
                    "and model in " +
                    "<foreach item='item' index='index' collection='model' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='price!=null and price.size() != 0'>" +
                    "and price in " +
                    "<foreach item='item' index='index' collection='price' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='exteriorColor!=null and exteriorColor.size() != 0'>" +
                    "and exColor in " +
                    "<foreach item='item' index='index' collection='exteriorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='interiorColor!=null and interiorColor.size() != 0'>" +
                    "and inColor in " +
                    "<foreach item='item' index='index' collection='interiorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='isNew!=null and isNew.size() != 0'>" +
                    "and isNew in " +
                    "<foreach item='item' index='index' collection='isNew' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='miles!=null and miles.size() != 0'>" +
                    "and miles in " +
                    "<foreach item='item' index='index' collection='miles' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='bodyType!=null and bodyType.size() != 0'>" +
                    "and bodyType in " +
                    "<foreach item='item' index='index' collection='bodyType' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "limit #{pageNumber}, #{pageSize}",
            "</script>"})
    public List<String> queryPrice(VehicleFilterSelected v);

    @Select({"<script>" ,
            "Select distinct(exColor) as isNew from vehicle " +
                    "where dealerID =#{dealerID}" +
                    "<when test='years != null and years.size() != 0'>" +
                    "and year in " +
                    "<foreach item='item' index='index' collection='years' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='brand!=null and brand.size() != 0'>" +
                    "and brand in " +
                    "<foreach item='item' index='index' collection='brand' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='model!=null and model.size() != 0'>" +
                    "and model in " +
                    "<foreach item='item' index='index' collection='model' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='price!=null and price.size() != 0'>" +
                    "and price in " +
                    "<foreach item='item' index='index' collection='price' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='exteriorColor!=null and exteriorColor.size() != 0'>" +
                    "and exColor in " +
                    "<foreach item='item' index='index' collection='exteriorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='interiorColor!=null and interiorColor.size() != 0'>" +
                    "and inColor in " +
                    "<foreach item='item' index='index' collection='interiorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='isNew!=null and isNew.size() != 0'>" +
                    "and isNew in " +
                    "<foreach item='item' index='index' collection='isNew' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='miles!=null and miles.size() != 0'>" +
                    "and miles in " +
                    "<foreach item='item' index='index' collection='miles' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='bodyType!=null and bodyType.size() != 0'>" +
                    "and bodyType in " +
                    "<foreach item='item' index='index' collection='bodyType' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "limit #{pageNumber}, #{pageSize}",
            "</script>"})
    public List<String> queryExColor(VehicleFilterSelected v);

    @Select({"<script>" ,
            "Select distinct(inColor) as isNew from vehicle " +
                    "where dealerID =#{dealerID}" +
                    "<when test='years != null and years.size() != 0'>" +
                    "and year in " +
                    "<foreach item='item' index='index' collection='years' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='brand!=null and brand.size() != 0'>" +
                    "and brand in " +
                    "<foreach item='item' index='index' collection='brand' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='model!=null and model.size() != 0'>" +
                    "and model in " +
                    "<foreach item='item' index='index' collection='model' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='price!=null and price.size() != 0'>" +
                    "and price in " +
                    "<foreach item='item' index='index' collection='price' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='exteriorColor!=null and exteriorColor.size() != 0'>" +
                    "and exColor in " +
                    "<foreach item='item' index='index' collection='exteriorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='interiorColor!=null and interiorColor.size() != 0'>" +
                    "and inColor in " +
                    "<foreach item='item' index='index' collection='interiorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='isNew!=null and isNew.size() != 0'>" +
                    "and isNew in " +
                    "<foreach item='item' index='index' collection='isNew' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='miles!=null and miles.size() != 0'>" +
                    "and miles in " +
                    "<foreach item='item' index='index' collection='miles' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='bodyType!=null and bodyType.size() != 0'>" +
                    "and bodyType in " +
                    "<foreach item='item' index='index' collection='bodyType' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "limit #{pageNumber}, #{pageSize}",
            "</script>"})
    public List<String> queryInColor(VehicleFilterSelected v);

    @Select({"<script>" ,
            "Select distinct(bodyType) as isNew from vehicle " +
                    "where dealerID =#{dealerID}" +
                    "<when test='years != null and years.size() != 0'>" +
                    "and year in " +
                    "<foreach item='item' index='index' collection='years' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='brand!=null and brand.size() != 0'>" +
                    "and brand in " +
                    "<foreach item='item' index='index' collection='brand' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='model!=null and model.size() != 0'>" +
                    "and model in " +
                    "<foreach item='item' index='index' collection='model' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='price!=null and price.size() != 0'>" +
                    "and price in " +
                    "<foreach item='item' index='index' collection='price' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='exteriorColor!=null and exteriorColor.size() != 0'>" +
                    "and exColor in " +
                    "<foreach item='item' index='index' collection='exteriorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='interiorColor!=null and interiorColor.size() != 0'>" +
                    "and inColor in " +
                    "<foreach item='item' index='index' collection='interiorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='isNew!=null and isNew.size() != 0'>" +
                    "and isNew in " +
                    "<foreach item='item' index='index' collection='isNew' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='miles!=null and miles.size() != 0'>" +
                    "and miles in " +
                    "<foreach item='item' index='index' collection='miles' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='bodyType!=null and bodyType.size() != 0'>" +
                    "and bodyType in " +
                    "<foreach item='item' index='index' collection='bodyType' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "limit #{pageNumber}, #{pageSize}",
            "</script>"})
    public List<String> queryBodyType(VehicleFilterSelected v);

    @Select({"<script>" ,
            "Select distinct(miles) as isNew from vehicle " +
                    "where dealerID =#{dealerID}" +
                    "<when test='years != null and years.size() != 0'>" +
                    "and year in " +
                    "<foreach item='item' index='index' collection='years' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='brand!=null and brand.size() != 0'>" +
                    "and brand in " +
                    "<foreach item='item' index='index' collection='brand' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='model!=null and model.size() != 0'>" +
                    "and model in " +
                    "<foreach item='item' index='index' collection='model' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='price!=null and price.size() != 0'>" +
                    "and price in " +
                    "<foreach item='item' index='index' collection='price' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='exteriorColor!=null and exteriorColor.size() != 0'>" +
                    "and exColor in " +
                    "<foreach item='item' index='index' collection='exteriorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='interiorColor!=null and interiorColor.size() != 0'>" +
                    "and inColor in " +
                    "<foreach item='item' index='index' collection='interiorColor' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='isNew!=null and isNew.size() != 0'>" +
                    "and isNew in " +
                    "<foreach item='item' index='index' collection='isNew' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='miles!=null and miles.size() != 0'>" +
                    "and miles in " +
                    "<foreach item='item' index='index' collection='miles' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "<when test='bodyType!=null and bodyType.size() != 0'>" +
                    "and bodyType in " +
                    "<foreach item='item' index='index' collection='bodyType' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    "limit #{pageNumber}, #{pageSize}",
            "</script>"})
    public List<String> queryMile(VehicleFilterSelected v);
}
