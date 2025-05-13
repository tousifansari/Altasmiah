const express = require("express");
const routes = express.Router();

routes.use("/", require("../Controllers/HomeController"));
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
routes.use("/api/contact", require("../Controllers/ContactController"));


module.exports = routes;