import { describe, it, expect } from "vitest";
import { waLink, inquiryText } from "./contact";
describe("contact", () => {
  it("WhatsApp links go to +237 658 346 919", () => {
    expect(waLink("Bonjour")).toBe("https://wa.me/237658346919?text=Bonjour");
  });
  it("inquiry includes provided fields", () => {
    const t = inquiryText({ name: "Awa", arrival: "2026-12-01", departure: "", guests: "2", message: "" });
    expect(t).toContain("Nom : Awa");
    expect(t).toContain("Voyageurs : 2");
    expect(t).not.toContain("Départ");
  });
});
