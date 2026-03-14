package com.example.decision_engine.model;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class LoanRequest {

    @NotBlank(message = "Personal code is required")
    private String personalCode;

    @NotNull(message = "Loan amount is required")
    @Max(value = 10000, message = "Maximum loan amount is 10000")
    @Min(value = 2000, message = "Minimum loan amount is 2000")
    private Integer loanAmount;

    @NotNull(message = "Loan period is required")
    @Max(value = 60, message = "Maximum loan period is 60")
    @Min(value = 12, message = "Minimum loan period is 12")
    private Integer loanPeriod;


}
