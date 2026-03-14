import { useState } from "react"
import { Decision } from "./Decision";
import { getLoanDecision } from "../loanApi";


export const LoanForm = () => {

    const [personalCode, setPersonalCode] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [loanPeriod, setLoanPeriod] = useState("");
    const [result, setResult] = useState(null);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        try {
            const data = await getLoanDecision(
                personalCode,
                Number(loanAmount),
                Number(loanPeriod)
            );
            console.log(data);
            setResult(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div style=
                {{
                    backgroundColor: "#A6B1E1",
                    display: "inline-flex",
                    padding: "20px",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "clamp(280px, 50%, 500px)",
                    borderRadius: "15px",
                    boxShadow: "0 2px 20px rgba(239, 246, 255, 0.3)"
                }}>
                <section>
                    <h1 style={{ fontSize: 25, color: "#2b3053ff" }}>Loan Form</h1>
                </section>
                <form onSubmit={handleSubmit} style={{ fontSize: 20, color: "#2b3053ff", gap: "10px", display: "flex", flexDirection: "column", width: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <label htmlFor="">Personal code:</label>
                        <input style={{ fontSize: 16, padding: "5px", backgroundColor: "#c4cdf6ff", borderRadius: "5px", borderColor: "#2b3053ff" }}
                            type="text" value={personalCode} onChange={(e) => setPersonalCode(e.target.value)} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <label htmlFor="">Loan amount:</label>
                        <input style={{ fontSize: 16, padding: "5px", backgroundColor: "#c4cdf6ff", borderRadius: "5px", borderColor: "#2b3053ff" }}
                            type="number" min="2000" max="10000" step="100" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
                    </div>
                    <div style={{ display: "flex", gap: "2px", flexDirection: "column", gap: "2px" }}>
                        <label htmlFor="">Loan period (months):</label>
                        <input style={{ fontSize: 16, padding: "5px", backgroundColor: "#c4cdf6ff", borderRadius: "5px", borderColor: "#2b3053ff" }}
                            type="number" min="12" max="60" step="1" value={loanPeriod} onChange={(e) => setLoanPeriod(e.target.value)} />
                    </div>

                    <button type="submit" disabled={loading} style={{ marginTop: "10px", padding: "4px", backgroundColor: "#74eeb1ff", fontSize: "20px", borderColor: "#0da752ff", borderRadius: "5px", cursor: "pointer" }}>
                        {loading ? "Calculating..." : "Calculate"}
                    </button>
                </form>
            </div>

            {error && <p>{error}</p>}
            {result && <Decision result={result} />}

        </>
    )
}