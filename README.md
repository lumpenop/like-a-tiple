# eslint-config-triple [![CI][ci-image]][ci-url]

[ci-image]: https://github.com/titicacadev/eslint-config-triple/actions/workflows/ci.yaml/badge.svg?branch=main
[ci-url]: https://github.com/titicacadev/eslint-config-triple/actions/workflows/ci.yaml

트리플에서 작성하는 [JavaScript/TypeScript 작성 가이드](STYLE_GUIDE.md)에 맞는
규칙을 정의한 [ESLint Sharable config](https://eslint.org/docs/developer-guide/shareable-configs)입니다.

## Installation

```bash
npm install @titicaca/eslint-config-triple --save-dev
```

## Usage

파일 타입과 내용 기준으로, 3종류의 라이브러리가 Formatter 및 Linter 역할을 나누어
가집니다.

- `.js`, `.ts`, `tsx`: ESLint
- `.json`, `.yaml`, `.md`: Prettier
- Stylesheet: Stylelint

ESLint, Pretter 등 에디터 플러그인을 사용한다면, 플러그인의 파일 분류 기준이 위와
같도록 설정해야 합니다.

### ESLint

`package.json`에 다음 스크립트를 추가해주세요.

```json
{
  "lint:es": "eslint '**/*.{js,ts,tsx}'",
  "lint:es:fix": "npm run lint:es -- --fix"
}
```

`.eslintrc.js` 파일을 만들어 주세요.

```js
const createConfig = require('@titicaca/eslint-config-triple/create-config')

module.exports = createConfig()
```

Typescript를 사용하고 있다면 사용할 수 있는 변수 이름을 넣어 줄 수 있습니다.

```js
const createConfig = require('@titicaca/eslint-config-triple/create-config')

const allowedNames = ['__DISASTER__CALLBACK', '_triple_no_navbar']
module.exports = createConfig({ allowedNames })
```

자체 설정을 추가하고 싶다면 다음과 같이 해주세요.

```js
const { extends, overrides } = createConfig()

module.exports = {
  extends: [
    ...extends,
    // 확장할 규칙 이름...
  ],
  overrides: [
    ...overrides,
    // 특정 파일 대상 규칙...
  ],
  rules: {
    // 개별 규칙
  }
}
```

> 프로젝트에서 babel을 사용하지 않으면 Babel 설정을 찾을 수 없다는 파싱 에러가 발생합니다.
> 다음을 설정을 추가해주세요.
>
> ```json
> "parserOptions": {
>   "requireConfigFile": false
> }
> ```

### Prettier

`package.json`에 다음 스크립트를 추가해주세요.

```json
{
  "lint:etc": "prettier '**/*.{json,yaml,md}' --check",
  "lint:etc:fix": "prettier '**/*.{json,yaml,md}' --write"
}
```

- `.prettierrc` 파일로 규칙을 관리할 때

```js
'@titicaca/eslint-config-triple/prettierrc'
```

- `package.json` 파일로 규칙을 관리할 때

```json
{
  "name": "@titicaca/unicorn-project",
  "version": "0.0.1",
  "prettier": "@titicaca/eslint-config-triple/prettierrc"
  ...
}
```

### Stylelint

`package.json`에 다음 스크립트를 추가해주세요.

```json
{
  "lint:style": "stylelint './**/*.{js,ts,tsx}'"
}
```

만약 css 파일을 별도로 관리하는 프로젝트라면 `css`를 추가해주세요.

- `.stylelintrc` 파일

```json
{
  "extends": ["@titicaca/eslint-config-triple/stylelint"]
}
```

## 개발하기

### eslint 개발하기

eslint의 최종 설정을 스냅샷으로 기록합니다.

```bash
npm run test:snapshot
```

새로운 rule을 추가하여 스냅샷이 깨졌다면, 스냅샷을 업데이트해주세요.

```bash
npm run update-snapshot
```

개발중 스냅샷 테스트를 계속 수행하고 싶다면, watch 옵션을 사용하세요.

```bash
npm run test:snapshot:watch
```

## License

`eslint-config-triple` is released under the [MIT license](LICENSE).
