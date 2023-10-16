const path= require('path');
const sharp= require("sharp");
exports.upload=async (req,res)=>{
 try {
  const backgroundImage = req.files['background_img'][0];
  const frontImage = req.files['front_img'][0];
  const backgroundname=backgroundImage.filename.substring(0, backgroundImage.filename.indexOf("."));
  const frontname=frontImage.filename.substring(0, frontImage.filename.indexOf("."));
  console.log(backgroundname);
  
  await sharp("./img/uploads/"+backgroundImage.filename)
      .composite([
        {
          input: "./img/uploads/"+frontImage.filename,
          top: 50,
          left: 50,
        },
      ])
      .toFile("./img/result/"+frontname+"_"+backgroundname+".png");

    res.status(200).json({
      "status":"sucess",
      "path":"http://127.0.0.1:8002/api/image?filename="+frontname+"_"+backgroundname+".png"
    })
 } catch (error) {
    res.status(500).json('unable to process')
 }
}
exports.image=async (req,res)=>{
    return res.sendFile(req.query.filename, { root: path.join(__dirname, '../img/result') });
}