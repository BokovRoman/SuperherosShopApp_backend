// const Router = require('express');
// const Hero = require('../models/Hero');
const router = new Router();

router.get("/", async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json({message:"Something is wrong! Try again.."})
    }
});
router.get("/:heroId");
router.post("/");
router.patch("/:heroId");
router.delete("/:heroId");

module.exports = router;