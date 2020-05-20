import * as React from 'react'
import styled from 'styled-components'
import TextBox from '../component/TextBox'

interface Item {
  name: string;
}

interface Props {
  listItems: Item[],
}

const ListBox: React.FC<Props> = (props) => {

  return (
    <Box>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <TextBox />
        <TitleContainer>
          Tier <span style={{ fontSize: 50 }}>🥇</span>
        </TitleContainer>
      </div>
      <ListItemContainer>
        {props.listItems.map(item => (
          <ListItem key={item.name}><p>{item.name}</p></ListItem>
        ))}
      </ListItemContainer>
    </Box>
  )
}

export default ListBox

const Box = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  margin: 4px;
  padding: 0 4px 0 4px;
  height: 90vh;
  width: 90vw;
  box-shadow:  8px 8px 16px #2d303d, 
             -8px -8px 16px #373a4b;
`;

const TitleContainer = styled.div`
  font-size: 22px;
  font-weight: 900;
  text-align: right;
`; 

const ListItemContainer = styled.div`
  overflow: scroll;
  /* background-color: lightblue; */
  border-top: 1px solid #777;
  margin: 4px 16px;
`;

const ListItem = styled.div`
  font-size: 16px;
  

`;

// 🥈 🥉