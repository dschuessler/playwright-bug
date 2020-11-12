const playwright = require('playwright');

describe("Test", () => {
    it("Test", async () => {
        const firefox = await playwright['firefox'].launch();
        const webkit = await playwright['webkit'].launch();
    });
});