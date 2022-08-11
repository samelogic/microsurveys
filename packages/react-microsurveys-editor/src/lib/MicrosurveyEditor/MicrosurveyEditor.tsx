import { RefObject, useState } from 'react';
import styled from '@emotion/styled';
import { Form } from '@samelogic/microsurveys-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconPalette, IconNotebook } from '@tabler/icons';
import { FormProvider, useForm } from 'react-hook-form';
import PagesManager from '../components/pages/PagesManager/PagesManager';
import TitleEditor from '../components/fields/TitleEditor/TitleEditor';
import StyleEditor from '../components/dialog/StyleEditor/StyleEditor';
import PlacementEditor from '../components/dialog/PlacementEditor/PlacementEditor';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const StyledCard = styled(Card)(
  ({ theme }) => `
    border: 1px solid #ccc;
    margin: 1em;
`
);

const StyledCardHeader = styled(CardHeader)(
  ({ theme }) => `
    border-bottom: 1px solid #ccc;
`
);

const StyledTabBody = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  flex-grow: 1;
`;
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <StyledTabBody
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </StyledTabBody>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export interface MicrosurveyEditorProps {
  form: Form;
  formRef?: RefObject<HTMLFormElement>;
  onChange?: (form: Partial<Form>) => void;
  onSubmit?: (form: Form) => void;
}

export function MicrosurveyEditor({
  form,
  formRef,
  onChange,
  onSubmit,
}: MicrosurveyEditorProps) {
  const [tab, setTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const methods = useForm<Form>({
    defaultValues: form,
    mode: 'onBlur',
  });

  methods.watch((values) => {
    onChange?.(values as Partial<Form>);
  });

  const onSubmitLocal = (values: Form) => {
    onSubmit?.(values);
  };

  return (
    <FormProvider {...methods}>
      <form ref={formRef} onSubmit={methods.handleSubmit(onSubmitLocal)}>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Tabs
            orientation="vertical"
            value={tab}
            onChange={handleChange}
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab
              icon={<IconNotebook />}
              aria-label="questions"
              {...a11yProps(0)}
            />
            <Tab icon={<IconPalette />} aria-label="style" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={tab} index={0}>
            <StyledCard>
              <StyledCardHeader
                title={<Typography variant="h5">Title</Typography>}
              />
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" color="inherit">
                      Title of your microsurvey
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TitleEditor />
                  </Grid>
                </Grid>
              </CardContent>
            </StyledCard>
            <StyledCard>
              <StyledCardHeader
                title={<Typography variant="h5">Questions</Typography>}
              />
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" color="inherit">
                      Ask your questions.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <PagesManager />
                  </Grid>
                </Grid>
              </CardContent>
            </StyledCard>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <StyledCard>
              <StyledCardHeader
                title={<Typography variant="h5">Styles</Typography>}
              />
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" color="inherit">
                      Modify the look and feel of the microsurvey.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <StyleEditor />
                  </Grid>
                </Grid>
              </CardContent>
            </StyledCard>

            <StyledCard>
              <StyledCardHeader
                title={<Typography variant="h5">Placement</Typography>}
              />
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" color="inherit">
                      Set your position of the microsurvey.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <PlacementEditor />
                  </Grid>
                </Grid>
              </CardContent>
            </StyledCard>
          </TabPanel>
        </Box>
      </form>
    </FormProvider>
  );
}

export default MicrosurveyEditor;
