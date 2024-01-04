import React from 'react'

export default function Features(){
    return(
        <>
        <div className="features-header">
            <div className="features-header-text-container">
                <div className="features-header-text-overlay">
                    <h1 className='features-header-title'>FEATURES</h1>
                    <p className='features-header-description'>We make sure all of our features are designed to be 
                        loved by every aspiring and even professional photograpers 
                        who wanted to share their stories.
                    </p>
                </div>
            </div>
            < img className='features-header-img' 
            src='./assets/features-hero.jpg' 
            alt='features header img' />
        </div>
        <main className='features-main-content'>
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
            <div className="feature-row">
                <div className="feature-card">
                    <img className='feature-icon' src={`assets/custom-domain.svg`} alt='feature-icon' />
                    <h2 className='feature-title'>Custom Domain</h2>
                    <p className='feature-description'>
                    With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!
                    </p>
                </div>
                <div className="feature-card">
                    <img className='feature-icon' src={`assets/boost-exposure.svg`} />
                    <h2 className='feature-title'>Boost Your Exposure</h2>
                    <p className='feature-description'>
                    Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.
                    </p>
                </div>
                <div className="feature-card">
                    <img className='feature-icon' src={`assets/drag-drop.svg`} />
                    <h2 className='feature-title'>Drag & Drop Image</h2>
                    <p className='feature-description'>
                    Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.
                    </p>
                </div>
            </div>
            <div className="beta-container">
                <div className="beta-text-container">
                 
                    <h1 className='beta-title'>We're in beta. Get your invite today!</h1>
                   
                    <div className="bg-invite-row">
                    <p className='bg-invite-text'>Get An Invite</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="14" viewBox="0 0 42 14" fill="none">
                        <path d="M0 7H41.864" stroke="white"/>
                        <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white"/>
                    </svg>
                    </div>
                </div>
                <img className='beta-img' src='./assets/bg-beta.jpg' />
            </div>
        </main>
        </>
    )
}