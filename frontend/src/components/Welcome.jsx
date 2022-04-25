import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Welcome = () => (
  <Jumbotron>
    <h1>Images Gallery</h1>
    <p>
      This is simple application that retrives photos using Unsplash API. In
      order to start enter any search term in the input field.
    </p>
    <Button variant="primary" href="https://unsplash.com" target="_blank">
      Learn more
    </Button>
  </Jumbotron>
);
export default Welcome;
