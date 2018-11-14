import { IModuleContext, importAll, reducerValueAndFn, removeTsxPath } from "..";

describe("importAll", () => {
  it("should return an object with { [path]: reducer }", () => {
    const example = ()=> {}
    const getReducer: IModuleContext = (k: string)=> {
      return { "./A.tsx": { default: example }, "./B.tsx": { default: example } }[k];
    };
    getReducer.keys = jest.fn(() => ["./A.tsx", "./B.tsx"]);

    expect(importAll(getReducer)).toEqual({ A: example, B: example });
  });
});


describe("reducerValueAndFn", () => {
  it("should a IModuleContext and key and return [path, reducer]", () => {
    const example = ()=> {}
    const getReducer: IModuleContext = (k: string)=> {
      return { "./something.tsx": { default: example } }[k];
    };
    getReducer.keys = jest.fn();

    expect(reducerValueAndFn(getReducer, "./something.tsx")).toEqual([
      "something",
      example
    ]);
  });
});

describe("removeTsxPath", () => {
  it("should remove ./ and .tsx from a string", () => {
    expect(removeTsxPath("./app.tsx")).toBe("app");
  });
});