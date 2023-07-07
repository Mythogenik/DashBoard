import './App.css';
import searchLogo from './images/search.png';
import logo from './images/logo.png'
import moon from './images/moon.jpg'
import fulscreen from './images/fullscreen.png'
import flag from './images/flag.png'
import letter from './images/letter.webp'
import bell from './images/bell.jpg'
import pic from './images/picture.jpg'
import settings from './images/settings.jpg'
import graph1 from './images/graph1.png'
import graph2 from './images/graph2.jpg'
import graph3 from './images/graph3.png'
import graph4 from './images/graph4.png'
import AccordionMenu from './accordion/AccordionMenu.jsx'
import AccordionMenu2 from './accordion/AccordionMenu2.jsx'
import AccordionMenu3 from './accordion/AccordionMenu3.jsx';
import AccordionMenu4 from './accordion/AccordionMenu4.jsx';
import AccordionMenu5 from './accordion/AccordionMenu5.jsx';



function App() {
  return (
    <div className="App">
      <div className='left-panel'>
        <div className='logo'>
          <center>
          <input type="image" id="myimage" alt='Logo' src={logo} className='logo-img'></input>
          </center>
        </div >
        <h6>&nbsp;&nbsp;&nbsp;&nbsp;MAIN</h6>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='' >Dashboard</a></h4>
        <h6>&nbsp;&nbsp;&nbsp;&nbsp;COMPONENTS</h6>
          <AccordionMenu />
        <h6>&nbsp;&nbsp;&nbsp;&nbsp;ICONS</h6>
        <AccordionMenu2 />
        <h6>&nbsp;&nbsp;&nbsp;&nbsp;MAP</h6>
        <AccordionMenu3 />
        <h6>&nbsp;&nbsp;&nbsp;&nbsp;CUSTOM & SUB MENUS</h6>
        <AccordionMenu4 />
        <h6>&nbsp;&nbsp;&nbsp;&nbsp;PAGES & ERROR PAGES</h6>
        <AccordionMenu5 />

      </div>
      <div className='right-panel'> 
        <div className='toolbar'>
          <div className='nothing'>
            <a class="open-toggle" href="/azea-ts/preview/dashboard">
              <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-align-left header-icon" 
              width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
            </a>
          </div>
          <div className='topnav'>
            <input type='image' alt='Search' src={searchLogo} className='input-search'></input>
            <input type='text' placeholder='Search for results...' className='input-bar'></input> 
          </div>
          <div className='moon'>
            <center>
            <input type='image' alt='dark mode' src={moon} className='moon-img'></input>
            </center>
          </div>
          <div className='fullscreen'>
            <center>
            <input type='image' alt='fullscreen' src={fulscreen} className='fullscreen-img'></input>
            </center>
          </div>
          <div className='language'>
            <center>
              <p className='america'><input type='image' alt='flag' src={flag} className='flag-img'></input>&nbsp;&nbsp;English
              </p>
            </center>
          </div>
          <div className='letter'>
            <center>
            <input type='image' alt='messages' src={letter} className='letter-img'></input>
            </center>
          </div>
          <div className='bell'> <center>
            <input type='image' alt='notifications' src={bell} className='bell-img'>
            </input></center>
          </div>
          <div className='profile'><center>
            <input type='image' alt='Profile picture' src={pic} className='profile-img'></input>
          </center>
          </div>
          <div className='settings'>
          <input type='image' alt='Profile picture' src={settings} className='settings-img'></input>
          </div>
        </div>
        <div className='dashboard'>
            <div className='dashboard-title'>
              <div className='title'><h3>Dashboard</h3>
              </div>
              <div className='dash-buttons'>
              <button className='button1'>Import</button> &nbsp;
              <button className='button2'>Search By Date▾</button>
              </div>
            </div>
            <div className='total'>
              <div className='total-popup-1'>
                <div className='l-side'>
                  <p className='info'>&nbsp;Total Sales</p>
                  <p className='info'>&nbsp;3,257</p>
                  <p className='info'>&nbsp;76% Growth This  &nbsp; &nbsp;Month</p>
                </div>
                <div className='r-side'><center>
                  <img src={graph1} alt='Graph' className='graph-1'></img>
                  </center>
                </div>
              </div>
              <div className='total-popup-2'>
                <div className='l-side'>
                  <p className='info'>&nbsp;Total Stats</p>
                  <p className='info'>&nbsp;1,678</p>
                  <p className='info'>&nbsp;15% Loss This &nbsp; &nbsp; Month</p>
                </div>
                <div className='r-side'><center>
                <img src={graph4} alt='Graph' className='graph-2'></img></center>
                </div>
              </div>
              <div className='total-popup-3'>
                <div className='l-side'>
                  <p className='info'>&nbsp;Total Income</p>
                  <p className='info'>&nbsp;$2,590</p>
                  <p className='info'> &nbsp;62% From Last  &nbsp; &nbsp;Month</p>
                </div>
                <div className='r-side'><center>
                  <img src={graph3} alt='Graph' className='graph-3'></img></center>
                </div>
                </div>
                <div className='total-popup-4'>
                <div className='l-side'>
                  <p className='info'>&nbsp;Total Tax</p>
                  <p className='info'>&nbsp;$1,954</p>
                  <p className='info'>&nbsp;53% From Last  &nbsp; &nbsp; &nbsp; &nbsp;Month</p>
                </div>
                <div className='r-side'><center>
                  <img src={graph2} alt='Graph' className='graph-4'></img></center>
                </div>
                </div>
            </div>
            <div className='activity'>
              <div>  

              </div>
              <div>

              </div>
            </div>
            <div className='products'>

            </div>
            <div className='summary'>

            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
