import './App.css';
import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const data = [
  { option: '중국집', style: { backgroundColor: 'white' } },
  { option: '햄버거', style: { backgroundColor: 'white' } },
  { option: '파스타', style: { backgroundColor: 'white' } },
  { option: '국밥', style: { backgroundColor: 'white' } },
  { option: '분식', style: { backgroundColor: 'white' } },
  { option: '구내식당', style: { backgroundColor: 'white' } },
]

function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const newPrizeNumber = Math.floor(Math.random() * data.length);

  const handleSpinClick = () => {
    if (!mustSpin) {
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      console.log(data[newPrizeNumber].option);
    }
  }

  return (
    <div className="App">
      <div className='con-wrap'>
        <div className="page-title">점심 메뉴 고르기</div>
  
        <div className='wheel-area'>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
    
            onStopSpinning={() => {
              setMustSpin(false);

            }}
          />

          <div className='menu-history'>
            <div>{}</div>
          </div>
        </div>
        <div className='btn-area'>
          <button className='start-btn' onClick={handleSpinClick}>START</button>
          </div>
      </div>

      {/* <div className='layer-popup'>
        <div className="popup-con">
            오늘의 메뉴는 {data[newPrizeNumber].option} 입니다!
        </div>
      </div> */}
    </div>
  );
}

export default App;
