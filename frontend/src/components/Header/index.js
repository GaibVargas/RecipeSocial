import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FaHome, FaBook } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";

import { Container } from './styles';

export default function Header() {
  const [user_id, setUser_id] = useState('');

  useEffect(() => {
    setUser_id(localStorage.getItem('user_id'));
  }, []);

  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <Container>
      <header>
        <div className="top">
          <Link to="/home">
            <FaHome size={30}/>
          </Link>
          <Link to={`/profile/${user_id}`}>
            <FaBook size={30}/>
          </Link>
          <Link to="/new">
            <GoPencil size={30}/>
          </Link>
        </div>
        
        <div className="bottom">
          <button onClick={handleLogout}>
            <FiLogOut size={30}/>
          </button>
        </div>
      </header>
    </Container>
  );
}
