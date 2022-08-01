import { WorkflowContext } from '@samelogic/steps';
import {
  Field,
  FieldType,
  Form,
  FormType,
  Page,
  PageType,
} from '@samelogic/react-microsurveys';
import * as Factory from 'factory.ts';
import { faker } from '@faker-js/faker';

export const fieldFactory = Factory.Sync.makeFactory<Field>({
  id: faker.datatype.uuid(),
  title: faker.lorem.sentence(),
  type: FieldType.LongText,
});

export const pageFactory = Factory.Sync.makeFactory<Page>({
  type: PageType.Fields,
  title: faker.lorem.sentence(),
  fields: fieldFactory.buildList(faker.datatype.number({ min: 1, max: 5 })),
});

export const formFactory = Factory.Sync.makeFactory<Form>({
  title: 'some form title',
  type: FormType.Form,
  pages: pageFactory.buildList(faker.datatype.number({ min: 1, max: 5 })),
});

export const worklflowContextFactory =
  Factory.Sync.makeFactory<WorkflowContext>({
    events: {},
    identity: {
      sessionId: faker.datatype.uuid(),
      userId: faker.datatype.uuid(),
    },
    metadata: {
      name: faker.lorem.sentence(),
    },
  });
