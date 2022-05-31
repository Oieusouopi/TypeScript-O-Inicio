
export function greeter(name: string) {
    return `Olá ${name}`;
};

export function personAge(name: string, age: number) {
    return `${name} tem ${age}`;
};

export function sum(x: number, y: number): number {
    return x + y;
};

export function sumArray(numbers: number[]): number {
    return numbers.reduce(sum, 0);
};

export function areaTriangle(base: number, height: number): number {
    return (base * height) / 2;
};

export function areaSquare(side: number): number {
    return side ** 2;
};

export function areaReactangle(base: number, height: number): number {
    return base * height;
};

export function areaDiamond(biggestDiagonal: number, smallestDiagonal: number): number {
    return (biggestDiagonal * smallestDiagonal) / 2;
};

export function areatrapeze(biggestBase: number, smallestBase: number, height: number): number {
    return ((biggestBase + smallestBase) * height) / 2;
};

export function areaCircle(radius: number): number {
    return (radius ** 2) * 3.14;
};