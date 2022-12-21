import styled from "styled-components";

export const AuthFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-top: -10rem;
  border-radius: 0.25rem;
  /* color: var(--text-title); */
  @media (max-width: 600px) {
    width: 95%;
  }
`;

export const AuthForm = styled.form`
  width: 420px;
  box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
  padding-top: 30px;
  padding-bottom: 20px;
  border-radius: 8px;
  background-color: white;
`;

export const AuthFormContent = styled.div`
  padding-left: 12%;
  padding-right: 12%;

  span {
    cursor: pointer;
    color: var(--blue);
    font-weight: 600;
  }

  label {
    font-size: 1rem;
  }

  input {
    font-size: 1rem;
  }
  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;

    svg {
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
        transform: scale(1.1);
      }
    }
  }
`;

export const AuthFormTitle = styled.div`
  text-align: center;
  margin-bottom: 1em;
  font-size: 2rem;
  color: rgb(34, 34, 34);
  font-weight: 800;
`;

export const SubmitButton = styled.button`
  font-size: 1rem;
  color: #fff;
  background: var(--blue);
  border: 0;
  margin-top: 1rem;
  border-radius: 0.25rem;
  height: 3rem;
  width: 100%;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
