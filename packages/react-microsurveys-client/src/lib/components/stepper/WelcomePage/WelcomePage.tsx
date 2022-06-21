import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface WelcomePageProps {}

const StyledWelcomePage = styled.div`
  color: pink;
`;

export function WelcomePage(props: WelcomePageProps) {
  return (
    <StyledWelcomePage>
      <h1>Welcome to WelcomePage!</h1>
    </StyledWelcomePage>
  );
}

export default WelcomePage;
