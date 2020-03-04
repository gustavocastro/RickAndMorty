import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import CharactersList from './components/CharactersList/CharactersList';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/characters" component={CharactersList} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
