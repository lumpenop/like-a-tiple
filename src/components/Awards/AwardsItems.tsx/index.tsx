import {
  AwardsImg,
  AwardsItem,
  AwardsText,
  AwardsTextBox,
} from './style/awardsItems'

interface Props {
  src: string
  alt: string
  title: string
  content: string
}

const AwardsItems = ({ src, alt, title, content }: Props) => {
  return (
    <AwardsItem>
      <AwardsImg src={src} alt={`${alt}`} />
      <AwardsTextBox>
        <AwardsText>{title}</AwardsText>
        <AwardsText>{content}</AwardsText>
      </AwardsTextBox>
    </AwardsItem>
  )
}

export default AwardsItems
