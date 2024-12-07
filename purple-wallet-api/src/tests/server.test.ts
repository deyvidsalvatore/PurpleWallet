import request from "supertest";
import app from "../app/server";

describe("GET /", () => {
  it("should return a welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      welcome: "Hello, Welcome to Purple Wallet API",
    });
  });
});
