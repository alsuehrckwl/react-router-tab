import React, {useRef} from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 48px;
`;

const Navigation = styled.div`
  position: relative;
  height: 48px;
  background-color: #dedede;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-width: 1px 0;
  z-index: 20;
`;

const Nav = styled.nav`
  overflow: hidden;
  overflow-x: auto;
  position: relative;
  width: 100%;
  height: 46px;
  transform: translateZ(0);
`;

const Ul = styled.ul`
  display: table;
  width: auto;
  overflow: visible;
  list-style: none;
`;

const Tabs = ({routes}) => {
  const navRef = useRef();

  return (
    <Wrapper>
      <Navigation role="navigation">
        <Nav role="navigation" ref={navRef}>
          <Ul>
            {routes.map(item => (
              <Tab {...item} key={item.path} />
            ))}
          </Ul>
        </Nav>
      </Navigation>
    </Wrapper>
  );
};

export default Tabs;
