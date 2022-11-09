import styled from "styled-components";

export const Container = styled.button`
 
    font-size: 1.2rem;

    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: all 0.2s;
    
    &:hover {
        filter: brightness(0.9);
        transform: scale(1.1);
    }
    
    @media (max-width: 600px) {
        margin-top: 3rem;
        width: 100%;
    }

`;

export const Content = styled.button`
    background: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    border: none;
    width: 100%;

    
    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }

`;