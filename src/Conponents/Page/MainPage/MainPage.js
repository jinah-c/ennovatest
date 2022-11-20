import React from 'react'
import './MainPage.css'
import MainBanner from './MainBanner'
import AboutIMG from '../../img/aboutIMG.jpg'
import F01 from '../../img/f01.png'
import F02 from '../../img/f02.png'
import F03 from '../../img/f03.png'
import F04 from '../../img/f04.png'
import CardIcon01 from '../../img/cardicon01.png'
import {Link} from "react-router-dom";


function MainPage() {
  return (
    <div className='mainContainer'>
      {/* <Slider /> */}
      <MainBanner />



      {/* ABOUT ENNOVA */}
      {/* ABOUT ENNOVA */}
      {/* ABOUT ENNOVA */}
      {/* ABOUT ENNOVA */}
      
      <div className='aboutEnnovaSection'>
      <div className='aboutEnnovaContainer'>
        <div className='aboutEnnovaText' data-aos="fade-up">
          <h2>ABOUT ENNOVA</h2>
          <div className='deco'></div>
          <p>엔노바 금융 플랫폼 금융 제도권에서 소외 받는 계층도 포함하는 플랫폼으로
            각각 독립적으로도 운영이 가능하며, 상호 유기적으로 연결되어 보다 다양한 서스를 가능하게 하는 구조로 설계되어 있습니다.
            <br/>
            엔노바는 금융 거래가 발생하는 모든 사업을 위해 존재합니다. 복잡한 구조를 단순하게, 흩어진 가치를 한곳에, 소중한 자료를 더 소중하게 처리해야 하는 모든 곳이 엔노바의 사업분야 입니다.
          </p>
        </div>

        <img className="aboutEnnovaIMG" src={AboutIMG} alr="about ennova IMG" data-aos="fade-up" data-aos-delay="300" />
      </div>
      </div>




      {/* FINANCIAL PLATFORM */}
      {/* FINANCIAL PLATFORM */}
      {/* FINANCIAL PLATFORM */}
      {/* FINANCIAL PLATFORM */}


      <div className='aboutFinancialContainer'>
        <div className='aboutFinancialText' data-aos="fade-up">
            <h2>FINANCIAL PLATFORM</h2>
            <div className='deco'></div>
            <p>엔노바(Ennova)는 금융 플랫폼 제공 및 서비스 업체로 ① 페이먼트 게이트웨이(E-PG) ② 포인트(E-AP) <br/>③ 블록체인 신원 및 자격인증(E-DI) ④ 빅데이터 분석(E-BA)으로 구성된 금융 플랫폼을 보유하고 있습니다.
            </p>
          </div>

      <div className='blurHoverSection' data-aos="fade-up" data-aos-delay="300">
          <div className='blurHoverBox'>
                <Link to="#" className='blurHoverImgBox'>
                  <img src={F01} alt="Payment Gateway" className='blurImg'/>
                </Link> 
                <p className='blurHovertext'>Payment Gateway</p>
          </div>

          <div className='blurHoverBox'>
                <Link to="#" className='blurHoverImgBox'>
                  <img src={F02} alt="E-advanced Point" className='blurImg'/>
                </Link> 
                <p className='blurHovertext'>E-advanced Point</p>
          </div>

          <div className='blurHoverBox'>
                <Link to="#" className='blurHoverImgBox'>
                  <img src={F03} alr="E-digdata Analysis" className='blurImg'/>
                </Link> 
                <p className='blurHovertext'>E-digdata Analysis</p>
          </div>

          <div className='blurHoverBox'>
                <Link to="#" className='blurHoverImgBox'>
                  <img src={F04} alt="E-Advanced Point" className='blurImg'/>
                </Link> 
                <p className='blurHovertext'>E-Advanced Point</p>
          </div>
      </div>
      </div>
      


    {/* Service & Application */}
    {/* Service & Application */}
    {/* Service & Application */}
    {/* Service & Application */}


    <div className='ServiceApplicationCardSection'>
    <div className='ServiceApplicationContainer'>
      <div className='ServiceApplicationText'  data-aos="fade-up" >
            <h2>Service & Application</h2>
            <div className='deco'></div>
            <p>엔노바가 보유한 핀테크 기술을 활용하여 기존의 카드 결제 외에 포인트 결제와 암호화폐 결제 등 새로운 간편 결제 방식을 제공하며, 또한 자사의 en-Cash를 활용한 국내/외 송금 서비스를 제공합니다.</p>
      </div>
      
      <div className='ServiceApplicationCard'>
        <div className='cardBox' data-aos="fade-up">
            <img className='cardIcon' src={CardIcon01} alt=" "/>
            <div className='cardTextBox'>
              <h4>EASY PAYMENT</h4>
              <p>온라인/오프라인 간편결제</p>
            </div>
            <Link to="#" className='button02'>
            Learn More
            </Link>
            <div className='bottomDeco'></div>
          </div>

        <div className='cardBox' data-aos="fade-up">
            <img className='cardIcon' src={CardIcon01} alt=" "/>
            <div className='cardTextBox'>
              <h4>REMITTANCE</h4>
              <p>국/내외 송금 서비스</p>
            </div>
            <Link to="#" className='button02'>
            Learn More
            </Link>
            <div className='bottomDeco'></div>
          </div>

          <div className='cardBox' data-aos="fade-up">
            <img className='cardIcon' src={CardIcon01} alt=" "/>
            <div className='cardTextBox'>
              <h4>TIER</h4>
              <p>엔노바 간편결제</p>
            </div>
            <Link to="#" className='button02'>
            Learn More
            </Link>
            <div className='bottomDeco'></div>
          </div>

          <div className='cardBox' data-aos="fade-up">
            <img className='cardIcon' src={CardIcon01} alt=" "/>
            <div className='cardTextBox'>
              <h4>POS</h4>
              <p>Point of Sale</p>
            </div>
            <Link to="#" className='button02'>
            Learn More
            </Link>
            <div className='bottomDeco'></div>
          </div>
      </div>


    </div>
    
    </div>


    </div>
  )
}

export default MainPage