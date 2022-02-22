import React, {useState} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {IconContext} from 'react-icons';
import {AiOutlineHome, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {GiPayMoney, GiReceiveMoney, GiStairsGoal} from 'react-icons/gi';
import {MdOutlineEditNote} from 'react-icons/md';
import {motion} from 'framer-motion';

const Nav = styled.div`
  background-color: black;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SidebarNav = styled(motion.div)`
  background-color: black;
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 70px;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const NavIcon = styled(Link)`
  font-size: 2rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  gap: .5em;
`;

const SidebarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  cursor: pointer;
`;

const variants = {
  open: {opacity: 1, x: 0},
  closed: {opacity: 0, x: '-100%'}
}

const Sidebar: React.FC = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const showSidebar = () => setSidebar(!sidebar);
  console.log(sidebar);

  return (
    <IconContext.Provider value={{color: "#fff"}}>
      <Nav>
        <NavIcon to='#' onClick={showSidebar}>
          {sidebar ? <AiOutlineClose /> : <AiOutlineMenu />}
        </NavIcon>
      </Nav>

        <SidebarNav variants={variants} animate={sidebar ? "open" : "closed"} transition={{type: 'spring', stiffness:150}}>
          <SidebarWrap>
            <NavIcon to='/'>
              <AiOutlineHome />
              <p>Home</p>
            </NavIcon>
          </SidebarWrap>
          <SidebarWrap>
            <NavIcon to='/expenses'>
              <GiPayMoney />
              <p>Expenses</p>
            </NavIcon>
          </SidebarWrap>
          <SidebarWrap>
            <NavIcon to='/expenses'>
              <GiReceiveMoney />
              <p>Income</p>
            </NavIcon>
          </SidebarWrap>
          <SidebarWrap>
            <NavIcon to='/expenses'>
              <MdOutlineEditNote />
              <p>Budget</p>
            </NavIcon>
          </SidebarWrap>
          <SidebarWrap>
            <NavIcon to='/expenses'>
              <GiStairsGoal />
              <p>Goals</p>
            </NavIcon>
          </SidebarWrap>
        </SidebarNav>

    </IconContext.Provider>
  )
}

export default Sidebar