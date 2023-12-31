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
import AccordionMenu from './accordion/AccordionMenu.jsx'
import AccordionMenu2 from './accordion/AccordionMenu2.jsx'
import AccordionMenu3 from './accordion/AccordionMenu3.jsx';
import AccordionMenu4 from './accordion/AccordionMenu4.jsx';
import AccordionMenu5 from './accordion/AccordionMenu5.jsx';
import ChartComponent from './charts/LineChart.js';
import Chart from './charts/Chart.js'

function App() {
  return (
    <div className="App">
      <div className='left-panel'>
        <div className='logo'>
          <center>
          <input type="image" id="myimage" alt='Logo' src={logo} className='logo-img'></input>
          </center>
        </div >
        <div>
        <h6>&nbsp;&nbsp;&nbsp;&nbsp;MAIN</h6>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='' >Dashboard</a></h4>
        <h6>&nbsp;&nbsp;&nbsp;&nbsp;COMPONENTS</h6>
        <AccordionMenu />
        </div>
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
                  <p className='info'>Total Sales</p>
                  <p className='info'>3,257</p>
                  <p className='info'>76% Growth This Month</p>
                </div>
                <div className='r-side'><center>
                <ChartComponent/>
                  </center>
                </div>
              </div>
              <div className='total-popup-2'>
                <div className='l-side'>
                  <p className='info'>Total Stats</p>
                  <p className='info'>1,678</p>
                  <p className='info'>15% Loss This Month</p>
                </div>
                <div className='r-side'><center>
                <ChartComponent/></center>
                </div>
              </div>
              <div className='total-popup-3'>
                <div className='l-side'>
                  <p className='info'>Total Income</p>
                  <p className='info'>$2,590</p>
                  <p className='info'>62% From Last Month</p>
                </div>
                <div className='r-side'><center>
                <ChartComponent/></center>
                </div>
                </div>
                <div className='total-popup-4'>
                <div className='l-side'>
                  <p className='info'>Total Tax</p>
                  <p className='info'>$1,954</p>
                  <p className='info'>53% From Last Month</p>
                </div>
                <div className='r-side'><center>
                <ChartComponent/></center>
                </div>
                </div>
            </div>
            <div className='activity'>
              <div className='chart-side'>  
                <Chart/>
              </div>
              <div className='activity-side'>
                <div className='up'>
                  <h5 className='recentheader'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RECENT ACTIVITY</h5>
                  <button className='buttonAll'>View All</button>
                </div>
                <div className='down'>
                  <div className='OnetoSix'>
                  <div className='Circle1'>1</div>
                  <div className='Circle2'>2</div>
                  <div className='Circle3'>3</div>
                  <div className='Circle4'>4</div>
                  <div className='Circle5'>5</div>
                  <div className='Circle6'>6</div>
                  </div>
                  <div className='Activity6'>
                    <p><h5>New Products,<span className='span1'>52% New products.</span><br/> More than 200 new products are added</h5></p>
                    <p><h5>New Sale,<span className='span2'>76% Profit earned.</span> <br/> $2,546 income earned in today sale</h5></p>
                    <p><h5>New Customers,<span className='span3'>24% New customers</span> <br/>1.3k new customers reached us this year</h5></p>
                    <p><h5>New Reviews,<span className='span4'>96% Positive reviews.</span> <br/>There are 500 plus new reviews</h5></p>
                    <p><h5>New Visits; today, <span className='span5'>33% target achieved.</span> <br/>daily 20 plus new customers visits us</h5></p>
                    <p><h5>New Consistency,<span className='span6'>90% growth.</span> <br/>More than 5 Sales happening every week</h5></p>
                  </div>
                  <div className='time'>

                  </div>
                </div>
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
