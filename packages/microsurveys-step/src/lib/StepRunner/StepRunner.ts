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
  public readonly emotionRoot: HTMLElement;
  public readonly shadowRoot: HTMLElement;
  public readonly name = '@samelogic/microsurveys-step';

  constructor(logger: Logger) {
    super(logger);

    // https://mui.com/material-ui/guides/shadow-dom/
    this.container = document.createElement('div');
    this.container.setAttribute('id', 'samelogic-root');
    document.body.appendChild(this.container);

    const shadowContainer = this.container.attachShadow({ mode: 'open' });
    const emotionRoot = document.createElement('style');
    const shadowRootElement = document.createElement('div');
    shadowContainer.appendChild(emotionRoot);
    shadowContainer.appendChild(shadowRootElement);

    this.emotionRoot = emotionRoot;
    this.shadowRoot = shadowRootElement;
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
      container: this.container,
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
      anchorEl: anchorEl ?? undefined,
      currentQuestion: 0,
    };
    render(appProps, this.shadowRoot, this.emotionRoot);
  }
}
