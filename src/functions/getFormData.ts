import { FormEvent } from 'react'

/**
 * Generic function that extracts form data from a `FormEvent`.
 */
export function getFormData<T>(event: FormEvent<HTMLFormElement>) {
    return Object.fromEntries(new FormData(event.currentTarget)) as T
}
