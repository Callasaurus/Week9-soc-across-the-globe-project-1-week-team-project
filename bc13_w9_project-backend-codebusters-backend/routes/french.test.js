import request from "supertest"
import { expect, test } from "@jest/globals"
import app from "../app.js"
import { resetObjectTableFR } from "../db/helpersFR.js"
import { pool } from "../db/index.js"

beforeEach(() => {
    return resetObjectTableFR();
});

test("GET all objects", async function () {
    const response = await request(app).get("/api/frenchDefinitions")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: expect.any(Array)
    })
})

test("GET specific object", async function () {
    const response = await request(app).get("/api/frenchDefinitions/For boucles")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 10,
            englishtitle: 'For loops',
            title: 'For boucles',
            definition: 'Les boucles peuvent exécuter un bloc de code plusieurs fois.',
            example: 'https://cdn.programiz.com/sites/tutorial2program/files/working-javascript-continue-statement.pnG',
            links: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
            week: 1
        }]
    })
})

test("GET specific object in english", async function () {
    const response = await request(app).get("/api/frenchDefinitions/english/For loops")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 10,
            englishtitle: 'For loops',
            title: 'For boucles',
            definition: 'Les boucles peuvent exécuter un bloc de code plusieurs fois.',
            example: 'https://cdn.programiz.com/sites/tutorial2program/files/working-javascript-continue-statement.pnG',
            links: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
            week: 1
        }]
    })
})

test("POST a new object", async function () {
    const response = await (await request(app).post("/api/frenchDefinitions").send({ englishtitle: 'test', title: 'test', definition: 'test', example: 'test', links: 'test', week: 1 }))
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
    const response = await request(app).delete("/api/frenchDefinitions/10")

    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: 10,
            englishtitle: 'For loops',
            title: 'For boucles',
            definition: 'Les boucles peuvent exécuter un bloc de code plusieurs fois.',
            example: 'https://cdn.programiz.com/sites/tutorial2program/files/working-javascript-continue-statement.pnG',
            links: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
            week: 1
        }]
    })
})

test("EDIT an object by id", async function () {
    const response = await (await request(app).patch("/api/frenchDefinitions/1").send({ englishtitle: 'test patch', title: 'test patch', definition: 'test patch', example: 'test patch', links: 'test patch', week: 5 }))
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
    return resetObjectTableFR();
});
    
afterAll(() => {
    pool.end();
});