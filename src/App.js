import logo from './logo.svg';
import React,{useEffect,useState} from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import EachCard from "./component/card";
import Filter from "./component/filter";
import Navbar1 from "./component/navbar"

function App() {
  const [wholeData,setData]=useState([]);
  const [filterD,setFilterD]=useState(wholeData);
  const[obj,setObj]=useState({
            poster:"",
            title:"",
            rating:"",
            year:""
  })

  useEffect(()=>{
    let url="https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
  //  let url2="https://api.themoviedb.org/3/discover/movie";
    fetch(url
      // {
      // method: "GET",
      // headers: {
      //   "api_key": "3a94078fb34b772a31d9a1348035bed7",
      //   'mode': 'cors',
      // //   'Content-Type': 'application/json',
      // //   'Access-Control-Allow-Credentials':"true",
      // //   "Access-Control-Allow-Origin": "*",
      // //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With,Content-Type, Accept, Authorization,Access-Control-Request-Method, Access-Control-Request-Headers',
      // // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Credentials": "true",
      // "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      // "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"

      // }
      // }
      )
      .then(res=>res.json())
      .then(data=>{
        // console.log(data);
        return data.results.map(item=>{
          let arr=wholeData;
          let list={
            poster:item.poster_path,
            title:item.title,
            rating:item.vote_average,
            year:(item.release_date).split("-")
          }
          arr.push(list);
          setData([...arr]);
          setFilterD([...arr]);
          // console.log(wholeData,"jjj");
          return list;
        })
      });
  },[])
  return (
  <>
  <Navbar1 wholeData={wholeData} setFilterD={setFilterD}/>
    <div className="App">
      {filterD.map((data)=><EachCard data={data}/>)}
      
    </div>
    <Filter setFilterD={setFilterD} wholeData={wholeData}/>
    </>
  );
}

export default App;
