import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
//import Lightbox from "react-image-lightbox";
import './gridcss.css';

class LightboxPage extends React.Component {
state = {
  images: [
    require('../../Helpers/image/elmadmin.png'),
    require('../../Helpers/image/elmetape.png'),
    require('../../Helpers/image/ShoppingList.png'),
  ],
  image1 : require('../../Helpers/image/ShoppingList.png'),
  image2 : require('../../Helpers/image/elm.png'),
}

render() {
  return (
      <MDBContainer className="mt-5">
        <div className="mdb-lightbox">
          <MDBRow>
            <MDBCol className="boxrea2">
              <div className="boxrea">
                <a href="https://the-list-275916.ew.r.appspot.com">
                <h5 className="titre">Application ShoppingList <br/>front en REACT.JS et back en NODE.JS</h5>
                  <figure className="shadow-box-example hoverable">
                    <img src={this.state.image1} alt="Gallery" className="img-fluid"/>
                  </figure>
                </a>
              </div>
            </MDBCol>
            <MDBCol className="boxrea2">
              <div className="boxrea">
                <h5 className="titre">Site intranet pour la gestion de formation <br/>front en REACT.JS et back en JAVA</h5>
                  <figure>
                    <img src={this.state.image2} alt="Gallery" className="img-fluid"/>
                  </figure>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    );
  }
}

export default LightboxPage;

