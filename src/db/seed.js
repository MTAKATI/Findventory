"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var serverless_1 = require("@neondatabase/serverless");
var vector_1 = require("@upstash/vector");
var dotenv = require("dotenv");
var neon_http_1 = require("drizzle-orm/neon-http");
var vectorize_1 = require("../lib/vectorize");
var schema_1 = require("./schema");
dotenv.config();
var index = new vector_1.Index();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var connector, db, products, productImageIDs;
        var _this = this;
        return __generator(this, function (_a) {
            connector = (0, serverless_1.neon)(process.env.DATABASE_URL);
            db = (0, neon_http_1.drizzle)(connector);
            products = [];
            productImageIDs = [
                {
                    imageId: 'dark_down_jacket_1.png',
                    description: 'A sleek, insulated down jacket designed for chilly urban adventures. Its slim fit and dark hue make it a versatile addition to any winter wardrobe.',
                },
                {
                    imageId: 'dark_down_jacket_2.png',
                    description: 'This durable down jacket offers exceptional warmth with a touch of elegance. Perfect for those who demand both style and functionality in cold weather.',
                },
                {
                    imageId: 'dark_fleece_jacket_1.png',
                    description: 'Experience the cozy warmth of this dark fleece jacket. Ideal for layering, its soft texture and classic design ensure comfort and style on cooler days.',
                },
                {
                    imageId: 'dark_leather_jacket_1.png',
                    description: 'A timeless dark leather jacket that combines classic styling with rugged durability. Perfect for adding an edge to any outfit, rain or shine.',
                },
                {
                    imageId: 'dark_parka_jacket_1.png',
                    description: 'Stay protected against the elements with this durable parka. Its insulated lining and fur-trimmed hood offer warmth and style in harsh conditions.',
                },
                {
                    imageId: 'dark_parka_jacket_2.png',
                    description: 'This sleek parka features a waterproof exterior and a thermal interior, making it a must-have for winter escapades in the city or the mountains.',
                },
                {
                    imageId: 'dark_parka_jacket_3.png',
                    description: 'With its adjustable features and multiple pockets, this parka blends practicality with modern aesthetics for the ultimate winter outerwear.',
                },
                {
                    imageId: 'dark_trench_coat_1.png',
                    description: 'A modern twist on a classic design, this dark trench coat offers both sophistication and weather resistance, perfect for rainy days.',
                },
                {
                    imageId: 'light_down_jacket_1.png',
                    description: 'Lightweight yet warm, this down jacket is an essential layer for transitional weather, offering comfort without bulk.',
                },
                {
                    imageId: 'light_down_jacket_2.png',
                    description: 'Embrace the cold in this light and airy down jacket, featuring a water-resistant shell and a sleek design for everyday wear.',
                },
                {
                    imageId: 'light_down_jacket_3.png',
                    description: 'This stylish down jacket combines warmth and lightweight design, making it the perfect companion for winter travel.',
                },
                {
                    imageId: 'light_fleece_jacket_1.png',
                    description: 'Enjoy the soft touch of this light fleece jacket, designed for brisk mornings and cool evenings, with a versatile zip-up style for easy layering.',
                },
                {
                    imageId: 'light_jeans_jacket_1.png',
                    description: 'A casual classic, this light denim jacket adds a layer of cool to any outfit, perfect for those crisp, sunny days.',
                },
                {
                    imageId: 'light_jeans_jacket_2.png',
                    description: 'Upgrade your casual wear with this distressed light denim jacket, featuring a relaxed fit and timeless appeal.',
                },
                {
                    imageId: 'light_parka_jacket_1.png',
                    description: "This light parka offers a breathable, water-resistant layer, ideal for unpredictable weather, with a sleek design that doesn't compromise on style.",
                },
                {
                    imageId: 'light_trench_coat_1.png',
                    description: 'A chic and lightweight trench coat that brings an elegant layer to spring and autumn outfits, with a belted waist for a flattering fit.',
                },
                {
                    imageId: 'light_trench_coat_2.png',
                    description: 'Enjoy a stylish and sophisticated look with this lightweight trench coat made from a fabric that resists both wind and rain. Perfect for the transition between seasons.',
                },
                {
                    imageId: 'light_wind_jacket_1.png',
                    description: 'Take on the breezy days with this lightweight wind jacket that is designed to offer protection and style with its minimalist design and functional features.',
                },
                {
                    imageId: 'light_wind_jacket_2.png',
                    description: 'A versatile windbreaker for active days. This jacket offers lightweight comfort and resistance to the elements in a sleek package.',
                },
                {
                    imageId: 'light_wind_jacket_3.png',
                    description: 'Stay ahead of the weather with this dynamic light wind jacket, combining breathability with waterproof technology for all-day comfort.',
                },
                {
                    imageId: 'light_wind_jacket_4.png',
                    description: 'A comfortable wind jacket designed to keep you warm during winter or rain. With a minimal light grey color it suits the rest of your outfit well.',
                },
            ];
            productImageIDs.forEach(function (_a, i) {
                var description = _a.description, imageId = _a.imageId;
                products.push({
                    id: (i + 1).toString(),
                    name: formatFileName(imageId),
                    description: description,
                    price: parseFloat(faker_1.faker.commerce.price({ min: 40, max: 200 })),
                    imageId: imageId,
                });
            });
            products.forEach(function (product) { return __awaiter(_this, void 0, void 0, function () {
                var _a, _b;
                var _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, db.insert(schema_1.productsTable).values(product).onConflictDoNothing()];
                        case 1:
                            _d.sent();
                            _b = (_a = index).upsert;
                            _c = {
                                id: product.id
                            };
                            return [4 /*yield*/, (0, vectorize_1.vectorize)("".concat(product.name, ": ").concat(product.description))];
                        case 2: return [4 /*yield*/, _b.apply(_a, [(_c.vector = _d.sent(),
                                    _c.metadata = {
                                        id: product.id,
                                        name: product.name,
                                        description: product.description,
                                        price: product.price,
                                        imageId: product.imageId,
                                    },
                                    _c)])];
                        case 3:
                            _d.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
// 'dark_down_jacket_1.png' -> 'Dark Down Jacket 1'
function formatFileName(fileName) {
    var nameWithoutExtension = fileName.replace(/\.\w+$/, '');
    var words = nameWithoutExtension.split('_');
    var capitalizedWords = words.map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); });
    return capitalizedWords.join(' ');
}
main();
