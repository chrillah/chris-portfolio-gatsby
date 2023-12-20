import * as React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="app-page">
        <div className="app-container">
          <h1>Don't be a stranger</h1>
          <p>Lets connect</p>
          <div className="contact-container">
            <a
              className="to-button"
              href="https://www.linkedin.com/in/christopher-r%C3%B6nnberg/"
              target="blanc"
            >
              <svg
                className="arrow"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <polyline
                  className="arrow-detail"
                  points="14.95 29.44 29.39 15 14.95 .56"
                />
                <line className="arrow-detail" x1="29.39" y1="15" y2="15" />
              </svg>
              <p>linkedin.com/in/christopher-rönnberg/</p>
            </a>
            <a
              className="to-button"
              href="https://github.com/chrillah"
              target="blanc"
            >
              <svg
                className="arrow"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <polyline
                  className="arrow-detail"
                  points="14.95 29.44 29.39 15 14.95 .56"
                />
                <line className="arrow-detail" x1="29.39" y1="15" y2="15" />
              </svg>
              <p>github.com/chrillah</p>
            </a>
            <a
              className="to-button"
              href="mailto:christopher.ronnberg@hotmail.com"
            >
              <svg
                className="arrow"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <polyline
                  className="arrow-detail"
                  points="14.95 29.44 29.39 15 14.95 .56"
                />
                <line className="arrow-detail" x1="29.39" y1="15" y2="15" />
              </svg>
              <p>christopher.ronnberg @hotmail.com</p>
            </a>
            <a className="to-button" href="tel:+46736703219">
              <svg
                className="arrow"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <polyline
                  className="arrow-detail"
                  points="14.95 29.44 29.39 15 14.95 .56"
                />
                <line className="arrow-detail" x1="29.39" y1="15" y2="15" />
              </svg>
              <p>+46 736 70 32 19</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
