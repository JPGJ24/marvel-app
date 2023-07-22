import styled from "styled-components";

export const Container = styled.div`
  padding-inline: 3.81rem;
  margin-top: 2.38rem;
`;
export const DivVideoImage = styled.div`
  display: flex;
  @media only screen and (max-width: 952px) {
    margin-top: 1.37rem;
  }
  @media only screen and (max-width: 540px) {
    flex-direction: column;
  }
  .div-video {
    width: 23.875rem;
    margin-right: 1.37rem;
    margin-left: 1.37rem;
    @media only screen and (max-width: 1300px) {
      width: auto;
    }
    @media only screen and (max-width: 540px) {
      margin-bottom: 1.37rem;
      margin-right: 0rem;
      margin-left: 0rem;
    }
  }
  .div-image {
    width: 23.875rem;
    @media only screen and (max-width: 1300px) {
      width: auto;
    }
  }
`;
export const DivProgress = styled.div`
  width: 31.875rem;
  @media only screen and (max-width: 637px) {
    width: auto;
  }
  .div-container-progress {
    @media only screen and (max-width: 637px) {
      width: auto;
    }
    .bar-blue {
      @media only screen and (max-width: 511px) {
        margin-top: -0.7rem;
      }
    }
  }
`;
export const DivContainers = styled.div`
  display: flex;
  margin-bottom: 1.37rem;
  @media only screen and (max-width: 952px) {
    flex-direction: column;
  }
`;
