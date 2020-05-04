import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 300px;
  height: 100%;
  background: white;
`;

export const GreyContainer = styled.div`
  width: 290px;
  background: #f4f4f4;
  height: 100%;
  border-radius: 34px 0px 0px 34px;
  padding-bottom: 34px;
  overflow: visible scroll;

  h2 {
    color: #2b2b2b;
    font-size: 16px;
    padding: 34px 0px 17px 34px;
  }
`;

export const Navbar = styled.ul`
  height: 254px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #0045ff;
  line-height: 30px;
`;

export const NavbarItem = styled.li`
  padding-left: 34px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  ${props => props.active && `
    padding-left: 34px;
    font-size: 16px;
    width: 300px;
    background: #0045ff;
    color: white;
    borderRadius: 0px 34px 34px 0px;
  `}

  span {
    height: 24px;
    padding: 0px 7px;
    background: #ff1515;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: bold;
  }
`;