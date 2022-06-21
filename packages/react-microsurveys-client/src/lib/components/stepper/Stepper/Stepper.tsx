import { useState } from 'react';
import { Form, PageType } from '@samelogic/microsurveys-types';
import StepPage from '../StepPage/StepPage';

export interface StepperProps {
  form: Form;
  page?: number;

  onSubmit?: (data: Record<string, string>) => void;
  onCancel?: () => void;
}
export function Stepper({
  form: { pages },
  page,
  onCancel,
  onSubmit,
}: StepperProps) {
  const [activeStep, setActiveStep] = useState(page || 0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleNext = (data?: Record<string, string>) => {
    const newAnswers = { ...answers, ...data };
    setAnswers(newAnswers);

    if (pages[activeStep].type === PageType.ThankYou) {
      onSubmit?.(newAnswers);
    } else {
      setActiveStep(activeStep + 1);
    }
  };
  return (
    <>
      {pages.map((page, index) =>
        activeStep === index ? (
          <StepPage
            key={index}
            page={page}
            onNext={handleNext}
            onCancel={onCancel}
            onBack={() => setActiveStep(activeStep - 1)}
          />
        ) : null
      )}
    </>
  );
}

export default Stepper;
