const sum = require("./counter")

test("Sum 1 + 1", function () {
  const result = sum(1, 1)
  expect(result).toEqual(2)
})