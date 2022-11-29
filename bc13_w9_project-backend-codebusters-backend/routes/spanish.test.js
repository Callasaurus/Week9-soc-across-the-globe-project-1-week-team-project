import request from "supertest"
import { expect, test } from "@jest/globals"
import app from "../app.js"
import { resetTweetsTableES } from "../db/helpersES.js"
import { pool } from "../db/index.js"

beforeEach(() => {
    return resetTweetsTableES();
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
    const response = await request(app).get("/api/spanishDefinitions/Objeto")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 1,
            englishtitle: 'Object',
            title: 'Objeto',
            definition: 'Un objeto JavaScript es una colección de valores con nombre. Es una práctica común declarar objetos con la palabra clave cons.',
            example: 'https://www.tutorialstonight.com/assets/js/javascript-object.webp',
            links: 'https://www.w3schools.com/js/js_object_definition.asp',
            week: 1
        }]
    })
})

test("GET specific object in english", async function () {
    const response = await request(app).get("/api/spanishDefinitions/english/Object")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 1,
            englishtitle: 'Object',
            title: 'Objeto',
            definition: 'Un objeto JavaScript es una colección de valores con nombre. Es una práctica común declarar objetos con la palabra clave cons.',
            example: 'https://www.tutorialstonight.com/assets/js/javascript-object.webp',
            links: 'https://www.w3schools.com/js/js_object_definition.asp',
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
    const response = await request(app).delete("/api/spanishDefinitions/1")

    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 1,
            englishtitle: 'Object',
            title: 'Objeto',
            definition: 'Un objeto JavaScript es una colección de valores con nombre. Es una práctica común declarar objetos con la palabra clave cons.',
            example: 'https://www.tutorialstonight.com/assets/js/javascript-object.webp',
            links: 'https://www.w3schools.com/js/js_object_definition.asp',
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
    return resetTweetsTableES();
});
    
afterAll(() => {
    pool.end();
});