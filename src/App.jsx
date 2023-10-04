import { createElement, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BiSearchAlt2} from 'react-icons/bi'

function App() {
  const url = 'https://restcountries.com/v2/all'
  const [data,setdata]= useState([])
  
  useEffect(()=> {
    fetchdata()
  },[])
  const [showdata,setshowdata] = useState([])
  const [searchval,setsearchval] = useState('')

  function handleclicksearch(){
    if(searchval===""){setshowdata(data); return}
    const filtersearch = data.filter((item)=>{
      if(item.name.toLowerCase().includes(searchval.toLowerCase()))
      {return item}
    })
    setshowdata(filtersearch)
  }
  
  const fetchdata =async()=> {
 try{
  const response = await fetch(url)
  const result = await response.json()
  setdata(result)
 }
 catch(error){
  console.error('error fetching data:',error)
 }
  }

  return (
      
    
    <div className='h-screen '>
    <div align="center" className='
           bg-globe bg-no-repeat bg-center bg-[length:100%_100%]
            h-2/4 w-full m-0 p-10
        text-center '>
    <h2 className='text-white text-4xl tracking-[4px]'> WORLD COUNTRY LIST </h2>
    <p className='text-white mt-[10px] text-xl font-bold '>Total number of countries: {data.length}</p>
    <p className='text-white mt-[10px] text-xl font-bold '>Give a letter to search</p>
      <div className='h-8 p-4' align="center">
        <input type="text" className='h-8 text-lg w-[35%]  text-center' placeholder='search country' 
         onChange={e => setsearchval(e.target.value)}/>
      </div>
    <div className='flex relative justify-center items-center'>
      {/* <button className='text-white bg-gray-600 border-gray-500 border h-12 mt-6 w-[20%] ml-2 shadow-md '>STARTING WORD</button>
      <button className='text-white bg-gray-600 border-gray-500 border h-12 mt-6 w-[15%] ml-2 shadow-md '>ANY WORD</button>
      <button className='text-white bg-gray-600 border-gray-500 border h-12 mt-6 w-[15%] ml-2 shadow-md '>RANDOOM</button> */}
      <button className='text-white bg-gray-600 border-gray-500 border h-12 mt-6 w-[20%] ml-2 shadow-md ' onClick={handleclicksearch}>SEARCH COUNTRIS</button>
    </div>
    </div>
    <Yourcomponent datatwo={showdata}/>
    </div>

  )
}

function Yourcomponent({datatwo}){
  
  
return (
  <>
  {
    <div className='grid h-[fit-content] pl-8 pt-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]'>
    {datatwo.map((item,index)=>(
              <div className="
       h-[150px] w-[150px]  m-2 bg-no-repeat bg-[length:100%_100%]
       bg-[linear-gradient(to_right_bottom,rgba(200,200,200,0.2),rgba(0,0,0,0)),url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_VAKiPpdgsSiUzklSdSxJueucWYJ7KToh9yPgfe-shCno2r1nzlHRrb0PCipWbkLePY&usqp=CAU')]
  
       flex items-center justify-center border border-gray-800
       text-2xl mb-4 text-gray-800"
        key={index}> 
      {item.name}
      </div>
       ))}
      </div>
  }
  </>
)


}



export default App
