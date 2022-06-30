import Awards from 'components/Awards'

import { GlobalStyle } from './styles/global'

// eslint-disable-next-line @typescript-eslint/naming-convention
const App = () => {
  return (
    <main className="App">
      <GlobalStyle />
      <Awards />
    </main>
  )
}

export default App
