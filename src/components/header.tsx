import React from "react";
import { Menu, Segment, Image, Container } from "semantic-ui-react";
import CSS from "csstype";

type HeaderProps = {
  onClick: Function;
  items: string[];
  activeItem: string;
};

export const Header: React.FC<HeaderProps> = ({
  onClick,
  items,
  activeItem,
}) => {
  const container = {
    paddingTop: 20,
  };
  const headerStyle = {
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 60,
  };
  return (
    <Container style={container}>
      <Segment style={headerStyle} inverted clearing>
        <Menu inverted secondary floated="right" widths={7}>
          <Menu.Item as="h2" position="left">
            <Image
              size="mini"
              src="https://media-exp3.licdn.com/dms/image/C4E03AQF-jgDq0LV6zA/profile-displayphoto-shrink_800_800/0/1550196698502?e=1629936000&v=beta&t=CvnSzMKGyOW3KHC7HrcRYEn027BJ48eQi6zRbUxRcb4"
              avatar
            />
            <span>Nas Tavakoli</span>
          </Menu.Item>
          {items.map((item) => (
            <Menu.Item
              onClick={() => onClick(item)}
              active={activeItem === item}
              key={items.indexOf(item)}
            >
              <div style={{ fontSize: 18 }}>{item}</div>
            </Menu.Item>
          ))}
        </Menu>
      </Segment>
    </Container>
  );
};
