import { describe, expect, test } from "vitest";
import { signUp } from "../src/models/authentication";

describe("authentication", () => {
  test("should sign up a new user", async () => {
    const res = await signUp({
      name: "joel",
      username: "joel2",
      password: "jesus2",
      role: ["USER"],
      email: "lorenzotrevizoldalbo@gmail.com",
    });

    expect(res.message).toEqual("User registered successfully!");

  });
});
