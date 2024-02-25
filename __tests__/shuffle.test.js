const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  it("shuffled array same length asinput array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);

    expect(shuffledArray).toBeInstanceOf(Array);
    expect(shuffledArray.length).toBe(inputArray.length);
  });

  it("shuffed array is in a different order", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);
  
    expect(shuffledArray).not.toEqual(inputArray);
  });
});
