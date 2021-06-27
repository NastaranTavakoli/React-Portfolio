import React from "react";
import { Icon, Item } from "semantic-ui-react";
import "./Contact.css";

type ContactProps = {};

export const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="contact">
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.63692167016!2d151.0708110158206!3d-33.84747288066234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a4c815806d05%3A0x528ff6cbc8e817c0!2s7%20Australia%20Ave%2C%20Sydney%20Olympic%20Park%20NSW%202127!5e0!3m2!1sen!2sau!4v1624682572437!5m2!1sen!2sau"
          loading="lazy"
          className="map"
        ></iframe>
      </div>

      <Item.Group divided relaxed>
        <Item>
          <Icon name="address book" size="big" />
          <Item.Content>
            <Item.Header>Full Name</Item.Header>
            <Item.Description>Nastaran Tavakoli</Item.Description>
          </Item.Content>
        </Item>
        <Item>
          <Icon name="phone" size="big" />
          <Item.Content>
            <Item.Header>Phone Number</Item.Header>
            <Item.Description>+61 416516363</Item.Description>
          </Item.Content>
        </Item>
        <Item>
          <Icon name="envelope" size="big" />
          <Item.Content>
            <Item.Header>Email</Item.Header>
            <Item.Description>
              <a href="mailto:nastaran.tavakoli.91@gmail.com">
                nastaran.tavakoli.91@gmail.com
              </a>
            </Item.Description>
          </Item.Content>
        </Item>
        <Item>
          <Icon name="pin" size="big" />
          <Item.Content>
            <Item.Header>Address</Item.Header>
            <Item.Description>
              7 Australia Avenue, SYDNEY OLYMPIC PARK, NSW, 2127
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
};
