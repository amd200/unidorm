import React from 'react'
import { NavLink } from 'react-router-dom'
import TitleSection from '../Uitily/TitleSection'
import Card from '../Uitily/Card'

function Properties () {
  return (
    <section className="properties py-5">
    <div className="container">
      <TitleSection title="Neared for you" />
      <div className="row">
        <div className="col-xl-3 col-md-6 ">
         <Card/>
        </div>
        <div className="col-xl-3 col-md-6 ">
         <Card/>
        </div>
        <div className="col-xl-3 col-md-6 ">
         <Card/>
        </div>
        <div className="col-xl-3 col-md-6 ">
         <Card/>
        </div>
        <div className="col-xl-3 col-md-6 ">
         <Card/>
        </div>
        <div className="col-xl-3 col-md-6 ">
         <Card/>
        </div>
        <div className="col-xl-3 col-md-6 ">
         <Card/>
        </div>
        <div className="col-xl-3 col-md-6 ">
         <Card/>
        </div>
      </div>
    </div>
  </section>  )
}

export default Properties 