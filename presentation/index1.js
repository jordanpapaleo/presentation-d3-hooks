import React from 'react'

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  CodePane,
  Quote,
  Slide,
  Text
} from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'

require('normalize.css')
require('../assets/font-face.css')

const images = {
  theoremHalmos: require('../assets/theorem-halmos.svg'),
  theoremLogoType: require('../assets/theorem-logotype.svg'),
}

const colors = {
  primary: 'white',
  secondary: '#1F2022',
  tertiary: 'rgb(221, 0, 34)',
  quaternary: '#CECECE'
}

const fonts = {
  primary: 'FoughtKnight',
  secondary: 'Helvetica'
}

console.log(colors.tertiary)

const theme = createTheme(colors, fonts)


export function Presntation () {
  return (
    <Deck transitionDuration={500} theme={theme} >
      <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="primary"
        >
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/deck.example')}
            margin="20px auto"
            overflow="overflow"
          />
          <Notes>
            <List>
              <ListItem>talk about that</ListItem>
              <ListItem>and that</ListItem>
              <ListItem>and then this</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide goTo={3}>
          <ComponentPlayground theme="dark" />
        </Slide>

        <Slide
          transition={['slide']}
          bgImage={images.city.replace('/', '')}
          bgDarken={0.75}
        >
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Full Width
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Background Imagery
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['slide']}>
          <Anim
            onAnim={(forwards, animIndex) => {
              /* eslint-disable */
              console.log('forwards ', forwards);
              console.log('animIndex ', animIndex);
              /* eslint-enable */
            }}
            fromStyle={{
              opacity: 0,
              transform: 'translate3d(0px, -100px, 0px)  scale(1) rotate(0deg)'
            }}
            toStyle={[
              {
                opacity: 1,
                transform: 'translate3d(0px, 0px, 0px)  scale(1) rotate(0deg)'
              },
              {
                opacity: 1,
                transform:
                  'translate3d(0px, 0px, 0px) scale(1.6) rotate(-15deg)'
              },
              {
                opacity: 1,
                transform: 'translate3d(0px, 0px, 0px)  scale(0.8) rotate(0deg)'
              },
              {
                opacity: 1,
                transform:
                  'translate3d(0px, -200px, 0px)  scale(0.8) rotate(0deg)'
              },
              {
                opacity: 1,
                transform:
                  'translate3d(200px, 0px, 0px)  scale(0.8) rotate(0deg)'
              },
              {
                opacity: 1,
                transform:
                  'translate3d(0px, 200px, 0px)  scale(0.8) rotate(0deg)'
              },
              {
                opacity: 1,
                transform:
                  'translate3d(-200px, 0px, 0px)  scale(0.8) rotate(0deg)'
              }
            ]}
            easing={'bounceOut'}
            transitionDuration={500}
          >
            <div>
              <Heading size={6} caps fit textColor="secondary">
                Flexible
                <br />
                animations
              </Heading>
            </div>
          </Anim>
          <Notes>Much animation, very style</Notes>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary" margin="0.25em">
            Mix it up!
          </Heading>
          <Heading size={6} textColor="tertiary">
            You can even jump to different slides with a standard button or
            custom component!
          </Heading>
          <GoToAction margin="1em" slide={8}>
            Jump to Slide 8
          </GoToAction>
          <GoToAction
            render={goToSlide => (
              <select
                defaultValue=""
                style={{
                  background: '#000',
                  color: '#fff',
                  fontFamily: theme.print.fonts.primary,
                  fontSize: '1.1em'
                }}
                onChange={({ target }) => goToSlide(target.value)}
              >
                <option value="" disabled>
                  Custom Slide Picker
                </option>
                <option value="wait-what">Wait What!? Slide</option>
                <option value={3}>Slide 3</option>
              </select>
            )}
          />
          <Notes>Doesn't work in export view, though</Notes>
        </Slide>

        <Slide
          transition={['slide']}
          bgDarken={0.75}
          getAnimStep={setSteps}
        >
          <Appear>
            <Heading size={1} caps textColor="tertiary">
              Can
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps textColor="secondary">
              Count
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps textColor="tertiary">
              Steps
            </Heading>
          </Appear>
          <Heading size={1} caps fit textColor="secondary">
            Steps: {steps}
          </Heading>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading caps fit>
            Flexible Layouts
          </Heading>
          <Layout>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Right
              </Heading>
            </Fill>
          </Layout>
          <Notes>
            Use <code>layout</code> to <code>fill</code> or <code>fit</code>{' '}
            your content
          </Notes>
        </Slide>

        <Slide transition={['slide']} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>

        <Slide
          transition={['spin', 'zoom']}
          bgColor="tertiary"
          controlColor="primary"
          progressColor="primary"
        >
          <Heading caps fit size={1} textColor="primary">
            Inline Markdown
          </Heading>
          <Markdown>
            {`
  ![Markdown Logo](${images.markdown.replace('/', '')})

  You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
  * Lists too!
  * With ~~strikethrough~~ and _italic_
  * And let's not forget **bold**
  * Add some \`inline code\` to your sldes!
            `}
          </Markdown>
          <Notes>Who doesn't love markdown?</Notes>
        </Slide>
        {MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
---
Add some inline code to your markdown!

\`\`\`js
const myCode = (is, great) => 'for' + 'sharing';
\`\`\`
          `}
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
          <Notes>So smooth</Notes>
        </Slide>

        <SlideSet
          style={{ backgroundColor: 'blue', border: '10px solid cyan' }}
        >
          <Slide transition={['fade']} textColor="tertiary">
            <List>
              <Appear>
                <ListItem>Inline style based theme system</ListItem>
              </Appear>
              <Appear>
                <ListItem>Autofit text</ListItem>
              </Appear>
              <Appear>
                <ListItem>Flexbox layout system</ListItem>
              </Appear>
              <Appear>
                <ListItem>PDF export</ListItem>
              </Appear>
              <Appear>
                <ListItem bulletStyle="greenCheck">Customized bullets</ListItem>
              </Appear>
              <Appear>
                <ListItem>And...</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={['slide']} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            {/* <Interactive /> */}
          </Slide>
        </SlideSet>
    </Deck>
  )
}
