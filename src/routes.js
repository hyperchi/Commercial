import React from 'react'
import { IndexRoute, Route, Link, IndexRedirect, Redirect } from 'react-router'
import Content from './components/Content'
import Detail from './components/Detail'
/* containers */
import AppContainer from './App'
// import Packages from './containers/Packages'
// import Pkg from './containers/Pkg'


    // <IndexRedirect to='/packages/react' />
    // <Route path='/packages/:keyword' component={Packages} />
    // <Route path='/pkg/:name' component={Pkg} />
const routes = (
  <Route path='/' component={AppContainer}>
    <IndexRoute component={Content}/>
    <Route path='/detail/:index' component={Detail} />
  </Route>
)

export default routes
