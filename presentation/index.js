import React, { useState } from 'react'
import styled from 'react-emotion'

import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  ListItem,
  Layout,
  List,
  Notes,
  Quote,
  Slide,
  Text,
} from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'
import preloader from 'spectacle/lib/utils/preloader'

require('normalize.css')

const images = {
  city: require('../assets/city.jpg'),
  galacticUnicorn: require('../assets/galactic-unicorn.jpg'),
  scatter: require('../assets/scatter-plot.png'),
  theoremHalmos: require('../assets/theorem-halmos.svg'),
  theoremLogoType: require('../assets/theorem-logotype.svg'),
}

preloader(images)

const colors = {
  primary: 'rgb(221, 0, 34)',
  // primary: '#1fe2df',
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

const codeTheme = 'dark'

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
          <Notes>
            <ul>
              <li>Hi my name is jordan</li>
              <li>Software engineer at Theorem</li>
              <li>I pumped to give you 10 minutes to chat about D3 and react</li>
            </ul>
          </Notes>
        </Slide>

        {/* OVERVIEW 1 */}
        <Slide bgColor="secondary" transition={['fade']}>
          <Heading size={5} textColor="tertiary">
            Lets give you a quick glance at using
          </Heading>
          <Heading size={4} textColor="primary">
            D3 and React together
          </Heading>
          <Notes>
            <ul>
              <li>For those that dont know</li>
              <li>D3 is a powerful tool that lets you do cool stuff with data and visualization</li>
              <li>React need no introduction today, but just give credit where its due, React is an awesome Front End render library</li>
            </ul>
          </Notes>
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
         <Slide bgColor="quaternary" transition={['fade']}>
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
            We are going to look at a React component that lets you write <br />D3 in a more native way
          </Heading>
          <Notes>
            <ul>
              <li>Most of the examples you will see online for D3 are written very differently from a lot of the JS we see today</li>
              <li>You can see this on sites like http://bl.ocks.org</li>
              <li>We as developers tend to try to force square pegs into round holes</li>
              <li>My setup makes it easier to write D3 in the context of react</li>
              <li>So I will show you how I do that</li>
              <li>Ill give some high level code examples for sake of conversation</li>
              <li>And then I'll show you my working code</li>
            </ul>
          </Notes>
        </Slide>

        {/* Goals */}
        <Slide bgColor="quaternary" transition={['fade']}>
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
              <li>Learning D3 is much more than a 10 minute lightning talk; its complex.  I'm currently teaching myself D3.</li>
              <li>React is something I have been learning since 2015 and you should just talk to Alex and Eve</li>
              <li>Making multiple technologies work together is our job</li>
              <li>Ultimately I hope this intregues and gets you curious</li>
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
              <li>This time its baseball stats: Distance, Batting average and exit velocity of the ball after a hit</li>
            </ul>
          </Notes>
        </BetterSlide>

        {/* SetupSlide */}
        <Slide>
          <Heading>
            General Setup
          </Heading>
          <div style={{marginLeft: 25, marginTop: 150}}>
            <Text><strong>Each data visualization<br />will have 3 parts:</strong></Text>

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
              <p>Lets talk about how I did that</p>
              <ul>
                <li>We have 3 parts</li>
                <li>1. d3 render: D3 for what ever your are making, think line chart, scatter plot, etc</li>
                <li>you should be able to reuse this if written in a generic way</li>
                <li>2. Wrapper component: The wrapper is our D3 - React black box where the magic happens</li>
                <li>3. Mapper is what preps the data and gives it to the wrapper</li>
              </ul>
            </Notes>
          </div>
        </Slide>

       {/* Shameless plug */}
        <Slide bgColor="secondary">
          <Heading textColor="quaternary" size={5} caps style={{textAlign: 'left', marginBottom: 50}}>Shameless plug</Heading>
          <Layout>
            <Fill>
                <Image src={images.galacticUnicorn} width={300} />
            </Fill>
            <Fill>
              <div style={{width: 500, textAlign: 'left'}}>
                <Quote textSize="1em">
                  Follow your heart, let it guide you through the dark<br /><br />
                  To the Land of Unicorns
                </Quote>
              </div>
            </Fill>
          </Layout>
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
                margin="20px auto"
                overflow="scroll"
                source={require('raw-loader!../assets/d3RenderFunction.example')}
                theme={codeTheme}
              />
            </div>
          </div>

          <Notes>
            <ul>
              <li>This is our D3 code: Adds scales, axis, labels, etc</li>
              <li>This is where you build your data vis</li>
              <li>It can be any function that takes data and an svg</li>
              <li>WALK THE PROPS</li>
              <li>In this case the each piece of data needs an x,y,z because we are plotting 3 points</li>
              <li>width and height are used to set the dimensions of the chart</li>
              <li>the labels are to visually identify data in the chart</li>
              <li>The Selection uses the D3 selection and provides reference to a svg where it builds the visualization</li>
              <li>Thats all I am really going to show you right now otherwise this would be an intro to d3 talk</li>
            </ul>
          </Notes>
        </BetterSlide>

        {/* D3WrapperSlide */}
        <BetterSlide bgColor="secondary">
          <Heading textColor="quaternary" size={2} style={{marginBottom: 50, textAlign: 'center'}}>
            D3 Wrapper
          </Heading>

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: 600}}>
              <CodePane
                lang="jsx"
                margin="20px auto"
                overflow="overflow"
                source={require('raw-loader!../assets/d3Wrapper.example')}
                theme={codeTheme}
              />
            </div>
          </div>

          <Notes>
            <ul>
              <li>This is where the magic happens</li>
              <li>Walk the props</li>
              <li>Width and height make sense as you see them being set on the svg</li>
              <li>whats happening:
                <ul>
                  <li>takes a render function passed from the parent</li>
                  <li>uses react hooks to get a reference to an svg</li>
                  <li>calls the render function and provides and passes the svg to it</li>
                </ul>
                <li>Thats it</li>
              </li>
            </ul>
          </Notes>
        </BetterSlide>

        {/* DataMapperSlide */}
        <BetterSlide bgColor="secondary">
          <Heading textColor="quaternary" size={2} style={{marginBottom: 50, textAlign: 'center'}}>
            Data Mapper
          </Heading>

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: 700}}>
              <CodePane
                lang="jsx"
                margin="20px auto"
                overflow="scroll"
                source={require('raw-loader!../assets/mixer.example')}
                theme={codeTheme}
              />
            </div>
          </div>

          <Notes>
            <ul>
              <li>Still finding a better name as its more intelligent than just mapping</li>
              <li>This is a React component that will take data and correctly format it to be used by a d3 function</li>
              <li>PROP: It takes an array with the name of 3 stats</li>
              <li> It uses those map correct properties to our x,y,z</li>
              <li>It passes the function to our wrapper in the last slide; notice that the function gets the svg passed to it</li>
              <li>You are probably wondering where does what render when?</li>
              <li>That svg is used directly by d3; meaning d3 takes over rendering from here and does its stuff</li>
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
          <Heading size={3}>HA! There's no questions in lightning talks</Heading>
          <Text style={{textAlign: 'right', marginTop: 100}}>
            - JP
          </Text>
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
