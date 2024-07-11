import express from "express";

const router = express.Router();

router.get("/test", (req, res)=>{
    console.log("a rota funciona!");
});
router.post("/test", (req, res)=>{
    console.log("a rota funciona!");
});
router.put("/test", (req, res)=>{
    console.log("a rota funciona!");
});
router.delete("/test", (req, res)=>{
    console.log("a rota funciona!");
});

export default router;