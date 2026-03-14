package com.example.decision_engine.controller;

import com.example.decision_engine.model.LoanDecision;
import com.example.decision_engine.model.LoanRequest;
import com.example.decision_engine.service.LoanService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/loan")
@CrossOrigin(origins = "http://localhost:5173" )
public class LoanController {

    private final LoanService loanService;

    public LoanController(LoanService loanService) {
        this.loanService = loanService;
    }

    @PostMapping("/decision")
    public ResponseEntity<LoanDecision> getDecision(@RequestBody LoanRequest loanRequest) {
        LoanDecision decision = loanService.calculateLoan(loanRequest);
        return new ResponseEntity<>(decision, HttpStatus.OK);
    }
}
