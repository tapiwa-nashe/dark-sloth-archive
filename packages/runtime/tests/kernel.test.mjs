import assert from "node:assert/strict";
import { ArchiveKernel, RuntimeEventBus } from "../dist/index.js";

const events = [];
const bus = new RuntimeEventBus();

bus.on("runtime.started", event => events.push(event.type));
bus.on("runtime.stopped", event => events.push(event.type));

const kernel = new ArchiveKernel(
  {},
  {},
  bus
);

const context = {
  session: {
    id: "runtime-test-session",
    startedAt: new Date(),
    updatedAt: new Date(),
    journey: "runtime-test",
    role: "test"
  }
};

assert.equal(kernel.isRunning(), false);

kernel.start(context);

assert.equal(kernel.isRunning(), true);
assert.deepEqual(kernel.getContext(), context);
assert.equal(kernel.getState().started, true);
assert.deepEqual(events, ["runtime.started"]);

kernel.stop();

assert.equal(kernel.isRunning(), false);
assert.equal(kernel.getContext(), undefined);
assert.equal(kernel.getState().started, false);
assert.deepEqual(events, ["runtime.started", "runtime.stopped"]);

console.log("RUNTIME SMOKE TEST: PASS");
