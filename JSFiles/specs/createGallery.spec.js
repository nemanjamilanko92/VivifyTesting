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
const LandingPage_page_1 = require("../pageObj/vivify/LandingPage.page");
const LoginPage_page_1 = require("../pageObj/vivify/LoginPage.page");
const createGallery_page_1 = require("../pageObj/vivify/createGallery.page");
const myGalleries_page_1 = require("../pageObj/vivify/myGalleries.page");
describe('Test create,edit and delete gallery', () => {
    const landingPage = new LandingPage_page_1.LandingPage();
    const loginPage = new LoginPage_page_1.LoginPage();
    const myGallery = new myGalleries_page_1.MyGallery();
    const createGallery = new createGallery_page_1.CreateGallery();
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://gallery-app.vivifyideas.com");
        yield landingPage.LoginBtn.click();
        yield loginPage.Login("testuser@test.com", "12345678");
    }));
    afterAll(() => __awaiter(this, void 0, void 0, function* () {
        yield landingPage.logutBtn.click();
        yield protractor_1.browser.quit();
    }));
    describe("negative test for gallery creation", () => {
        it("Negative Create gallery test empty title ", () => __awaiter(this, void 0, void 0, function* () {
            yield landingPage.CreateGallery.click();
            yield createGallery.createGallery(" ", "nesto", "https://digitalcircleweb.com/wp-content/uploads/2019/08/Drvo-u-sred-jezera.jpg");
            yield landingPage.MyGalleries.click();
            expect(yield createGallery.titleErrorMSgText()).toBe("The title field is required.");
        }));
        it("Negative Create gallery test invalid img format ", () => __awaiter(this, void 0, void 0, function* () {
            yield createGallery.createGallery("TestGal", "nesto", "https://digitalcircleweb.com/wp-content/uploads/2019/08/Drvo-u-sred-jezera");
            yield landingPage.MyGalleries.click();
            expect(yield createGallery.urlErrorMsgText()).toBe("Wrong format of image");
        }));
        it("Negative Create gallery test title minimum title lenght ", () => __awaiter(this, void 0, void 0, function* () {
            yield createGallery.createGallery("a", "nesto", "https://digitalcircleweb.com/wp-content/uploads/2019/08/Drvo-u-sred-jezera");
            yield landingPage.MyGalleries.click();
            expect(yield createGallery.titleErrorMsgTooshortText()).toBe("The title must be at least 2 characters.");
        }));
        it("Negative Create gallery test maximum title lenght ", () => __awaiter(this, void 0, void 0, function* () {
            yield createGallery.createGallery("is33a7u44WegBoRrbDYbIejlX7LwHEJZTqxcwM7kHhHB6dkUVhcZzDnbvQ5wK3wO6PWAVN13kUMJ3aAECI4HdYgpSYrNIGGmA29Yebr8GuwIjtkoxA4a2jkREyvDrXBsedPwOUPxGvDEVpLOmCqWEqVCoxf4BO83CQ3QaqJsQ65ESo3atNwFVZpLpwUYPz9uPNpO1nRghKE9FcgpVBtDgaPk0BFTr4V10NCC3wxwZTqLzyyCpa93QB2uxM1CcfyV", "nesto", "https://digitalcircleweb.com/wp-content/uploads/2019/08/Drvo-u-sred-jezera");
            yield landingPage.MyGalleries.click();
            expect(yield createGallery.titleErrorMsgTooLongText()).toBe("The title may not be greater than 255 characters.");
        }));
        it("Negative Create gallery test desciption too long ", () => __awaiter(this, void 0, void 0, function* () {
            yield createGallery.createGallery("K5CVWt49zgrtyggp66qii1CC8cBhnKuS7hwcozLhRgImI8vV6F4I2GQhg5Ym1y5SfRZnlcCyHNsEpQqYXWa3WC87SE7OvcsOVloBY0O4sdgUIwrlE7HLiEhGyOE0gvEbJKiLqR9EmtqqgffvXeaqev7OyrggCXr8werWE1q987PhKYlktIwvPC4bBBgkpsnrPwF2ZuIc517oMgVWuqfoqfJEFaOtSWSG2Dzxi9AI0LLHCVCRD50rDWEVRdlxRV9SR4EaCCqiiZ7ZQHz2i9iTlaDIGbY3nrf5gB3iD58KeY9LZ68KqN83rfKqMHM8d7IUkqD44AUmKu04aqyLotTJ0JNudwEvxwxwexYRI8vXiE8sNNnv9RpmmwFVUHftS7dhoG5yLTdUh3zCJnRopxNubu89MVIJ4OsJDVsJXA7kzqCmM1ZnTh9o0XgvyBHBM5Si7EjksNDJ0WhBLk1PMHOtWukI5nqSmWHVsR2B9Fx91knyfdoDxVIUGKOCDiFIFAz0vWqZgwlED7sDoIqzFA091V9SYMAKGhJaN9wzbGIBgPI0xRTYW2tgawBn4wx5Sr7LzfYm5sqccfcI3icLD8jqghc5ri8ykwg7nRLlp3GWhthoaP73zzKScH4eKztc97M6wmIkTdeUoRUv9mtev0CBmvucCroekzVJo9L7TLS48XjjQs0kCPYdcnXQu3V2V5wmGQxBaaUgqBvxaTZACaVyQuu6NAhQCLCUasZ9gEfS2WsFtYRpWEKATNy7BXDERoJsVnMwdizyBPogupE3rtZcxnAIqesh4ETi7y3zczJaJYW81kcfa6rhP57rnj2BaJtOZmkferEiMTb0xRr0PclfKXJJz75YtIe4wtSzvzHEQNaRddJLKOqyLe1tGSxmq8RqIAHQbRRguJKKTmFCtU202Y53l2uWUvLNyR9FxoSsByZ6B5z3dFSku0pXoorbSDkFX0ihXDHdkdSndlpyj5NfkunBXiebNf9dhzCoKqcO3", "nesto", "https://digitalcircleweb.com/wp-content/uploads/2019/08/Drvo-u-sred-jezera");
            yield landingPage.MyGalleries.click();
            expect(yield createGallery.descErrorText()).toBe("The description may not be greater than 1000 characters.");
        }));
        it("Set comment test", () => __awaiter(this, void 0, void 0, function* () {
            yield landingPage.AllGalleries.click();
            protractor_1.browser.element(protractor_1.by.xpath("//a[contains(text(),'123')]")).click();
            yield myGallery.setComment("K5CVWt49zgrtyggp66qii1CC8cBhnKuS7hwcozLhRgImI8vV6F4I2GQhg5Ym1y5SfRZnlcCyHNsEpQqYXWa3WC87SE7OvcsOVloBY0O4sdgUIwrlE7HLiEhGyOE0gvEbJKiLqR9EmtqqgffvXeaqev7OyrggCXr8werWE1q987PhKYlktIwvPC4bBBgkpsnrPwF2ZuIc517oMgVWuqfoqfJEFaOtSWSG2Dzxi9AI0LLHCVCRD50rDWEVRdlxRV9SR4EaCCqiiZ7ZQHz2i9iTlaDIGbY3nrf5gB3iD58KeY9LZ68KqN83rfKqMHM8d7IUkqD44AUmKu04aqyLotTJ0JNudwEvxwxwexYRI8vXiE8sNNnv9RpmmwFVUHftS7dhoG5yLTdUh3zCJnRopxNubu89MVIJ4OsJDVsJXA7kzqCmM1ZnTh9o0XgvyBHBM5Si7EjksNDJ0WhBLk1PMHOtWukI5nqSmWHVsR2B9Fx91knyfdoDxVIUGKOCDiFIFAz0vWqZgwlED7sDoIqzFA091V9SYMAKGhJaN9wzbGIBgPI0xRTYW2tgawBn4wx5Sr7LzfYm5sqccfcI3icLD8jqghc5ri8ykwg7nRLlp3GWhthoaP73zzKScH4eKztc97M6wmIkTdeUoRUv9mtev0CBmvucCroekzVJo9L7TLS48XjjQs0kCPYdcnXQu3V2V5wmGQxBaaUgqBvxaTZACaVyQuu6NAhQCLCUasZ9gEfS2WsFtYRpWEKATNy7BXDERoJsVnMwdizyBPogupE3rtZcxnAIqesh4ETi7y3zczJaJYW81kcfa6rhP57rnj2BaJtOZmkferEiMTb0xRr0PclfKXJJz75YtIe4wtSzvzHEQNaRddJLKOqyLe1tGSxmq8RqIAHQbRRguJKKTmFCtU202Y53l2uWUvLNyR9FxoSsByZ6B5z3dFSku0pXoorbSDkFX0ihXDHdkdSndlpyj5NfkunBXiebNf9dhzCoKqcO3");
            expect(yield myGallery.commentTooLongText()).toBe("The body may not be greater than 1000 characters.");
        }));
    });
    describe("positive tests for gallery create,edit and delete", () => {
        it("Positve Test Create Gallery", () => __awaiter(this, void 0, void 0, function* () {
            yield landingPage.CreateGallery.click();
            yield createGallery.createGallery("Testgal", "nesto", "https://digitalcircleweb.com/wp-content/uploads/2019/08/Drvo-u-sred-jezera.jpg");
            yield landingPage.MyGalleries.click();
            expect(yield myGallery.getGalleryName()).toBe("Testgal");
        }));
        it("Edit Gallery Test", () => __awaiter(this, void 0, void 0, function* () {
            yield myGallery.galleryName.click();
            yield createGallery.editGallery("NewTitle", "New Description", "https://digitalcircleweb.com/wp-content/uploads/2019/08/Drvo-u-sred-jezera.jpg");
            expect(yield myGallery.getGallerybigTitleText()).toBe("NewTitle");
            expect(yield myGallery.getdescriptionText()).toBe("New Description");
        }));
        it("Set comment test", () => __awaiter(this, void 0, void 0, function* () {
            yield myGallery.setComment("Random Text");
            expect(yield myGallery.getCommentText()).toContain("Random Text");
        }));
        it("Delete Gallery Test", () => __awaiter(this, void 0, void 0, function* () {
            yield myGallery.delGalBtn.click();
            yield protractor_1.browser.switchTo().alert().accept();
            yield landingPage.SearchGal("NewTitle");
            expect(yield landingPage.NoGalFoundText()).toBe("No galleries found");
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlR2FsbGVyeS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvY3JlYXRlR2FsbGVyeS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbUQ7QUFDbkQseUVBQTZEO0FBQzdELHFFQUF5RDtBQUN6RCw2RUFBaUU7QUFDakUseUVBQTJEO0FBQzNELFFBQVEsQ0FBQyxxQ0FBcUMsRUFBQyxHQUFFLEVBQUU7SUFDL0MsTUFBTSxXQUFXLEdBQUcsSUFBSSw4QkFBVyxFQUFFLENBQUE7SUFDckMsTUFBTSxTQUFTLEdBQUcsSUFBSSwwQkFBUyxFQUFFLENBQUE7SUFDakMsTUFBTSxTQUFTLEdBQUcsSUFBSSw0QkFBUyxFQUFFLENBQUE7SUFDakMsTUFBTSxhQUFhLEdBQUcsSUFBSSxrQ0FBYSxFQUFFLENBQUE7SUFDekMsU0FBUyxDQUFDLEdBQU8sRUFBRTtRQUNqQixNQUFPLG9CQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUE7UUFDeEQsTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2xDLE1BQU0sU0FBUyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBQyxVQUFVLENBQUMsQ0FBQTtJQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLEdBQU8sRUFBRTtRQUNsQixNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDbEMsTUFBTSxvQkFBTyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3BCLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsb0NBQW9DLEVBQUMsR0FBRSxFQUFFO1FBQ2xELEVBQUUsQ0FBQywyQ0FBMkMsRUFBQyxHQUFPLEVBQUU7WUFDcEQsTUFBTSxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3ZDLE1BQU0sYUFBYSxDQUFDLGFBQWEsQ0FB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