import React from 'react'
import Data from '../data.jsx'
import HomeCards from './HomeCards.jsx'

export default function Home(){

    const homeCards = Data.slice(0, 4).map(item => {
        return (
          < HomeCards 
          key = {item.id}
          {...item}
          />
        )
      })

    return(
        <>
        <div className='home-grid-container'>
            
                <div className="row-1-text-container">
                    <div className="text-overlay">
                        <h1 className='row-1-heading'>Create and share your photo stories. </h1>
                        <p className='row-1-description'>
                            Photosnap is a platform for photographers and visual storytellers. 
                            We make it easy to share photos, tell stories and connect with others.
                        </p>
                        <div className="get-an-invite-container">
                            <p className='invite-text'>Get an Invite</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="14" viewBox="0 0 42 14" fill="none"><path d="M0 7H41.864" stroke="white"></path><path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white"></path></svg>
                        </div>
                    </div>
                </div>
            <img className='row-1-hero' src={`assets/create-and-share.jpg`} />

            <img className='row-2-hero' src={`assets/beautiful-stories.jpg`} />
            <div className="row-2-text-container">
            <div className="row-2-text-overlay">
                        <h1 className='row-2-heading'>Create and share your photo stories. </h1>
                        <p className='row-2-description'>
                            Photosnap is a platform for photographers and visual storytellers. 
                            We make it easy to share photos, tell stories and connect with others.
                        </p>
                        <div className="get-an-invite-container">
                            <p className='dark-invite-text'>Get an Invite</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="14" viewBox="0 0 42 14" fill="none">
                                <path d="M0 7H41.864" stroke="black"/>
                                <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="black"/>
                            </svg>
                        </div>
                    </div>
            </div>

            <div className="row-3-text-container">
            <div className="row-3-text-overlay">
                        <h1 className='row-3-heading'>Create and share your photo stories. </h1>
                        <p className='row-3-description'>
                            Photosnap is a platform for photographers and visual storytellers. 
                            We make it easy to share photos, tell stories and connect with others.
                        </p>
                        <div className="get-an-invite-container">
                            <p className='dark-invite-text'>Get an Invite</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="14" viewBox="0 0 42 14" fill="none">
                                <path d="M0 7H41.864" stroke="black"/>
                                <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="black"/>
                                
                            </svg>
                        </div>
                    </div>
            </div>
            < img className='row-3-hero' src={`assets/designed-for-everyone.jpg`} alt="" />

            {homeCards}
        </div>
        <div className="feature-row">
                <div className="feature-card">
                    <img className='feature-icon' src={`assets/responsive.svg`} alt='feature-icon' />
                    <h2 className='feature-title'>100% Responsive</h2>
                    <p className='feature-description'>No matter which the device you're on, 
                        our site is fully responsive and stories look beautiful on any screen.
                    </p>
                </div>
                <div className="feature-card">
                    <img className='feature-icon' src={`assets/no-limit.svg`} />
                    <h2 className='feature-title'>No Photo Upload Limit</h2>
                    <p className='feature-description'>Our tool has no limits on uploads or bandwidth. 
                    Freely upload in bulk and share all of your stories in one go.
                    </p>
                </div>
                <div className="feature-card">
                    <img className='feature-icon' src={`assets/embed.svg`} />
                    <h2 className='feature-title'>Available to Embed</h2>
                    <p className='feature-description'>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. 
                    </p>
                </div>
            </div>
        </>
    )
}