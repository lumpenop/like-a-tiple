import apple4x from 'assets/apple4x.png'
import store2x from 'assets/store2x.png'
import triple2x from 'assets/triple2x.png'

import {
  Section,
  ContentAwardsContainer,
  ContentBox,
  ContentLogoImg,
  ContentLogoText,
  AwardsContainer,
  LogoBox,
} from './style/awards'

import AwardsItems from './AwardsItems.tsx'
import Metrics from './Metrics'

const Awards = () => {
  return (
    <Section>
      <ContentAwardsContainer>
        <LogoBox>
          <ContentLogoImg
            src={triple2x}
            alt="trip 2018 구글 플레이스토어 수상"
          />
          <ContentLogoText>2021년 12월 기준</ContentLogoText>
        </LogoBox>
        <ContentBox>
          <Metrics />
          <AwardsContainer>
            <AwardsItems
              src={store2x}
              alt="2018 구글 플레이스토어 올해의 앱 최우수상 수상"
              title="2018 구글 플레이스토어"
              content="올해의 앱 최우수상 수상"
            />
            <AwardsItems
              src={apple4x}
              alt="2018 애플 앱스토어 오늘의 여행앱 선정"
              title="2018 애플 앱스토어"
              content="오늘의 여행앱 선정"
            />
          </AwardsContainer>
        </ContentBox>
      </ContentAwardsContainer>
    </Section>
  )
}

export default Awards
