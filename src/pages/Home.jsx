import React, { useState, useEffect, useRef } from 'react'
import { Header, Card, Card2 } from '../components'
import Victory01 from '../imgs/victory01.png'
import Victory from '../imgs/victory.png'
import computer from '../imgs/computer.png'
import phone from '../imgs/phone.png'
import transparent from '../imgs/transparent.gif'
import Typed from 'typed.js'
import { ethers } from 'ethers'
import Okay from '../imgs/Okay.png'
import gradient from '../imgs/gradient.png'
import gradient3 from '../imgs/gradient3.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Eth from '../components/Eth'
import loop from '../imgs/loop.webm'
import eth from '../imgs/eth.png'
import Nft from '../components/Nft'
import Nft2 from '../components/Nft2'
import nft from '../imgs/nft.png'
import Flower from '../components/Flower'
import { Canvas } from 'react-three-fiber'

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const el = React.useRef(null)

  const typed = React.useRef(null)
  const ref = React.useRef(null)

  React.useEffect(() => {
    const options = {
      strings: ['Web3.0', 'MetaMask', 'NFT', '元宇宙'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    }

    typed.current = new Typed(el.current, options)

    return () => {
      typed.current.destroy()
    }
  }, [])
  const [items2, setItems2] = useState({
    state: '',
    address: '',
    balance: '',
    network: '',
  })
  const conwallet = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum) //创建一个以太坊的provider
      await provider.send('eth_requestAccounts', []) //需要请求权限才能连接用户帐户
      // unknown account
      setItems2(Object.assign(items2, { state: '已连接' }))
    } catch (e) {
      if (e.code === -32002) {
        setItems2(Object.assign(items2, { state: '未连接' }))
      } else {
        setItems2(Object.assign(items2, { state: '未安装' }))
      }
    }
  }
  //监听钱包
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload()
      })
      window.ethereum.on('accountsChanged', () => {
        window.location.reload()
      })
    }
  })

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const con = async () => {
      setLoading(true)
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum) //创建一个以太坊的provider
        const signer = await provider.getSigner() //获取一个可以签名的对象
        const address = await signer.getAddress() //获取用户地址
        const balance = await signer.getBalance() //获取用户余额
        const network = await provider.getNetwork() //获取网络信息
        await setItems2(
          Object.assign(items2, {
            state: '已连接',
            address: address,
            balance: ethers.utils.formatEther(balance).substring(0, 7),
            network: network.name,
          })
        )
      } catch (e) {
        console.log(e)
        if (e.code === -32002) {
          setItems2(Object.assign(items2, { state: '未连接' }))
        }
        if (e.message.search('unknown account') != -1) {
          setItems2(Object.assign(items2, { state: '未连接' }))
        }
        if (e.message.search('missing provider') != -1) {
          setItems2(Object.assign(items2, { state: '未安装' }))
        }
      }
      setLoading(false)
    }
    con()
  }, [])

  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element.querySelector('.first-par'),
      { opacity: 0, x: 50, y: 200 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector('.first'),
          start: 'top top',
          end: 'bottom center',
          scrub: true,
          duration: 2,
        },
      }
    )
  }, [])

  useEffect(() => {
    const t2 = gsap.timeline()
    t2.to('#gsap-logo', {
      x: 500,
      // rotation: 360,
      rotate: 360,
      duration: 8,
      scrollTrigger: {
        trigger: '#gsap-logo',
        start: 'top 80%',
        end: '+=350',
        scrub: 2,
        // markers: true,
      },
    })
    // .to('#gsap-logo', {
    //   // duration: 8,
    //   y: 350,
    //   scale: -1,
    //   rotate: 360,
    //   // rotate:90,
    //   // duration: 8,
    //   scrollTrigger: {
    //     trigger: '#gsap-logo',
    //     start: 'top 30%',
    //     // end: '+=350',
    //     scrub: 2,
    //     // togglerActions:"restart  pause",
    //     // pin:'#gsap-logo',
    //     // pinSpacing: false,
    //   },
    // })
  }, [])

  const t4Ref = useRef(null)
  useEffect(() => {
    const t4el = t4Ref.current
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.t3',
        start: 'botton 40%',
        end: 'top 5%',
        // markers: true,
        scrub: true,
      },
    })
    tl.fromTo(t4el, { y: 300 }, { y: 0, duration: 2 }).fromTo(
      t4el,
      { x: 300 },
      { x: 20, duration: 3 }
    )
    // .fromTo(t4el, { x: 20 }, { y: 200, duration: 3 })
  }, [])

  return (
    <div ref={ref} className="w-[100vw] h-[100vh] container mx-auto">
      <div
        style={{ backgroundImage: `url(${gradient})` }}
        className=" bg-cover   ">
        <div className="md:h-8"></div>
        <div className="first  bg-white  bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30   sm:mx-20 md:rounded-3xl">
          <div className="    sm:grid   sm:mx-20  py-2   grid-row-3  md:grid-cols-2  grid-cols-2">
            <Header />

            <div className=" text-3xl    pt-4    lg:col-span-1  row-span-2  self-center  sm:space-y-8  ">
              <h1 className="lg:text-3xl  md:text-2xl  xl:text-5xl font-bold tracking-wide leading-relaxed  flex  flex-wrap [&_h2]:text-sky-500">
                <h2 className="hover:[animation:rubberBand_1s] hover:text-amber-200">
                  欢
                </h2>
                <h2 className="hover:[animation:rubberBand_1s] hover:text-teal-500">
                  迎
                </h2>
                <h2 className="hover:[animation:rubberBand_1s] hover:text-pink-500">
                  来
                </h2>
                <h2 className="hover:[animation:rubberBand_1s] hover:text-lime-500">
                  到
                </h2>
                <h2 className="hover:[animation:rubberBand_1s] hover:text-fuchsia-500">
                  W
                </h2>
                <h2 className="hover:[animation:rubberBand_1s] hover:text-rose-500">
                  E
                </h2>
                <h2 className="hover:[animation:rubberBand_1s] hover:text-orange-500">
                  B
                </h2>
                <h2 className="hover:[animation:rubberBand_1s] hover:text-green-500">
                  3
                </h2>
                <h2 className="hover:[animation:rubberBand_1s] hover:text-violet-500">
                  元
                </h2>
                <h2 className="hover:[animation:rubberBand_1s] hover:text-pink-500">
                  宇
                </h2>
                <h2 className="hover:[animation:rubberBand_1s] hover:text-red-500">
                  宙
                </h2>

                <h2 className="hover:[animation:rubberBand_1s] hover:text-yellow-500">
                  的
                </h2>
                <h2 className="hover:[animation:rubberBand_1s] hover:text-emerald-500">
                  世
                </h2>
                <h2 className="hover:[animation:rubberBand_1s] hover:text-purple-500">
                  界
                </h2>
                <h2 className="hover:[animation:rubberBand_1s] hover:text-teal-500">
                  ！
                </h2>
              </h1>
              <h2 className="text-3xl font-semibold tracking-wide  text-sky-500   [animation:backInDown.5s]  ">
                本站内容 :
                <span
                  className=" ml-2  text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-rose-500 to-red-300 typing"
                  ref={el}>
                  web3.0
                </span>
              </h2>
              <button
                onClick={conwallet}
                className="text-white  text-xl bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-400 dark:focus:ring-pink-800   font-medium rounded-lg  px-5 py-3.5 text-center mr-2 mb-2 shadow-lg shadow-red-500/50 ">
                连接Matemask钱包
              </button>
              <p className="first-par">
                <a
                  className=" font-bold text-4xl mb-1 bg-clip-text text-transparent bg-gradient-to-r from-red-700  via-orange-400  to-green-500 tracking-wider selection:bg-fuchsia-500 selection:text-emerald-500  hover:bg-gradient-to-r   hover:via-sky-500 hover:to-red-600"
                  href="https://ethereum.org/zh/">
                  第一站:以太坊ethereum
                </a>
                <span role="img" aria-label="celebrating">
                  🥳
                </span>
              </p>
            </div>
            <div className="col-span-1 justify-self-center xl:translate-y-11 z-50 container max-w-sm h-52">
              <Card2 items2={items2} />
            </div>
            <div className="  -translate-y-20">
              <img
                src={Okay}
                alt=""
                className="-rotate-[30deg] z-0    scale-75 "
              />
            </div>
          </div>
        </div>
        <div className="h-8"></div>
      </div>

      <div
        style={{ backgroundImage: `url(${gradient3})` }}
        className="bg-cover    ">
        <h1 className="text-center text-3xl py-4 text-[#6531FF] select-none font-bold ">
          以太坊现状
        </h1>
        <div className="lg:mx-20 t3">
          <Eth />
        </div>
        <div className="lg:flex mt-20 justify-between  ">
          <img src={eth} alt="" className=" w-36 ml-20  " id="gsap-logo" />

          <div
            className="w-72  md:mr-96   justify-self-start  t3-par space-x-4 space-y-4  "
            ref={t4Ref}>
            <h1 className="text-center text-2xl">在哪里购买ETH</h1>
            <h3 className="text-base">
              您可以通过交易所或者钱包应用直接购买ETH。
            </h3>
            <button className="w-20 h-8 bg-yellow-400 rounded-xl">
              <a href="https://www.binance.com/zh-CN">币安</a>
            </button>
            <button className="w-20 h-8 bg-red-500 rounded-xl">
              <a href="https://www.huobi.com/zh-cn/#exchange">火币</a>
            </button>
          </div>
        </div>
        <div className="mt-8  md:flex justify-around md:visible invisible justify-items-end">
          <img src={transparent} className="w-2/5   " />
          <h1 className="self-center    text-center text-3xl text-indigo-600 ">
            以太坊是我首次接触的web3{' '}
            <h2 className="mt-12 animate-bounce text-red-500">
              下一站:<img src={nft} className="inline-block"></img>
            </h2>
          </h1>
        </div>
      </div>

      <h1 className="text-center h-8 my-4 text-3xl">NFT</h1>
      {/* <div className="grid grid-cols-3 w-full h-full"> */}
      {/* <div><Nft/></div> */}
      <div className="w-full h-96">
        <Nft2 />
      </div>
      <h1 className='text-center text-3xl m-6'>元宇宙</h1>
      <Canvas className='bg-black  h-[100vh] '>
      <Flower/>
      </Canvas>
    </div>
    // </div>
  )
}

export default Home
