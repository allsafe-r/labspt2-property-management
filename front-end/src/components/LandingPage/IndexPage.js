import React from "react";
import { Link } from "react-router-dom";
// import Wave from "./Wave";
import Section from './Section'
import Cell from './Cell'
import Card from './Card'
import styled from 'styled-components'
import "../../assets/css/general.css";


const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
    
    
  </div>
);

export default IndexPage;
