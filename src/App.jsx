import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { Home } from './pages/Home'
import { About } from './pages/About';

import { AppFooter } from './cmps/AppFooter'
import { AppHeader } from './cmps/AppHeader'

import { EmailIndex } from './pages/EmailIndex';

import { AboutTeam } from './cmps/AboutTeam';
import { AboutVision } from './cmps/AboutVision';

import { EmailFolderList } from './cmps/EmailFolderList';
import { EmailList } from './cmps/EmailList';


export function App() {

    return (
        <form>

            <section className="grid-container">
                <header className="mailBox-upper-header">
                    <AppHeader />

                    {/*   <input class="nosubmit" type="search" placeholder="Search..."> </input> */}

                </header>

                <header className="mailBox-buttons-header">
                    <div>
                    
                    </div>
                </header>

                <aside className="mailBox-menu-header ">
                    <p>
                        <button className="compose-btn" /* onClick="" */>Compose</button>
                    </p>
                </aside>


                <aside className="mailBox-side-menu">
                    <EmailFolderList />
                    {/* <p> Inbox</p>
                    
                    <p > Starred </p>
                    <p> Sent</p>
                    <p> Draft</p>
                    <p> Trash</p>
                    <p> Categories</p> */}

<h1> </h1>
   
                </aside>

                <div className="mailBox-main-list">
                   {/*  <p>main list</p> */}
                   
 

                </div>

                <div className="mailBox-right">
                    <p>right</p>
                </div>

                <footer className="mailBox-footer">

                    <AppFooter />

                </footer>

            </section>

        </form>

        /*  <Router>
             <section className=''> 
                 <AppHeader />
                 <main className='app-main'>vvv
                     <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/about" element={<About />}>
                             <Route path='/about/team' element={<AboutTeam />} />
                             <Route path='/about/vision' element={<AboutVision />} />
                         </Route>
                         <Route path="/robot" element={<RobotIndex />} />
                         <Route path="/robot/:robotId" element={<RobotDetails />} />
                     </Routes>
                     mmm
                 </main>
                 <aside className='app-sidebar dark'>
                    <h1>jjjjj</h1> 
                 </aside>
                 <AppFooter />
                
             </section>
         </Router> */


    )
}
