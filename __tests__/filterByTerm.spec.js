function filterByTerm(inputArr, searchTerm) {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!inputArr.length) throw Error("inputArr cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(regex);
    });
  }

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        // testing is a matter of inputs, function, and expected outputs
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output);
        expect(filterByTerm(input, "LINK")).toEqual(output);
    });
});
