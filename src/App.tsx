import styled from 'styled-components'

import AreaChart from './components/AreaChart'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ChartWrapper = styled.div`
  max-width: 100%;
`

const Title = styled.div`
  font-size: 40px;
`

function App() {

  return (
    <Wrapper>
      <Title>
        New app
      </Title>
      <ChartWrapper>
        <AreaChart />
      </ChartWrapper>
      <ChartWrapper style={{ marginTop: 70 }}>
        <BarChart />
      </ChartWrapper>
      <ChartWrapper style={{ marginTop: 70 }}>
        <PieChart />
      </ChartWrapper>
    </Wrapper>
  )
}

export default App
