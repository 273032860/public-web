import React from 'react'

function Header() {
  return (
    <div className="col-span-full flex w-full justify-between h-12 items-center mt-4">
      <div className="tracking-wider text-2xl">Organ</div>
      <ul className="flex items-center sm:space-x-8 hover:[&_a]:underline">
        <li>
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">Web3</a>
        </li>
        <li>
          <a href="#">Matemask</a>
        </li>
        <li>
          <a href="#">NFT</a>
        </li>
        <li>
          <a href="#">元宇宙</a>
        </li>
        <button className="bg-orange-600  h-10 w-32 rounded-xl text-white/80">
          Get Started
        </button>
      </ul>
    </div>
  )
}

export default Header
