import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';


const Navbar = () => {

    const Container = styled.div`
        width: calc(100% - 40px);
        height: 69.5px;
        border-bottom: 0.5px solid lightgray;
    `;
    const Wrapper = styled.div`
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;
    const Left = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
    `;
    const Language = styled.span`
        font-size: 14px;
        cursor: pointer;  
    `;
    const SearchContainer = styled.div`
        border: 0.5px solid lightgray;
        display: flex;
        align-items: center;
        margin-left: 20px;
        padding: 5px;
    `;
    const Input = styled.input`
        border: none;  
    `;
    const Center = styled.div`
        flex: 1;
        text-align: center;
    `;
    const Logo = styled.h1`
        font-size: 48px;
        font-weight: bold;
        cursor: pointer;
    `;
    const Right = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    `;
    const MenuItem = styled.div`
        font-size: 18px;
        cursor: pointer;  
        margin-right: 20px;
    `;

  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>KR</Language>
              <SearchContainer>
                <Input />
                <Search style={{ color: "gray", fontSize: "24px"}}/>
              </SearchContainer>
            </Left>
            <Center>
              <Logo>Hosinsa.</Logo>
            </Center>
            <Right>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Logout</MenuItem>
              <Badge badgeContent={3} color='secondary'>
                <ShoppingCartOutlined />
              </Badge>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
