function Calculator() {
  return <div className="bg-white p-5 rounded-2xl">
    <div className="grid grid-cols-4 gap-5">
      <button className="bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
        C</button>
      <button className="bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      %</button>
      <button className="bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      ff</button>
      <button className="bg-orange-400 text-white bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      /</button>
      <button className="bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      1</button>
      <button className="bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      2</button>
      <button className="bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      3</button>
      <button className="bg-orange-400 text-white bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      x</button>
      <button className="bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      4</button>
      <button className="bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      5</button>
      <button className="bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      6</button>
      <button className="bg-orange-400 text-white bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      -</button>
      <button className="bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      7</button>
      <button className="bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      8</button>
      <button className="bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      9</button>
      <button className="bg-orange-400 text-white bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      +</button>
      <button className="bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      0</button>
      <button className="bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      .</button>
      <button className="bg-green-400 text-whitebg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 
      hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100">
      =</button>
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
