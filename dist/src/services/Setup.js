"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contentful_1 = require("contentful");
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;
if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
    throw new Error([
        'Need Space ID and Access Token to work.',
        'Fill in the Space ID and Access Token as shown in .env.example file.',
    ].join('\n'));
}
const client = (0, contentful_1.createClient)({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
});
exports.default = client;
