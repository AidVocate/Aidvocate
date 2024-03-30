interface Props extends ClassName {
    disabled: boolean
}

export default function Checkbox({ className = '', disabled }: Props) {
    return (
        <input
            disabled={disabled}
            type="checkbox"
            className={
                'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ' +
                className
            }
        />
    );
}
