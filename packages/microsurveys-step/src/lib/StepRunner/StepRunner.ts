import {
  EventCallbackFunction,
  Logger,
  Step,
  WorkflowContext,
} from '@samelogic/steps';
import { AppProps } from '../App';
import { Props } from '../schemas';
import { EventTypes } from './events';
import { render } from './render';
import { Response } from '@samelogic/react-microsurveys';

export class StepRunner extends Step<Props> {
  public onEventTriggered: EventCallbackFunction | undefined;
  /**
   * container is the element that holds the react application.
   */
  public readonly container: HTMLElement;
  public readonly name = '@samelogic/microsurveys-step';

  constructor(logger: Logger) {
    super(logger);

    this.container = document.createElement('div');
    document.body.appendChild(this.container);
  }

  run(_context: WorkflowContext, props: Props): Promise<void> {
    this.render(props);

    this.onEventTriggered?.({
      stepName: this.name,
      event: EventTypes.OnDisplayed,
      data: {},
    });

    return Promise.resolve();
  }

  private render(props: Props): void {
    const anchorEl = document.querySelector(props.anchorElCssSelector);
    const appProps: AppProps = {
      onSubmit: (resp: Response) =>
        this.onEventTriggered?.({
          stepName: this.name,
          event: EventTypes.OnSubmit,
          data: resp,
        }),
      onClosed: () =>
        this.onEventTriggered?.({
          stepName: this.name,
          event: EventTypes.OnClosed,
          data: {},
        }),
      form: props.form,
      anchorEl: anchorEl,
      currentQuestion: 0,
    };
    render(appProps, this.container);
  }
}
