const exists = require("./exists");
const mongoose = require("mongoose");

describe("exists validator", () => {
    let value = "xxx";
    let get = () => value;
    let args = ["room"];
    let message = "error";

    test("exists validator should not to throw on existing value", () => {
        let mockModel = { countDocuments: jest.fn().mockResolvedValue(2) };
        jest.spyOn(mongoose, "model").mockReturnValue(mockModel);

        return expect(
            exists(null, null, message, args, get)
        ).resolves.toBeUndefined();
    });

    test("exists validator should  throw on missing value", async () => {
        let mockModel = { countDocuments: jest.fn().mockResolvedValue(0) };
        jest.spyOn(mongoose, "model").mockReturnValue(mockModel);

        return expect(exists(null, null, message, args, get)).rejects.toEqual(
            message
        );
    });
});
