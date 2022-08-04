import styled from '@emotion/styled';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { IconChevronDown } from '@tabler/icons';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Controller } from 'react-hook-form';
import { BaseFieldProps } from '../../BaseFieldProps';

/* eslint-disable-next-line */
export interface QuestionPropertiesProps extends BaseFieldProps {}

const StyledAccordion = styled(Accordion)({});
const StyledAccordionSummary = styled(AccordionSummary)({
  padding: '0px',
  display: 'inline-flex',
});
const StyledAccordionDetails = styled(AccordionDetails)({
  padding: '0px',
});

export function QuestionProperties({
  control,
  fieldIndex,
  pageIndex,
}: QuestionPropertiesProps) {
  return (
    <StyledAccordion disableGutters elevation={0}>
      <StyledAccordionSummary
        expandIcon={<IconChevronDown />}
        aria-controls="properties-content"
      >
        Properties
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <Controller
          name={`pages.${pageIndex}.fields.${fieldIndex}.properties.description`}
          control={control}
          defaultValue=""
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <TextField
              fullWidth
              variant="outlined"
              label="Description"
              placeholder=""
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              inputRef={ref}
            />
          )}
        />

        <Controller
          name={`pages.${pageIndex}.fields.${fieldIndex}.properties.required`}
          control={control}
          defaultValue={false}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <FormControlLabel
              control={
                <Checkbox
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  inputRef={ref}
                />
              }
              label="Required"
            />
          )}
        />
      </StyledAccordionDetails>
    </StyledAccordion>
  );
}

export default QuestionProperties;
