import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type UiButtonVariant = 'primary' | 'secondary' | 'outlined';

export type UiButtonProps = {
  variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UiButton({ className, variant, ...props }: UiButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        'px-4 h-10 rounded cursor-pointer flex gap-2 items-center justify-center disabled:cursor-not-allowed',
        {
          primary:
            'text-white bg-teal-500 hover:bg-teal-600 focus-visible:bg-teal-600 disabled:bg-teal-300 shadow shadow-teal-500/30',
          secondary:
            'text-white bg-rose-500 hover:bg-rose-600 focus-visible:bg-rose-600 disabled:bg-rose-300 shadow shadow-rose-500/30',
          outlined:
            'border border-slate-300 enabled:hover:border-slate-500 enabled:focus-visible:bg-slate-200 disabled:border-slate-100 disabled:text-slate-400',
        }[variant],
      )}
    />
  );
}
