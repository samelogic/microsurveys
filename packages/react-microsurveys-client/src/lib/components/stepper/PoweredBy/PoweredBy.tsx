import { useTheme } from '@mui/material/styles';

export function PoweredBy() {
  const theme = useTheme();
  return (
    <a
      style={{
        color: 'rgb(78, 78, 78)',
        textDecoration: 'none',
        textAlign: 'left',
        fontSize: '0.8rem',
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      }}
      href="https://samelogic.com"
      target="_blank"
      rel="noreferrer"
    >
      Research{' '}
      <span role="img" aria-label="powered">
        ⚡
      </span>{' '}
      by{' '}
      <span style={{ color: theme.palette.primary.main, fontWeight: '600' }}>
        Samelogic
      </span>
    </a>
  );
}

export default PoweredBy;
