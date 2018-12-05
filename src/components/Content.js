import React from 'react'
import styled, { keyframes }from 'styled-components'

const ContentStyle = styled.div`
  display: inline;
  opacity: 0.01;
`

const fade = keyframes`
  from {
    opacity: 0;

  }
  to {
    opacity: 1;
  }
`

const FadeAnimation = styled.div`
  animation: ${fade} .2s;
`

const Content = () => {
  return (
    <ContentStyle>
      <FadeAnimation>
        <h1>CONTENT</h1>
      </FadeAnimation>
    </ContentStyle>
  )
}

export default Content
