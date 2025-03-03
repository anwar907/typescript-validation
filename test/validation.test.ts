import { z } from "zod";

describe("sample zod", () => {

    it("Should return data", () => {
        const scema = z.string().min(3).max(100);

        const request = "src";

        const result = scema.parse(request);

        expect(result).toBe("src")
    });

    it("should support validate primitive data type", async () => {
        const userNameSchema = z.string().email();
        const isAdminSchema = z.boolean();
        const priceSchema = z.number().min(1000).max(100000);

        const username = userNameSchema.parse("data@mail.com");
        console.info(username);

        const isAdmin = isAdminSchema.parse(true);
        console.info(isAdmin);

        const price = priceSchema.parse(10000);
        console.info(price);

    })
})
