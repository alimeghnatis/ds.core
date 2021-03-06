/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { GrayscaleIcon } from 'ui'

export default {
  title     :'common/GrayscaleIcon',
  component :GrayscaleIcon,
  decorators:[
    //storyfn => <div className="">{ storyfn() }</div>,
  ]
}

const variants = [
  {
    alt :'Corriere',
    src :'/press_corriere.png',
    link:'blah.com'
  },
  {
    alt      :'New York Times',
    src      :'/press_nyt.png',
    className:'b-x x-indigo',
    link     :'blah.com'
  },
  {
    alt      :'Stampa',
    src      :'/press_stampa.svg',
    className:'b-x x-red',
    link     :'blah.com'
  }
]

export const Default = () =>
  (
    <GrayscaleIcon
      { ...variants[0] }
    />
  )

export const TestClasses = () =>
  variants.map((e,i) =>
    <GrayscaleIcon
      { ...e }
      key={ i }
    />
  )

export const NoLink = () =>
  variants.map(({link, ...e}) => e).map((e,i) =>
    <GrayscaleIcon
      { ...e }
      key={ i }
    />
  )

export const ObjectPosition = () =>
  variants.map(({link, ...e}) => e).map((e,i) =>
    <GrayscaleIcon
      objectPosition='center center'
      { ...e }
      height='80px'
      width='300px'
      key={ i }
    />
  )

export const ImgStyle = () =>
  variants.map(({link, ...e}) => e).map((e,i) =>
    <GrayscaleIcon
      objectPosition='center center'
      { ...e }
      height='80px'
      imgStyle={{
        background:'red',
        borderRadius:'.25em'
      }}
      width='300px'
      key={ i }
    />
  )

