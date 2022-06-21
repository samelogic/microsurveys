import React from 'react';
import { FieldAnswer, Response } from '@samelogic/microsurveys-types';

export interface ResponseContextType {
  response: Response;
  saveAnswer: (answer: FieldAnswer) => void;
}

export const ResponseContext = React.createContext<ResponseContextType | null>(
  null
);

export interface ResponseProviderProps {
  children?: React.ReactNode;
  value?: Response;
}

const ResponseProvider = ({ children, value }: ResponseProviderProps) => {
  const [response, setResponse] = React.useState<Response>(
    value || {
      answers: [],
    }
  );

  const saveAnswer = (answer: FieldAnswer) => {
    // update the answer if exists
    const answers = [...response.answers]; // clone before updating
    const index = answers.findIndex((a) => a.field?.id === answer.field?.id);
    if (index !== -1) {
      answers[index] = answer;
    }
    // add the answer if not exists
    else {
      answers.push(answer);
    }
    // find all dependsOn answers and remove them
    answers.forEach((a, i) => {
      if (
        a.field?.properties?.dependsOn &&
        a.field?.properties?.dependsOn === answer.field?.id
      ) {
        answers.splice(i, 1);
      }
    });

    setResponse({ ...response, answers });
  };
  return (
    <ResponseContext.Provider value={{ response, saveAnswer }}>
      {children}
    </ResponseContext.Provider>
  );
};

export default ResponseProvider;
