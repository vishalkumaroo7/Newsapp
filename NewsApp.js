import React, { useState,useEffect,useRef} from 'react'
import News from'./News';
import './NewsApp.css'
function NewsApp() {
    const apiKey='hello';
    
    const [newsList,setNewsList]=useState([]);
    const[query,setQuery]=useState('tesla');
    const apiUrl=`https://newsapi.org/v2/everything?q=${query}&from=2023-06-08&sortBy=publishedAt&apiKey=${apiKey}`;
    const queryInputRef=useRef(null);


    useEffect(()=>{
    fetchdata();
    },[query])


    async function fetchdata(){
      try{
    const response=await fetch(apiUrl);
    const jsonData=await response.json();

    setNewsList(jsonData.articles);
      }
      catch(e){
        console.log('error occured');
      }
    }

    function handleSubmit(event){
      event.preventDefault();
    const queryValue=queryInputRef.current.value;
    setQuery(queryValue);
    }

  return (
<div className="news-app">

  <form onSubmit={handleSubmit}>
    <h1>Search Here</h1>
    <input className="query-input"type="text" ref={queryInputRef}/>
    <input className="btn-submit" onClick={handleSubmit} type="submit"value="Submit"/>
  </form>
<div style={{display:'grid',gridTemplateColumns:'repeat(2,48%)',justifyContent:'spacebetween',rowGap:'20px'}}>
      {newsList.map(news =>{
        return<News Key={news.url} news={news}/>
      })}
    </div>
</div>
    
  
  );
}

export default NewsApp