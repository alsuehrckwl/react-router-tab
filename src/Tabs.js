import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import useMount from './hooks/useMount';
import {getXPosition} from './utils/eventUtil';

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
  position: relative;
  width: 100%;
  height: 46px;
  transform: translateZ(0);
  user-select: none;
`;

const Ul = styled.ul`
  display: table;
  width: auto;
  overflow: visible;
  list-style: none;
`;

const _initSlider = {
  moving: false,
  start: 0,
  distance: 0,
  x: 0,
};

const Tabs = ({routes}) => {
  const navRef = useRef();
  const [slider, setSlider] = useState(_initSlider);

  useMount(() => {
    // console.log(navRef.current);
  });

  const onWheelNav = e => {
    console.log(e);
  };

  const handleTouchStart = e => {
    setSlider({
      ...slider,
      moving: true,
      // x: getXPosition(e),
    });
  };

  const handleTouchStop = e => {};

  const handleTouchMove = e => {
    const {moving, start, distance, x} = slider;

    setSlider({
      moving,
      start,
      distance,
      x: getXPosition(e),
    });
  };

  console.log(slider);

  return (
    <Wrapper>
      <Navigation role="navigation">
        <Nav
          role="navigation"
          ref={navRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchStop}
          onTouchMove={handleTouchMove}
        >
          <Ul style={{transform: `translateX(${slider.x}px)`}}>
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
