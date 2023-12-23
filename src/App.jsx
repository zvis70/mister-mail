import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { Home } from './pages/Home'
import { About } from './pages/About';
import { AboutTeam } from './cmps/AboutTeam';
import { AboutVision } from './cmps/AboutVision';

import { AppFooter } from './cmps/AppFooter'
import { AppHeader } from './cmps/AppHeader'

import { EmailIndex } from './pages/EmailIndex';
import { EmailFolderList } from './cmps/EmailFolderList';
import { WelcomeHeader } from './cmps/WelcomeHeader';
import { EmailDetails } from './pages/EmailDetails';
import { MailBox } from './pages/MailBox';
// import { EmailList } from './cmps/EmailList';


export function App() {
    return (
       
<Router>
<section className=''> 
    
    <main className='app-main'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
                <Route path='/about/team' element={<AboutTeam />} />
                <Route path='/about/vision' element={<AboutVision />} />
            </Route>
            <Route path="/mailbox" element={<MailBox />} />
            
        </Routes>
        mmm
    </main>
    <aside className='app-sidebar dark'>
       <h1>jjjjj</h1> 
    </aside>
    <AppFooter />
   
</section>
</Router> 



    )
}








// <Router>
// <section className=''> 
//     <AppHeader />
//     <main className='app-main'>vvv
//         <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />}>
//                 <Route path='/about/team' element={<AboutTeam />} />
//                 <Route path='/about/vision' element={<AboutVision />} />
//             </Route>
//             <Route path="/mailbox" element={<EmailIndex />} />
            
//         </Routes>
//         mmm
//     </main>
//     <aside className='app-sidebar dark'>
//        <h1>jjjjj</h1> 
//     </aside>
//     <AppFooter />
   
// </section>
// </Router> 