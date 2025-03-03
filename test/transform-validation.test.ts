import { z } from "zod";

describe("Transform validation", () => {

    it("Should can return transform", () => {
        const schema = z.string().transform((data) => {
            return data.toUpperCase();
        });

        const result = schema.parse("data baru");
        console.log(result);
    })
})