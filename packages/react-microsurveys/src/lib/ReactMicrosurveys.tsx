import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactMicrosurveysProps {}

const StyledReactMicrosurveys = styled.div`
  color: pink;
`;

export function ReactMicrosurveys(props: ReactMicrosurveysProps) {
  return (
    <StyledReactMicrosurveys>
      <h1>Welcome to ReactMicrosurveys!</h1>
    </StyledReactMicrosurveys>
  );
}

export default ReactMicrosurveys;
