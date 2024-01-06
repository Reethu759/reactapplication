import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='main'>Epic Games: An American video game and software developer and publisher based in Cary, North Carolina.</h1>
        <img src="/pics1.png" alt="Epic Games Logo" />
        <p className='main-para'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator-made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
        <button className='btn-main'>Visit Website</button>
        <div className="image-container">
          <div className="image-with-text">
            <img src="/pic2.png" alt="Image 1" />
            <p className='para-container'>Explore large, destructible environments where no two games are ever the same.</p>
          </div>
          <div className="image-with-text">
            <img src="/pic3.png" alt="Image 2" />
            <p className='para-container'>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
          </div>
          <div className="image-with-text">
            <img src="/pic4.png" alt="Image 3" />
            <p className='para-container'>Discover even more ways to play across thousands of creator-made game genres</p>
          </div>
        </div>
        <h1 className='heading-contribution'>Our Contributions</h1>
        <p className='contribution'>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
        <div className="three-text-container">
          <div>
            <p className='para-main-text'>5M</p>
            <p  className='para-text'>Daily User Engagements</p>
          </div>
          <div>
            <p  className='para-main-text'>$500K</p>
            <p  className='para-text'>Revenue Surge for an Platform</p>
          </div>
          <div>
            <p  className='para-main-text'>10X</p>
            <p  className='para-text'>ROAS on all our marketing campaigns</p>
          </div>
        </div>
        <h2 className='heading2'>Interested in delving deeper into the project?</h2>
        <p className='para2'>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.</p>
        <div className="button-container">
  <button className="black-button">Ring us on Skype</button>
  <button className="normal-button">Contact Us</button>
</div>
<footer className="footer">
          <p> © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
        </footer>
      </header>
    </div>
  );
}

export default App;