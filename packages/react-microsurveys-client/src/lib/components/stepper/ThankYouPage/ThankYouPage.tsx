import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { StepPageProps } from '../StepPage/StepPage';

/* eslint-disable-next-line */
export interface ThankYouPageProps extends StepPageProps {}

const StyledThankYouPage = styled.div({
  padding: '0 18px 18px',
  boxSizing: 'border-box',
  textAlign: 'center',
  fontFamily: 'Roboto, sans-serif',
});

const StyledHeader = styled.h3({
  marginTop: '50px',
  marginBottom: '50px',
  fontWeight: 400,
});

const StyledViralLoopBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.9em',
});
const StyledViralLoopLink = styled(Link)({
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'none',
  },
});

const StyledReturnButton = styled(Button)({});

export function ThankYouPage({ onNext }: ThankYouPageProps) {
  return (
    <StyledThankYouPage>
      <StyledHeader>Thank you for your feedback!</StyledHeader>
      <Box textAlign="center">
        {/* <StyledViralLoopBox flexGrow={1}>
          <StyledViralLoopLink href="https://samelogic.com" target="_blank">
            Create your own!
          </StyledViralLoopLink>
        </StyledViralLoopBox> */}
        <StyledReturnButton
          onClick={() => {
            onNext?.();
          }}
          color="primary"
          variant="contained"
        >
          You&apos;re Welcome!
        </StyledReturnButton>
      </Box>
    </StyledThankYouPage>
  );
}

export default ThankYouPage;
