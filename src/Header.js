import React from 'react'

const Header = () => {
    return (
        <>
         <header>
             <section className="container main-hero-container">
                 <div className="row">
                     <div className="col-12 col-lg-6 header-left-side d-flex flex-column justify-content-center align-items-start">
                         <h1 className="display-2">Online Payment Made  <br/> For You.</h1>
                         <p className="main-hero-pera">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                            quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                            officiis tempora recusandae voluptate quam, nisi odio officiis
                            tempora recusandae</p>
                            <h3>Get Early Access For you</h3>
                            <div className="input-group mt-3">
                                <input type="text" className="rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text" placeholder="Enter Your Email"></input>
                                <div className="input-group-button">Get it now</div>
                            </div>
                     </div>
                     <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-img">
                         <img src="./img/hero1.jpg"alt="images" className="img-fluid"></img>
                         <img src="./img/hero4.jpg"alt="images" className="img-fluid hero-img-2"></img>
                     </div>
                 </div>
             </section>
             </header>  
        </>
    )
}

export default Header
