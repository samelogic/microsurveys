import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MicrosurveysStepProps {}

const StyledMicrosurveysStep = styled.div`
  color: pink;
`;

export function MicrosurveysStep(props: MicrosurveysStepProps) {
  return (
    <StyledMicrosurveysStep>
      <h1>Welcome to MicrosurveysStep!</h1>
    </StyledMicrosurveysStep>
  );
}

export default MicrosurveysStep;
