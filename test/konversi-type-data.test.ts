import { z } from "zod";

describe("Konversi type data", () => {
    it("should support validate primitive data type", async () => {

        const userNameSchema = z.coerce.string().min(3).max(100);
        const isAdminSchema = z.coerce.boolean();
        const priceSchema = z.coerce.number().min(1000).max(100000);

        const username = userNameSchema.parse(12345);
        console.info(username);

        const isAdmin = isAdminSchema.parse("true");
        console.info(isAdmin);

        const price = priceSchema.parse("10000");
        console.info(price);

    })
})