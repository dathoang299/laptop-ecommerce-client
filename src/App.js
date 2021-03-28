import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import capitalize from 'lodash/capitalize';

import { axiosInstance } from './axios';
import TopHeader from './components/TopHeader/TopHeader';
import RouterConfig from './navigation/RouterConfig';
import './App.css';

function App() {
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryMenu = useCallback(async () => {
    const response = await axiosInstance.get('/category');
    const categoryList = response.data;
    setCategoryList(categoryList.map((category) => ({
      text: capitalize(category.name),
      url: `/${category.name}`,
      onClick: () => { },
    })));
  }, []);

  useEffect(() => {
    getCategoryMenu();
  }, [getCategoryMenu]);

  return (
    <Router>
      <Switch>
        {RouterConfig.map((route, i) => (
          <>
            {
              (route.path !== '/login') &&
              <TopHeader categoryMenu={categoryList} />
            }
            <Route
              key={i}
              exact={route.exact}
              path={route.path}
              render={(props) => {
                window.scrollTo(0, 0);
                return (
                  <route.component
                    {...props}
                    pageTitle={route.pageTitle}
                  />
                );
              }}
            />
          </>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
