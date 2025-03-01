import { z } from "zod";

describe("Collection Validation", () => {
    it("should support array validation", async () => {
        const schema = z.array(z.string().email()).min(1).max(10);

        const request: Array<string> = ["type@example.com", "java@example.com"];
        const result: Array<string> = schema.parse(request);

        console.info(result);
    });
    
})