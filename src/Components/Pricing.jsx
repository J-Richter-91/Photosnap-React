import React, {useState, useLayoutEffect} from 'react'

export default function Pricing(){
    const [isChecked, setIsChecked] = useState(false)

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const breakPoint = 750;
    const mobileImg = './assets/mobile-table.png'
    const desktopImg = './assets/table.png'
    const imgSrc = screenWidth < breakPoint ? mobileImg : desktopImg

    useLayoutEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Call handleResize once to set the initial screen width
        handleResize();
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const handleToggle = () => {
        setIsChecked(prevState => !prevState)
    }

    

    return(
        <>
            <div className="pricing-header">
            <div className="pricing-header-text-container">
                <div className="pricing-header-text-overlay">
                    <h1 className='pricing-header-title'>FEATURES</h1>
                    <p className='pricing-header-description'>We make sure all of our features are designed to be 
                        loved by every aspiring and even professional photograpers 
                        who wanted to share their stories.
                    </p>
                </div>
            </div>
                < img className='pricing-header-img' 
                src='./assets/pricing-hero.jpg' 
                alt='features header img' />
            </div>
            <main className='main-pricing-content'>
                <div className="toggle-switch-container">
                    <p className='monthly-cycle'>Monthly</p>
                    <label className="switch">
                        <input type="checkbox" onClick={handleToggle}/>
                        <span className="slider round"></span>
                    </label>
                    <p className='yearly-cycle'>Yearly</p>
                </div>
                <div className="price-cards-wrapper">
                    <div className="price-card-container">
                        <div className="card-text-container">
                            <div className="plan-info-container">
                                <h1 className='card-plan-title'>Basic</h1>
                                <p className='card-plan-description'>Includes basic usage of our platform. 
                                        Recommended for new and aspiring photographers.
                                </p>
                            </div>
                            <div className="card-price-container">
                                <p className='card-plan-price'>{isChecked ? '$190.00' : '$19.00'}</p>
                                <p className='card-bill-cycle'>per month</p>
                            </div>
                            
                        </div>
                        <button className='card-button'>PICK PLAN</button>
                    </div>
                    <div className="price-card-container">
                        <div className="card-text-container">
                            <div className="plan-info-container">
                                <h1 className='card-plan-title'>Pro</h1>
                                <p className='card-plan-description'>Includes basic usage of our platform. 
                                    Recommended for new and aspiring photographers.
                                </p>
                            </div>
                            <div className="card-price-container">
                                <p className='card-plan-price'>{isChecked ? '$390.00' : '39.00'}</p>
                                <p className='card-bill-cycle'>per month</p>
                            </div>
                           
                            
                        </div>
                        <button className='card-button'>PICK PLAN</button>
                    </div>
                    <div className="price-card-container">
                        <div className="card-text-container">
                            <div className="plan-info-container">
                                <h1 className='card-plan-title'>Business</h1>
                                <p className='card-plan-description'>Includes basic usage of our platform. 
                                    Recommended for new and aspiring photographers.
                                </p>
                            </div>
                            <div className="card-price-container">
                                <p className='card-plan-price'>{isChecked ? '$990.00' : '$99.00'}</p>
                                <p className='card-bill-cycle'>per month</p>
                            </div>
                        </div>
                        <button className='card-button'>PICK PLAN</button>
                    </div>
                </div>
                <h1 className='table-heading'>Compare</h1>
                <div className="table-container">
                    
                    <img className='table' 
                    src={imgSrc}
                    alt='table' />
                </div>
            </main>
        </>
    )
}