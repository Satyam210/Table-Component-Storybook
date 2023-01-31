import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  table {
    background: ${({ theme }) => theme.tablebackground}; 
  }
  .table-title{
    color: ${({ theme }) => theme.headingColor};
  }
  th{
    color: ${({ theme }) => theme.headingColor};
  }

  tr .selected{
    background-color: grey
     }
  `