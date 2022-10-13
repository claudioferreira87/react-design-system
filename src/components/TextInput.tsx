import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className='flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full h-12 focus-within:ring-2 ring-cyan-300'>
      { children }
    </div>
  )
}

  TextInputRoot.displayName = 'TextInput.Root';

interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon = ({ children }: TextInputIconProps) => {
return (
  <Slot className='w-6 h-6 text-gray-400'>
    {children}
  </Slot>
)
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputLabProps extends InputHTMLAttributes<HTMLInputElement> { }

const TextInputLab = (props: TextInputLabProps) => {

  return (
    <input className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none' {...props} />
  )
}

TextInputLab.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputLab,
  Icon: TextInputIcon,
}