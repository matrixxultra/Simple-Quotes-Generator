
import React, {  useState } from 'react'
import "./RandomQuote.css"
import data from "./data"
const RandomQuote = () => {
    const [quotes,setQuotes] = useState(data)
    const [quote,setQuote] = useState({
        text : "If You Get me Once Shame On You , If you Get me Twice Shame On me",
        author : "Idriss AG"

    })
    const handleQuote = ()=> {

        const nbr = Math.floor(Math.random()*quotes.length)
    
        setQuote(quotes[nbr])
   }

   
   
  return (
    <div className="container-hero">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
            <div className="author">- {quote.author}</div>
            <div className="icons">
                <button onClick={()=>handleQuote()} className='btn btn-success'>ReLoad</button>
                <button className='btn btn-info' onClick={()=>confirm("Comming Soon")}>Publish</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RandomQuote
