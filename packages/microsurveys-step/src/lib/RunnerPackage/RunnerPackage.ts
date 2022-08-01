import { StepPackage } from '@samelogic/steps';
import { schema } from '../schemas';
import { StepRunner } from '../StepRunner';

export default {
  module: StepRunner,
  schema: schema,
} as StepPackage;
