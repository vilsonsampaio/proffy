import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`
  position: relative;
  
  & + & {
    margin-top: 1.4rem;
  }
  
  label {
    color: ${theme.colors.textComplement};

    font-size: 1.4rem;
  }
  
  textarea {
    width: 100%;
    height: 16rem;
  
    min-height: 8rem;
  
    margin-top: 0.8rem;
    padding: 1.2rem 1.6rem;
  
    background: ${theme.colors.shapesSecondary};
    color: ${theme.colors.textBase};
  
    font: 1.6rem Archivo;
  
    border: 0.1rem solid ${theme.colors.backgroundLinesInWhite};
    border-radius: ${theme.radius.default};
    
    outline: 0;
  
    resize: vertical;

    :disabled {
      opacity: 0.6;
    }
  }
  
  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 0.2rem;
  
    content: '';
    
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0.7rem;
  
    background: ${theme.colors.primary};
  }
`}
`;
