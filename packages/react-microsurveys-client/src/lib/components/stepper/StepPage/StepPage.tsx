import { Page, PageType } from '@samelogic/microsurveys-types';
import FieldPage from '../FieldPage/FieldPage';
import ThankYouPage from '../ThankYouPage/ThankYouPage';
import WelcomePage from '../WelcomePage/WelcomePage';

/* eslint-disable-next-line */
export interface StepPageProps {
  page: Page;
  onNext?: (data?: Record<string, string>) => void;
  onBack?: () => void;
  onCancel?: () => void;
}

export function StepPage(props: StepPageProps) {
  switch (props.page.type) {
    case PageType.Fields:
      return <FieldPage {...props} />;
    case PageType.Welcome:
      return <WelcomePage {...props} />;
    case PageType.ThankYou:
      return <ThankYouPage {...props} />;
    default:
      return null;
  }
}

export default StepPage;
