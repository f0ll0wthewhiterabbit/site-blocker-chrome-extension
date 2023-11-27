import { SignUpForm } from '@/features';
import { UiFormPageLayout } from '@/shared/ui/layouts/ui-form-page-layout';
import { UiHeader } from '@/shared/ui/ui-header';

export function SignUpPage() {
  return (
    <UiFormPageLayout
      title="Sign Up"
      header={<UiHeader />}
      form={<SignUpForm />}
    />
  );
}
