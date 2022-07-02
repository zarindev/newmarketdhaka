import React from 'react'
import Hero from '../Hero/Hero'
import CategoryNav from '../Navigation/CategoryNav/CategoryNav'
import TopNav from '../Navigation/TopNav/TopNav'
import SearchBox from '../SearchBox/SearchBox'

function HomePage() {
  return (
    <>
    <TopNav/>
    <CategoryNav/>
    <Hero/>
    <SearchBox/>
    </>
  )
}

export default HomePage