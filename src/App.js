import './App.css';
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {   Homepage, HumourPage, PersonalityPage, ImaginationPage, HumourContentPage, PersonalityContentPage, BloggPage, BloggContentPage, ImaginationContentPage, VideoContentPage, VideoPage, PodcastPage, PodcastContentPage, AboutPage, CoolStuffPage, LandingPage, NewsletPage} from "./pages";
import NotFoundpage from "./pages/NotFoundpage";
import { Loader } from "./component";
import CategoryPage from './pages/CategoryPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
const [allData, setallData] = useState([])

const [allDatai, setallDatai] = useState([])
const [allDatap, setallDatap] = useState([])
const [allDatab, setallDatab] = useState([])
const [allDatav, setallDatav] = useState([])
const [allDatapo, setallDatapo] = useState([])
const [allDatac, setallDatac] = useState([])
const [allAbout, setallAbout] = useState([])




// const url = 'http://localhost:1337/api/humours?populate=*';
const url = 'https://whatisthe411-backend.onrender.com/api/humours?populate=*';

useEffect(() => {


  getData()
}, [])
const getData = () =>{
    axios.get(url).then(res =>setallData(res.data.data)).catch(err =>{console.log(err);})
}
console.log(allData);



// const url1 = 'http://localhost:1337/api/imaginations?populate=*';
const url1 = 'https://whatisthe411-backend.onrender.com/api/imaginations?populate=*';

useEffect(() => {
  getDat()
}, [])
const getDat = () =>{
    axios.get(url1).then(res =>setallDatai(res.data.data)).catch(err =>{console.log(err);})
}
console.log(allDatai);

// const url2 = 'http://localhost:1337/api/personalities?populate=*';
const url2 = 'https://whatisthe411-backend.onrender.com/api/personalities?populate=*';

useEffect(() => {
  getDatp()
}, [])
const getDatp = () =>{
    axios.get(url2).then(res =>setallDatap(res.data.data)).catch(err =>{console.log(err);})
}
console.log(allDatap);


// const url3 = 'http://localhost:1337/api/blogs?populate=*';
const url3 = 'https://whatisthe411-backend.onrender.com/api/blogs?populate=*';

useEffect(() => {
  getDatb()
}, [])
const getDatb = () =>{
    axios.get(url3).then(res =>setallDatab(res.data.data)).catch(err =>{console.log(err);})
}
console.log(allDatab);

// const url4 = 'http://localhost:1337/api/videos?populate=*';
const url4 = 'https://whatisthe411-backend.onrender.com/api/videos?populate=*';

useEffect(() => {
  getDatv()
}, [])
const getDatv = () =>{
    axios.get(url4).then(res =>setallDatav(res.data.data)).catch(err =>{console.log(err);})
}
console.log(allDatav);


// const url5 = 'http://localhost:1337/api/podcasts?populate=*';
const url5 = 'https://whatisthe411-backend.onrender.com/api/podcasts?populate=*';

useEffect(() => {
  getDatpo()
}, [])
const getDatpo = () =>{
    axios.get(url5).then(res =>setallDatapo(res.data.data)).catch(err =>{console.log(err);})
}
console.log(allDatapo);

// const url5 = 'http://localhost:1337/api/podcasts?populate=*';
const url6 = 'https://whatisthe411-backend.onrender.com/api/carousels?populate=*';

useEffect(() => {
  getDatc()
}, [])
const getDatc = () =>{
    axios.get(url6).then(res =>setallDatac(res.data.data)).catch(err =>{console.log(err);})
}
console.log(allDatac);


// const url5 = 'http://localhost:1337/api/podcasts?populate=*';
const url7 = 'https://whatisthe411-backend.onrender.com/api/abouts?populate=*';

useEffect(() => {
  getAbout()
}, [])
const getAbout = () =>{
    axios.get(url7).then(res =>setallAbout(res.data.data)).catch(err =>{console.log(err);})
}
console.log(allAbout);


  return (
    <>
    
    {loading &&  <Loader/>}
    {/* {loading ?  <Loader/> : <h1>loading...</h1>} */}
    
     <BrowserRouter>
     

    <Routes>
      
        <Route path="/" element={<LandingPage allDatab={allDatab} allDatap={allDatap}/>} />
        <Route path="/home" element={<Homepage allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>} />
        
        <Route path="/blog" element={<BloggPage allDatab={allDatab}/>} />
        
        <Route path="/blog/:id" element={<BloggContentPage allDatab={allDatab}/>} />


        <Route path="/humour" element={<HumourPage allData={allData}/>}/>
        <Route path="/humour/:id" element={<HumourContentPage allData={allData}/>}/>


        <Route path="/personality" element={<PersonalityPage allDatap={allDatap}/>}/>
        <Route path="/personality/:id" element={<PersonalityContentPage allDatap={allDatap}/>}/>
        


        <Route path="/imagination" element={<ImaginationPage allDatai={allDatai}/>}/>
        <Route path="/imagination/:id" element={<ImaginationContentPage allDatai={allDatai}/>}/>



        <Route path="/video" element={<VideoPage allDatav={allDatav}/>}/>
        <Route path="/video/:id" element={<VideoContentPage allDatav={allDatav}/>}/>


        <Route path="/podcast" element={<PodcastPage allDatapo={allDatapo}/>}/>
        <Route path="/podcast/:id" element={<PodcastContentPage allDatapo={allDatapo}/>}/>


        <Route path="/about" element={<AboutPage allAbout={allAbout}/>}/>


        <Route path="/cool-stuff" element={<CoolStuffPage  allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>}/>

        

        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="/newsletter" element={<NewsletPage/>}/>



        <Route path="/*" element={<NotFoundpage/>}/>
        
        
        
   
        
        
        
        
        </Routes>
   
        </BrowserRouter>
    
    </>
  );
}

export default App;
