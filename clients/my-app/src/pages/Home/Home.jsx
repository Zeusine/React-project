import React from 'react'
import "./Home.scss"
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
const Home = () => {
  return (
    <div className='Home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="flash Sale"/>
      <Categories/>
      <Contact/>
    </div>
  )
}

export default Home