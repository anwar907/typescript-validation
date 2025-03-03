import { z } from "zod";

describe("Date Validate", () => {

    it("should validate the date", () => {
        const brithDateSchema = z.coerce.date().min(new Date(1980, 0, 1)).max(new Date(2020, 0, 1));

        const birthDate = brithDateSchema.parse("1990-01-01");
        console.info(birthDate);

        const birthDate2 = brithDateSchema.parse(new Date(1990, 0, 1));
        console.info(birthDate2);
    });

    
})