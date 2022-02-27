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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../models/User");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const store = new User_1.UsersStore();
describe("POST /user", () => {
    it("should return a token", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = {
            firstName: "david",
            lastName: "wagih",
            password: "dazy123",
        };
        const res = yield (0, supertest_1.default)(server_1.default).post("/user").send(user);
        console.log(res.body);
        expect(res.status).toBe(200);
    }));
});
describe("POST /user/login", () => {
    it("should return a token", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = {
            firstName: "david",
            password: "dazy123",
        };
        const res = yield (0, supertest_1.default)(server_1.default).post("/user/login").send(user);
        console.log(res.body);
        expect(res.status).toBe(200);
    }));
});
// todo : needs authentication
describe("GET /user", () => {
    it("should return a 200 response", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.default).get("/user");
        expect(res.status).toBe(200);
    }));
});
