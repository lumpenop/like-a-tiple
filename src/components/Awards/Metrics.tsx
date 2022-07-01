import { useState, useEffect } from 'react'
import { MetricsBox } from './style/awards'
import { increasingNumbers } from 'utils/metrics'

const Metrics = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    increasingNumbers(0, 690, 1400, setCounter)
    setTimeout(() => {
      increasingNumbers(690, 700, 600, setCounter)
    }, 1400)
  }, [])

  return (
    <MetricsBox>
      <p>
        <strong>{`${counter}만 명`}</strong>의 여행자
      </p>
      <p>
        <strong>{`${Math.floor(counter / 7)}만 개`}</strong>의 여행 리뷰
      </p>
      <p>
        <strong>{`${Math.floor((counter / 7) * 2.5)}만 개`}</strong>의 여행 일정
      </p>
    </MetricsBox>
  )
}

export default Metrics
