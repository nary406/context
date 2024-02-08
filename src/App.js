import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext'
import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
    onToggleShowContent: () => {},
    onToggleShowLeftNavbar: () => {},
    onToggleShowRightNavbar: () => {},
  }

  onToggleShowContent = value => {
    this.setState({showContent: value})
  }

  onToggleShowLeftNavbar = value2 => {
    this.setState({showLeftNavbar: value2})
  }

  onToggleShowRightNavbar = value3 => {
    this.setState({showRightNavbar: value3})
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <div>
        <ConfigurationContext.Provider
          value={{
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent: this.onToggleShowContent,
            onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
            onToggleShowRightNavbar: this.onToggleShowRightNavbar,
          }}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </div>
    )
  }
}

export default App
