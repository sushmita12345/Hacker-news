import './NewsPage.css';
import { BsBookmark } from "react-icons/bs";

import {useState, useEffect} from 'react';
import {fetchStory} from "../useFetch"



export const NewsCard = ({news, clickHandler}) => {

    const [newsData, setNewsData] = useState({})
    console.log(newsData)

    useEffect(() => {
        fetchStory(news).then(data => data && data.url && setNewsData(data))
    },[])
    return newsData && newsData.url ? (
        <>
        <div className="news-container">
            <div className="news-card-wrapper">
            <a href={newsData.url}><p>{newsData.title}</p></a>
       
            <p>By: {newsData.by}</p>
            <div>
            <p>Posted: {newsData.time}</p>
            <span onClick={() => clickHandler(newsData)}><BsBookmark /></span>
            </div>
            
            </div>
            
        </div>
        
        </>
    ):null
}