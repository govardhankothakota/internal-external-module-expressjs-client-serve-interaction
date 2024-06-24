import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {

  let[movies,setMovies] = useState([]);
  let[mobiles,setMobiles] = useState([])

let getMovies = async()=>{
let reqOptions = {
   method:"GET"
}
let JSONData = await fetch("http://localhost:7799/IMDb",reqOptions)
let JSOData = await JSONData.json()
setMovies(JSOData)

console.log(JSOData)
}


let getMobiles = async()=>{
  let reqOptions = {
    method : "GET"
  }
  let JSONData = await fetch("http://localhost:2961/topmobiles",reqOptions)
  let JSOData = await JSONData.json()
  setMobiles(JSOData)
  console.log(JSOData)
}

  return (
    <div className="App">

      <h2>Top 12 Best Phones In The World</h2>
      <button onClick={()=>{
        getMobiles()
      }}>Get Mobiles</button>

      <div className='itemContainer'>
      {mobiles.map((ele,i)=>{
        return  ( <div key={i} className='itemDiv'>
          <img className='itemImg' src={ele.mobileImage}></img>
           <p className='mobilePara'>
           <span className='title'>{ele.mobileNo}.{ele.mobileName}</span><br/>
           Price : {ele.mobilePrice}<br/>
           Storage : {ele.mobileStorage}<br/>
           Display : {ele.mobileDisplay}<br/>
           Camera : {ele.mobileCamera}<br/>
           Processor : {ele.mobileProcessor}<br/>
          Battery : {ele.mobileBattery}
          </p>
        </div>
        )        
      })}
      </div>


      <h2>S.S.Rajamouli IMDb Movies List </h2>
      <button onClick={()=>{
        getMovies()
      }}>Get Movies</button>
         <div className='itemContainer'>
      {movies.map((ele,i)=>{
        return  ( <div key={i} className='itemDiv'>
          <img className='itemImg' src={ele.image}></img>
         <p> <span className='title'>{ele.no}.{ele.movie}</span><br/>
              year  :   {ele.year}<br/>
              Rating  :   {ele.rating}<br/>
              Stars :    {ele.stars}<br/>
          <a href={ele.imdbURL} className='url' target='_blank'>IMDb Link</a>
          </p>
        </div>
        )        
      })}
      </div>
      
      
      
    </div>
  );
}

export default App;
