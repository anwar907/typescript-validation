import { RefinementCtx, z } from "zod";

describe("Custom Validation", () => {

    function mustUpperCase(data: string, ctx: RefinementCtx): string {
        if(data != data.toUpperCase()) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Username Harus Uppercase"
            });

            return z.NEVER;
        } else {
            return data;
        }
    }

    it("should return data custom validation", () => {
        const loginSchema = z.object({
            username: z.string().email().transform(mustUpperCase),
            password: z.string().min(6).max(20)
        });

        const request = {
            username: "JAVA@EXAMPLE.COM",
            password: "anonymouse"
        }

        const result = loginSchema.parse(request);
        console.info(result);
    })
})