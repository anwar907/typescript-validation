import { z } from "zod";

describe("Collection Validation", () => {
    it("should support array validation", async () => {
        const schema = z.array(z.string().email()).min(1).max(10);

        const request: Array<string> = ["type@example.com", "java@example.com"];
        const result: Array<string> = schema.parse(request);

        console.info(result);
    });

    it("should support set validation", () => {
        const schema = z.set(z.string().email()).min(1).max(10);

        const request: Set<string> = new Set(["sample@schema.com", "contoh@mail.com"])
        const result: Set<string> = schema.parse(request);

        console.info(result);
    })

    it("should can support optional validation", () => {
        const registerSchema = z.object({
            username: z.string().email(),
            password: z.string().min(6).max(20),
            firstName: z.string().min(3).max(100),
            lastName: z.string().min(3).max(100).optional()
        });

        const request = {
            username: "sample@example.com",
            password: "12323234",
            firstName: "Java"
        };

        const result = registerSchema.parse(request);
        console.info(result);
    })
    
})