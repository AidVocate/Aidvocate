interface Props extends Children, ClassName {
    value: string;
    htmlFor: string;
}

export default function InputLabel({ value, htmlFor, className = '', children }: Props) {
    return (
        <label htmlFor={htmlFor} className={`block font-medium text-sm text-gray-700 ` + className}>
            {value ? value : children}
        </label>
    );
}
