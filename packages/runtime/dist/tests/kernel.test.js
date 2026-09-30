import { describe, expect, it } from "vitest";
import { ArchiveKernel, RuntimeEventBus } from "../index.js";
describe("ArchiveKernel", () => {
    it("starts and stops the runtime", () => {
        const kernel = new ArchiveKernel({}, {}, new RuntimeEventBus());
        const context = {
            session: {
                id: "test-session",
                startedAt: new Date(),
                updatedAt: new Date(),
                journey: "test",
                role: "test"
            }
        };
        expect(kernel.isRunning()).toBe(false);
        kernel.start(context);
        expect(kernel.isRunning()).toBe(true);
        expect(kernel.getContext()).toEqual(context);
        kernel.stop();
        expect(kernel.isRunning()).toBe(false);
        expect(kernel.getContext()).toBeUndefined();
    });
});
