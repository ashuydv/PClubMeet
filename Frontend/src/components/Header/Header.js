import React from 'react';
import Clock from 'react-live-clock';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import { IoMdPerson } from 'react-icons/io';
import Logo from '../assets/images/Logo.png';
import {auth} from '../../firebase/firebase.utils';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import firebase from 'firebase';
import { withRouter } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const Header = ({currentUser}) => {
    var photoURL;
    var user = firebase.auth().currentUser;
    if(user!=null)
    photoURL=user.photoURL;
    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  

    const history = useHistory() ;
     function handleLogout () {
     firebase.auth().signOut();
       history.push("/")
       };
    return (
        <div>
            <section className='main'>
                <div className="header">
                    <div className="time">
                        <Clock format={'hh:mm A'} ticking={true} className='clock' />
                        <p>{weeks[d.getDay()]}, {months[d.getMonth()]} {d.getDate()}, {d.getFullYear()}</p>
                    </div>
                    <div className="logos">
               
                        <img src={Logo} alt="" className='logo' />
                        <div className="line"></div>
                        <h1>Meetings</h1>
                    </div>
           
                    <IconButton className='button'>
                        <IoMdPerson className='icons' />
                    </IconButton>
                    <img src={photoURL}className="rounded-circle float-right mt-3 mr-3"height="50"></img>
                    {
                       currentUser ? (<div className='' onClick={handleLogout}>Sign out</div>) : (<BrowserRouter><Link className='' to='/signin'>Sign in</Link></BrowserRouter>)
                    } 
                </div>
            </section>
        </div>
    );
}

export default Header;
