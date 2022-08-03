import React, { useState, useEffect } from 'react'
import icon1 from '../imgs/icon1.svg'
import icon2 from '../imgs/icon2.svg'
import icon3 from '../imgs/icon3.svg'
import ethereum from '../imgs/ethereum.svg'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import Echar from './Echar'



function Eth() {
  const [items1, setItems] = useState({
    price:0,
    mktcap:0,
  })
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD&api_key=142a30c38a79d5d3eb4bd4feaba8f609b3d2598f79eec6b08a78a41a27032ba7',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const result1 = JSON.parse(result)
        const price = result1?.RAW?.ETH?.USD?.PRICE
        const mktcap = result1?.RAW?.ETH?.USD?.MKTCAP
        setItems({...items1,price,mktcap})
      })
      .catch((error) => console.log('error', error))
  }, [])

  const [items2, setItems2] = useState({
    difficulty:0, //难度
    transactioncount:0, //交易数
    hashrate:0, //哈希率
    averageTransaction:0//平均交易
  })

useEffect(() => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://min-api.cryptocompare.com/data/blockchain/latest?fsym=ETH&api_key=142a30c38a79d5d3eb4bd4feaba8f609b3d2598f79eec6b08a78a41a27032ba7", requestOptions)
    .then(response => response.text())
    .then(result =>{
      const result1 = JSON.parse(result)
        const averageTransaction = result1?.Data?.average_transaction_value
        const difficulty = result1?.Data?.difficulty
        const hashrate = result1?.Data?.hashrate
        const transactioncount = result1?.Data?.transaction_count
        setItems2({...items2,averageTransaction,difficulty,hashrate,transactioncount})
    })
    .catch(error => console.log('error', error));


},[])

  



 
  return (
    <div className="lg:h-48 divide-pink-600  lg:grid grid-cols-3 grid-rows-2 space-y-6 lg:space-y-0  gap-2  bg-white/30  bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 rounded-3xl p-6 ">
      <dev className="flex items-center gap-4">
        <img src={ethereum} alt="" className="w-6" />
        <div className="text-slate-400 " id="counter">
          ETHER 价格
          <h2 className="text-slate-800  ">
            <CountUp start={0} end={items1.price} prefix="$" duration="2">
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h2>
          <div className="content" />
          <br />
        </div>
      </dev>
      <div className="flex items-center justify-between">
        <dev className="flex items-center gap-4">
          <img src={icon1} alt="" className="w-8" />
          <div className="text-slate-400  counter">
            交易数<h2 className="text-slate-800">
            <CountUp start={0} end={items2.transactioncount} prefix="" duration="2">
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            </h2>
          </div>
        </dev>
        <h2 className="text-end text-slate-400">
          平均交易<h2 className="text-slate-800">
          <CountUp start={0} end={items2.averageTransaction} prefix="" duration="2">
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>Eth
          </h2>
        </h2>
      </div>
      <dev className="row-span-2">


        <Echar/>
      </dev>
      <dev className="flex justify-between">
        <div className="flex gap-4 items-center">
          <img src={icon2} alt="" className="w-8" />
          <h2 className="text-slate-400">
          市值<h2 className="text-slate-800">
            <CountUp start={0} end={items1.mktcap} prefix="$" duration="2">
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            </h2>
          </h2>
        </div>
      </dev>
      <div className="flex items-center justify-between">
        <dev className="flex items-center gap-4">
          <img src={icon3} alt="" className="w-8" />
          <div className="text-slate-400">
            难度<h2 className="text-slate-800">
            <CountUp start={0} end={items2.difficulty} prefix="" duration="2">
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>TH
            </h2>
          </div>
        </dev>
        <h2 className="text-end text-slate-400">
          哈希率<h2 className="text-slate-800">
          <CountUp start={0} end={items2.hashrate} prefix="" duration="2">
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>GH/s
          </h2>
        </h2>
      </div>
    </div>
  )
}

export default Eth
