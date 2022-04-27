import React from 'react'
import './homepage.css'


const HomePage = () => {
  return (
    <div className="container">
      <div className="collection">
        <div className="item">
          <div className="title">
            <h1>SUMMER</h1>
            <h1>COLLECTION</h1>
          </div>
          <div className="discount">
            <p>STYLISH DRESS UP TO</p>
            <p className='off'>30% OFF</p>
          </div>
          <button className='main-btn'>SHOP NOW</button>
        </div>
        <div className="photo">
            <img src="photos/girl.png" alt='cover'/>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <div className="info">
            <p className='text'>Amazing</p>
            <div className="name">
              <h2>Ladis Boot</h2>
            </div>
            <div className="sale-btn">
              <button className='btn'>SALE UP TO 20%</button>
            </div>
          </div>
          <div className="image">
            <img src="photos/boot.png" alt="boot" />
          </div>
        </div>
        <div className="card">
          <div className="info">
            <p className='text'>Trendy</p>
            <div className="name">
              <h2> Boys Bag</h2>
            </div>
            <div className="sale-btn">
              <button className='btn'>SALE UP TO 20%</button>
            </div>
          </div>
          <div className="image">
            <img src="photos/bag.png" alt="boot" />
          </div>
        </div>
        <div className="card">
          <div className="info">
            <p className='text'>Cool</p>
            <div className="name">
              <h2>Lather Jacket</h2>
            </div>
            <div className="sale-btn">
              <button className='btn'>SALE UP TO 20%</button>
            </div>
          </div>
          <div className="image">
            <img src="photos/jacket.png" alt="boot" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
