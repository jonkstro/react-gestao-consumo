import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -8rem;
    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }

    div {
        cursor: pointer;
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
    
        header {
            display: flex;
            align-items: center;
            justify-content:space-between;

            img {
                max-width: 1.5rem;
                max-height: 1.5rem;
            }

            span {
                &.online {
                    color: var(--green);
                }
                &.offline {
                    color: var(--red);
                }
            }
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        a {
            text-decoration: none;
            color: var(--text-title);
        }

        &.highlight-background {
            background: var(--green);
            color: #fff;
        }
    }
`;