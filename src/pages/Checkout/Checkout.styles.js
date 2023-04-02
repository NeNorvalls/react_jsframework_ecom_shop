import styled from "styled-components";

export const Card = styled.div`
  border: 3px solid black;
  border-top: none;
  border-bottom: none;
  border-radius: 5px;
  padding: 1em;
  width: 60%;
  max-width: 600px;
  margin: 5em auto 0;
  background-color: burlywood;
  height: 75%;

  @media only screen and (max-width: 768px) {
    width: 90%;
    margin: 3em auto 0;
  }

  @media only screen and (max-width: 256px) {
    width: 100%;
    margin: 2em auto 0;
    padding: 0.5em;
    height: auto;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
`;

export const Input = styled.input`
  width: 40px;
  text-align: center;
`;

export const Button = styled.button`
  border: none;
  background-color: #ddd;
  padding: 0.5em;
  margin-left: 0.5em;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }

  @media only screen and (max-width: 256px) {
    padding: 0.3em;
    margin-left: 0.3em;
  }
`;
