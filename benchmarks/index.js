const { Suite } = require("benchmark");
const { mock1, mock2 } = require("../mock");
const moduleNames = {
  "lodash.isequal": require("lodash.isequal"),
  "deep-equal": require("deep-equal"),
  "nested-equal": require("../dist").nestedEqual,
  dequal: require("dequal/lite").dequal,
  "nano-equal": require("nano-equal"),
};
const mocks = [
  [mock1, mock2],
  [
    { a: 1, b: 2, c: 3 },
    { a: 1, b: 2, c: 3 },
  ],
  [[undefined], [null, {}]],
  [
    [1, 2, 3, 5, { a: 1, b: 2, c: [{}, null] }],
    [1, 2, 3, 5, { a: 1, b: 2, c: [{}, NaN] }],
  ],
  [
    [1, 2, 3, 4, { a: 1, b: 2, c: [1, 2] }],
    [1, 2, 3, 4, { a: 1, c: 4, c: [1, 2, 4, { a: "string" }] }],
  ],
];
for (const [index, mockSet] of mocks.entries()) {
  console.log(`\nBenchmark ${index + 1}`);
  const bench = new Suite().on("cycle", (e) => {
    console.log("  " + e.target);
  });
  Object.keys(moduleNames).forEach((moduleName) => {
    bench.add(moduleName + " ".repeat(28 - moduleName.length), () => {
      moduleNames[moduleName](mockSet[0], mockSet[1]);
    });
  });

  bench.run();
  bench.abort();
}
