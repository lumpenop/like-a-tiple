import styled from 'styled-components'
import { ImgProps } from 'types/awardsType'

export const AwardsItem = styled.div`
  width: 47%;
  display: flex;
`

export const AwardsImg = styled.img.attrs<ImgProps>((props: ImgProps) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 58px;
  height: 58px;
`

export const AwardsText = styled.p`
  margin: 8px 0;
  font-size: 14px;
`

export const AwardsTextBox = styled.div`
  margin-left: 3%;
`
