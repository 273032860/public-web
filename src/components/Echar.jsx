import React,{useState,useEffect} from 'react'
import ReactECharts from 'echarts-for-react'

function Echar() {

  const [items1, setItems] = useState()
  const [items2, setItems2] = useState()

  useEffect(() => {
    var requestOptions = {
      time: '',
      price: 0,
    }

    fetch(
      'https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=7&aggregate=1&e=Kraken&api_key=142a30c38a79d5d3eb4bd4feaba8f609b3d2598f79eec6b08a78a41a27032ba7',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const result1 = JSON.parse(result)
        console.log(result1)
        const time = result1.Data.Data.map(obj=>{return  obj.time })
        const formattime = time.map(obj=>{return new Date(obj*1000).getMonth()+1+'/'+new Date(obj*1000).getDate()})//日期格式化
        const price = result1.Data.Data.map(obj=>{return  obj.close })
        setItems(formattime)
        setItems2(price)
      })
      .catch((error) => console.log('error', error))
  }, [])

 console.log(items1)
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: items1,
    },
    yAxis: {
      min:800,
      max:1500,
      interval:100,
      type: 'value',
    },
    series: [
      {
        data: items2,
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  }
  return (
    <div  >
      <ReactECharts option={options}  className='h-40 w-96 ml-8'/>
    </div>
  )
}

export default Echar
