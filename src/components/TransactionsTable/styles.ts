import styled from "styled-components";

export const Container = styled.div`
    margin-top: -5rem;

    table {
        width: 90%;
        border-spacing: 0 0.5rem;
        margin: 0 auto;
        th {
            color: var(--text-title);
            font-weight: 600;
            font-size: 1.2rem;
            padding: 1rem 2rem;
            text-align: center;
            line-height: 1.5rem;
            background: rgba(255, 255, 255, 0.85);
        }
        
        td {
            padding: 1rem 0rem;
            text-align: center;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            
            /* Somente no primeiro td, nos demais continua normal */
            &:first-child {
                border-radius: 0.25rem 0 0 0.25rem;
                /* color: var(--text-title); */
            }
            &:last-child {
                border-radius: 0.25rem 0 0 0.25rem;
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
            
        }
    }
`;