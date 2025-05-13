const express = require("express");
const routes = express.Router();

<<<<<<< HEAD
routes.use("/", require("../Controllers/HomeController"));
=======
routes.use("/api/", require("../Controllers/HomeController"));
>>>>>>> 91cca993ce6be40e8130bb59bc9c6e712fafd3b6
routes.use("/api/About", require("../Controllers/aboutController"));
routes.use("/api/Blog", require("../Controllers/blogController"));
routes.use("/api/GreenArcGallery", require("../Controllers/GalleryController"));
routes.use("/api/UV_C_and_Blue_Light_Solutions", require("../Controllers/ServicesController"));
routes.use("/api/sport_lighting", require("../Controllers/ServicesController"));
routes.use("/api/Services_Commercial_Lighting", require("../Controllers/ServicesController"));
routes.use("/api/TurnKey_Installation", require("../Controllers/ServicesController"));
routes.use("/api/Energies", require("../Controllers/ServicesController"));
routes.use("/api/Distribution", require("../Controllers/ServicesController"));
routes.use("/api/Photometric_Analysis",require("../Controllers/ServicesController"));
routes.use("/api/solutions", require("../Controllers/SolutionsController"));
<<<<<<< HEAD
routes.use("/api/contact", require("../Controllers/contactController"));
=======
routes.use("/api/contact", require("../Controllers/ContactController"));
>>>>>>> 91cca993ce6be40e8130bb59bc9c6e712fafd3b6


module.exports = routes;
