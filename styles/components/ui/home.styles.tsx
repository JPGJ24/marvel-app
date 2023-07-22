import styled from "styled-components";

export const ContainerHome = styled.div`
  margin: auto;
  display: table;
  margin-top: 15rem;

  h1 {
    position: relative;
    float: left;
    background: #000000;
    color: #fff;
    font-family: Beaufort for LOL;
    font-size: 5.5em;
    @media only screen and (max-width: 584px) and (min-width: 0px) {
      font-size: 3.5em;
    }
  }

  h1 span {
    position: absolute;
    right: 0;
    width: 0;
    background: #000000;
    border-left: 1px solid #f6f6f6;
    animation: escribir 5s steps(30) infinite alternate;
  }

  @keyframes escribir {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
`;
