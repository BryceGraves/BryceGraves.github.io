import React from 'react';

import { Card, Divider, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react';

import image from '../images/me.jpg';

const Home = () => {
  return (
    <Grid columns={2} container divided stackable>
      <Grid.Column width={4} className="d-flex justify-content-center align-items-start pt-3">
        <Card>
          <Image src={image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Bryce Graves</Card.Header>
            <Card.Meta>Some cool meta info</Card.Meta>
            <Card.Description>Some cool description</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="user" /> Some cool links or buttons?
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column width={12} className="pt-4">
        <Header as="h2" icon textAlign="center">
          <Icon name="user circle" circular />
          <Header.Content>About Me</Header.Content>
        </Header>
        <Segment className="mx-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Segment>
        <Divider />
        <Header as="h2" icon textAlign="center">
          <Icon name="cogs" circular />
          <Header.Content>Knowledge</Header.Content>
        </Header>
        <Segment className="mx-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Segment>
        <Divider />
      </Grid.Column>
    </Grid>
  );
};

export default Home;
