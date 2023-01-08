// import icons
import {BsCloudDownload} from 'react-icons/bs'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {MdReviews} from 'react-icons/md'


function TrustPanel() {
  return (
    <div className="trust-panel-container">
        <div className='container'>
            <div className='content'>
                
                <div className='first-panel'>
                    <div className='trust-panel-box'>
                        <BsCloudDownload size={50} color="#ff5400"/>
                        <div className='tunel-panel-desc'>
                            <h2>Super Fast</h2>
                            <p>Instan digital download</p>
                        </div>
                    </div>
                </div>
                
                <div className='second-panel'>
                    <div className='trust-panel-box'>
                        <AiOutlineSafetyCertificate size={50} color="#ff5400"/>
                        <div className='tunel-panel-desc'>
                            <h2>Reliable & safe</h2>
                            <p>over 10,000 games</p>
                        </div>
                    </div>
                </div>
                
                <div className='third-panel'>
                    <div className='trust-panel-box'>
                        <AiOutlineMessage size={50} color="#ff5400"/>
                        <div className='tunel-panel-desc'>
                            <h2>Customer support</h2>
                            <p>Human support 24/7</p>
                        </div>
                    </div>
                </div>
                
                <div className='fourth-panel'>
                    <div className='fourth-panel'>
                        <MdReviews size={50} color="#ff5400"/>
                        <div className='tunel-panel-desc'>
                            <h2>Rating</h2>
                            <p>Rated 4.7 out of 5, based on 539,719 reviews</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default TrustPanel