import express from "express";
const frenchRouter = express.Router();

import {
    getFrenchDefinitions,
    getFrenchDefinitionByTitle,
    updateFrenchDefinition,
    createFrenchDefinition,
    deleteFrenchDefinition,
    getFrenchDefinitionByEnglishTitle
} from "../models/french_models.js";


frenchRouter.get("/", async (req, res) => {
    const allFrenchObject = await getFrenchDefinitions();
    return res.json({ success: true, payload: allFrenchObject });
})

frenchRouter.get("/:title", async (req, res) => {
    const frenchObject = await getFrenchDefinitionByTitle(req.params.title);
    return res.json({ success: true, payload: frenchObject });
})

frenchRouter.get("/english/:title", async (req, res) => {
    const frenchObject = await getFrenchDefinitionByEnglishTitle(req.params.title);
    return res.json({ success: true, payload: frenchObject })
})

frenchRouter.post("/", async (req, res) => {
    const createFrenchObject = await createFrenchDefinition(req.body.englishtitle, req.body.title, req.body.definition, req.body.example, req.body.links, req.body.week);
    return res.json({ success: true, payload: createFrenchObject });
})

frenchRouter.patch("/:id", async (req, res) => {
    const updateFrenchObject = await updateFrenchDefinition(req.params.id, req.body.englishtitle, req.body.title, req.body.definition, req.body.example, req.body.links, req.body.week);
    return res.json({ success: true, payload: updateFrenchObject });
})

frenchRouter.delete("/:id", async (req, res) => {
    const deleteFrenchObject = await deleteFrenchDefinition(req.params.id);
    return res.json({ success: true, payload: deleteFrenchObject });
})

export default frenchRouter;

