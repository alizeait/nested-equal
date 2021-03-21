const { mock1, mock2 } = require("../mock");
const { nestedEqual } = require("../src");

describe("nestedEqual", () => {
  test.each([
    [mock1, mock2, false],
    [{ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }, true],
    [[undefined], [null, {}], false],
    [
      [1, 2, 3, 5, { a: 1, b: 2, c: [{}, null] }],
      [1, 2, 3, 5, { a: 1, b: 2, c: [{}, NaN] }],
      false,
    ],
    [
      [1, 2, 3, 4, { a: 1, b: 2, c: "10" }],
      [1, 2, 3, 4, { a: 1, d: 4, c: [1, 2, 4, { a: "string" }] }],
      false,
    ],
    [
      [1, 2, 3, 4, { a: 1, b: 2, c: "10" }],
      [1, 2, 3, 4, { a: 1, b: 2, c: "10" }],
      true,
    ],
    ["b", "b", true],
    [NaN, NaN, true],
    [null, null, true],
    [undefined, undefined, true],
    [0, 0, true],
    [undefined, null, false],
    [
      [1, 2, 3, 4, { a: 1, b: 2, c: "10" }, {}, {}],
      [1, 2, 3, 4, { a: 1, b: 2, c: "10" }, {}, {}],
      true,
    ],
    [
      { a: "a", b: "b", c: "c" },
      { a: "a", b: "b", c: "c", d: "d", e: [1] },
      false,
    ],
    [
      { a: "a", b: "b", c: "c", d: "d", e: [1] },
      { a: "a", b: "b", c: "c", d: "d", e: [1] },
      true,
    ],
    [[1, 2, 3, 4], [1, 2, 3, 4], true],
    [[], [], true],
    [[], [{}], false],
    [[], {}, false],
    [1, "1", false],
    [1, 1, true],
    [
      [1, 2, 3, 4, { a: 1, b: 2, c: mock1, d: mock2 }, {}, {}],
      [1, 2, 3, 4, { a: 1, b: 2, c: mock1, d: mock2 }, {}, {}],
      true,
    ],
    [
      [1, 2, 3, 4, { a: 1, b: 2, c: mock1, d: mock2 }, {}, {}],
      [1, 2, 3, 4, { a: 1, b: 2, c: mock1, d: { s: 1, ...mock2 } }, {}, {}],
      false,
    ],
    [{ a: 2, b: 3 }, { b: 3, a: 2 }, true],
    [[1, 2], [2, 1], false],
  ])("nestedEqual(%p, %p) = %p", (obj1, obj2, expected) => {
    expect(nestedEqual(obj1, obj2)).toBe(expected);
  });
});
