import { forwardRef, useEffect, createRef, RefObject, LegacyRef } from 'react';

interface Props extends ClassName, AnyProps {
    type?: 'text' | 'password' | 'number' | 'email' | 'tel';
    isFocused?: boolean;
}

type InputRef = LegacyRef<HTMLInputElement> | RefObject<HTMLInputElement>;

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }: Props, ref: InputRef) {
    const input: InputRef = ref ? ref : createRef<HTMLInputElement>();

    useEffect(() => {
        if (typeof input === 'string') {
           return;
        }
        if (typeof input === 'function') {
            return;
        }
        if (isFocused && 'current' && input.current) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});
