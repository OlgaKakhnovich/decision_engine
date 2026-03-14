# Loan decision engine
## Overview
A loan decision engine that evaluates loan applications and returns 
the maximum approvable amount based on the applicant's credit profile.

## Tech stack
- **Backend:** Java 17, Spring Boot
- **Frontend:** React, Vite

### Decision logic
1. Personal code is checked against a mocked registry (4 hardcoded cases)
2. If applicant has debt → immediate rejection
3. If no debt → credit score is calculated:
   `credit_score = (credit_modifier / loan_amount) * loan_period`
4. Engine searches for the **maximum approvable amount**
5. If no amount works within the requested period → period is extended up to 60 months
6. If nothing works even at max period → rejection

## How to run application
### Running the Backend (Spring Boot)
1. Open the backend project in **IntelliJ IDEA**.
2. Navigate to the main application class:
```
src/main/java/.../DecisionEngineApplication.java
```
3. Locate the `main` method inside the class.
4. Click the **Run button**.
After the application starts, the backend API will be available at:
```
http://localhost:8080
```
### Running the Frontend (Vite/React)
```
cd frontend
npm install
npm run dev
```
After the application starts, the frontend API will be available at:
```
http://localhost:5173
```
## Test personal codes
1. 49002010965 - debt (rejected)
2. 49002010976 - segment 1 (modifier = 100)
3. 49002010987 - segment 2 (modifier = 300)
4. 49002010998 - segment 3 (modifier = 1000)


