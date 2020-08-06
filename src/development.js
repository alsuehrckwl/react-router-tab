import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const _ROUTES = [
  {path: '/home', title: '홈', component: 'Home'},
  {path: '/route1', title: '라우트1', component: 'Route1'},
  {path: '/route2', title: '라우트2', component: 'Route2'},
  {path: '/route3', title: '라우트3', component: 'Route3'},
  {path: '/route4', title: '라우트4', component: 'Route4'},
  {path: '/route5', title: '라우트5', component: 'Route5'},
  {path: '/route6', title: '라우트6', component: 'Route6'},
  {path: '/route7', title: '라우트7', component: 'Route7'},
  {path: '/route8', title: '라우트8', component: 'Route8'},
  {path: '/route9', title: '라우트9', component: 'Route9'},
  {path: '/route10', title: '라우트10', component: 'Route10'},
];

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>hello world</h1>
        <div>
          <Tabs routes={_ROUTES} />
        </div>
        <section>
          <Switch>
            <Route path="/home" component={Home} />
            {new Array(10).fill(0).map((item, idx) => {
              return (
                <Route
                  path={`/route${idx + 1}`}
                  render={() => <h1>{`route page ${idx + 1}`}</h1>}
                />
              );
            })}
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
};

const Home = () => {
  return <h1>home</h1>;
};

ReactDOM.render(<Root />, document.getElementById('app'));
