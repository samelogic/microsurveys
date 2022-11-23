import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import PoweredBy from '../PoweredBy/PoweredBy';
import { StepPageProps } from '../StepPage/StepPage';
import Confetti from './confetti.svg';

/* eslint-disable-next-line */
export interface ThankYouPageProps extends StepPageProps {}

const StyledThankYouPage = styled.div({
  padding: '0 18px 0px',
  boxSizing: 'border-box',
  textAlign: 'center',
  fontFamily: 'Roboto, sans-serif',
});

const StyledHeader = styled.h3({
  marginTop: '10px',
  marginBottom: '30px',
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

const StyledCloseButton = styled(Button)({
  backgroundColor: 'rgb(138, 91, 255)',
});

export function ThankYouPage({ onNext }: ThankYouPageProps) {
  return (
    <>
      <StyledThankYouPage>
        <img src={Confetti} style={{ height: '6em' }} />
        <StyledHeader>Thank you for your feedback!</StyledHeader>
        <Box textAlign="center">
          {/* <StyledViralLoopBox flexGrow={1}>
          <StyledViralLoopLink href="https://samelogic.com" target="_blank">
            Create your own!
            </StyledViralLoopLink>
          </StyledViralLoopBox> */}
        </Box>
      </StyledThankYouPage>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ alignSelf: 'end' }}>
          <PoweredBy />
        </div>
        <StyledCloseButton
          onClick={() => {
            onNext?.();
          }}
          color="primary"
          variant="contained"
          disableElevation
        >
          Close
        </StyledCloseButton>
      </div>
    </>
  );
}

export default ThankYouPage;
