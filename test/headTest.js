const head = require("../head");
const assertEqual = require("../assertEqual");

assertEqual(head([3]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");