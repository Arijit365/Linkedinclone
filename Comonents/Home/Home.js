import styled from "styled-components";
import Leftside from "./Main/Leftside";


const Home = (props) =>{
    return (
      <Container>
          <Section>
              <h5>
                  <a> Hirirng in a hurry?  -</a>
              </h5>
              <p>Find talented pros in record time with Upwork and keep bussiness Moving </p>
          </Section>
          <Layout>
          <div>
              <Leftside/>
          </div>
          <div>main</div>
          <div>right side</div>
          </Layout>
      </Container>
    );
};
const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
`;

const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
`;

const Section  = styled.section`
    min-height: 50px;
    padding: 16px 0px;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    
    h5{
        color:  #66c2ff;
        font-size: 14px;
    }
    a{
        font-weight: 400;
    }
    p{
        font-size: 14px;
        color: #434649;
        font-weight: 600;
    }
    @media (max-width: 768px){
        flex-direction: column;
        padding: 0 5px;
    }
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: 'leftside main rightside';
    grid-template-columns: minmax(0,5px) , minmax(0,12px) , minmax(0,7px);
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin: 25px 0;
    @media (max-width:768px){
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`;

export default Home;