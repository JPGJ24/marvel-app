import styled from "styled-components";
import backgroundcard from "@/assets/cards/background-cards.png";
import backgroundcardName from "@/assets/cards/background-name.png";

export const CenteredContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    border: 1px solid #3c3c41;
    border-radius: 0.5125rem;
    background: linear-gradient(
      360deg,
      #000 0%,
      #090c14 0.01%,
      rgba(23, 26, 32, 0) 31.77%,
      rgba(39, 44, 52, 0) 100%
    );
    position: relative;
    &::before {
      content: "";
      position: absolute;

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url(${backgroundcard.src});
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  .div-text {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundcardName.src});
    background-repeat: no-repeat;
    background-position: center;
    height: 2rem;
  }
  .text-name {
    color: #f0e6d2;
    text-align: center;
    font-family: Beaufort for LOL;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    width: 9rem;
    letter-spacing: 0.0625rem;
    text-transform: uppercase;
  }
  .div-hero-img {
    height: 9.68406rem;
  }
  .animated-hero {
    position: relative;
    width: 8.5rem;
    height: 9.6rem;
    transition: transform 1s ease;
    cursor: pointer;
    &:hover {
      transform: rotate(180deg);
    }
  }

  .div-box-comics-movies {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.0625rem;
    flex-shrink: 0;
    border-radius: 0.3125rem;
    border: 1px solid #5b5a56;
    background: #1e2328;
  }

  .text-box {
    color: #f0e6d2;
    font-family: Spiegel;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    margin-right: 1.31rem;
  }
  .text-number-box {
    display: flex;
    width: 3.75rem;
    height: 1.75rem;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #f0e6d2;
    font-family: Beaufort for LOL;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 121%;
  }
`;
