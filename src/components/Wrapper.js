import styled from 'styled-components'

export default styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 960px;

  @media (min-width: 1300px) {
    max-width: 1250px;
    flex-wrap: nowrap;
  }
`;