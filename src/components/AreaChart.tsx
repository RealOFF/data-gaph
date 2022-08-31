import styled from 'styled-components'
import { AreaChart as AreaChartLib, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts'

import CustomTooltip from './CustomTooltip'

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
    name: 'Jan, 23',
    fullName: '23 January 2020',
    value: 0.6,
    volume: 900
  },
  {
    name: 'Sep, 27',
    fullName: '27 September 2020',
    value: 0.7,
    volume: 1300
  },
  {
    name: 'Jul, 11',
    fullName: '11 July 2021',
    value: 0.65,
    volume: 800
  },
  {
    name: 'Dec, 17',
    fullName: '17 December 2021',
    value: 0.3,
    volume: 750
  },
  {
    name: 'Apr, 21',
    fullName: '21 April 2022',
    value: 0.6,
    volume: 900
  },
  {
    name: 'May, 24',
    fullName: '24 May 2022',
    value: 0.4,
    volume: 1200
  },
  {
    name: 'Oct, 21',
    fullName: '21 October 2022',
    value: 0.7,
    volume: 1300
  },
  {
    value: 0.3
  }
]

const AreaChart = () => {
  return (
    <Container>
      <AreaChartLib
        width={1280}
        height={350}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#48BDFF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#48BDFF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          tickLine={false}
          style={{ transform: 'translateY(10px) translateX(35px)' }}
          axisLine={false}
          dataKey="name"
        />
        <YAxis
          tickLine={false}
          style={{ transform: 'translateX(20px)' }}
          tickFormatter={(value) => `$${value}`}
          axisLine={false}
          orientation="right"
          dataKey="value"
        />
        <CartesianGrid color="#1E1F20" horizontal={false} />
        <Tooltip content={<CustomTooltip />} />
        <Area
          strokeDasharray="3 3"
          type="monotone"
          dataKey="value"
          stroke="#48BDFF"
          fillOpacity={0.4}
          fill="url(#colorUv)"
        />
      </AreaChartLib>
    </Container>
  )
}

export default AreaChart
