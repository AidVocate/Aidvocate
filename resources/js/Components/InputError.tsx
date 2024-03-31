interface Props extends ClassName, AnyProps {
    message?: string;
}

export default function InputError({ message, className = '', ...props }: Props) {
    return message ? (
        <p {...props} className={'text-sm text-red-600 ' + className}>
            {message}
        </p>
    ) : null;
}
