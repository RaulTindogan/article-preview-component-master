import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <section>
        <img src="./src/images/drawers.jpg" alt="" />
      </section>
      <section>
        <h1>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it felt slightyly bare and uninviting
          I've got some simple tips to help you make any room feel complete.
        </p>
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <h2>Michelle Appleton</h2>
              <h3>28 Jun 2020</h3>
            </div>
            <img src="./src/images/icon-share.svg" alt="" />
          </div>
          <div>
            <div>
              <p>SHARE</p>
              <img src="./src/images/icon-fascebook.svg" alt="" />
              <img src="./src/images/icon-twitter.svg" alt="" />
              <img src="./src/images/icon-pinterest" alt="" />
            </div>
            <img src="./src/images/icon-share.svg" alt="" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
