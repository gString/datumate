import styled from "styled-components";
import { Container } from "../styles";

export const Display    = styled(Container)`
  margin: 30px;
  flex: 1 1 auto;
`;

export const List       = styled.ul`
  list-style: none;
  padding: 20px;
  background-color: #efefef;
`;

export const Row        = styled.ul`
  list-style: none;
  display: flex;
  border-bottom: 1px dotted green;
  padding: 0;
`;

export const Cell       = styled.li`
  width: 120px;
  text-align: right;
  padding: 5px;
`;

export const NameCell   = styled (Cell)`
  text-align: left;
  width: 90px;
  background-color: white;
`;

export const ActionCell = styled (Cell)`
  padding: 0 25px;
  display: flex;
`;

export const Action     = styled.button`
  margin: 0 5px;
  border: none;
  cursor: pointer;
  color: black;

  &:hover {
    color: green;
  }
`;

export const NameHeader = styled (NameCell)`
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: green;
  }

`;

export const HeaderRow = styled (Row)`
  margin-left: 20px;
`;

export const Header    = styled (Cell)`
  text-align: center;
  cursor: pointer;

  &:hover {
    color: green;
  }
`;

