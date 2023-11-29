import { describe, expect, test } from "vitest";
import { signUp } from "../src/models/authentication";
import { faker } from "@faker-js/faker"

describe("authentication", () => {


  test("should sign up a new user", async () => {
    const res = await signUp({
      name: faker.person.firstName(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      role: ["USER"],
      email: faker.internet.email(),
    });

    expect(res.message).toEqual("User registered successfully!");

  });
});
