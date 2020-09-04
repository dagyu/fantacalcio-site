import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";
import { useState } from 'react';

export function RegolamentoPage() {

  const [activeItem, setActiveItem] = useState("1");

  return (
    <MDBContainer>
        <MDBNav tabs>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeItem === "1"}
            onClick={() => setActiveItem("1")}
            role="tab"
          >
            <MDBIcon icon="user" /> Profile
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeItem === "2"}
            onClick={() => setActiveItem("2")}
            role="tab"
          >
            <MDBIcon icon="heart" /> Follow
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeItem === "3"}
            onClick={() => setActiveItem("3")}
            role="tab"
          >
            <MDBIcon icon="envelope" /> Contact
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
      <MDBTabContent
        className="card"
        activeItem={activeItem}
      >
        <MDBTabPane tabId="1" role="tabpanel">
          <p className="mt-2">
            Raw denim you probably haven't heard of them jean shorts
            Austin. Nesciunt tofu stumptown aliqua, retro synth master
            cleanse. Mustache cliche tempor, williamsburg carles vegan
            helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
            synth. Cosby sweater eu banh mi, qui irure terry richardson
            ex squid. Aliquip placeat salvia cillum iphone. Seitan
            aliquip quis cardigan american apparel, butcher voluptate
            nisi qui.
          </p>
        </MDBTabPane>
        <MDBTabPane tabId="2" role="tabpanel">
          <p className="mt-2">
            Food truck fixie locavore, accusamus mcsweeney's marfa nulla
            single-origin coffee squid. Exercitation +1 labore velit,
            blog sartorial PBR leggings next level wes anderson artisan
            four loko farm-to-table craft beer twee. Qui photo booth
            letterpress, commodo enim craft beer mlkshk aliquip jean
            shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
            assumenda labore aesthetic magna delectus mollit. Keytar
            helvetica VHS salvia yr, vero magna velit sapiente labore
            stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
            sustainable jean shorts beard ut DIY ethical culpa terry
            richardson biodiesel. Art party scenester stumptown, tumblr
            butcher vero sint qui sapiente accusamus tattooed echo park.
          </p>
        </MDBTabPane>
        <MDBTabPane tabId="3" role="tabpanel">
          <p className="mt-2">
            Etsy mixtape wayfarers, ethical wes anderson tofu before
            they sold out mcsweeney's organic lomo retro fanny pack
            lo-fi farm-to-table readymade. Messenger bag gentrify
            pitchfork tattooed craft beer, iphone skateboard locavore
            carles etsy salvia banksy hoodie helvetica. DIY synth PBR
            banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
            Williamsburg banh mi whatever gluten-free, carles pitchfork
            biodiesel fixie etsy retro mlkshk vice blog. Scenester cred
            you probably haven't heard of them, vinyl craft beer blog
            stumptown. Pitchfork sustainable tofu synth chambray yr.
          </p>
        </MDBTabPane>
      </MDBTabContent>
    </MDBContainer>
  );
}
