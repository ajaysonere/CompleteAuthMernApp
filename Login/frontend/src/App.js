import {BrowserRouter , Routes , Route} from 'react-router-dom';


// All route of the Project 
import { Username } from './components/Username';
import { PassWord } from './components/Password';
import { Profile } from './components/Profile';
import { Recovery } from './components/Recovery';
import { Reset } from './components/Reset';
import { PageNotFound } from './components/PageNotFound';
import { Signup } from './components/Signup';


export function App(){
    return(
        <BrowserRouter>
           <Routes>
              <Route path='/' element = {<h1>Root Route </h1>}></Route>

              <Route path='/register' element={<h1>register Route </h1>}></Route>
              
              <Route path='/username' element = {<Username />}></Route>

              <Route path='/password' element = {<PassWord/>}></Route>

              <Route path='/signup' element= {<Signup />}></Route>

              <Route path='/profile' element={<Profile/>}></Route>

              <Route path='/recovery' element= {<Recovery />}></Route>

              <Route path='/reset' element={<Reset />}></Route>

              <Route path='*' element={<PageNotFound></PageNotFound>}></Route>

           </Routes>
        </BrowserRouter>
    );
}