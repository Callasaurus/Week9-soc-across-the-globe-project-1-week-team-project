import express from "express";
const router = express.Router();

import {
    getEnglishDefinitions,
    getEnglishDefinitionByTitle,
    updateEnglishDefinition,
    createEnglishDefinition,
    deleteEnglishDefinition
} from "../models/english_models.js";


router.get("/", async (req, res) => {
    const allEnglishObject = await getEnglishDefinitions();
    return res.json({ success: true, payload: allEnglishObject });
})

router.get("/:title", async (req, res) => {
    const englishObject = await getEnglishDefinitionByTitle(req.params.title);
    return res.json({ success: true, payload: englishObject });
})

router.post("/", async (req, res) => {
    const createEnglishObject = await createEnglishDefinition(req.body.title, req.body.definition, req.body.example, req.body.links, req.body.week);
    return res.json({ success: true, payload: createEnglishObject });
})

router.patch("/:id", async (req, res) => {
    const updateEnglishObject = await updateEnglishDefinition(req.params.id, req.body.title, req.body.definition, req.body.example, req.body.links, req.body.week);
    return res.json({ success: true, payload: updateEnglishObject });
})

router.delete("/:id", async (req, res) => {
    const deleteEnglishObject = await deleteEnglishDefinition(req.params.id);
    return res.json({ success: true, payload: deleteEnglishObject });
})

export default router;

