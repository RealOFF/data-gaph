import styled from 'styled-components'
import { BarChart as BarChartLib, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts'

const Container = styled.div`
  width: 100%;
  overflow: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`


const data = [
  {
    value0: 600,
    value1: 900
  },
  {
    value0: 500,
    value1: 1300
  },
  {
    value0: 400,
    value1: 800
  },
  {
    value0: 550,
    value1: 750
  },
  {
    value0: 700,
    value1: 900
  },
  {
    value0: 800,
    value1: 1200
  },
  {
    value0: 1100,
    value1: 1300
  },
  {
    value0: 1100,
    value1: 1300
  }
]

const BarChart = () => {
  return (
    <Container>
      <BarChartLib
        width={1280}
        height={350}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="value1" />
        <YAxis dataKey="value0" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value1" fill="#8884d8" />
        <Bar dataKey="value0" fill="#82ca9d" />
      </BarChartLib>
    </Container>
  )
}

export default BarChart
