import styled from '@emotion/styled';
import { FieldType, Form, PageType } from '@samelogic/microsurveys-types';
import { useFieldArray, useFormContext } from 'react-hook-form';
import AddFieldPageButton from '../../shared/AddFieldPageButton/AddFieldPageButton';
import PageItem from '../PageItem/PageItem';
/* eslint-disable-next-line */
export interface PagesManagerProps {}

const StyledPagesManager = styled.div``;

const AddFieldPageButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export function PagesManager(props: PagesManagerProps) {
  const { control } = useFormContext<Form>();

  const { fields, append, move, remove } = useFieldArray({
    name: 'pages',
    control: control,
  });

  const onAddFieldPage = (type: FieldType) => {
    switch (type) {
      case FieldType.LongText:
        append({
          type: PageType.Fields,
          fields: [
            {
              id: Math.random().toString(),
              type: FieldType.LongText,
              title: '',
            },
          ],
        });
        break;
      case FieldType.DropDown:
        append({
          type: PageType.Fields,
          fields: [
            {
              id: Math.random().toString(),
              type: FieldType.DropDown,
              title: '',
            },
          ],
        });
        break;
      default:
        break;
    }
  };
  return (
    <StyledPagesManager>
      {fields.map((field, index) => {
        return (
          <PageItem
            key={field.id}
            remove={remove}
            move={move}
            control={control}
            index={index}
            fieldLength={fields.length}
            value={field}
          />
        );
      })}
      <AddFieldPageButtonContainer>
        <AddFieldPageButton
          variant="contained"
          color="primary"
          onSelect={onAddFieldPage}
        >
          Add Page
        </AddFieldPageButton>
      </AddFieldPageButtonContainer>
    </StyledPagesManager>
  );
}

export default PagesManager;
