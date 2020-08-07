import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Li = styled.li`
  position: relative;
  display: table-cell;
`;

const TabLink = styled(Link)`
  display: block;
  position: relative;
  padding: 0 6px;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -1px;
  text-align: center;
  white-space: nowrap;
`;

const Span = styled.span`
  display: block;
`;

const Tab = item => {
  // console.log(item);
  const {path, title, component} = item;

  return (
    <Li>
      <TabLink to={path}>
        <Span>{title}</Span>
      </TabLink>
    </Li>
  );
};

export default Tab;
