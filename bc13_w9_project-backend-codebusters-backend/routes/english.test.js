import request from "supertest"
import { expect, test } from "@jest/globals"
import app from "../app.js"
import { resetObjectTable } from "../db/helpers"
import { pool } from "../db/index.js"

beforeEach(() => {
    return resetObjectTable();
});

test("GET all objects", async function () {
    const response = await request(app).get("/api/englishDefinitions")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: expect.any(Array)
    })
})

test("GET specific object", async function () {
    const response = await request(app).get("/api/englishDefinitions/For loops")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 9,
            title: 'For loops',
            definition: 'Loops can execute a block of code a number of times.',
            example: 'https://miro.medium.com/max/1400/1*Wal8vgWVHiYnM0IrnK0p3w.jpeg',
            links: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
            week: 1
        }]
    })
})

test("POST a new object", async function () {
    const response = await (await request(app).post("/api/englishDefinitions").send({ title: 'test', definition: 'test', example: 'test', links: 'test', week: 1 }))
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: expect.any(Number),
            title: 'test',
            definition: 'test',
            example: 'test',
            links: 'test',
            week: 1
        }]
    })
})

test("DELETE an object by id", async function () {
    const response = await request(app).delete("/api/englishDefinitions/9")

    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 9,
            title: 'For loops',
            definition: 'Loops can execute a block of code a number of times.',
            example: 'https://miro.medium.com/max/1400/1*Wal8vgWVHiYnM0IrnK0p3w.jpeg',
            links: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
            week: 1
        }]
    })
})

test("EDIT an object by id", async function () {
    const response = await (await request(app).patch("/api/englishDefinitions/1").send({ title: 'test patch', definition: 'test patch', example: 'test patch', links: 'test patch', week: 5 }))
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 1,
            title: 'test patch',
            definition: 'test patch',
            example: 'test patch',
            links: 'test patch',
            week: 5
        }]
    })
})

afterAll(() => {
    return resetObjectTable();
});
    
afterAll(() => {
    pool.end();
});