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
class MyGallery {
    constructor() {
        this.commentTooLong = protractor_1.element(protractor_1.by.xpath("//p[@class='alert alert-danger']"));
        this.comment = protractor_1.element(protractor_1.by.xpath("//div[@class='comments-section']"));
        this.description = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'New Description')]"));
        this.bigTitle = protractor_1.element(protractor_1.by.xpath("//h1[@class='title-style']"));
        this.galleryName = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Testgal')]"));
        this.EditGallery = protractor_1.element(protractor_1.by.xpath("//a[@class='btn btn-custom']"));
        this.delGalBtn = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Delete Gallery')]"));
        this.ComTextArea = protractor_1.element(protractor_1.by.xpath("//textarea[@placeholder='Comment...']"));
        this.SubmitBtn = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Submit')]"));
        this.nextImgBtn = protractor_1.element(protractor_1.by.xpath("//span[@class='carousel-control-next-icon']"));
        this.prevImgBtn = protractor_1.element(protractor_1.by.xpath("//span[@class='carousel-control-prev-icon']"));
    }
    getGalleryName() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.galleryName.getText();
            return text.trim();
        });
    }
    getGallerybigTitleText() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.bigTitle.getText();
            return text.trim();
        });
    }
    getdescriptionText() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.description.getText();
            return text.trim();
        });
    }
    setComment(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ComTextArea.sendKeys(value);
            yield this.SubmitBtn.click();
        });
    }
    getCommentText() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.comment.getText();
            return text.trim();
        });
    }
    commentTooLongText() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.commentTooLong.getText();
            return text.trim();
        });
    }
}
exports.MyGallery = MyGallery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlHYWxsZXJpZXMucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VPYmovdml2aWZ5L215R2FsbGVyaWVzLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUF5RjtBQUV6RixNQUFhLFNBQVM7SUFjbEI7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUE7UUFDekUsSUFBSSxDQUFDLE9BQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQTtRQUM3RSxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUE7UUFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFBO1FBQ3JFLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQTtRQUNsRSxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLENBQUE7UUFDL0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBO1FBQzdFLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQTtRQUN6RSxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLENBQUE7UUFDbEYsSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxDQUFBO0lBQ3BGLENBQUM7SUFDWSxjQUFjOztZQUN2QixJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDNUMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBQ1ksc0JBQXNCOztZQUMvQixJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBQ1ksa0JBQWtCOztZQUMzQixJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDNUMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBQ1ksVUFBVSxDQUFDLEtBQVk7O1lBQ2hDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdEMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2hDLENBQUM7S0FBQTtJQUVZLGNBQWM7O1lBQ3ZCLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixDQUFDO0tBQUE7SUFDWSxrQkFBa0I7O1lBQzNCLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMvQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixDQUFDO0tBQUE7Q0FDSjtBQXBERCw4QkFvREMifQ==