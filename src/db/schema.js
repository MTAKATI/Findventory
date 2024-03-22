"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsTable = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
exports.productsTable = (0, pg_core_1.pgTable)("products", {
    id: (0, pg_core_1.text)("id").primaryKey().default('uuid_generate_v4()'),
    name: (0, pg_core_1.text)("name").notNull(),
    imageId: (0, pg_core_1.text)("imageId").notNull(),
    price: (0, pg_core_1.doublePrecision)("price").notNull(),
    description: (0, pg_core_1.text)("description"),
    createdAt: (0, pg_core_1.timestamp)("createdAt").defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updatedAt").defaultNow(),
});
