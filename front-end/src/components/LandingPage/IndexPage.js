import React from "react";
import { Link } from "react-router-dom";
import Wave from "./Wave";
import Section from './Section'
import Cell from './Cell'
import Card from './Card'
import staticdata from './staticdata.json'
import styled from 'styled-components'
import "../../assets/css/general.css";


const Cells = styled.div`
  border: 1px solid red;
  background-color: #fce6e6;
`

const SectionCaption = styled.p`
  margin: 50px 20px;
  font-size: 60px;
  text-align: center;
  font-weight: 700;
  background: linear-gradient(104deg, #050a27 0%, #4a548c 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  
`

const IndexPage = () => (
  <div className="Hero">
      <div className="intro-section">
        <div className="bg-stretch">
        <div className="slide-frame">
							<div className="text">
                <h1 className="slide-title">
                  Manage properties
                  <br /> at ease.
                  </h1>
      <p>Take care of tedious property management tasks in one place. <br />Be in charge of your properties, anytime, anywhere.
       </p>
      <Link to={"/register"}>
        <button>GET STARTED</button>
      </Link>
      </div>
      </div>
   
      <div class="anchor-wrap">
					  <a href="#section1" className="anchor"><span></span></a>
				</div>
       </div>
        </div>
        <div className="Cards">
          <h2>All in one place</h2>
        <div className="CardGroup">
          <Card 
            title="Manage Properties"
            text="Learn More"
           image={require('../../assets/images/manageprops.png')} />
          <Card 
            title="Tenant Information"
            text="Learn More"
            image={require('../../assets/images/tenantinfo.png')} />
          <Card 
            title="Collect Payments"
            text="Learn More"
            image={require('../../assets/images/collectpay.png')} />
          <Card 
            title="Handle Workorders"
            text="Learn More"
            image={require('../../assets/images/workorders2.png')} />
      </div>
    </div>
    <Cells>
     <SectionCaption>Step into the year 2019</SectionCaption>
  
    </Cells>
  </div>
);

export default IndexPage;
