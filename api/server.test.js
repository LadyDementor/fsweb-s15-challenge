// testleri buraya yazın

const request = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig");

test("[0] Testler çalışır durumda]", () => {
  expect(true).toBe(true);
});

test("[1] kayıt olunca kayıtlar dönüyor mu?", async () => {
  let userModel = { username: "Baha", password: "1234" };
  let actual = await request(server).post("/api/auth/register").send(userModel);
  expect(actual.status).toBe(201);
  expect(actual.body.username).toBe("Baha");
});
