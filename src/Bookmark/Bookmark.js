import './Bookmark.css'

import {BsXCircleFill} from "react-icons/bs";

const BookMark = ({bookmark, setBookmark, removeNews}) => {   
   console.log(bookmark)
    return (
        <div className="news-wrapper">
           
            {
                bookmark && bookmark.map((mark, index) => {
                    return (
          
                        
                        

                        <div key={mark.id}>
                        <div className="news-container">
                            <div className="news-card-wrapper">
                            <a href={mark.url}><p>{mark.title}</p></a>
                            <p>By: {mark.by}</p>
           
                            <p>Posted: {mark.time}</p>
            
          
      
                            <span onClick={() => removeNews(mark.url)} className="remove-bookmark"><BsXCircleFill /></span>
                            </div>
                        </div>
                       
                        
                       
                </div>
                    )
                })
            
            }
        </div>
    )
}

export default BookMark