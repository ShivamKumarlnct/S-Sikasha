import React, { useState } from 'react';
import './navbar.css'; 
import { BiLogoMediumOld } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FiAlignJustify } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [password, setPassword] = useState('');  
  const [showPasswordModal, setShowPasswordModal] = useState(false); 
  const [protectedRoute, setProtectedRoute] = useState(null); 
  const navigate = useNavigate(); 

  const correctPassword = "12345";  

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleProtectedLinkClick = (route) => {
    setProtectedRoute(route);
    setShowPasswordModal(true);  
  };

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setShowPasswordModal(false);  
      setPassword('');  
      toggleNavbar();  
      navigate(protectedRoute);  
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <BiLogoMediumOld className='icons' />
        <span><strong>S-SIKASHA</strong></span>
      </div>
      <div className={showNavbar ? 'menu showNavbar' : 'menu'}>
        <ul>
          <li className='navlist'>
            <Link to="/" onClick={toggleNavbar}>Home</Link>
          </li>
          <li className='navlist'>
            <Link to="/about" onClick={toggleNavbar}>About</Link>
          </li>
          <li className='navlist' onClick={() => handleProtectedLinkClick('/test')}>
            <span>Test-Series</span>
          </li>
          <li className='navlist' onClick={() => handleProtectedLinkClick('/video')}>
            <span>Video</span>
          </li>
          {/* <li className='navlist'>
            <Link to="https://razorpay.me/@shivamkumar2807" onClick={toggleNavbar}>Payment</Link>
          </li> */}
          <li className='navlist'>
            <Link to="https://sikasha-interview.base44.app" onClick={toggleNavbar}> Interview Practice</Link>
          </li>
           <li className='navlist'>
            <Link to="https://sikasha.base44.app" onClick={toggleNavbar}> Communication Practice</Link>
          </li>
          
        </ul>
        <AiFillCloseCircle className='icon closeIcon' onClick={toggleNavbar} />
      </div>
      <button className='sign-btn'><Link to="/sign">Sign-up</Link></button>
      <FiAlignJustify className='icon menuIcon' onClick={toggleNavbar} />

      {showPasswordModal && (
        <div className='password-modal'>
          <h3>Password is in the about</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password is in the about"
          />
          <div className="modal-buttons">
            <button onClick={handlePasswordSubmit}>Submit</button>
            <button className="cancel-btn" onClick={() => setShowPasswordModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
