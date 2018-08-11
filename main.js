import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './src/pages/home'
import Article from './src/pages/article'
import './src/style/global.scss'

ReactDOM.render((
  <BrowserRouter>
    <div className='hunter-wrapper'>
      <Route exact path='/' component={Home} />
      <Route path='/article' component={Article} />
    </div>
  </BrowserRouter>
), document.getElementById('app'))
