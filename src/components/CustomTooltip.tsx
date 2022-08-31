import styled from 'styled-components'

const Container = styled.div`
  min-width: 220px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px;
  box-sizing: border-box;

  background: #ffffff;
  border: 1px solid #e7eaee;
  border-radius: 10px;
`

const CustomTooltip = (props: any) => {
  if (!props.payload[0]?.payload?.fullName) {
    return null
  }

  return (
    <Container>
      <div color="#737475" style={{ fontWeight: 600 }}>
        {props.payload[0]?.payload?.fullName}
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div color="#1E1F20" style={{ fontWeight: 700 }}>
          Volume
        </div>
        <div color="#1E1F20"style={{ fontWeight: 700 }}>
          {props.payload[0]?.payload?.volume}
        </div>
      </div>
    </Container>
  )
}

export default CustomTooltip
