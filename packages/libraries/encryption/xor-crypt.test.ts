import { describe, expect, it } from "vitest";
import { xorCrypt } from "./xor-crypt";

/**
 * Generate a random string of random length.
 *
 * @return The random string.
 * @ignore
 * @internal
 */
function randomString() {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

describe("xorCrypt", () => {
  it("should encrypt and decrypt a string with the default key", () => {
    const original = "hello";
    const encrypted = xorCrypt(original);
    const decrypted = xorCrypt(encrypted);
    expect(decrypted).toBe(original);
  });

  it("should encrypt and decrypt a string with a custom key", () => {
    const original = "world";
    const key = 10;
    const encrypted = xorCrypt(original, key);
    const decrypted = xorCrypt(encrypted, key);
    expect(decrypted).toBe(original);
  });

  it("should return an empty string when input is an empty string", () => {
    const original = "";
    const encrypted = xorCrypt(original);
    expect(encrypted).toBe("");
  });

  it("should handle non-alphabetic characters", () => {
    const original = "123!@#";
    const encrypted = xorCrypt(original);
    const decrypted = xorCrypt(encrypted);
    expect(decrypted).toBe(original);
  });

  it("should handle special characters", () => {
    const original = "👋🏼";
    const encrypted = xorCrypt(original);
    const decrypted = xorCrypt(encrypted);
    expect(decrypted).toBe(original);
  });

  it("should handle long strings", () => {
    const original = "a".repeat(1000);
    const encrypted = xorCrypt(original);
    const decrypted = xorCrypt(encrypted);
    expect(decrypted).toBe(original);
  });

  it("should handle non-ASCII characters", () => {
    const original = "你好";
    const encrypted = xorCrypt(original);
    const decrypted = xorCrypt(encrypted);
    expect(decrypted).toBe(original);
  });

  it("should handle empty input", () => {
    const original = "";
    const encrypted = xorCrypt(original);
    const decrypted = xorCrypt(encrypted);
    expect(decrypted).toBe(original);
  });

  it("should function properly on a random string", () => {
    const original = randomString();
    const encrypted = xorCrypt(original);
    const decrypted = xorCrypt(encrypted);
    expect(decrypted).toBe(original);
  });
});
