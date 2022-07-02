# Like a Triple

## 프로젝트 개요
트리플 메인 중 Awards 섹션 구현

## 프로젝트 배포

### [배포 사이트](https://like-a-tiple.vercel.app/)

## 기술 스택
  <img src="https://img.shields.io/badge/TypeScript-v4.7.4-blue"/>
  <img src="https://img.shields.io/badge/React-v18.2.0-blue"/>
  <img src="https://img.shields.io/badge/StyledComponents-v5.3.5-blue"/>
  


### 기술 선택 이유
- Typescript: 정적 타입을 제공하여, 조금 더 결과에 대한 예측이 쉽고 때문에 사이드 이펙트를 줄일 수 있습니다. 협업하기 좋은 코드에 조금 더 가까워질 수 있을 것 같습니다.

- React: 요구사항에 있는 기술 스택이지만, 리액트는 라이브러리이기 때문에 다른 SPA을 제공하는 프레임워크에 비해 문법이 자바스크립트와 더 가깝고
  컴포넌트 분리에 용이한 것 같습니다. 떄문에 사이드 이펙트를 줄이고 코드 재사용성이 높은 함수형 프로그래밍에 가깝다고 생각됩니다. 
  
- Styled-components: css-in-js로 자바스크립트의 상태를 공유하여 css를 변경하기 용이하기 때문에, 
  class나 inline-style을 사용하여 조작하지 않아도 되어, 코드 가독성이 좋아지는 것 같습니다.

## 프로젝트 트리

```
📦src
 ┣ 📂assets
 ┃ ┣ 📜apple4x.png
 ┃ ┣ 📜store2x.png
 ┃ ┗ 📜triple2x.png
 ┣ 📂components
 ┃ ┗ 📂Awards
 ┃ ┃ ┣ 📂AwardsItems.tsx
 ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┃ ┗ 📜awardsItems.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┗ 📜awards.ts
 ┃ ┃ ┣ 📜Metrics.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂styles
 ┃ ┗ 📜global.ts
 ┣ 📂types
 ┃ ┗ 📜awardsType.d.ts
 ┣ 📂utils
 ┃ ┗ 📜metrics.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

## Getting Started / 시작하는 법

1. Repository 클론
```sh
$ https://github.com/lumpenop/like-a-tiple.git
```

2. Dependencies 설치
```sh
$ npm install
```

3. Run 실행
```sh
$ npm start
```

## 실행 이미지

https://user-images.githubusercontent.com/68418005/176925849-3f1d57c3-39c0-4243-a8fe-e9231c0c2880.mov

## 구현 방법
### 1. 영역별 등장 애니메이션
  - 좌측 이미지, 지표 문구, 수상 내역 순으로 표시하기 위해 animation-delay를 주었습니다.
  - 각 영역에 position: relative를 주고, keyframe을 사용해 top 속성 값을 조절하여 살짝 떠오르는 애니메이션을 주었습니다.
  - 투명도는 opacity 속성으로 조절하였씁니다.
### 2. 숫자가 올라가는 애니메이션
  - requestAnimationFrame을 사용해 0부터 690까지 1.4초 동안 증가하는 숫자를 만들고, 이후 690부터 700까지 0.6초 동안 증가하도록 하여, 증가 속도가 느려지는 애니메이션을 구현하였습니다.
  - 증가하는 숫자를 setState에 담아 상태가 변경되도록 하였습니다.
  - 하나의 숫자를 산술 연산으로 계산하여 3가지의 숫자를 만들었습니다.
  
## 어려웠던 점
requestAnimationFrame을 사용하여 숫자가 증가하도록 하는 부분이 어려웠습니다.
requestAnimationFrame은 화면의 프레임 생성 초기 단계에 애니메이션을 그리고, 콜백을 실행하는 시점에 DOMHighResTimeStamp가 전달되어 시간 기반으로 작동하는 함수로 프레임 시작 때 실행을 보장하기 때문에 애니메이션이 부드럽게 동작하기 때문에 사용하였습니다.

작동되는 시간을 통해 나오는 숫자를 이용하도록 구현 했는데 중간에 속도를 변경하는 것이 어려웠습니다.
때문에 숫자가 증가하는 애니매에션 함수를 2회에 걸쳐 사용하였습니다.

requestAnimationFrame을 여러번 등록하면 각 requestAnimationFrame을 비동기적으로 처리하기 때문에
setTimeout을 사용하여 첫 번째 requestAnimationFrame이 종료 후 두 번째 requestAnimationFrame을 실행하도록 하였습니다.


## 현재 이슈
setTimeout은 브라우저의 상황에 따라 더 늦게 실행될 수도 있기 때문에 현재 setTimeout으로 두 번째 requestAnimationFrame의 실행을 늦춘 것이 좋은 방법은 아닌 것 같습니다. 
때문에 따로 custom hook을 만들기 보다 requestAnimationFrame를 이용한 함수를 utils에 빼놓고
useEffect()에서 호출하는 것을 컴포넌트에서 볼 수 있도록 하여, 수정해야할 부분을 눈에 띄게 해놓았습니다.
해당 부분은 requestAnimationFrame의 내부 로직을 개선하거나, 두 번의 requestAnimationFrame을 동기적으로 처리할 수 있는 방법을 찾아
custom hook으로 구현하면 더 좋은 방안이 될 것 같습니다.
