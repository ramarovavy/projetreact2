import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
<div className='sidebar'>
 <div className='id'>
    <div className='idContent'>
            <img src='./media/billGates.jpg' alt='Profil-pic'/>
            <h3> Jean Scratch</h3>
        </div>
    </div>
    <div className='navigation'>
<ul>
 <li>
  <NavLink exact to="/" activeClassName="navActive">
   <i className='fas fa-home'>
     <span>Accueil</span>
     </i>
    </NavLink>
    </li>
    <li>
  <NavLink exact to="/competence" activeClassName="navActive">
   <i className='fas fa-mountain'>
     <span>Compétences</span>
     </i>
    </NavLink>
    </li>
    <li>
  <NavLink exact to="/portfolio" activeClassName="navActive">
   <i className='fas fa-images'>
     <span>PortFolio</span>
     </i>
    </NavLink>
    </li>
    <li>
  <NavLink exact to="/contact" activeClassName="navActive">
   <i className='fas fa-address-book'>
     <span>Contact</span>
     </i>
    </NavLink>
    </li>
   </ul>
 </div>
 <div className='socialNetwork'>
    <ul>
        <li>
            <a href='https://www.google.com' target="_blank" rel='noopener noreferrer'> <i className='fab fa-linkedin'></i></a>
        </li>
        <li>
            <a href='https://www.google.com' target="_blank" rel='noopener noreferrer'> <i className='fab fa-github'></i></a>
        </li>
        <li>
            <a href='https://www.google.com' target="_blank" rel='noopener noreferrer'> <i className='fab fa-twitter'></i></a>
        </li>
        <li>
            <a href='https://www.google.com' target="_blank" rel='noopener noreferrer'> <i className='fab fa-codepen'></i></a>
        </li>
    </ul>
<div className='signature'>
<p>fromScratch -2022</p>
</div>
 </div>
</div>
    );
};

export default Navigation;
