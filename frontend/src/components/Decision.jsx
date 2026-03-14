import { useState } from "react";

export const Decision = ({ result }) => {

    return (
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
                <h1 style={{ fontSize: 25, color: "#2b3053ff" }}>Result</h1>
            </section>

            <section style={{ fontSize: 20, width: "100%" }}>
                {result.approved === true ?
                    <div style={{ color: "#2b3053ff", display: "flex", flexDirection: "column" }}>
                        <h1 style={{ fontSize: "22px", color: "#2b3053ff", margin: "5px 0" }}>Your loan is approved!</h1>
                        <p style={{ margin: "5px 0" }}>Offered amount: {result.approvedAmount}</p>
                        <p style={{ margin: "5px 0" }}>Offered loan period: {result.approvedPeriod}</p>
                    </div>
                    :
                    <div>
                        <h1 style={{ fontSize: "22px", color: "#2b3053ff" }}> Your loan was NOT approved!</h1>
                    </div>
                }
            </section>
        </div>
    )


}