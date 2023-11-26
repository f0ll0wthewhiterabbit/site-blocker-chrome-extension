import { authControllerGetSessionInfo } from '@/shared/api/generated';
import { useQuery } from '@tanstack/react-query';
import { UiButton } from '@/shared/ui/ui-button';
import { UiTextField } from '@/shared/ui/ui-text-field';
import { UiSelectField } from '@/shared/ui/ui-select-field';
import { UiLink } from '@/shared/ui/ui-link';
import { UiSpinner } from '@/shared/ui/ui-spinner';
import { UiPageSpinner } from '@/shared/ui/ui-page-spinner';
import { UiHeader } from '@/shared/ui/ui-header';

export function HomePage() {
  const { data } = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main className="min-h-screen">
      <UiHeader right={<div>{data?.email}</div>} />
      <UiButton variant="primary">Primary</UiButton>
      <UiButton variant="secondary">Secondary</UiButton>
      <UiButton variant="outlined">Outlined</UiButton>
      <UiButton disabled variant="primary">
        Primary disabled
      </UiButton>
      <UiButton disabled variant="secondary">
        Secondary disabled
      </UiButton>
      <UiButton disabled variant="outlined">
        Outlined disabled
      </UiButton>
      <UiTextField
        label="Text field"
        inputProps={{ placeholder: 'Enter email...' }}
      />
      <UiTextField
        inputProps={{ placeholder: 'Enter email...' }}
        error="This field is required"
      />
      <UiTextField inputProps={{ placeholder: 'Enter email...' }} />
      <UiSelectField
        selectProps={{ placeholder: 'Enter email...' }}
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ]}
      />
      <UiLink href="https://www.google.com" target="_blank">
        https://www.google.com
      </UiLink>
      <UiSpinner className="text-teal-600 w-10 h-10" />
      {/* <UiPageSpinner /> */}
    </main>
  );
}
