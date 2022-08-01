import Ajv from 'ajv';
import { Logger, Step, StepEvent } from '@samelogic/steps';
import RunnerPackage from './RunnerPackage';
import { EventTypes } from '../StepRunner/events';
import { FieldType, Response } from '@samelogic/react-microsurveys';
import { mock, MockProxy } from 'jest-mock-extended';

const ajv = new Ajv();

describe('RunnerPackage exports', () => {
  it('should export a `module` and `schema`', () => {
    expect(RunnerPackage.module).not.toBeNull();
    expect(RunnerPackage.schema).not.toBeNull();
  });
  describe('module', () => {
    let runnerModule: Step<unknown>;
    let loggerMock: MockProxy<Logger>;

    beforeEach(() => {
      loggerMock = mock<Logger>();
      const StepRunner = RunnerPackage.module;
      runnerModule = new StepRunner(loggerMock);
    });
    it('should create an instance of StepRunner', () => {
      expect(runnerModule).not.toBeNull();
    });
  });

  describe('schemas', () => {
    describe('OnSubmit', () => {
      const message: StepEvent = {
        stepName: '@samelogic/microsurveys-step',
        event: EventTypes.OnSubmit,
        data: {
          answers: [
            {
              field: {
                id: 'test',
                type: FieldType.DropDown,
              },
              type: 'text',
              text: 'test',
            },
          ],
        } as Response,
      };
      it('should export a valid OnSubmit Event', () => {
        const { events } = RunnerPackage.schema;

        const onSubmitSchema = events[EventTypes.OnSubmit];

        const isValid = ajv.validate(onSubmitSchema as object, message.data);

        expect(isValid).toBeTruthy();
      });
    });
  });
});
