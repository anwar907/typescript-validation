import { z } from "zod";

describe("Object validation", () => {

    it("should can validate object", () => {
        const loginSchema = z.object({
            username: z.string().email(),
            password: z.string().min(4).max(19)
        })
    
        const request = {
            username: "javascript@test.id",
            password: "anonymouse",
            ignore: "ignore",
            name: "Java Script"
        };
    
        const result = loginSchema.parse(request);
        console.info(result);
    });

    it("should support nested object", () => {
        const createUserSchema = z.object({
            id: z.string().max(100),
            name: z.string().max(100),
            address: z.object({
                street: z.string().max(100),
                city: z.string().max(100),
                zip: z.string().max(10),
                country: z.string().max(100)
            })
        });

        const request = {
            id: "1244",
            name: "TypeScript",
            address: {
                street: "url",
                city: "konoha",
                zip: "12343",
                country: "Internet"
            }
        }

        const result = createUserSchema.parse(request);
        console.info(result);
    })
})