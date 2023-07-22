import {sumar,restar,multiplicar,dividir} from "../src/utils/operaciones"

test('sumar 1 + 2 es igual a 3', () => {
  expect(sumar(1, 2)).toBe(3);
});

test('restar 2 - 1 es igual a 1', () => {
  expect(restar(2, 1)).toBe(1);
});

test('multiplicar 3 * 5 es igual a 15', () => {
  expect(multiplicar(3, 5)).toBe(15);
});

test('dividir 8 / 2 es igual a 4', () => {
  expect(dividir(8, 2)).toBe(4);
});