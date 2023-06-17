import Nav from './Navbar';
import { useState } from 'react';

export const Hero = ({mission, tagline, footerT, action}) => {
    

    return (
        <div className="hero-container relative">
            <div className="overlay">
             <Nav color="tarnsparent" />
            <div className="content-center">
                <h1 className="title-heading text-center">Mission:</h1>
                <h1 className="title-heading text-center">{mission}</h1>
                <h3 className="title-tagline text-center">{tagline}</h3>
            </div>
            <div className="content-footer flex justify-around w-full items-center">
                <p className="footer-title">{footerT}</p>
                
                <div className="hero-action-buttons flex">
                    <a href="#donate" className="focus:outline-none text-white focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 hero-donate "><span className="fa-solid fa-heart"></span>  &nbsp;{action}</a>
                </div>
            </div>
            </div>
        </div>
    ) 
}

export const HungerSection = () => {

    return (
        <div className="section-container flex justify-between items-center">
            <div className="section-info">
                <h1 className="section-heading">Help feed poor children</h1>
                <h3 className="section-subheading">Provide them with regular nutrition</h3>
                <div className="container-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita iste, incidunt libero ipsum facere, consequatur, soluta quia id ex odit rerum similique temporibus? Dolorem dolores veritatis quas id, quis eaque ex debitis. Architecto eveniet veritatis quos debitis laudantium cum totam quaerat asperiores maiores sed? Dolorum omnis consequuntur labore at. Libero repellat quibusdam consequuntur voluptatum ut ducimus minima, laboriosam similique sapiente blanditiis eligendi fugit alias necessitatibus cum adipisci voluptates neque eius! Reiciendis, ex eius cupiditate, et molestias laboriosam nesciunt facilis consequatur laborum ratione voluptas hic, velit reprehenderit eos modi fugit iure corrupti aperiam alias sed impedit deleniti libero quo. Eligendi, iure.</div>
            </div>
            <div className="section-img">
                <img src="/hungry_child.png" alt="hungry_child.png" />
            </div>
        </div>
    )
} 

export const HungerSection2 = () => {
    return (
        <div className="section-2">
            <div className="section-container flex justify-between items-center pt-4">
            <div className="section-img section-2-img">
                <img src="/hunger-2.png" alt="hunger-2.png" className="s-img"  />
            </div>
            <div className="section-info">
                <h1 className="section-heading">Help feed poor children</h1>
                <h3 className="section-subheading">Provide them with regular nutrition</h3>
                <div className="container-info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, corporis. Enim blanditiis porro mollitia aliquid facilis natus hic dolorum sapiente, vero odio dolor consectetur similique in. Error veniam quod itaque quo rem, explicabo odit esse earum velit molestiae hic quam, optio, inventore eaque eius voluptatem. Fugiat, reprehenderit? Eos, quos voluptatem?</p>
                    <div className="icon-bar flex m-2">
                        <div className="section-icon">
                            <span className="fa-solid fa-bowl-food"></span>
                        </div>
                        <div className="section-info">
                            <h3 className="bar-heading">Save a child from malnutrition</h3>
                            <h4 className="bar-text">Ensure healthy growth for all children</h4>
                        </div>
                    </div>
                    <div className="icon-bar flex">
                        <div className="section-icon">
                            <span className="fa-solid fa-disease"></span>
                        </div>
                        <div className="section-info">
                            <h3 className="bar-heading">Save a child from malnutrition</h3>
                            <h4 className="bar-text">Ensure healthy growth for all children</h4>
                        </div>
                    </div>
                    <div className="icon-bar flex">
                        <div className="section-icon">
                            <span className="fa-solid fa-people-group"></span>
                        </div>
                        <div className="section-info">
                            <h3 className="bar-heading">Help eradicate hunger</h3>
                            <h4 className="bar-text">Well nourished children is a move towards a hunger-free future</h4>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

 export const  SupportedNgoBanner = () => {

    return (
        <div className="section-2">
        <div className="section-container flex justify-between items-center">
            <div className="section-info assured">
                <div className="flex justify-center items-center">
                    <h1><span className="fa-solid fa-shield"></span>  Norton</h1>
                    <h1 style={{color: 'black'}}>  Assured</h1>
                </div>
                <p className="section-subtitle text-center">Our promise that your giving is doing what it</p>
                <p className='section-subtitle text-center'>supposed to-changing lives.</p>
            </div>
            <div className="NGOs section-img">
                <h1 className="ngo-heading mx-auto text-center">Our Supported NGO</h1>
                <div className="ngo-icons flex justify-center items-center mx-auto">
                    <img src="/ngo1.png" alt="ngo" className="ngo-icon" />
                    <img src="/ngo2.png" alt="ngo" className="ngo-icon" />
                    <img src="/ngo3.png" alt="ngo" className="ngo-icon" />
                </div>
            </div>
        </div>
        </div>
    )
}

export const ShareBanner = () => {

    return (
        <div className="section-2" style={{background: '#f5f5f5'}}>
        <div className="section-container flex justify-between items-center">
            <div className="section-img mx-auto">
                <img src="/share-illustartion.png" alt="share-illustartion.png" />
            </div>
            <div className="section-info assured text-center mx-auto">
                <h3 className="section-share-h">Share this mission with your network</h3>
                <p className="share-text">Every share will be a step towards helping a life in need. By reaching out to</p>
                <p className="share-text">your family and friends you can make a larger impact.</p>
                <div className="share-btns flex mx-auto justify-center items-center m-2 share-text">
                    <button className="focus:outline-none text-white focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 share-fb share-btn" style={{fontSize: '1.2rem', fontWeight: '500'}}><i className="fa-brands fa-facebook"></i> &nbsp;&nbsp;Share on Facebook</button>
                    <button className="focus:outline-none text-white focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 share-wa share-btn" style={{fontSize: '1.2rem', fontWeight: '500'}}><i className="fa-brands fa-whatsapp"></i> &nbsp;&nbsp;Share on Whatsapp</button>
                </div>

            </div>
        </div>
        </div>
    )
}

export const DonateComponent = ({action}) => {

    const [toggleMode, setToogglMode] = useState(true);
    const [oneTAmmount, setOneTAmmount] = useState(500);
    const [children, setChildren] = useState(1)

    const handleInput = (e) => {
        setOneTAmmount(prev => e.target.value);
        console.log(oneTAmmount);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="section-container flex justify-between items-center" id="donate">
            <div className="section-img">
                <img src="/Child-Hunger-cover-transformed.jpeg" alt="/Child-Hunger-cover-transformed.jpeg" />
            </div>
            <div className="section-info">
                <h1 className="donate-heading text-center" style={{fontSize: '2rem'}}>Empathy in Action: Join the Movement, Donate Today!</h1>
                <div className="flex justify-center items-center text-xl d-btn-container"><button className={`one-time d-btns ${!toggleMode ? 'btn-active': ''}`} onClick={() => setToogglMode(prev => false)}>One Time</button><button className={`monthly d-btns ${toggleMode ? 'btn-active': ''}`} onClick={() => setToogglMode(prev => true)}>Monthly</button></div>
                { toggleMode &&
                <div>
                    <form method="post" className="mission-donation flex flex-col justify-center mx-auto" onSubmit={handleSubmit}>
                    <div className="footer-action flex justify-center items-center monthly-ammount">
                    <button className="fa-solid fa-minus" onClick={() => setChildren((prev) => {return prev !== 1 ? prev - 1 : prev})}></button>
                    <div className="children-helping">{children} Children</div>
                    <button className="fa-solid fa-plus" onClick={() => setChildren(children + 1)}></button>
                </div>
                <p className="donation-ammount text-center">{children * 1000} per month</p>
                    <button type="submit" className="focus:outline-none text-white focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 " style={{backgroundColor: "#c2410c"}}><span className="fa-solid fa-heart"></span>  &nbsp;{action}</button>
                    <p className="share-text text-center">Thanks, for your helping hand INR {children * 1000}</p>
                    <p className="share-text text-center">{children * 1000} will be deducted from your account, cancel anytime</p>
                    </form>
                </div>
                }
                { !toggleMode &&
                <div>
                    <form method="post" className="mission-donation flex flex-col justify-center mx-auto" onSubmit={handleSubmit}>
                    <input type="number" min="500" required value={oneTAmmount} onChange={handleInput} name="OneTAmmount" className="rounded-lg"/>
                    <button type="submit" className="focus:outline-none text-white focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 " style={{backgroundColor: "#c2410c"}}><span className="fa-solid fa-heart"></span>  &nbsp;{action}</button>
                    <p className="share-text text-center">Thanks, for your helping hand INR {oneTAmmount}</p>
                    </form>
                </div>
                }
            </div>
        </div>
    )
}

