import request from "supertest"
import { expect, test } from "@jest/globals"
import app from "../app.js"
import { resetObjectTableDE } from "../db/helpersDE.js"
import { pool } from "../db/index.js"

beforeEach(() => {
    return resetObjectTableDE();
});

test("GET all objects", async function () {
    const response = await request(app).get("/api/germanDefinitions")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: expect.any(Array)
    })
})

test("GET specific object", async function () {
    const response = await request(app).get("/api/germanDefinitions/For-Schleifen")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 10,
            englishtitle: 'For loops',
            title: 'For-Schleifen',
            definition: 'Schleifen können einen Codeblock mehrmals ausführen.',
            example: 'https://cdn.programiz.com/sites/tutorial2program/files/working-javascript-continue-statement.pnG',
            links: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
            week: 1
        }]
    })
})

test("GET specific object in english", async function () {
    const response = await request(app).get("/api/germanDefinitions/english/For loops")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 10,
            englishtitle: 'For loops',
            title: 'For-Schleifen',
            definition: 'Schleifen können einen Codeblock mehrmals ausführen.',
            example: 'https://cdn.programiz.com/sites/tutorial2program/files/working-javascript-continue-statement.pnG',
            links: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
            week: 1
        }]
    })
})

test("POST a new object", async function () {
    const response = await (await request(app).post("/api/germanDefinitions").send({ englishtitle: 'test', title: 'test', definition: 'test', example: 'test', links: 'test', week: 1 }))
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
    const response = await request(app).delete("/api/germanDefinitions/10")

    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 10,
            englishtitle: 'For loops',
            title: 'For-Schleifen',
            definition: 'Schleifen können einen Codeblock mehrmals ausführen.',
            example: 'https://cdn.programiz.com/sites/tutorial2program/files/working-javascript-continue-statement.pnG',
            links: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
            week: 1
        }]
    })
})

test("EDIT an object by id", async function () {
    const response = await (await request(app).patch("/api/germanDefinitions/1").send({ englishtitle: 'test patch', title: 'test patch', definition: 'test patch', example: 'test patch', links: 'test patch', week: 5 }))
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
    return resetObjectTableDE();
});
    
afterAll(() => {
    pool.end();
});