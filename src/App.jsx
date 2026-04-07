function Calculator() {
  return <div className="bg-white">
    <div className="grid grid-cols-4 gap-5">
      <button>C</button>
      <button>%</button>
      <button>ff</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>x</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>+</button>
      <button>0</button>
      <button>.</button>
      <button>+</button>
      </div>
  </div>;
}

function App() {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-950  h-dvh w-full flex items-center justify-center relative overflow-clip">
      <Calculator />
    </div>
  );
}

export default App;
