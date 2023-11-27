import { UiButton } from '@/shared/ui/ui-button';
import { UiTextField } from '@/shared/ui/ui-text-field';

export function SignUpForm() {
  return (
    <form className="flex flex-col gap-2">
      <UiTextField label="Email" />
      <UiTextField label="Password" />
      <UiButton variant="primary">Sign Up</UiButton>
    </form>
  );
}
