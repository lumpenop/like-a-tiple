import styled, { keyframes, css } from 'styled-components'
import { ImgProps } from 'types/awardsType'

const boxAnimation = keyframes`
  from {
    opacity: 0;
    top: 14px;
  }
  to {
    opacity: 1;
    top: 0;
  }
`

const boxAnimationCss = css`
  position: relative;
  top: 20px;
  opacity: 0;
  animation: ${boxAnimation} 0.7s;
  animation-fill-mode: forwards;
`

export const MetricsBox = styled.div`
  ${boxAnimationCss};
  animation-delay: 0.1s;
`

export const Section = styled.section`
  width: 100%;
`

export const ContentAwardsContainer = styled.div`
  width: 1040px;
  margin: 0 auto;
  height: 552px;
  min-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const ContentBox = styled.div`
  width: 420px;
  height: 338px;
  display: grid;
  align-items: center;
  &:first-child {
    width: 400px;
    position: relative;
  }
`
export const LogoBox = styled(ContentBox)`
  ${boxAnimationCss};
`

export const ContentLogoImg = styled.img.attrs<ImgProps>((props: ImgProps) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
`

export const ContentLogoText = styled.p`
  position: absolute;
  left: 50%;
  top: 77%;
  transform: translateX(-50%);
  color: #797979;
`
export const TestP = styled.p`
  font-size: 36px;
  margin: 8px 0;
`

export const AwardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${boxAnimationCss};
  animation-delay: 0.2s;
`
