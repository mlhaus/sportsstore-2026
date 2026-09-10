import { Express } from "express";
import { createCatalogRoutes } from "./catalog";
import { createCartMiddleware, createCartRoutes} from "./cart";
export const createRoutes = (app: Express) => {
    createCatalogRoutes(app);
    createCartMiddleware(app);
    createCartRoutes(app);
}
