import { Logger, WorkflowContext } from '@samelogic/steps';
import { mock, MockProxy } from 'jest-mock-extended';
import { Props } from '../schemas';
import { formFactory, worklflowContextFactory } from '../../utils/testing';
import { StepRunner } from './StepRunner';
import { render } from './render';
import { EventTypes, OnClosedEvent, OnSubmitEvent } from './events';
import { FieldType, Response } from '@samelogic/react-microsurveys';
jest.mock('./render');

const renderMock = render as jest.MockedFunction<typeof render>;

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  renderMock.mockClear();
});

describe('StepRunner', () => {
  let runner: StepRunner;
  let loggerMock: MockProxy<Logger>;
  let workflowContext: WorkflowContext;
  let props: Props;
  const onEventTriggeredMock = jest.fn();

  beforeEach(() => {
    loggerMock = mock<Logger>();
    workflowContext = worklflowContextFactory.build();
    props = {
      form: formFactory.build(),
      anchorElCssSelector: '#test',
      currentQuestion: 0,
    };
    runner = new StepRunner(loggerMock);
    runner.onEventTriggered = onEventTriggeredMock;
  });
  it('should attach the created container to the DOM', () => {
    expect(document.body.contains(runner.container)).toBeTruthy();
  });
  describe('when run', () => {
    beforeEach(async () => {
      await runner.run(workflowContext, props);
    });
    describe('when anchor CssSelector is not found', () => {
      beforeEach(async () => {
        document.body.innerHTML = `
        <button id="t">click me!</button>
        `;
        await runner.run(workflowContext, props);
      });
      it('should render without an anchorEl', () => {
        expect(renderMock).toHaveBeenCalledWith(
          expect.objectContaining({
            form: props.form,
            anchorEl: undefined,
          }),
          runner.container,
          runner.emotionRoot
        );
      });
    });
    describe('when anchor CssSelector exists', () => {
      beforeEach(async () => {
        document.body.innerHTML = `
      <button id="test">click me!</button>
      `;
        await runner.run(workflowContext, props);
      });
      it('should render with the right props', () => {
        expect(renderMock).toHaveBeenCalledWith(
          expect.objectContaining({
            form: props.form,
            anchorEl: document.getElementById('test'),
          }),
          runner.container,
          runner.emotionRoot
        );
      });
    });

    describe('when OnSubmit event is fired', () => {
      const expectedMessage: OnSubmitEvent = {
        event: EventTypes.OnSubmit,
        stepName: '@samelogic/microsurveys-step',
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
      beforeEach(() => {
        const { onSubmit } = renderMock.mock.calls[0][0];
        onSubmit?.(expectedMessage.data as Response);
      });
      it('should fire OnSubmit event', () => {
        expect(onEventTriggeredMock).toBeCalledWith(expectedMessage);
      });
    });
    describe('when OnClosed event is fired', () => {
      const expectedMessage: OnClosedEvent = {
        event: EventTypes.OnClosed,
        stepName: '@samelogic/microsurveys-step',
        data: {},
      };
      beforeEach(() => {
        const { onClosed } = renderMock.mock.calls[0][0];
        onClosed?.();
      });
      it('should publish the OnClosed event', () => {
        expect(onEventTriggeredMock).toBeCalledWith(expectedMessage);
      });
    });
  });
});
