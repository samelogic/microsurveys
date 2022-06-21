import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactMicrosurveysEditorProps {}

const StyledReactMicrosurveysEditor = styled.div`
  color: pink;
`;

export function ReactMicrosurveysEditor(props: ReactMicrosurveysEditorProps) {
  return (
    <StyledReactMicrosurveysEditor>
      <h1>Welcome to ReactMicrosurveysEditor!</h1>
    </StyledReactMicrosurveysEditor>
  );
}

export default ReactMicrosurveysEditor;
