interface Props extends ClassName, AnyProps {
    checked?: boolean
}

export default function Checkbox({className = '', checked, ...props}: Props) {
    return (
        <input
            {...props}
            checked={checked}
            type="checkbox"
            className={
                'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ' +
                className
            }
            style={{
                border: '1px solid grey',
                borderRadius: '0.375rem'
            }}
        />
    );
}
