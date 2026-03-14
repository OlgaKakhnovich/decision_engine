package com.example.decision_engine.model;

import lombok.Data;

@Data
public class LoanDecision {

    private boolean approved;
    private Integer approvedAmount;
    private Integer approvedPeriod;

    public LoanDecision(boolean approved, Integer approvedAmount, Integer approvedPeriod) {
        this.approved = approved;
        this.approvedAmount = approvedAmount;
        this.approvedPeriod = approvedPeriod;
    }

}
