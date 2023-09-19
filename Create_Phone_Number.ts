export function createPhoneNumber(numbers: number[]): string {
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
  };