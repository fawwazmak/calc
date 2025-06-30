import { useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(1);

  return (
    <>
    <div className={`flex justify-center items-center h-screen text-white w-full ${theme === 1 ? " bg-[#425071]" : theme === 2 ? " bg-[#E6E6E6]" : " bg-[#160628]"}`}>
      <div className="md:w-2/5 w-full md:p-0 p-8">
          <div className={`flex justify-between items-center mb-4 ${theme === 1 ? " text-white" : theme === 2 ? " text-black" : " text-[#FFCC33]" } p-4 rounded-lg `}>
              <p className="font-bold text-2xl">Calc</p>
              <div className="flex items-center gap-8">
                  <p className="font-bold text-md">THEME</p>
                  <div className="flex flex-col gap-3">
                      <div className="flex gap-6 items-center font-medium">
                          <p>1</p>
                          <p>2</p>
                          <p>3</p>
                      </div>

                      <div className={`h-6 w-full bg-[#25304f] rounded-xl flex items-center justify-between px-2 ${theme === 1 ? "bg-[#25304f]" : theme === 2 ? "bg-[#d1cccc]" : "bg-[#1D0934]"}`}>
                        <input type="radio" name='theme' onChange={(e) => {setTheme(Number(e.target.value)); console.log(theme)}} defaultChecked value={"1"} className={`block border-none h-4 w-4 appearance-none rounded-full checked:bg-[#C93D3D]`} />
                        <input type="radio" name='theme' onChange={(e) => {setTheme(Number(e.target.value)); console.log(theme)}} value={"2"} className={`block border-none h-4 w-4 appearance-none rounded-full checked:bg-[#ca5502]`} />
                        <input type="radio" name='theme' onChange={(e) => {setTheme(Number(e.target.value)); console.log(theme)}} value={"3"} className={`block border-none h-4 w-4 appearance-none rounded-full checked:bg-[#00e0d1]`} />
                      </div>
                  </div>
              </div>
          </div>

          {/* The input area  */}
          <div className={`py-4 px-4 text-right h-20 text-4xl font-bold rounded-lg mb-4 ${theme === 1 ? "bg-[#25304f] text-white" : theme === 2 ? " bg-white text-black" : " bg-[#1D0934] text-[#FFCC33]"}`}>
              399,999
          </div>

          {/* The buttons */}
          <div className={`grid grid-cols-4 gap-4 text-center  p-4 rounded-md ${theme === 1 ? "bg-[#25304f] text-white" : theme === 2 ? "bg-[#d1cccc]" : " bg-[#1D0934]"}`}>
              <div className={`flex items-center justify-center rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "text-[#425071] bg-white" : theme === 2? "text-black bg-white" : "text-[#FFCC33] bg-[#341c4f] shadow-[#871c9c] shadow-md"}`}>7</div>
              <div className={`flex items-center justify-center rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "text-[#425071] bg-white" : theme === 2? "text-black bg-white" : "text-[#FFCC33] bg-[#341c4f] shadow-[#871c9c] shadow-md"}`}>8</div>
              <div className={`flex items-center justify-center rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "text-[#425071] bg-white" : theme === 2? "text-black bg-white" : "text-[#FFCC33] bg-[#341c4f] shadow-[#871c9c] shadow-md"}`}>9</div>
              <div className={`flex items-center justify-center text-white hover:bg-[#7685a8b6] rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "bg-[#425071] text-white hover:bg-[#7685a8b6]" : theme === 2? "bg-[#377f86]" : "bg-[#871c9c]"}`}>DEL</div>
              <div className={`flex items-center justify-center rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "text-[#425071] bg-white" : theme === 2? "text-black bg-white" : "text-[#FFCC33] bg-[#341c4f] shadow-[#871c9c] shadow-md"}`}>4</div>
              <div className={`flex items-center justify-center rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "text-[#425071] bg-white" : theme === 2? "text-black bg-white" : "text-[#FFCC33] bg-[#341c4f] shadow-[#871c9c] shadow-md"}`}>5</div>
              <div className={`flex items-center justify-center rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "text-[#425071] bg-white" : theme === 2? "text-black bg-white" : "text-[#FFCC33] bg-[#341c4f] shadow-[#871c9c] shadow-md"}`}>6</div>
              <div className={`flex items-center justify-center rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "text-[#425071] bg-white" : theme === 2? "text-black bg-white" : "text-[#FFCC33] bg-[#341c4f] shadow-[#871c9c] shadow-md"}`}>+</div>
              <div className={`flex items-center justify-center rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "text-[#425071] bg-white" : theme === 2? "text-black bg-white" : "text-[#FFCC33] bg-[#341c4f] shadow-[#871c9c] shadow-md"}`}>1</div>
              <div className={`flex items-center justify-center rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "text-[#425071] bg-white" : theme === 2? "text-black bg-white" : "text-[#FFCC33] bg-[#341c4f] shadow-[#871c9c] shadow-md"}`}>2</div>
              <div className={`flex items-center justify-center rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "text-[#425071] bg-white" : theme === 2? "text-black bg-white" : "text-[#FFCC33] bg-[#341c4f] shadow-[#871c9c] shadow-md"}`}>3</div>
              <div className={`flex items-center justify-center rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "text-[#425071] bg-white" : theme === 2? "text-black bg-white" : "text-[#FFCC33] bg-[#341c4f] shadow-[#871c9c] shadow-md"}`}>-</div>
              <div className={`flex items-center justify-center rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "text-[#425071] bg-white" : theme === 2? "text-black bg-white" : "text-[#FFCC33] bg-[#341c4f] shadow-[#871c9c] shadow-md"}`}>.</div>
              <div className={`flex items-center justify-center rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "text-[#425071] bg-white" : theme === 2? "text-black bg-white" : "text-[#FFCC33] bg-[#341c4f] shadow-[#871c9c] shadow-md"}`}>0</div>
              <div className={`flex items-center justify-center rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "text-[#425071] bg-white" : theme === 2? "text-black bg-white" : "text-[#FFCC33] bg-[#341c4f] shadow-[#871c9c] shadow-md"}`}>/</div>
              <div className={`flex items-center justify-center rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "text-[#425071] bg-white" : theme === 2? "text-black bg-white" : "text-[#FFCC33] bg-[#341c4f] shadow-[#871c9c] shadow-md"}`}>x</div>
              <div className={`flex col-span-2 items-center justify-center text-white hover:bg-[#7685a8b6] rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "bg-[#425071] text-white hover:bg-[#7685a8b6]" : theme === 2? "bg-[#377f86]" : "bg-[#871c9c]"}`}>RESET</div>
              <div className={`flex items-center justify-center col-span-2 rounded-md py-4 text-2xl font-bold cursor-pointer hover:scale-105 ${theme === 1? "bg-[#F24C42] text-white" : theme === 2? "bg-[#ca5502]  text-white" : "bg-[#00e0d1]"}`}>=</div>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
