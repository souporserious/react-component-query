import React, { Component, PropTypes, Children } from 'react'
import ReactDOM from 'react-dom'
import GitHubButton from 'react-github-button'
import { matchedProps, withComponentQueries } from '../src/react-component-query'
import Slider from './Slider'

import 'react-github-button/assets/style.css'
import './main.scss'

class App extends Component {
  render() {
    return (
      <div>
        <div className="d-f ai-c">
          <h1 className="mr-05">React Component Query</h1>
          <GitHubButton
            type="stargazers"
            size="large"
            namespace="souporserious"
            repo="react-component-query"
          />
        </div>
        <h2>Resize browser to see <em>viewsToShow</em> change</h2>
        <Slider/>
        <div
          style={{
            maxWidth: 600,
            padding: 20,
            background: '#efefef'
          }}
        >
          <h2>Same component and same queries as above</h2>
          <Slider/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
