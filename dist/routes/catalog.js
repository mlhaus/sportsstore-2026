"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCatalogRoutes = void 0;
const createCatalogRoutes = (app) => {
    app.get("/", (req, resp) => {
        resp.render("index");
    });
};
exports.createCatalogRoutes = createCatalogRoutes;
