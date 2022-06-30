import { useState, useEffect } from 'react'
import { MetricsBox } from './style/awards'

const Metrics = () => {
  const [counter, setCounter] = useState(0)

  const increasingNumbers = (start: number, end: number, duration: number) => {
    let startTimestamp: number = 0
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const result = Math.floor(progress * (end - start) + start)
      setCounter(result)
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }

  useEffect(() => {
    increasingNumbers(0, 690, 1400)
    setTimeout(() => {
      increasingNumbers(690, 700, 600)
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
