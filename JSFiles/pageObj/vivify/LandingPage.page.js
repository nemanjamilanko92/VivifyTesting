"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LandingPage {
    constructor() {
        this.NoGalFound = protractor_1.element(protractor_1.by.xpath("//h4[contains(text(),'No galleries found')]"));
        this.LoginBtn = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Login')]"));
        this.MyGalleries = protractor_1.element(protractor_1.by.xpath("//a[@class='nav-link nav-buttons router-link-exact-active router-link-active']"));
        this.CreateGallery = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Create Gallery')]"));
        this.SearchField = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='Search...']"));
        this.FilterBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-outline-secondary input-button']"));
        this.logutBtn = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Logout')]"));
    }
    SearchGal(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.SearchField.sendKeys(value);
            yield this.FilterBtn.click();
        });
    }
    NoGalFoundText() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.NoGalFound.getText();
            return text.trim();
        });
    }
}
exports.LandingPage = LandingPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFuZGluZ1BhZ2UucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VPYmovdml2aWZ5L0xhbmRpbmdQYWdlLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFnRjtBQUloRixNQUFhLFdBQVc7SUFVeEI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLENBQUE7UUFDaEYsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdGQUFnRixDQUFDLENBQUMsQ0FBQTtRQUNwSCxJQUFJLENBQUMsYUFBYSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUE7UUFDOUUsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFBO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUMsQ0FBQTtRQUM3RixJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUE7SUFDckUsQ0FBQztJQUNZLFNBQVMsQ0FBQyxLQUFZOztZQUMvQixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3RDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNoQyxDQUFDO0tBQUE7SUFDWSxjQUFjOztZQUN2QixJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0MsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsQ0FBQztLQUFBO0NBQ0E7QUEzQkQsa0NBMkJDIn0=