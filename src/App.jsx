import { twMerge } from "tailwind-merge";
import { useState } from "react";

function CalculatorButton({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "bg-gray-100 py-5 aspect-square rounded-3xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100 text-3xl",
        className
      )}
    >
      {children}
    </button>
  );
}

function compute(a, b, op) {
  if (op === "+") return a + b;
  if (op === "−") return a - b;
  if (op === "×") return a * b;
  if (op === "÷") return b === 0 ? null : a / b;
}

function fmt(n) {
  if (n === null || !isFinite(n)) return "Erreur";
  const s = String(n);
  return s.length > 10 ? parseFloat(n.toPrecision(8)).toString() : s;
}

function Calculator() {
  const [display, setDisplay]   = useState("0");
  const [expr, setExpr]         = useState("");
  const [prev, setPrev]         = useState(null);
  const [op, setOp]             = useState(null);
  const [waiting, setWaiting]   = useState(false);

  const inputDigit = (d) => {
    if (waiting) {
      setDisplay(String(d));
      setWaiting(false);
    } else {
      setDisplay(display === "0" ? String(d) : display.length < 10 ? display + d : display);
    }
  };

  const inputDot = () => {
    if (waiting) { setDisplay("0."); setWaiting(false); return; }
    if (!display.includes(".")) setDisplay(display + ".");
  };

  const clear = () => {
    setDisplay("0"); setExpr(""); setPrev(null); setOp(null); setWaiting(false);
  };

  const back = () => {
    if (waiting) return;
    setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
  };

  const handleOp = (nextOp) => {
    const cur = parseFloat(display);
    if (prev !== null && !waiting) {
      const res = compute(prev, cur, op);
      const f = fmt(res);
      setDisplay(f); setPrev(res); setExpr(f + " " + nextOp);
    } else {
      setPrev(cur); setExpr(display + " " + nextOp);
    }
    setOp(nextOp); setWaiting(true);
  };

  const equals = () => {
    if (!op || prev === null) return;
    const cur = parseFloat(display);
    const res = compute(prev, cur, op);
    setExpr(prev + " " + op + " " + display + " =");
    setDisplay(res === null ? "Erreur" : fmt(res));
    setPrev(null); setOp(null); setWaiting(true);
  };

  const percent = () => setDisplay(fmt(parseFloat(display) / 100));

  const opClass = "bg-orange-100 text-orange-400";

  return (
    <div className="bg-white p-5 rounded-2xl w-72">
      {/* Affichage */}
      <div className="bg-gray-100 px-4 py-3 text-right rounded-xl mb-5 shadow-sm min-h-24 flex flex-col justify-between">
        <span className="text-gray-400 text-sm min-h-5">{expr || " "}</span>
        <span className={`text-gray-800 font-light ${display.length > 8 ? "text-3xl" : "text-5xl"}`}>
          {display}
        </span>
      </div>

      {/* Grille */}
      <div className="grid grid-cols-4 gap-3">
        <CalculatorButton className="bg-red-100 text-red-400" onClick={clear}>C</CalculatorButton>
        <CalculatorButton className="text-gray-400" onClick={back}>⌫</CalculatorButton>
        <CalculatorButton className={opClass} onClick={percent}>%</CalculatorButton>
        <CalculatorButton className="bg-orange-400 text-white" onClick={() => handleOp("÷")}>÷</CalculatorButton>

        {[7, 8, 9].map((n) => (
          <CalculatorButton key={n} onClick={() => inputDigit(n)}>{n}</CalculatorButton>
        ))}
        <CalculatorButton className="bg-orange-400 text-white" onClick={() => handleOp("×")}>×</CalculatorButton>

        {[4, 5, 6].map((n) => (
          <CalculatorButton key={n} onClick={() => inputDigit(n)}>{n}</CalculatorButton>
        ))}
        <CalculatorButton className="bg-orange-400 text-white" onClick={() => handleOp("−")}>−</CalculatorButton>

        {[1, 2, 3].map((n) => (
          <CalculatorButton key={n} onClick={() => inputDigit(n)}>{n}</CalculatorButton>
        ))}
        <CalculatorButton className="bg-orange-400 text-white" onClick={() => handleOp("+")}>+</CalculatorButton>

        <CalculatorButton className="col-span-2 aspect-auto" onClick={() => inputDigit(0)}>0</CalculatorButton>
        <CalculatorButton onClick={inputDot}>.</CalculatorButton>
        <CalculatorButton className="bg-orange-400 text-white" onClick={equals}>=</CalculatorButton>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-950 h-dvh w-full flex items-center justify-center">
      <Calculator />
    </div>
  );
}

export default App;