import { useSessionQuery } from '@/entities';
import { ROUTES } from '@/shared/constants/routes';
import { UiPageSpinner } from '@/shared/ui/ui-page-spinner';
import { useRouter } from 'next/navigation';
import { ReactElement } from 'react';

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: P) {
    const router = useRouter();
    const { isLoading, isError } = useSessionQuery();

    if (isLoading) {
      return <UiPageSpinner />;
    }

    if (isError) {
      router.replace(ROUTES.SIGN_IN);
    }

    return <Component {...props} />;
  };
}