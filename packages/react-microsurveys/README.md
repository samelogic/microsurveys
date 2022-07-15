# @samelogic/react-microsurveys

This is the main entry-point to the Samelogic Microsurvey client and editor UI components.

Built on react and mui.

# Usage

## `MicrosurveysClient`

```tsx
import { Form, MicrosurveyClient } from '@samelogic/react-microsurveys';

export interface PlaygroundProps {
  form: Form;
}

export const Playground: React.FC<MicrosurveyEditorProps> = ({ form }) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Editor />
      </Grid>
      <Grid item xs={6}>
        <MicrosurveyClient form={form} />
      </Grid>
    </Grid>
  );
};
```
