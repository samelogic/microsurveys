import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactMicrosurveysClientProps {}

const StyledReactMicrosurveysClient = styled.div`
  color: pink;
`;

export function ReactMicrosurveysClient(props: ReactMicrosurveysClientProps) {
  return (
    <StyledReactMicrosurveysClient>
      <h1>Welcome to ReactMicrosurveysClient!</h1>
    </StyledReactMicrosurveysClient>
  );
}

export default ReactMicrosurveysClient;
