import React from "react";
import { useMemo } from "react";

export default function ExpensiveComponent({ num }) {
  const calculatedValue = useMemo(() => {
    console.log("Calculating Value...");
    return num * 2;
  }, [num]);
  return (
    <div style={{ backgroundColor: "orange" }}>
      <h1>ExpensiveComponent({calculatedValue})</h1>
    </div>
  );
}
