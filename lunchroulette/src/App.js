import './App.css';
import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

function App() {
  const [data, setData] = useState([
    { option: '중국집'},
    { option: '햄버거'},
    { option: '파스타'},
    { option: '국밥'},
    { option: '분식'},
    { option: '구내식당'},
  ]);
  
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [newPrizeNumber, setNewPrizeNumber] = useState(Math.floor(Math.random() * data.length));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [menuHistoryArr, setMenuHistoryArr] = useState([]);

  const handleSpinClick = () => {
    if (!mustSpin) {
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setNewPrizeNumber(Math.floor(Math.random() * data.length));
      
    }
  }

  return (
    <div className="App">
      <div className='con-wrap'>
        <div className="page-title">점심 메뉴 정하기!!</div>

        <div className='user-input-area'>
          <p>추가하고싶은 메뉴를 적어주세요</p>
          <div className='input-box'>
            <input type="text" />
            <button className='btn-add'>추가</button>
          </div>
        </div>
  
        <div className='main-con-area'>
          <div className='wheel-area'>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
      
              onStopSpinning={() => {
                setMustSpin(false);
                setModalIsOpen(true);
                setMenuHistoryArr([...menuHistoryArr, data[prizeNumber].option]);
              }}
            />

            <div className='btn-area'>
              {/* <button className='start-btn' onClick={(e)=> setData([...data, {option: "new item"}])}>메뉴추가</button> */}
              <button className='start-btn' onClick={handleSpinClick}>룰렛 돌리기</button>
            </div>
          </div>

          <div className='menu-history'>
              <p className='title'>&lt; 메뉴 히스토리 &gt;</p>
  
              {menuHistoryArr.length === 0 ? <p className='empty-txt'>내역이 존재하지 않습니다. <br />룰렛을 돌려주세요</p> : null}
              <ul>
                {menuHistoryArr &&
                  menuHistoryArr.map((item, index)=> <li key={index}>{index + 1}. {item}</li>)
                }
              </ul>
            </div>
        </div>
        
      </div>

      {modalIsOpen ?
        <div className='layer-popup'>
          <div className='for-center'>
            <div className="pop-wrap">
              <div className='pop-con-area'>
                <p>오늘의 메뉴는 <span className='todays-menu'>{data[prizeNumber].option}</span> 입니다!</p>
                <button className="btn-close btn-role-close" title="팝업 닫기" type="button" onClick={(e) => setModalIsOpen(false)}><span>닫기</span></button>
              </div>
            </div>
          </div>
        </div>
        :null
      }
    </div>
  );
}

export default App;
