import React from 'react'
// import React, {useEffect, useState} from 'react'
// import axios from 'axios'
// import{menu, close, logo, logoo} from '../assets';
// import Carousel from './Carousel';
// import Carousel from "./Carousel"
import "./Hum.css"
// import Carousell from './Carousell';
import { Link } from 'react-router-dom'

const Humour = ({allData}) => {
  
  // const [allData, setallData] = useState([])
  // const url = 'http://localhost:1337/api/humours?populate=*';

  // useEffect(() => {
  //   getData()
  // }, [])
  // const getData = () =>{
  //     axios.get(url).then(res =>setallData(res.data.data)).catch(err =>{console.log(er);})
  // }
  // console.log(allData);

  return (

    <>
    
    <section className="   ">
	<div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {/* {firstThre.map((firstblog)=> */}

    {allData.map((humour)=>
        <Link to={`/humour/${humour.id}`}>
    <div className="lg:hidden border-b-2">
            <div className="bg-white h-full w-full ">
              <div>
                <div   className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                    <div className="block h-30 w-2/5 rounded overflow-hidden"     style={{
        backgroundImage: `url(${humour.attributes.humourImg.data.attributes.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}></div>
                    <div className="pl-3 w-3/5">
                        <p className="text-xs text-gray-500 uppercase">#Humour</p>
                        <h3 className="text-md font-semibold leading-tight mb-3">{humour.attributes.humourTitle}</h3>
                        <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                            <div>{humour.attributes.humourDesc}</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          </div>
			<div rel="noopener noreferrer"   className="max-w-sm mx-auto group hover:no-underline focus:no-underline     hidden lg:block cardd">
				<img role="presentation" className="object-cover w-full rounded h-44 " alt='humour' src={humour.attributes.humourImg.data.attributes.url} />
				<div className="p-6 space-y-2">
        <h6 className='text-blue-800'>#Humour</h6>
					<h3 className="text-2xl font-semibold   group-focus:underline">{humour.attributes.humourTitle}</h3>
					<span className="text-xs ">{humour.attributes.humourDesc}</span>
					<p></p>
				</div>
        <span className="spann topp"></span>
      <span className="spann rightt"></span>
      <span className="spann bottomm"></span>
      <span className="spann leftt"></span>
			</div> 
       </Link>
       )}
    
		
		</div>
		{/* <div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 dark:text-gray-400">Load more posts...</button>
		</div> */}
	</div>
</section>
    
    </>
  )
}

export default Humour


