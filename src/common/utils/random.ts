type Parser = (n: number, ...rest: any[]) => number;

export function nextInt(min?: number, max?: number): number {
  return nextNumber(min, max, Math.floor, true);
}




export function nextNumber(min?: number, max?:number, parser?: Parser, needAdd ?: boolean) {
  min = min ?? 0;
  max = max ?? 1;
  parser = parser ?? (n => n);
  needAdd = needAdd ?? false;

  return parser(Math.random() * (max - min +( needAdd ? 1 : 0)) + min);
}