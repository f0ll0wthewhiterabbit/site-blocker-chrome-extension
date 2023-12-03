import { UiButton } from '@/shared/ui/ui-button';
import { useToggleBlocking } from '../model/use-toggle-blocking';

export function ToggleBlockingButton() {
  const { isBlockingEnabled, isLoading, toggleBlocking, isReady } = useToggleBlocking();

  if (!isReady) {
    return null;
  }

  return (
    <UiButton
      disabled={isLoading}
      variant={isBlockingEnabled ? 'secondary' : 'primary'}
      onClick={toggleBlocking}
    >
      {isBlockingEnabled ? 'Disable Blocking' : 'Enable Blocking'}
    </UiButton>
  );
}
