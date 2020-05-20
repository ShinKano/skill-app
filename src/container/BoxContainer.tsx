import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
//
import ListBox from '../component/ListBox'


const BoxContainer: React.FC = () => {
  const [listItems, setListItems] = useState([
    {name: 'React Native'},
    {name: 'Rust'},
  ]);

  const onClick = () => {
    let newListItems = [ ...listItems ];
    newListItems.push({name: 'Rust'});
    setListItems(newListItems)
  }

  return (
    <Container>
      <ListBox listItems={listItems} />
      <button onClick={onClick}>おす</button>
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