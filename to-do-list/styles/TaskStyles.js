import styled from 'styled-components';

export const TaskContainer = styled.div`
  max-width: 400px;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TaskButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 1rem;
  width: 100%;

  &:hover {
    background-color: #005bb5;
  }
`;
