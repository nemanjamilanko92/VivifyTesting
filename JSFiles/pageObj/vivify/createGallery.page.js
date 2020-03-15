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
class CreateGallery {
    constructor() {
        this.titleErrorMsgTooshort = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'The title must be at least 2 characters.')]"));
        this.titleErrorMsgTooLong = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'The title may not be greater than 255 characters.')]"));
        this.descError = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'The description may not be greater than 1000 chara')]"));
        this.title = protractor_1.$("#title");
        this.titleErrorMSg = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'The title field is required.')]"));
        this.urlErrorMsg = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Wrong format of image')]"));
        this.description = protractor_1.$("#description");
        this.images = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='image url']"));
        this.addImgBtn = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Add image')]"));
        this.submitBtn = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Submit')]"));
        this.cancel = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Cancel')]"));
        this.secondImg = protractor_1.element(protractor_1.by.xpath("//div[@class='container']//div[2]//div[1]//input[1]"));
    }
    createGallery(title, description, imagesURL) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.title.sendKeys(title);
            yield this.description.sendKeys(description);
            yield this.images.sendKeys(imagesURL);
            yield this.submitBtn.click();
        });
    }
    editGallery(title, description, imagesURL) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.title.clear();
            yield this.title.sendKeys(title);
            yield this.description.clear();
            yield this.description.sendKeys(description);
            yield this.images.clear();
            yield this.addImgBtn.click();
            yield this.secondImg.sendKeys(imagesURL);
            yield this.submitBtn.click();
        });
    }
    titleErrorMSgText() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.titleErrorMSg.getText();
            return text.trim();
        });
    }
    urlErrorMsgText() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.urlErrorMsg.getText();
            return text.trim();
        });
    }
    titleErrorMsgTooLongText() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.titleErrorMsgTooLong.getText();
            return text.trim();
        });
    }
    titleErrorMsgTooshortText() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.titleErrorMsgTooshort.getText();
            return text.trim();
        });
    }
    descErrorText() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.descError.getText();
            return text.trim();
        });
    }
}
exports.CreateGallery = CreateGallery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlR2FsbGVyeS5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcGFnZU9iai92aXZpZnkvY3JlYXRlR2FsbGVyeS5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Y7QUFFaEYsTUFBYSxhQUFhO0lBZXRCO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDLENBQUE7UUFDbEgsSUFBSSxDQUFDLG9CQUFvQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyRUFBMkUsQ0FBQyxDQUFDLENBQUE7UUFDeEgsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNEVBQTRFLENBQUMsQ0FBQyxDQUFBO1FBQzlHLElBQUksQ0FBQyxLQUFLLEdBQUMsY0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUMsQ0FBQTtRQUM5RixJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUE7UUFDckYsSUFBSSxDQUFDLFdBQVcsR0FBQyxjQUFDLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQTtRQUMxRSxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FB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