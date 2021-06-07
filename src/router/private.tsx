import React, {ComponentClass, ReactElement, ReactNode} from 'react';
import {Route, Redirect} from 'react-router-dom';
// import {LoginCookieKey, LoginCookieValue} from "../data/Login";
// import Cookies from 'js-cookie'


interface PrivateProps {
  component: any, //React.FunctionComponent | React.ComponentClass,
  path: string,
  exact?: boolean,
  strict?: boolean,
  title?: string,
  auth?: boolean,
}

const loginPathName: string = '/gov/login'

const PrivateRoute = ({component, exact = false, auth = true, strict = false, path, title}: PrivateProps) => (
  <Route
    exact={exact}
    strict={strict}
    path={path}
    render={props => {
      if (title) {
        document.title = title
      }
      // 如果不需要登录验证
      // if (!auth) {
        return React.createElement(component, props)
      // }

      // 如果当前已经在登录页
      if (path === loginPathName) {
        return React.createElement(component, props)
      }
      // const state = store.getState()
      // TODO: 登录状态
      const isAuth = true //state.user.isLogin
      // 如果已登录返回相应路由，否则退回到登录路由
      return isAuth ? (
        React.createElement(component, props)
      ) : (
        <Redirect to={{
          pathname: loginPathName,
          state: {
            from: props.location
          }
        }}/>
      )
    }}
  />
);

export default PrivateRoute;