import {
  FieldAnswer,
  Field,
  Form,
  Response,
  FieldType,
} from '@samelogic/microsurveys-types';

export function buildFormResponse(
  form: Form,
  answers: Record<string, string>
): Response {
  const response: Response = {
    answers: [],
  };
  for (const page of form.pages) {
    if (page.fields) {
      for (const field of page.fields) {
        if (field.id in answers) {
          response.answers.push(getFieldAnswer(field, answers[field.id]));
        }
      }
    }
  }
  return response;
}

function getFieldAnswer(field: Field, value: string): FieldAnswer {
  switch (field.type) {
    case FieldType.LongText:
      return {
        field: {
          id: field.id,
          type: field.type,
          title: field.title,
        },
        type: 'text',
        text: value,
      };
    case FieldType.DropDown:
    case FieldType.RadioButton:
      return {
        field: {
          id: field.id,
          type: field.type,
          title: field.title,
        },
        type: 'choice',
        choice: {
          label: value,
        },
      };

    default:
      throw Error('Unsupported field type');
  }
}
