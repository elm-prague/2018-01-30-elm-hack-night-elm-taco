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
  S,
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

const TACO = '🌮';

const ElmTaco = () => <code>{TACO}elm-taco</code>;

const ElmTacoHeading = () => (
  <Heading size={4}>
    <ElmTaco />
  </Heading>
);

const OldNew = ({ children, ...rest }) => (
  <Text textSize="0.6em" textAlign="left" {...rest}>
    {children}:
  </Text>
);

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
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary">
            ?
          </Heading>
        </Slide>
        <Slide>
          <ElmTacoHeading />
          <List>
            <Appear>
              <ListItem>
                <code>elm-taco</code> = design pattern for bigger single-page
                applications
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>Taco</code> = shared Model for all views
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                typical usage:
                <Appear>
                  <List margin="0 0 0 80px">
                    <ListItem>translations</ListItem>
                    <ListItem>authentication</ListItem>
                    <ListItem>current user</ListItem>
                    <ListItem>current time</ListItem>
                    <ListItem>global state</ListItem>
                  </List>
                </Appear>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading margin="0" size={4}>
            Why "{TACO}"?
          </Heading>
          <List margin="0">
            <Appear>
              <ListItem>you can wrap anything into a taco</ListItem>
            </Appear>
            <Layout>
              <Fill />
              <Fill>
                <Appear>
                  <Image src={require('../assets/taco-sweet.jpg')} />
                </Appear>
                <Appear>
                  <Image src={require('../assets/taco-dog.jpg')} />
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <Image src={require('../assets/taco-baby.jpg')} />
                </Appear>
                <Appear>
                  <Image src={require('../assets/taco-people.jpg')} />
                </Appear>
              </Fill>
            </Layout>
            <Appear>
              <ListItem>
                it's term that <S type="bold">is not used</S> in IT
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={4}>
            <ElmTaco /> Page view
          </Heading>
          <Appear>
            <div>
              <OldNew>old</OldNew>
              <CodePane
                lang="elm"
                theme="light"
                textSize={25}
                source={`view : Model -> Html Msg`}
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <OldNew margin="50px 0 0">new</OldNew>
              <CodePane
                lang="elm"
                theme="light"
                textSize={25}
                source={`-- Types.elm

type alias Taco =
  { time: Time
  , ...
  }

`}
              />
              <Appear>
                <CodePane
                  lang="elm"
                  theme="light"
                  textSize={25}
                  source={`-- Some/View.elm

view : Taco -> Model -> Html Msg`}
                />
              </Appear>
            </div>
          </Appear>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={4}>
            <ElmTaco /> Page update
          </Heading>
          <Appear>
            <div>
              <OldNew>old</OldNew>
              <CodePane
                lang="elm"
                theme="light"
                textSize={20}
                source={`update : Msg -> Model -> ( Model, Cmd Msg )`}
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <OldNew>new</OldNew>
              <CodePane
                lang="elm"
                theme="light"
                textSize={20}
                source={`-- Types.elm

type TacoUpdate
    = NoUpdate
    | UpdateTime Time
    | ...

`}
              />
              <Appear>
                <CodePane
                  lang="elm"
                  theme="light"
                  textSize={20}
                  source={`-- SomePage/Update.elm

update : Msg -> Model -> ( Model, Cmd Msg, TacoUpdate )`}
                />
              </Appear>
              <Appear>
                <CodePane
                  lang="elm"
                  theme="light"
                  textSize={20}
                  source={`-- or:
update : Msg -> Taco -> Model -> ( Model, Cmd Msg, TacoUpdate )`}
                />
              </Appear>
            </div>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={4} margin="0">
            <ElmTaco /> Router update
          </Heading>
          <Appear>
            <CodePane
              lang="elm"
              theme="light"
              textSize={17}
              source={`-- Router.elm
type Msg
    = SomePageMsg SomePage.Msg
    | OtherPageMsg OtherPage.Msg
    | ...

`}
            />
          </Appear>

          <Appear>
            <CodePane
              lang="elm"
              theme="light"
              textSize={17}
              source={`update : Msg -> Taco -> Model -> ( Model, Cmd Msg, TacoUpdate )
update msg taco model =
    case msg of
        SomePageMsg pageMsg ->
            let
                ( pageModel, pageCmd, tacoUpdate ) =
                    SomePage.update pageMsg model.somePage
            in
            ( { model | somePage = pageModel }
            , Cmd.map SomePageMsg pageCmd
            , tacoUpdate
            )


        OtherPage pageMsg ->
             ...
`}
            />
          </Appear>
        </Slide>
        <Slide>
          <Heading size={4}>
            <ElmTaco /> updateTaco
          </Heading>
          <Appear>
            <CodePane
              lang="elm"
              theme="light"
              textSize={18}
              source={`updateTaco : Taco -> TacoUpdate -> Taco
updateTaco taco tacoUpdate =
    case tacoUpdate of
        UpdateTime time ->
            { taco | currentTime = time }

        NoUpdate ->
            taco
        ...
`}
            />
          </Appear>
        </Slide>
        <Slide>
          <Heading size={4}>
            <ElmTaco /> Main update
          </Heading>
          <Appear>
            <CodePane
              lang="elm"
              theme="light"
              textSize={18}
              source={`-- Main.elm

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        RouterMsg routerMsg ->`}
            />
          </Appear>
          <Appear>
            <CodePane
              lang="elm"
              theme="light"
              textSize={18}
              source={`            let
                ( nextRouterModel, routerCmd, tacoUpdate ) =
                    Router.update routerMsg routerModel
`}
            />
          </Appear>
          <Appear>
            <CodePane
              lang="elm"
              theme="light"
              textSize={18}
              source={`
                nextTaco =
                    updateTaco taco tacoUpdate
`}
            />
          </Appear>
          <Appear>
            <CodePane
              lang="elm"
              theme="light"
              textSize={18}
              source={`            in
            ( { model | taco = nextTaco }
            , Cmd.map RouterMsg routerCmd
            )

`}
            />
          </Appear>
        </Slide>
        <Slide>
          <Heading margin="0" size={4}>
            Should we use "{TACO}"?
          </Heading>
          <Text margin="50px">
            <Appear>
              <div>
                <S type="bold">yes</S>...{' '}
                <Appear>
                  <S type="italic">for bigger applications</S>
                </Appear>
              </div>
            </Appear>
          </Text>
          <Appear>
            <Link href="https://github.com/ohanhi/elm-taco">
              github.com/ohanhi/elm-taco
            </Link>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary">
            ?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary">
            Thanks!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
