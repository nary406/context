import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const jsfn = 'fb'
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        console.log(showContent)

        return (
          <div className="body_div">
            {showLeftNavbar && (
              <div className="left_div">
                <h1>Left Navbar Menu</h1>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            )}
            {showContent && (
              <div className="middle_div">
                <h1>Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            )}
            {showRightNavbar && (
              <div className="right_div">
                <h1>Right Navbar</h1>
                <div>
                  <p>Ad 1</p>
                </div>
                <div>
                  <p>Ad 2</p>
                </div>
              </div>
            )}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
