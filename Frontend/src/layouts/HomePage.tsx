import React from 'react'
import Banner from '../pages/Website/Banner/Banner'
import Category from '../pages/Website/Category/Category'
import Phukienkhac from '../pages/Website/phukienkhac/Phukienkhac'
import Sanphammoi from '../pages/Website/Sanphammoi/Sanphammoi'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className="">
      <Banner/>
      <Category/>
      <Sanphammoi/>
      <Phukienkhac/>
      </div>
  )
}

export default HomePage