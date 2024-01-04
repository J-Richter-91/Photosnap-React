import React from 'react'
import Data from '../data'
import HomeCards from './HomeCards'
export default function Stories(){

    const stories = Data.map( item => {
       return ( < HomeCards 
          key = {item.id}
          {...item}    
        />
       )
    })

    return(
    <>
    <div className="stories-hero-container">
        <img className='stories-hero' src={`./assets/moon-of-appalacia.jpg`} />
        <div className="stories-hero-text-overlay">
            <p className='last-months-feature'>LAST MONTH'S FEATURED STORY</p>
            <h1 className='last-months-feature-title'>HAZY FULL MOON OF APPALACHIA</h1>
            <p className='last-months-feature-date'>March 2nd 2020<span className='last-months-feature-author'>by John Appleseed</span></p>
            <p className='last-months-feature-description'>The dissected plateau area, while not actually made up of geological mountains, 
                is popularly called "mountains," especially in eastern Kentucky and West Virginia, 
                and while the ridges are not high, the terrain is extremely rugged.
            </p>
           
        </div>
        <div className="mobile-text-container">
        <div className="stories-hero-text-mobile-overlay">
            <p className='last-months-feature'>LAST MONTH'S FEATURED STORY</p>
            <h1 className='last-months-feature-title'>HAZY FULL MOON OF APPALACHIA</h1>
            <p className='last-months-feature-date'>March 2nd 2020<span className='last-months-feature-author'>by John Appleseed</span></p>
            <p className='last-months-feature-description'>The dissected plateau area, while not actually made up of geological mountains, 
                is popularly called "mountains," especially in eastern Kentucky and West Virginia, 
                and while the ridges are not high, the terrain is extremely rugged.
            </p>
           
        </div>
        </div>
    </div>
    <div className="home-grid-container">
    {stories}

    </div>
    
    </>
        
    )
}