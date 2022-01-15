import { styled } from '@mui/system';

export const StyledHeader = styled('header')`
  /* background-color: ${(props) => props.bg}; */
  /* background-color: ${({bg}) => bg}; */
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`

export const Nav = styled('nav')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  ${props => props.theme.breakpoints.down("sm")} {
    flex-direction: column;
  }
`
export const Logo = styled('img')`
  ${props => props.theme.breakpoints.down("sm")} {
    margin-bottom: 40px;
  }
`
export const Image = styled('img')`
  width: 375px;
  margin-left: 40px;
  ${props => props.theme.breakpoints.down("sm")} {
    margin: 40px 0 30px;
  }
`
