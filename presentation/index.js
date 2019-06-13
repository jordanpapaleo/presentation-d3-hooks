import React, { useState } from 'react'
import styled from 'react-emotion'

import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Notes,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction
} from 'spectacle'

import preloader from 'spectacle/lib/utils/preloader'
import createTheme from 'spectacle/lib/themes/default'

require('normalize.css');

const images = {
  scatter: require('../assets/scatter-plot.png'),
  city: require('../assets/city.jpg'),
  theoremHalmos: require('../assets/theorem-halmos.svg'),
  theoremLogoType: require('../assets/theorem-logotype.svg'),
}

preloader(images)

const colors = {
  primary: 'rgb(221, 0, 34)',
  secondary: '#1F2022',
  tertiary: '#FFFFFF',
  quaternary: '#CECECE'
}

const fonts = {
  primary: 'Helvetica',
  secondary: {
    name: 'Droid Serif',
    googleFont: true,
    styles: ['400', '700i']
  }
}

const theme = createTheme(colors, fonts)

const Presentation = () => {
  return (
      <Deck
        transition={['slide']}
        theme={theme}
        transitionDuration={500}
      >
        {/* TITLE */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            D3 + Hooks + FC
          </Heading>
          <hr />
          <Heading size={5} caps textColor="tertiary">
            Jordan Papaleo
          </Heading>
          <Text textSize="1.5em" textColor="secondary" style={{marginBottom: 150}}>
            Software Engineer
          </Text>
          <Image src={images.theoremLogoType} width={400} />
          <Notes>Let's get started!</Notes>
        </Slide>

        {/* OVERVIEW 1 */}
        <Slide bgColor="secondary" transition={['fade']}>
          <Heading size={5} textColor="tertiary">
            Lets give you a quick glance at using
          </Heading>
          <Heading size={4} textColor="primary">
            D3 and React together
          </Heading>
        </Slide>

        {/* WonderingSlide */}
        <Slide bgColor="quaternary" transition={['fade']}>
          <Text size={5} textColor="secondary">
            You may be wondering why I would do this
          </Text>
          <Heading size={4} textColor="primary">
            Thats a great question!
          </Heading>
        </Slide>

        {/* OtherGoodQuestions */}
         <Slide bgColor="tertiary" transition={['fade']}>
          <Heading size={3} textColor="primary" style={{marginBottom: 100}}>
            Other great questions with no answers
          </Heading>
          <Text textColor="secondary" style={{textAlign: 'left'}}>Can you know the mighty ocean?</Text>
          <Text textColor="secondary" style={{textAlign: 'left'}}>Can you lasso a star from the sky?</Text>
          <Text textColor="secondary" style={{textAlign: 'left'}}>Can you say to a rainbow... 'Hey, stop being a rainbow for a second'?</Text>
          <Notes>
            Ok so moving on
          </Notes>
        </Slide>

        {/* OverviewSlide2 */}
        <Slide bgColor="secondary" transition={['fade']}>
          <Heading size={1} caps textColor="primary">
            Overview
          </Heading>
          <Heading size={5} textColor="tertiary">
            We are going to look at a React wrapper component that uses hooks and lets you write D3 in a more native way
          </Heading>
          <Notes>
            <ul>
              <li>We will talk about this stuff first</li>
              <li>Ill show you some generic code to talk about concepts</li>
              <li>Then i'll show you my working code</li>
            </ul>
          </Notes>
        </Slide>

        {/* Goals */}
        <Slide bgColor="tertiary" transition={['fade']}>
          <Heading size={2} style={{marginBottom: 50}} textColor="primary">
            My goals for you
          </Heading>

          <Appear fid="1">
            <Text style={{textAlign: 'left'}}>You will not learn D3, not even close, not even its paradigms</Text>
          </Appear>
          <Appear fid="2">
            <Text style={{textAlign: 'left'}}>You will not learn how to write React</Text>
          </Appear>
          <Appear fid="3">
            <Text style={{textAlign: 'left'}}>You will see an elegant way some cool tech can work together</Text>
          </Appear>
          <Appear fid="4">
            <Text style={{textAlign: 'left'}}>You will hopefully get interested in D3, React, or both</Text>
          </Appear>
          <Notes>
            <ul>
              <li>Learning D3 is much more than a 10 minute lightning talk; its complex.  I'm currently teaching myself D3.  I can help you find some good resources if you are interested.</li>
              <li>React is something I have been writing since 2015 and like D3 it takes time to learn</li>
              <li>Making multiple technologies work together is our job</li>
              <li>Ultimately I hope this intregues you a bit, that it gets you curious enough to play</li>
            </ul>
          </Notes>
        </Slide>

        {/* Built */}
        <BetterSlide bgColor="secondary">
          <Heading textColor="quaternary" size={3} style={{textAlign: 'center', textTransform: 'uppercase'}}>What I built</Heading>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: 600}}>
              <Image src={images.scatter} width={700} />
            </div>
          </div>

          <Notes>
            <ul>
              <li>This is a scatter plot chart that maps 3 values</li>
              <li>In this case its baseball stats: Distance, Batting average and max velocity</li>
              <li>The color scale follows a heat scale mild to medium (bc these are just kids)</li>
            </ul>
          </Notes>
        </BetterSlide>

        {/* SetupSlide */}
        <Slide>
          <Heading>
            General Setup
          </Heading>
          <div style={{marginLeft: 25, marginTop: 150}}>
            <Text>So each of our data visualizations will have 3 parts:</Text>

            <List>
              <ListItem>
                A d3 render function (reusable for chart types)
              </ListItem>
              <ListItem>
                Wrapper component (completely reusable)
              </ListItem>
              <ListItem>
                Data Mapper component (unique-ish each use)
              </ListItem>
            </List>

            <Notes>
              <ul>
                <li>Once you write your D3 for what ever your are making you should be able to reuse that</li>
                <li>You will obviously have to code it in a generic way though ;p</li>
                <li>The wrapper is our D3 - React black box where the magic happens</li>
                <li>Mapper is what preps the data and gives it to the wrapper</li>
              </ul>
            </Notes>
          </div>
        </Slide>

        {/* D3RenderSlide */}
        <BetterSlide bgColor="secondary">
          <Heading textColor="tertiary" size={2} style={{marginBottom: 50, textAlign: 'center'}}>
            D3 Render Function
          </Heading>

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: 600}}>
              <CodePane
                lang="jsx"
                theme="light"
                source={require('raw-loader!../assets/d3RenderFunction.example')}
                margin="20px auto"
                overflow="scroll"
              />
            </div>
          </div>

          <Notes>
            <ul>
              <li>This is our D3 code: Adds scales, axis, labels, etc</li>
              <li>This can be basically any function you can come up with that take data and a d3 selection of an svg dom elemen</li>
              <li>In this case the each piece of data needs an x,y,z because we are plotting 3 points</li>
              <li>width and height are used to set the dimensions of the chart</li>
              <li>the labels are to visually identify data in the chart</li>
              <li>The Selection uses the D3 selection and provides reference to a svg where it builds the visualization</li>
            </ul>
          </Notes>
        </BetterSlide>

        {/* D3WrapperSlide */}
        <BetterSlide bgColor="secondary">
          <Heading textColor="tertiary" size={2} style={{marginBottom: 50, textAlign: 'center'}}>
            D3 Wrapper
          </Heading>

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: 600}}>
              <CodePane
                lang="jsx"
                source={require('raw-loader!../assets/d3Wrapper.example')}
                margin="20px auto"
                theme="light"
                overflow="overflow"
              />
            </div>
          </div>

          <Notes>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </Notes>
        </BetterSlide>

        {/* DataMapperSlide */}
        <BetterSlide bgColor="secondary">
          <Heading textColor="tertiary" size={2} style={{marginBottom: 50, textAlign: 'center'}}>
            Data Mapper
          </Heading>

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: 700}}>
              <CodePane
                lang="jsx"
                source={require('raw-loader!../assets/mixer.example')}
                margin="20px auto"
                theme="light"
                overflow="scroll"
              />
            </div>
          </div>

          <Notes>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </Notes>
        </BetterSlide>

        {/* DemoSlide */}
        <Slide bgColor="secondary">
          <Heading size={1} caps textColor="primary">
            Demo Warning
          </Heading>
          <Heading size={5} textColor="tertiary">
            Entering code construction zone
          </Heading>
          <Notes>
            <ul>
              <li>Hopefully thats obvious in its meaning</li>
              <li>Open up the storybook app running in a tifferent tab</li>
            </ul>
          </Notes>
        </Slide>

        {/* QuestionsSlide */}
        <BetterSlide className="test">
          <Heading>Questions?</Heading>
          <Heading size={3}>HA! There's questions in lightning talks</Heading>
          <Text>Thank you</Text>
        </BetterSlide>
      </Deck>
    )
}

const BetterSlide =  styled(Slide)`
  text-align: left;
  height: 100%;
  max-height: inherit;
`









export default Presentation