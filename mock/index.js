const mock1 = {
  a: [1, 2, 3, [1, 2, 3, 4, [{ a: "string1", b: "string2" }]]],
  b: [1, 2, 3, [1, 2, 3, 4, [{ a: "string3", b: "string4" }]]],
  c: undefined,
  e: null,
  f: NaN,
  g: [],
  key1: {
    keyA: "valueI",
  },
  key2: {
    keyB: "valueII",
  },
  key3: { a: { b: { c: 2 } } },
  key4: [],
  key5: {
    a: [
      "value1",
      "value2",
      {
        key1: {
          keyA: "valueI",
          keyB: [1, 2, 3, 4],
        },
      },
    ],
    b: null,
    c: [],
  },
  key6: {},
};
const mock2 = {
  a: [1, 2, 3, [1, 2, 3, 4, [{ a: "string1", b: "string2" }]]],
  b: [1, 2, 3, [1, 2, 3, 4, [{ a: "string3", b: "string4" }]]],
  c: undefined,
  e: null,
  f: NaN,
  g: [],
  key1: {
    keyA: "valueI",
  },
  key2: {
    keyB: "valueII",
  },
  key3: { a: { b: { c: 2 } } },
  key4: [],
  key5: {
    a: [
      "value1",
      "value2",
      {
        key1: {
          keyA: "valueI",
          keyB: [1, 2, 3, 4],
        },
      },
    ],
    b: null,
    c: {},
  },
  key6: {},
};
module.exports = {
  mock1,
  mock2,
};
