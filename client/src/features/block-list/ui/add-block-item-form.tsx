import { AddBlockItemDtoType } from '@/shared/api/generated';
import { UiButton } from '@/shared/ui/ui-button';
import { UiSelectField, UiSelectOption } from '@/shared/ui/ui-select-field';
import { UiTextField } from '@/shared/ui/ui-text-field';
import { useAddBlockItemForm } from '../model/use-add-block-item-form';

const typeOptions: UiSelectOption[] = [
  { label: 'WebSite', value: AddBlockItemDtoType.Website },
  { label: 'KeyWord', value: AddBlockItemDtoType.KeyWord },
];

export function AddBlockItemForm() {
  const { handleSubmit, isLoading, register, type } = useAddBlockItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UiSelectField
        className="grow min-w-[200px]"
        options={typeOptions}
        selectProps={{ ...register('type') }}
      />
      <UiTextField
        className="grow"
        inputProps={{
          placeholder: type === 'KeyWord' ? 'Enter Key Word...' : 'Enter WebSite...',
          ...register('data'),
        }}
      />
      <UiButton variant="primary" disabled={isLoading}>
        Add Block Item
      </UiButton>
    </form>
  );
}
