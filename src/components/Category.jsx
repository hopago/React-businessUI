import styled from 'styled-components';
import { categories } from '../dummyData';
import CategoryItem from './CategoryItem';


const Category = () => {

    const Container = styled.div`
        display: flex;
        padding: 20px;
        justify-content: space-between;
    `;

  return (
    <Container>
        {categories.map(data => (
            <CategoryItem data={data} />
        ))}
    </Container>
  )
}

export default Category
