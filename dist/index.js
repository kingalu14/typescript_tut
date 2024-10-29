"use strict";
var _a;
let sales = 123456789;
let course = "typescript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let m_array = [1, 2, 3];
let n_array = [];
let t_user = [1, "kassim"];
console.log(t_user[0]);
console.log(t_user[1]);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022 || 2024) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(mySize);
let employee = {
    id: 1,
    name: "Moshi",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight);
}
let weight;
let textBox = {
    drag: () => { },
    resizable: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map