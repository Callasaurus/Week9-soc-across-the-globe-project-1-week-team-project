import request from "supertest"
import { expect, test } from "@jest/globals"
import app from "../app.js"
import { resetObjectTableES } from "../db/helpersES.js"
import { pool } from "../db/index.js"

beforeEach(() => {
    return resetObjectTableES();
});

test("GET all objects", async function () {
    const response = await request(app).get("/api/spanishDefinitions")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: expect.any(Array)
    })
})

test("GET specific object", async function () {
    const response = await request(app).get("/api/spanishDefinitions/Bucle for")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 3,
            englishtitle: 'For loops',
            title: 'Bucle for',
            definition: 'Los bucles pueden ejecutar un bloque de código varias veces.',
            example: 'https://miro.medium.com/max/1400/1*Wal8vgWVHiYnM0IrnK0p3w.jpeg',
            links: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
            week: 1
        }]
    })
})

test("GET specific object in english", async function () {
    const response = await request(app).get("/api/spanishDefinitions/english/For loops")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 3,
            englishtitle: 'For loops',
            title: 'Bucle for',
            definition: 'Los bucles pueden ejecutar un bloque de código varias veces.',
            example: 'https://miro.medium.com/max/1400/1*Wal8vgWVHiYnM0IrnK0p3w.jpeg',
            links: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
            week: 1
        }]
    })
})

test("POST a new object", async function () {
    const response = await (await request(app).post("/api/spanishDefinitions").send({ englishtitle: 'test', title: 'test', definition: 'test', example: 'test', links: 'test', week: 1 }))
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: expect.any(Number),
            englishtitle: 'test',
            title: 'test',
            definition: 'test',
            example: 'test',
            links: 'test',
            week: 1
        }]
    })
})

test("DELETE an object by id", async function () {
    const response = await request(app).delete("/api/spanishDefinitions/3")

    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 3,
            englishtitle: 'For loops',
            title: 'Bucle for',
            definition: 'Los bucles pueden ejecutar un bloque de código varias veces.',
            example: 'https://miro.medium.com/max/1400/1*Wal8vgWVHiYnM0IrnK0p3w.jpeg',
            links: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
            week: 1
        }]
    })
})

test("EDIT an object by id", async function () {
    const response = await (await request(app).patch("/api/spanishDefinitions/1").send({ englishtitle: 'test patch', title: 'test patch', definition: 'test patch', example: 'test patch', links: 'test patch', week: 5 }))
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 1,
            englishtitle: 'test patch',
            title: 'test patch',
            definition: 'test patch',
            example: 'test patch',
            links: 'test patch',
            week: 5
        }]
    })
})

afterAll(() => {
    return resetObjectTableES();
});
    
afterAll(() => {
    pool.end();
});