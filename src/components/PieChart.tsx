import styled from 'styled-components'
import { PieChart as PieChartLib, Pie } from 'recharts'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`

const data0 = [
  {
    name: 'Jan, 23',
    volume: 900
  },
  {
    name: 'Sep, 27',
    volume: 1300
  },
  {
    name: 'Jul, 11',
    volume: 800
  },
  {
    name: 'Dec, 17',
    volume: 750
  },
  {
    name: 'Apr, 21',
    volume: 900
  },
  {
    name: 'May, 24',
    volume: 1200
  },
  {
    name: 'Oct, 21',
    volume: 1300
  },
  {
    name: 'Jan, 21',
    volume: 1200
  }
]

const data1 = [
  {
    name: 'Jan, 23',
    volume: 600
  },
  {
    name: 'Sep, 27',
    volume: 700
  },
  {
    name: 'Jul, 11',
    volume: 900
  },
  {
    name: 'Dec, 17',
    volume: 750
  },
  {
    name: 'Apr, 21',
    volume: 950
  },
  {
    name: 'May, 24',
    volume: 1000
  },
  {
    name: 'Oct, 21',
    volume: 1100
  },
  {
    name: 'Jan, 21',
    volume: 850
  }
]

const PieChart = () => {
  return (
    <Container>
      <PieChartLib
        width={500}
        height={500}
      >
        <Pie data={data0} dataKey="volume" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        <Pie data={data1} dataKey="volume" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
      </PieChartLib>
    </Container>
  )
}

export default PieChart
