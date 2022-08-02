import { StepEvent } from '@samelogic/steps';
import { FieldType } from '@samelogic/react-microsurveys';
import { Static, Type } from '@sinclair/typebox';

export enum EventTypes {
  OnSubmit = 'OnSubmit',
  OnUpdate = 'OnUpdate',
  OnClosed = 'OnClosed',
  OnDisplayed = 'OnDisplayed',
}

//#region OnSubmit
/**
 * OnSubmitData is used to share an over-the-wire json schema for the event.
 */
export const OnSubmitDataSchema = Type.Object({
  answers: Type.Array(
    Type.Optional(
      Type.Object({
        field: Type.Optional(
          Type.Object({
            id: Type.String(),
            type: Type.Optional(Type.Enum(FieldType)),
            title: Type.Optional(Type.String()),
            properties: Type.Optional(
              Type.Object({
                dependsOn: Type.String(),
              })
            ),
          })
        ),
        type: Type.Optional(
          Type.String(['choice', 'choices', 'number', 'boolean', 'text'])
        ),
        choice: Type.Optional(
          Type.Object({
            label: Type.Optional(Type.String()),
            other: Type.Optional(Type.String()),
          })
        ),
        choices: Type.Optional(
          Type.Object({
            labels: Type.Optional(Type.Array(Type.String())),
            other: Type.Optional(Type.String()),
          })
        ),
        number: Type.Optional(Type.Number()),
        boolean: Type.Optional(Type.Boolean()),
        text: Type.Optional(Type.String()),
      })
    )
  ),
});

export type OnSubmitData = Static<typeof OnSubmitDataSchema>;

export interface OnSubmitEvent extends StepEvent {
  event: EventTypes.OnSubmit;
  data: OnSubmitData;
}
//#region

//#region

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface OnClosedData {}

export interface OnClosedEvent extends StepEvent {
  event: EventTypes.OnClosed;
  data: OnClosedData;
}
//#endregion

export const EventsSchema = {
  [EventTypes.OnSubmit]: Type.Strict(OnSubmitDataSchema),
};
