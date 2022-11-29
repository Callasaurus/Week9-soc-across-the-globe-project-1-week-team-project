import request from "supertest"
import { expect, test } from "@jest/globals"
import app from "../app.js"
import { resetTweetsTable } from "../db/helpers"
import { pool } from "../db/index.js"

beforeEach(() => {
    return resetTweetsTable();
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
    const response = await request(app).get("/api/englishDefinitions/Object")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 1,
            title: 'Object',
            definition: 'A JavaScript object is a collection of named values. It is a common practice to declare objects with the const keyword',
            example: 'https://www.tutorialstonight.com/assets/js/javascript-object.webp',
            links: 'https://www.w3schools.com/js/js_object_definition.asp',
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
    const response = await request(app).delete("/api/englishDefinitions/1")

    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 1,
            title: 'Object',
            definition: 'A JavaScript object is a collection of named values. It is a common practice to declare objects with the const keyword',
            example: 'https://www.tutorialstonight.com/assets/js/javascript-object.webp',
            links: 'https://www.w3schools.com/js/js_object_definition.asp',
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
    return resetTweetsTable();
});
    
afterAll(() => {
    pool.end();
});