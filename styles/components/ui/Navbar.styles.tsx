import styled, { keyframes } from "styled-components";

const svgBase64 =
  "IDxzdmcNCiAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgICAgIHdpZHRoPSIzOSINCiAgICAgIGhlaWdodD0iMTkiDQogICAgICB2aWV3Qm94PSIwIDAgMzkgMTkiDQogICAgICBmaWxsPSJub25lIg0KICAgID4NCiAgICAgIDxwYXRoDQogICAgICAgIGQ9Ik0zMi4wNjg1IDAuMDA0NDQ4NjFIMzIuMDczMUwzMC43NzYzIDBIMzAuNzcxN0wyMi44NTg0IDAuMDA0NDQ4NjFMMTkuNTAyMyAyLjk4OTQ2TDE2LjE0MTYgMC4wMDQ0NDg2MUg4LjIyODMxTDYuOTI2OTQgMEg2LjkzMTUxTDAgMC4wMDQ0NDg2MUwxOS40OTc3IDE5TDM5IDAuMDA0NDQ4NjFIMzIuMDY4NVpNMTUuNjExOSAxLjMzOTAzTDE5LjUwNjggNC44MDAwNUwyMy4zODgxIDEuMzM5MDNIMjkuMzg4MUwxOS40OTc3IDEwLjg5MDJMOS42MTE4NyAxLjMzOTAzSDE1LjYxMTlaTTMuMzA1OTQgMS4zMzkwM0g4LjMxMDVMMTkuNDk3NyAxMi4xNDAyTDMwLjY4NDkgMS4zMzkwM0gzNS42ODk1TDE5LjQ5NzcgMTcuMTEzOEwzLjMwNTk0IDEuMzM5MDNaIg0KICAgICAgICBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNDU1XzQ4NjApIg0KICAgICAgLz4NCiAgICAgIDxkZWZzPg0KICAgICAgICA8bGluZWFyR3JhZGllbnQNCiAgICAgICAgICBpZD0icGFpbnQwX2xpbmVhcl80NTVfNDg2MCINCiAgICAgICAgICB4MT0iMTkuNSINCiAgICAgICAgICB5MT0iMCINCiAgICAgICAgICB4Mj0iMTkuNSINCiAgICAgICAgICB5Mj0iMTkiDQogICAgICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiDQogICAgICAgID4NCiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOTU3NTNFIiAvPg0KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMC4zMjgxMjUiIHN0b3AtY29sb3I9IiNDOEE3NjUiIC8+DQogICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwLjY4MjI5MiIgc3RvcC1jb2xvcj0iI0Q1QjM2RCIgLz4NCiAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5QzdENDIiIC8+DQogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+DQogICAgICA8L2RlZnM+DQogICAgPC9zdmc+";

export const NavbarContainer = styled.nav`
  background-color: #000000;
  display: flex;
  align-items: center;
  height: 7.25rem;
  border-bottom: 6px solid #3c3c41;
`;

export const ActiveNavLink = styled.div`
  text-align: center;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: Beaufort for LOL;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  width: 7.125rem;
  height: 7.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.125rem;
`;

export const Ul = styled.ul`
  .inactive {
    color: #f0e6d2;
  }
  .active {
    color: #c89b3c;
    width: 7.125rem;
    height: 7.25rem;
    flex-shrink: 0;
    background: linear-gradient(0deg, #231f20 0%, rgba(34, 34, 34, 0) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 2.4375rem;
      height: 1.1875rem;
      background-image: url("data:image/svg+xml;base64,${svgBase64}");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
`;
export const rotateLeftBell = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-20deg);
  }
`;

export const rotateRightBell = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(20deg);
  }
`;

export const RotatingSVGBell = styled.svg`
  transition: transform 1s ease;
`;

export const rotate360Settings = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const IConBell = styled.button`
  &:hover {
    & ${RotatingSVGBell} {
      animation: ${rotateLeftBell} 0.8s infinite alternate;
    }
  }
`;
export const IConSettings = styled.button`
  &:hover {
    animation: ${rotate360Settings} 2s linear infinite;
  }
`;
