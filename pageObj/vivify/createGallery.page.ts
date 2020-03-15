import {browser,element,by,By,ElementFinder,$, $$,protractor} from 'protractor';

export class CreateGallery{

    public title:ElementFinder
    public description:ElementFinder
    public images:ElementFinder
    public addImgBtn:ElementFinder
    public submitBtn:ElementFinder
    public cancel:ElementFinder
    public deleteImgBtn:ElementFinder
    public secondImg:ElementFinder
    public titleErrorMSg:ElementFinder
    public urlErrorMsg:ElementFinder
    public titleErrorMsgTooLong:ElementFinder
    public titleErrorMsgTooshort:ElementFinder
    public descError:ElementFinder
    constructor(){
        this.titleErrorMsgTooshort = element(by.xpath("//p[contains(text(),'The title must be at least 2 characters.')]"))
        this.titleErrorMsgTooLong=element(by.xpath("//p[contains(text(),'The title may not be greater than 255 characters.')]"))
        this.descError=element(by.xpath("//p[contains(text(),'The description may not be greater than 1000 chara')]"))
        this.title=$("#title");
        this.titleErrorMSg = element(by.xpath("//p[contains(text(),'The title field is required.')]"))
        this.urlErrorMsg = element(by.xpath("//p[contains(text(),'Wrong format of image')]"))
        this.description=$("#description")
        this.images=element(by.xpath("//input[@placeholder='image url']"))
        this.addImgBtn=element(by.xpath("//button[contains(text(),'Add image')]"))
        this.submitBtn=element(by.xpath("//button[contains(text(),'Submit')]"))
        this.cancel=element(by.xpath("//button[contains(text(),'Cancel')]"))
        this.secondImg=element(by.xpath("//div[@class='container']//div[2]//div[1]//input[1]"))
    }

    public async createGallery(title,description,imagesURL){
     await  this.title.sendKeys(title)
      await this.description.sendKeys(description)
      await this.images.sendKeys(imagesURL)
     await  this.submitBtn.click()
    }
    public async editGallery(title,description,imagesURL){
        await  this.title.clear()
        await  this.title.sendKeys(title)
        await this.description.clear()
         await this.description.sendKeys(description)
         await this.images.clear()
         await this.addImgBtn.click()
        await this.secondImg.sendKeys(imagesURL)
         await  this.submitBtn.click()
       }
       public async titleErrorMSgText():Promise<string>{
        let text = await this.titleErrorMSg.getText();
        return text.trim();
    }
    public async urlErrorMsgText():Promise<string>{
        let text = await this.urlErrorMsg.getText();
        return text.trim();
    }
    public async titleErrorMsgTooLongText():Promise<string>{
        let text = await this.titleErrorMsgTooLong.getText();
        return text.trim();
    }
    public async titleErrorMsgTooshortText():Promise<string>{
        let text = await this.titleErrorMsgTooshort.getText();
        return text.trim();
    }
    public async descErrorText():Promise<string>{
        let text = await this.descError.getText();
        return text.trim();
    }
}