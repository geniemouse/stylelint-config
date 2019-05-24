const obj = require("../utils/object");

describe("alphabetizeByKeyName:", () => {
    const { alphabetizeByKeyName } = obj;
    const sample = {
        one: 1,
        two: 2,
        three: 3
    };
    const expectedOutput = {
        one: 1,
        three: 3,
        two: 2
    };

    test("is a function", () => {
        expect(typeof alphabetizeByKeyName).toBe("function");
    });

    test("will accept an empty object and output the same", () => {
        expect(alphabetizeByKeyName({})).toEqual({});
    });

    test("alphabetizes the key names of an object", () => {
        const result = alphabetizeByKeyName(sample);
        expect(result).toMatchSnapshot();
        expect(Object.keys(result)).toEqual(Object.keys(expectedOutput));
    });
});
