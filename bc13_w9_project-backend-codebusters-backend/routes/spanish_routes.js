import express from "express";
const spanishRouter = express.Router();

import {
        getSpanishDefinitions,
        getSpanishDefinitionByTitle,
        updateSpanishDefinition,
        createSpanishDefinition,
        deleteSpanishDefinition,
        getSpanishDefinitionByEnglishTitle
} from "../models/spanish_models.js";


spanishRouter.get("/", async (req, res) => {
        const allSpanishObject = await getSpanishDefinitions();
        return res.json({ success: true, payload: allSpanishObject });

})

spanishRouter.get("/:title", async (req, res) => {
        const spanishObject = await getSpanishDefinitionByTitle(req.params.title);
        return res.json({ success: true, payload: spanishObject })
})

spanishRouter.get("/english/:title", async (req, res) => {
        const englishObject = await getSpanishDefinitionByEnglishTitle(req.params.title);
        return res.json({ success: true, payload: englishObject })

})

spanishRouter.post("/", async (req, res) => {
        const createSpanishObject = await createSpanishDefinition(req.body.englishtitle, req.body.title, req.body.definition, req.body.example, req.body.links, req.body.week);
        return res.json({ success: true, payload: createSpanishObject });
})


spanishRouter.patch("/:id", async (req, res) => {
        const updateSpanishObject = await updateSpanishDefinition(req.params.id, req.body.englishtitle, req.body.title, req.body.definition, req.body.example, req.body.links, req.body.week);
        return res.json({ success: true, payload: updateSpanishObject });
})


spanishRouter.delete("/:id", async (req, res) => {
        const deleteSpanishObject = await deleteSpanishDefinition(req.params.id);
        return res.json({ success: true, payload: deleteSpanishObject });
})

export default spanishRouter;

