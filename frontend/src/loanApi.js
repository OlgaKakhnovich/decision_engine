

export async function getLoanDecision(personalCode, loanAmount, loanPeriod){
    const response = await fetch("http://localhost:8080/api/loan/decision", {
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({personalCode, loanAmount, loanPeriod}),
    });

    if (!response.ok){
        const error = await response.json();
        throw new Error(error.error || "Something went wrong");
    }

    return response.json();
}