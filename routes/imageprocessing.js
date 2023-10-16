const router= require('express').Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null, './img/uploads')
  },
  filename: (req, file, cb)=>{
     cb(null,file.originalname);
  }
})
const upload = multer({ storage: storage })
const imageProcessingController=require("../controllers/imageprocessingController");
router.post("/upload",upload.fields([{ name: 'background_img', maxCount: 1 }, { name: 'front_img', maxCount: 1 }]),imageProcessingController.upload);
router.get("/image",imageProcessingController.image);


module.exports=router;