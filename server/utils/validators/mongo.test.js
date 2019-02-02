const mongo = require("./mongo");
const id = require("mongoose").Types.ObjectId;

describe("Mongo validator", () => {
    it("Should resolve with valid ObjectID", () => {
        let get = () => id();
        return expect(
            mongo(null, null, null, null, get)
        ).resolves.toBeUndefined();
    });

    it("Should reject with invalid ObjectID", () => {
        let get = () => "ax";
        let message = "error";
        return expect(mongo(null, "field", message, null, get)).rejects.toEqual(
            message
        );
    });
});
