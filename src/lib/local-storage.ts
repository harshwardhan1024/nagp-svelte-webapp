export function setItem<T>(key: string, item: T): void {
    localStorage.setItem(key, JSON.stringify(item));
}

export function getItem<T>(key: string): T | null {
    const value = localStorage.getItem(key);

    if (value === null)
        return null;

    return JSON.parse(value) as T;
}