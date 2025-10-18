function createArray (length: number): number[] {

    const array: number[] = [];

    for (let i = 0; i < length; i++) {

        array.push(2025 - i);
    }

    return array;
}

export const years: number[] = [...createArray(17)] as const;
