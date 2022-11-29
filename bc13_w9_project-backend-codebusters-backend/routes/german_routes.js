import express from "express";
const germanRouter = express.Router();

import {
    getGermanDefinitions,
    getGermanDefinitionByTitle,
    updateGermanDefinition,
    createGermanDefinition,
    deleteGermanDefinition,
    getGermanDefinitionByEnglishTitle
} from "../models/german_models.js";


germanRouter.get("/", async (req, res) => {
    const allGermanObject = await getGermanDefinitions();
    return res.json({ success: true, payload: allGermanObject });
})


germanRouter.get("/:title", async (req, res) => {
    const germanObject = await getGermanDefinitionByTitle(req.params.title);
    return res.json({ success: true, payload: germanObject });
})

germanRouter.get("/english/:title", async (req, res) => {
    const germanObject = await getGermanDefinitionByEnglishTitle(req.params.title);
    return res.json({ success: true, payload: germanObject })

})

germanRouter.post("/", async (req, res) => {
    const createGermanObject = await createGermanDefinition(req.body.englishtitle, req.body.title, req.body.definition, req.body.example, req.body.links, req.body.week);
    return res.json({ success: true, payload: createGermanObject });
})

germanRouter.patch("/:id", async (req, res) => {
    const updateGermanObject = await updateGermanDefinition(req.params.id, req.body.englishtitle, req.body.title, req.body.definition, req.body.example, req.body.links, req.body.week);
    return res.json({ success: true, payload: updateGermanObject });
})

germanRouter.delete("/:id", async (req, res) => {
    const deleteGermanObject = await deleteGermanDefinition(req.params.id);
    return res.json({ success: true, payload: deleteGermanObject })
})

export default germanRouter;

