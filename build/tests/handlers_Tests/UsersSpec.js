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
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../models/User");
const store = new User_1.UsersStore();
// Test for the Create Method in User Model
describe("Create User Method", () => {
    it("should create a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = {
            id: 3,
            firstName: "John",
            lastName: "Doe",
            password: "12345",
        };
        const createdUser = yield store.create(user);
        expect(createdUser.firstName).toBe(user.firstName);
        expect(createdUser.lastName).toBe(user.lastName);
        expect(createdUser.password).toBe(user.password);
    }));
});
