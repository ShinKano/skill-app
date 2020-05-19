import * as React from 'react'
import styled from 'styled-components'
//
import ListBox from '../component/ListBox'

const BoxContainer: React.FC = () => {
  return (
    <Container>
      <ListBox />
    </Container>
  )
}

export default BoxContainer

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 94vh;
`;