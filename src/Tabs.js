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
  p: 0,
  isMove: false,
  start: 0,
  distance: 0,
  x: 0,
  translate: 0,
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
    const {start, distance, x} = slider;
    console.log('3');
    setSlider({
      ...slider,
      start: getXPosition(e),
      isMove: true,
      // x: getXPosition(e),
    });
  };

  const handleTouchStop = e => {
    const {start, distance, x} = slider;

    console.log('2');
    setSlider({
      ...slider,
      isMove: false,
      // start: getXPosition(e),
      // distance,
      // x: getXPosition(e),
    });
  };

  const handleTouchMove = e => {
    const {isMove, start, distance, translate} = slider;
    console.log('1');

    setSlider({
      p: getXPosition(e),
      isMove,
      start,
      x: getXPosition(e) - start,
      translate: getXPosition(e) - start - translate,
      distance,
    });
  };

  console.log(slider);

  // ['touchstart', 'touchmove', 'touchend', 'touchcancel'];

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
          <Ul style={{transform: `translateX(${slider.translate}px)`}}>
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
