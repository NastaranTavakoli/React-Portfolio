import React from "react";
import { Image, Segment } from "semantic-ui-react";

type HomeProps = {};

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Segment clearing>
      <Image
        size="big"
        floated="left"
        src="https://media-exp3.licdn.com/dms/image/C4E03AQF-jgDq0LV6zA/profile-displayphoto-shrink_800_800/0/1550196698502?e=1629936000&v=beta&t=CvnSzMKGyOW3KHC7HrcRYEn027BJ48eQi6zRbUxRcb4"
      />
      <p></p>
    </Segment>
  );
};
