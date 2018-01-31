import React, { Component } from 'react';

import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Link,
  Layout,
  Fill,
  Fit,
} from 'spectacle';

import 'prismjs/components/prism-elm';

import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

const ElmTaco = () => <code>🌮elm-taco</code>;

export default class Presentation extends Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        <Slide>
          <Layout>
            <Heading size={3} textColor="secondary">
              <ElmTaco />
            </Heading>
          </Layout>
          <Text margin="40px 0 0">
            Tomáš Horáček
            <br />
            horacek@cngroup.dk
          </Text>
        </Slide>
      </Deck>
    );
  }
}
