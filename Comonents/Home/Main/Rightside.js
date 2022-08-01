import styled from "styled-components";


const Rightside = () =>{
    return(
        <Container>
            <FollowCard>
            <Title>
                <h2> Add to your feed </h2>
                <img src="feed-icon" alt="" />
            </Title>
              
              <FeedList>
                  <li>
                  <a>
                      <Avatar/>
                  </a>
                  <span> LinkedIn </span>
                  <button> Follow </button>
                  </li>
                  <li>
                      <a>
                          <Avatar/>
                      </a>
                      <span> Video </span>
                      <button> Follow </button>
                  </li>
              </FeedList>
           
           <Recomandation> View all recomandations  </Recomandation>
             <img src="right-icon.svg" alt="" />
            </FollowCard>
            <BannerCard>
                <img src="" alt="" />
            </BannerCard>
        </Container>
   );
};

const Container = styled.div`
    grid-area: Rightside;
`;

const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0/15%) , 0 0 0 rgb(0 0 0/20%);
    padding: 12px;
`;

const Title = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width: 100%;
    color: rgba(0,0,0,0.6);
`;

const FeedList = styled.ul`
margin: 16px;
li{
    display: flex;
    align-items: center;
    margin: 12px 0px;
    position:relative;
    font-size: 14px;
    & > div{
        display: flex;
        flex-direction: column;
    }
    & > button{
        background-color: transparent;
        color: rgba(0,0,0,0.6);
        box-shadow: inset 0 0 0 1px rgba(0,0,0,0.6);
        padding:16px;
        align-items: center;
        border-radius: 15px;
        box-sizing: border-box;
        font-weight: 600;
        display: inline-flex;
        justify-content: center;
        max-height:32px;
        max-width: 480px;
        text-align: center;
        outline: none;
    }
}
`;

const Avatar = styled.div`
background-image: url('https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-hashtag-512.png');
background-size: contain;
background-position: center;
background-repeat: no-repeat;
width: 48px;
height: 48px;
margin-right: 8px;
`;

const Recomandation = styled.a`
    
`;
const BannerCard = styled(FollowCard)`
    
`;
export default Rightside;