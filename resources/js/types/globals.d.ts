import type { Page } from '@inertiajs/react';
import { AxiosInstance } from 'axios';
import route, { Config as ZiggyConfig } from 'ziggy-js';
import { ReactNode, FormEvent, ChangeEvent } from 'react';


declare global {
    interface Window {
        axios: AxiosInstance;
    }
    
    var route: typeof route;
    var Ziggy: ZiggyConfig;

    /* Page and Components Globals */
    interface Children {
        children?: ReactNode;
    }
    interface ClassName {
        className?: string;
    }
    interface AnyProps  {
        [key: string]: any; // Allows additional props of any type
    }
    type FormEvent = FormEvent;
    type ChangeEvent = ChangeEvent<HTMLInputElement>;
}

declare module 'react' {
    interface ComponentCustomProperties {
        route: typeof route;
    }
}


declare module '@inertiajs/core' {
    interface PageProps extends Page<PageProps> {
        user: inertia.User
        jetstream: inertia.Jetstream
        errors: inertia.Errors
        errorBags: inertia.ErrorBags
        flash: inertia.Flash
    }
}

declare module '@inertiajs/react' {
    export function usePage<T>(): Page<T>
}