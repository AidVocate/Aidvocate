import { useState, createContext, useContext, Fragment } from 'react';
import { Link } from '@inertiajs/react';
import { Method } from '@inertiajs/core';
import { Transition } from '@headlessui/react';


/* Interfaces */

interface Context {
    open: boolean;
    setOpen: (value: boolean) => void;
    toggleOpen: () => void
}

interface DropdownProps extends Children {
    Trigger?: Children;
    Content?: ContentProps;
    Link?: DropdownLinkProps;
}

interface ContentProps extends Children {
    align?: string;
    width?: string;
    contentClasses?: string;
}

interface DropdownLinkProps extends Children {
    className?: string;
    contentClasses?: string;
    href: string;
    method?: Method;
    as?: string;
}

/* Component */

const DropDownContext = createContext<Context>({
    open: false,
    setOpen: (_: boolean) => null,
    toggleOpen: () => null
});

const Dropdown = ({ children }: DropdownProps) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="relative">{children}</div>
        </DropDownContext.Provider>
    );
};

const Trigger = ({ children }: Children) => {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext);
    return (
        <>
            <div onClick={toggleOpen}>{children}</div>
            {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>}
        </>
    );
};

const Content = ({ align = 'right', width = '48', contentClasses = 'py-1 bg-white', children }: ContentProps) => {
    const { open, setOpen } = useContext(DropDownContext);
    let alignmentClasses = 'origin-top';
    if (align === 'left') {
        alignmentClasses = 'ltr:origin-top-left rtl:origin-top-right start-0';
    } else if (align === 'right') {
        alignmentClasses = 'ltr:origin-top-right rtl:origin-top-left end-0';
    }

    let widthClasses = '';
    if (width === '48') {
        widthClasses = 'w-48';
    }

    return (
        <>
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div
                    className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
                    onClick={() => setOpen(false)}
                >
                    <div className={`rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses}>{children}</div>
                </div>
            </Transition>
        </>
    );
};

const DropdownLink = ({ className = '', href, method, children, as }: DropdownLinkProps) => {
    return (
        <Link
            href={href}
            method={method}
            as={as}
            className={
                'block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ' +
                className
            }
        >
            {children}
        </Link>
    );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;

export default Dropdown;
