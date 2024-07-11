import styled from 'styled-components';

export const StyledContainer = styled.section`
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const StyledIcon = styled.div`
  width: 96px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.landingBackground};
  border-radius: 24px;
  margin-bottom: 16px;

  & .icon {
    color: #ff2e72;
  }
`;

export const StyledTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.48px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const StyledInfo = styled.p`
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`;
