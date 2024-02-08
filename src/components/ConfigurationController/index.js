import {Component} from 'react'
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => {
  const sfkvnsf = 'fvs'

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {
          onToggleShowContent,
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowLeftNavbar,
          onToggleShowRightNavbar,
        } = value

        const onToggleContent = e => {
          onToggleShowContent(e.target.checked)
        }
        const onToggleLeftNavbar = e => {
          onToggleShowLeftNavbar(e.target.checked)
        }

        const onToggleRightNavbar = e => {
          onToggleShowRightNavbar(e.target.checked)
        }
        console.log(showContent)

        return (
          <div className="main_nav">
            <div className="Navbar">
              <h1> Layout</h1>
              <div>
                <input
                  type="checkBox"
                  checked={showContent}
                  id="Content"
                  onChange={onToggleContent}
                />
                <label htmlFor="Content">Content</label>
              </div>
              <div>
                <input
                  type="checkBox"
                  id="leftNav"
                  checked={showLeftNavbar}
                  onChange={onToggleLeftNavbar}
                />
                <label htmlFor="leftNav">Left Navbar</label>
              </div>
              <div>
                <input
                  type="checkBox"
                  id="rightNavbar"
                  checked={showRightNavbar}
                  onChange={onToggleRightNavbar}
                />
                <label htmlFor="rightNavbar">Right Navbar</label>
              </div>
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default ConfigurationController
