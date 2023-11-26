import clsx from 'clsx';
import { ReactNode } from 'react';
import { UiLogo } from './ui-logo';

export function UiHeader({
  className,
  right,
}: {
  className?: string;
  right?: ReactNode;
}) {
  return (
    <header
      className={clsx(
        'px-4 py-5 border-b border-b-slate-300 flex justify-between items-center',
        className,
      )}
    >
      <UiLogo />
      {right}
    </header>
  );
}
