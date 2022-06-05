import React from 'react'
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle)=>(
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className="widgets">
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("Alex is finally coding again!", "Top News --  999+ Readers")}
        {newsArticle("Another interview scheduled, Learn how to keep up!", "Top Article --  413+ Readers")}
        {newsArticle("Corona Virus in 2023? What to Expect", "World Health News")}
        {newsArticle("Coding in the sun! Tips and Tricks to staying busy this summer!", "World Health News")}
    </div>
  )
}

export default Widgets