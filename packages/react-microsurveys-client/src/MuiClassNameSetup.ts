// MuiClassNameSetup.js
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';

ClassNameGenerator.configure((componentName) => `sl1-${componentName}`);
