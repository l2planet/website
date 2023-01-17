import { useCallback, useState } from 'react';

/**
 * ## useBoolean
 * A hook that provides an easy to use interface to manage boolean states.
 * ## Usage
 * ```jsx
 * function TopBar() {
 *     const [isMenuOpen, toggleMenuOpen] = useBoolean(false)
 *
 *     return (
 *         <div>
 *             <button onClick={toggleMenuOpen}>
 *                 Menu
 *             </button>
 *             {isMenuOpen && <Menu/>}
 *         </div>
 *     )
 * }
 * ```
 */
export function useBoolean(defaultValue: boolean) {
    const [value, setValue] = useState<boolean>(defaultValue);

    const toggleValue = useCallback(() => {
        setValue((value) => !value);
    }, []);

    return [value, toggleValue] as const;
}
