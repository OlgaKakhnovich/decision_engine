package com.example.decision_engine.service;

import com.example.decision_engine.model.LoanDecision;
import com.example.decision_engine.model.LoanRequest;
import org.springframework.stereotype.Service;

@Service
public class LoanService {

    private static final String DEBT = "49002010965";
    private static final String SEG_1 = "49002010976";
    private static final String SEG_2 = "49002010987";
    private static final String SEG_3 = "49002010998";

    private static final Integer MIN_SUM = 2000;
    private static final Integer MAX_SUM = 10000;
    private static final Integer MIN_PERIOD = 12;
    private static final Integer MAX_PERIOD = 60;

    public LoanDecision calculateLoan(LoanRequest loanRequest) {
        String personalCode = loanRequest.getPersonalCode();
        int loanAmount = loanRequest.getLoanAmount();
        int loanPeriod = loanRequest.getLoanPeriod();

        int creditModifier = getCreditModifier(personalCode);

        if (creditModifier == 0) {
            return new LoanDecision(false, null, null);
        }

        Integer bestAmount = calculateBestAmount(creditModifier, loanPeriod);

        if (bestAmount == null) {
            for (int i = loanPeriod+1; i <= MAX_PERIOD; i++ ) {
                bestAmount = calculateBestAmount(creditModifier, i);
                if (bestAmount != null) {
                    loanPeriod = i;
                    break;
                }
            }
        }

        if(bestAmount == null) {
            return new LoanDecision(false, null, null);
        }

        return new LoanDecision(true, bestAmount, loanPeriod);
    }

    public Integer calculateBestAmount(int creditModifier, int loanPeriod) {
        for (int i = MAX_SUM; i >= MIN_SUM; i-=100 ){
            double creditScore = ((double) creditModifier/i)*loanPeriod;

            if (creditScore >= 1.0) return i;
        }
        return null;
    }

    public Integer getCreditModifier(String personalCode) {
        return switch (personalCode){
            case DEBT -> 0;
            case SEG_1 -> 100;
            case SEG_2 -> 300;
            case SEG_3 -> 1000;
            default -> throw new IllegalStateException("Unexpected value: " + personalCode);
        };
    }


}
