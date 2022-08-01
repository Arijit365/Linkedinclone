import styled  from "styled-components";

const Header = (props) => {
   return (
     <Container>
         <Content>
             <Logo>
                 <a href = "/homo">
                     <img src="home-logo.svg" alt="Linkndn" />
                 </a>
             </Logo>
             <Search>
                 <div>
                     <input type="text" placeholder="Search" />
                 </div>
                 <SearchIcon>
                     <img src="search-icon.svg" alt="" />
                 </SearchIcon>
             </Search>
             <Nav>
                 <NavListWrap>
                 <NavList className="active">
                         <a>
                             <img src="nav-home.svg" alt="" />
                             <span>Home</span>
                         </a>
                     </NavList>

                     <NavList>
                         <a>
                             <img src="nav-network.svg" alt="" />
                             <span>My Network</span>
                         </a>
                     </NavList>

                     <NavList>
                         <a>
                             <img src="nav-jobs.svg" alt="" />
                             <span> Jobs  </span>
                         </a>
                     </NavList>

                     <NavList>
                         <a>
                             <img src="nav-messaging.svg" alt="" />
                             <span> Messaging  </span>
                         </a>
                     </NavList>

                     <NavList>
                         <a>
                             <img src="nav-notifications.svg" alt="" />
                             <span> Notifications  </span>
                         </a>
                     </NavList>

                     <User>
                         <a>
                             <img src="user.svg" alt="" />
                             <span>Me</span>
                             <img src="down-icon.svg" alt="" />
                         </a>
                         <SignOut>
                             <a>
                                 Sign Out
                             </a>
                         </SignOut>
                     </User>
                     <Work>
                         <a>
                             <img src="nav-work.svg" alt="" />
                             <span>Work
                                 <img src="down-icon.svg" alt="" />
                             </span>
                         </a>
                     </Work>

                 </NavListWrap>
             </Nav>
         </Content>
     </Container>
   );
}

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    left:0;
    padding: 0 24px;
    position: absolute;
    top: 0;
    z-index: 100;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin:  0 auto;
    min-height: 100%;
    max-width: 1128px;
`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;

`;

const Search = styled.div`
   opacity: 1;
   flex-grow: 1;
   position: relative;
   & > div {
       max-width: 280px;
       input {
           border: none;
           box-shadow: none;
           background-color: #eef3f8;
           border-radius: 2px;
           color: lightgrey;
           width: 218px;
           padding: 0 8px 0 40 px;
           line-height: 1.75;
           font-weight: 400;
           font-weight: 14px;
           height: 34px;
           border-color: #dce6f1;
           vertical-align: text-top;
       }
   }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0 ;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
    margin-left: auto;
    display: block;
    @media (max-width:768px){
        position: fixed;
        left: 0;
        top: 0;
        background: white;
        width: 100%;
    }
`;

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
    .active{
        content: '';
        transform: scaleX(1);
        border-bottom: 2px solid var(--white , #fff);
        bottom: 0;
        right:-200px;
        padding-bottom: 0.5em;
        position: absolute;
        transition: transform 0.2ms ease-in-out;
        width: 100%;
        border-color: rgba(0,0,0,0.9);
    }
`;

const NavList = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    a {
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        right: -100px;
        line-height: 1.5;
        min-height: 42px;
        min-width: 90px;
        position: relative;
        text-decoration: none;

        span{
        color: rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
    }

    @media (max-width:768px){
        min-height: 70px;   
    }
    &:hover ,
    &:active{
            span{
                color: rgba(0,0,0,0.9);
            }
    }
    }
`;

const SignOut = styled.div`
   position: absolute;
   top: 45px;
   right: -1.5em;
   background: white;
   border-radius: 0 0 5px 5px;
   width: 100px;
   height: 40px;
   font-size: 16px;
   transition-duration: 167ms;
   text-align: center;
   display: none;
   a{
       display: flex;
       position:relative;
       left: 0.4em;
       align-items: center;
   }
`;

const User = styled(NavList)`
    a > svg{
        width: 24px;
        border-radius: 50%;
    }

    a > img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
    span {
        display: flex;
        align-items: center;
    }
    &:hover{
        ${SignOut}{
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
`;

const Work = styled(User)`
    border-left: 1px solid rgba(0,0,0,0.08);
`;



export default Header;