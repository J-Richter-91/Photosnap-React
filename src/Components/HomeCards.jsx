import React from 'react'

export default function HomeCards(props){
    return(
        <div className="card-container">
        <img className='card-img' src={`assets/${props.img}`}  alt='card-img' />
        <div className="card-text-overlay">
            <h2 className='card-title'>{props.title}</h2>
            <p className='card-author'>{props.author}</p>
            <hr className='break'></hr>
            <div className="read-story-container">
                <p className='card-read-story'>Read Story</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="14" viewBox="0 0 42 14" fill="none">
                    <path d="M0 7H41.864" stroke="white"/>
                    <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white"/>
                </svg>
            </div>
        </div>
    </div>
    )
}