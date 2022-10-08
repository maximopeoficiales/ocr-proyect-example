import tesseract from "node-tesseract-ocr";

const img = "https://i0.wp.com/www.orientacionandujar.es/wp-content/uploads/2020/04/textos-cortos-trabadas-r-2.jpg"

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}
tesseract
  .recognize(img, config)
  .then((text) => {

    console.log("Result:", text)
  })
  .catch((error) => {
    console.log(error.message)
  })