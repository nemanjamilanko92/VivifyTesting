import { browser, element,by,By } from "protractor"
import{LandingPage} from "../pageObj/vivify/LandingPage.page"
import{LoginPage} from "../pageObj/vivify/LoginPage.page"
import{CreateGallery} from "../pageObj/vivify/createGallery.page"
import{MyGallery} from "../pageObj/vivify/myGalleries.page"
describe('Test create,edit and delete gallery',()=>{
    const landingPage = new LandingPage()
    const loginPage = new LoginPage()
    const myGallery = new MyGallery()
    const createGallery = new CreateGallery()
    beforeAll(async()=>{
      await  browser.get("https://gallery-app.vivifyideas.com")
       await landingPage.LoginBtn.click()
       await loginPage.Login("testuser@test.com","12345678")
    })
    afterAll(async()=>{
    await landingPage.logutBtn.click()
    await browser.quit()
    })
    describe("negative test for gallery creation",()=>{
    it("Negative Create gallery test empty title ",async()=>{
        await landingPage.CreateGallery.click()
        await createGallery.createGallery(" ","nesto","https://digitalcircleweb.com/wp-content/uploads/2019/08/Drvo-u-sred-jezera.jpg")
       await  landingPage.MyGalleries.click()
         expect(await createGallery.titleErrorMSgText()).toBe("The title field is required.")
    })
    it("Negative Create gallery test invalid img format ",async()=>{
        
        await createGallery.createGallery("TestGal","nesto","https://digitalcircleweb.com/wp-content/uploads/2019/08/Drvo-u-sred-jezera")
       await  landingPage.MyGalleries.click()
         expect(await createGallery.urlErrorMsgText()).toBe("Wrong format of image")
    })
    it("Negative Create gallery test title minimum title lenght ",async()=>{
     //add comment
        await createGallery.createGallery("a","nesto","https://digitalcircleweb.com/wp-content/uploads/2019/08/Drvo-u-sred-jezera")
       await  landingPage.MyGalleries.click()
         expect(await createGallery.titleErrorMsgTooshortText()).toBe("The title must be at least 2 characters.")
    })
    it("Negative Create gallery test maximum title lenght ",async()=>{
       
        await createGallery.createGallery("is33a7u44WegBoRrbDYbIejlX7LwHEJZTqxcwM7kHhHB6dkUVhcZzDnbvQ5wK3wO6PWAVN13kUMJ3aAECI4HdYgpSYrNIGGmA29Yebr8GuwIjtkoxA4a2jkREyvDrXBsedPwOUPxGvDEVpLOmCqWEqVCoxf4BO83CQ3QaqJsQ65ESo3atNwFVZpLpwUYPz9uPNpO1nRghKE9FcgpVBtDgaPk0BFTr4V10NCC3wxwZTqLzyyCpa93QB2uxM1CcfyV","nesto","https://digitalcircleweb.com/wp-content/uploads/2019/08/Drvo-u-sred-jezera")
       await  landingPage.MyGalleries.click()
         expect(await createGallery.titleErrorMsgTooLongText()).toBe("The title may not be greater than 255 characters.")
    })
    it("Negative Create gallery test desciption too long ",async()=>{
       
        await createGallery.createGallery("K5CVWt49zgrtyggp66qii1CC8cBhnKuS7hwcozLhRgImI8vV6F4I2GQhg5Ym1y5SfRZnlcCyHNsEpQqYXWa3WC87SE7OvcsOVloBY0O4sdgUIwrlE7HLiEhGyOE0gvEbJKiLqR9EmtqqgffvXeaqev7OyrggCXr8werWE1q987PhKYlktIwvPC4bBBgkpsnrPwF2ZuIc517oMgVWuqfoqfJEFaOtSWSG2Dzxi9AI0LLHCVCRD50rDWEVRdlxRV9SR4EaCCqiiZ7ZQHz2i9iTlaDIGbY3nrf5gB3iD58KeY9LZ68KqN83rfKqMHM8d7IUkqD44AUmKu04aqyLotTJ0JNudwEvxwxwexYRI8vXiE8sNNnv9RpmmwFVUHftS7dhoG5yLTdUh3zCJnRopxNubu89MVIJ4OsJDVsJXA7kzqCmM1ZnTh9o0XgvyBHBM5Si7EjksNDJ0WhBLk1PMHOtWukI5nqSmWHVsR2B9Fx91knyfdoDxVIUGKOCDiFIFAz0vWqZgwlED7sDoIqzFA091V9SYMAKGhJaN9wzbGIBgPI0xRTYW2tgawBn4wx5Sr7LzfYm5sqccfcI3icLD8jqghc5ri8ykwg7nRLlp3GWhthoaP73zzKScH4eKztc97M6wmIkTdeUoRUv9mtev0CBmvucCroekzVJo9L7TLS48XjjQs0kCPYdcnXQu3V2V5wmGQxBaaUgqBvxaTZACaVyQuu6NAhQCLCUasZ9gEfS2WsFtYRpWEKATNy7BXDERoJsVnMwdizyBPogupE3rtZcxnAIqesh4ETi7y3zczJaJYW81kcfa6rhP57rnj2BaJtOZmkferEiMTb0xRr0PclfKXJJz75YtIe4wtSzvzHEQNaRddJLKOqyLe1tGSxmq8RqIAHQbRRguJKKTmFCtU202Y53l2uWUvLNyR9FxoSsByZ6B5z3dFSku0pXoorbSDkFX0ihXDHdkdSndlpyj5NfkunBXiebNf9dhzCoKqcO3","nesto","https://digitalcircleweb.com/wp-content/uploads/2019/08/Drvo-u-sred-jezera")
       await  landingPage.MyGalleries.click()
         expect(await createGallery.descErrorText()).toBe("The description may not be greater than 1000 characters.")
    })
    it("Set comment test",async ()=>{
        await landingPage.AllGalleries.click()
        browser.element(by.xpath("//a[contains(text(),'123')]")).click()
        await myGallery.setComment("K5CVWt49zgrtyggp66qii1CC8cBhnKuS7hwcozLhRgImI8vV6F4I2GQhg5Ym1y5SfRZnlcCyHNsEpQqYXWa3WC87SE7OvcsOVloBY0O4sdgUIwrlE7HLiEhGyOE0gvEbJKiLqR9EmtqqgffvXeaqev7OyrggCXr8werWE1q987PhKYlktIwvPC4bBBgkpsnrPwF2ZuIc517oMgVWuqfoqfJEFaOtSWSG2Dzxi9AI0LLHCVCRD50rDWEVRdlxRV9SR4EaCCqiiZ7ZQHz2i9iTlaDIGbY3nrf5gB3iD58KeY9LZ68KqN83rfKqMHM8d7IUkqD44AUmKu04aqyLotTJ0JNudwEvxwxwexYRI8vXiE8sNNnv9RpmmwFVUHftS7dhoG5yLTdUh3zCJnRopxNubu89MVIJ4OsJDVsJXA7kzqCmM1ZnTh9o0XgvyBHBM5Si7EjksNDJ0WhBLk1PMHOtWukI5nqSmWHVsR2B9Fx91knyfdoDxVIUGKOCDiFIFAz0vWqZgwlED7sDoIqzFA091V9SYMAKGhJaN9wzbGIBgPI0xRTYW2tgawBn4wx5Sr7LzfYm5sqccfcI3icLD8jqghc5ri8ykwg7nRLlp3GWhthoaP73zzKScH4eKztc97M6wmIkTdeUoRUv9mtev0CBmvucCroekzVJo9L7TLS48XjjQs0kCPYdcnXQu3V2V5wmGQxBaaUgqBvxaTZACaVyQuu6NAhQCLCUasZ9gEfS2WsFtYRpWEKATNy7BXDERoJsVnMwdizyBPogupE3rtZcxnAIqesh4ETi7y3zczJaJYW81kcfa6rhP57rnj2BaJtOZmkferEiMTb0xRr0PclfKXJJz75YtIe4wtSzvzHEQNaRddJLKOqyLe1tGSxmq8RqIAHQbRRguJKKTmFCtU202Y53l2uWUvLNyR9FxoSsByZ6B5z3dFSku0pXoorbSDkFX0ihXDHdkdSndlpyj5NfkunBXiebNf9dhzCoKqcO3")
        expect(await myGallery.commentTooLongText()).toBe("The body may not be greater than 1000 characters.")
    })
})
describe("positive tests for gallery create,edit and delete",()=>{
    it("Positve Test Create Gallery",async()=>{

       await landingPage.CreateGallery.click()
       await createGallery.createGallery("Testgal","nesto","https://digitalcircleweb.com/wp-content/uploads/2019/08/Drvo-u-sred-jezera.jpg")
      await  landingPage.MyGalleries.click()
        expect(await myGallery.getGalleryName()).toBe("Testgal")
       
    })
    it("Edit Gallery Test",async()=>{
        await myGallery.galleryName.click()
        await createGallery.editGallery("NewTitle","New Description","https://digitalcircleweb.com/wp-content/uploads/2019/08/Drvo-u-sred-jezera.jpg")
        expect(await myGallery.getGallerybigTitleText()).toBe("NewTitle")
        expect(await myGallery.getdescriptionText()).toBe("New Description")
    })
    it("Set comment test",async ()=>{
        await myGallery.setComment("Random Text")
        expect(await myGallery.getCommentText()).toContain("Random Text")
    })
    it("Delete Gallery Test", async()=>{

      await myGallery.delGalBtn.click()
      await browser.switchTo().alert().accept()
      await landingPage.SearchGal("NewTitle")
      expect(await landingPage.NoGalFoundText()).toBe("No galleries found")
    })
})
})