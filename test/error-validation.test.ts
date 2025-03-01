import { z, ZodError } from "zod";

describe("Validation Error", () => {
    it("should return zor error if invalid", () => {
        const schema = z.string().email().min(3).max(100);

        try {
            // parse perlu dimasukan dalam try catch
            schema.parse("ek");
        } catch (error) {
            if(error instanceof ZodError){
                console.error(error);
                // error.errors.forEach((e) => {
                //     console.info(e.message);
                // })
            }
        }
    })

    it("should return zor error if invalid without exception", () => {
        const schema = z.string().email().min(3).max(100);

        // safeParse tanpa try catch
        const result = schema.safeParse("ek");

        if(result.success){
            console.info(result);
        } else {
            console.info(result.error);
        }
    })
})