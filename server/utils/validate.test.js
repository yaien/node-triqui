const validate = require("./validate");

describe("Validate Middleware", () => {
    const request = body => ({ body });
    let res = {
        status: jest.fn(function() {
            return this;
        }),
        send: jest.fn()
    };
    let next = jest.fn();

    afterEach(() => jest.restoreAllMocks());

    it("Should response 400 and errors on invalid body", async () => {
        let req = request({ username: "in" });
        let middle = validate({ username: "string|min:4" });
        await middle(req, res, next);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith(expect.any(Object));
    });

    it("Should call next on valid request body", async () => {
        let req = request({ username: "validuser" });
        let middle = validate({ username: "string|min:4" });
        await middle(req, res, next);
        expect(next).toHaveBeenCalled();
    });
});
