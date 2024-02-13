export const lift_single = <T>(x: T | T[]): T[] => Array.isArray(x) ? x : [x];
