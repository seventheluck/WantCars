package com.wantcars.mapper;

import com.wantcars.entity.Dealer;
import com.wantcars.entity.DealerParameter;
import com.wantcars.entity.DealerQueryResponse;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public interface DealerMapper {

    @Select({"<script>",
            "select * from dealer where 1=1" +
                    "<when test='name!=null and name.length() != 0'>" +
                    "<bind name='pattern' value='`%`+name+`%`'/>" +
                    " and name like #{pattern} " +
                    "</when>" +
                    "<when test='city!=null and city.length() != 0'>" +
                    " and city = #{city}" +
                    "</when>" +
                    "<when test='postCode!=null and postCode.size()!=0'>" +
                    "and postCode in " +
                    "<foreach item='item' collection='postCode' index='index' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    " limit #{pageNumber}, #{pageSize}",
            "</script>"})
    public List<Dealer> searchDealers(DealerParameter dealerParameter) throws SQLException;

    @Select({"<script>",
            "select count(*) from dealer where 1=1" +
                    "<when test='name!=null and name.length() != 0'>" +
                    "<bind name='pattern' value='`%`+name+`%`'/>" +
                    " and name like #{pattern} " +
                    "</when>" +
                    "<when test='city!=null and city.length() != 0'>" +
                    " and city = #{city}" +
                    "</when>" +
                    "<when test='postCode!=null and postCode.size()!=0'>" +
                    "and postCode in " +
                    "<foreach item='item' collection='postCode' index='index' open='(' separator=',' close=')'>" +
                    "#{item}" +
                    "</foreach>" +
                    "</when>" +
                    " limit #{pageNumber}, #{pageSize}",
            "</script>"})
    public int searchDealerCount(DealerParameter dealerParameter) throws SQLException;
    @Select({"<script>",
            "select * from dealer where id = #{id}",
            "</script>"})
    public Dealer queryDealerDetail(int id) throws SQLException;
}
