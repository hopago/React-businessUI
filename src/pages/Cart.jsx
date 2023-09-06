import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Cart = () => {

    const Container = styled.div`
        padding: 20px;
    `;
    const Wrapper = styled.div`

    `;
    const Title = styled.h1`
        font-weight: 300;
        text-align: center;
    `;
    const Top = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;
    const TopButton = styled.button`
        padding: 10px;
        font-weight: 600;
        cursor: pointer;
    `;
    const TopTexts = styled.div`
      
    `;
    const TopText = styled.span`
        text-decoration: underline;
        cursor: pointer;
        margin: 0px 10px;
    `;
    const Bottom = styled.div`
      
    `;

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Title>My List</Title>
          <Top>
            <TopButton>Continue</TopButton>
            <TopTexts>
              <TopText>Cart List(2)</TopText>
              <TopText>Wish List(4)</TopText>
            </TopTexts>
            <TopButton>Buy now</TopButton>
          </Top>
          <Bottom>

          </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart
