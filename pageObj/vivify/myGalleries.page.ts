import {browser,element,by,By,ElementFinder,$, $$,protractor, promise} from 'protractor';

export class MyGallery{

    public delGalBtn:ElementFinder
    public ComTextArea:ElementFinder
    public deleteImgBtn:ElementFinder
    public EditGallery:ElementFinder
    public SubmitBtn:ElementFinder
    public nextImgBtn:ElementFinder
    public prevImgBtn:ElementFinder
    public galleryName:ElementFinder
    public bigTitle:ElementFinder
    public description:ElementFinder
    public comment:ElementFinder
    public commentTooLong:ElementFinder
    constructor(){
        this.commentTooLong=element(by.xpath("//p[@class='alert alert-danger']"))
        this.comment=element(by.xpath("//div[@class='comments-section']"))
        this.description=element(by.xpath("//p[contains(text(),'New Description')]"))
        this.bigTitle=element(by.xpath("//h1[@class='title-style']"))
        this.galleryName=element(by.xpath("//a[contains(text(),'Testgal')]"))
        this.EditGallery=element(by.xpath("//a[@class='btn btn-custom']")) 
        this.delGalBtn=element(by.xpath("//button[contains(text(),'Delete Gallery')]"))
        this.ComTextArea = element(by.xpath("//textarea[@placeholder='Comment...']"))
        this.SubmitBtn = element(by.xpath("//button[contains(text(),'Submit')]"))
        this.nextImgBtn = element(by.xpath("//span[@class='carousel-control-next-icon']"))
        this.prevImgBtn=element(by.xpath("//span[@class='carousel-control-prev-icon']"))
    }   
    public async getGalleryName():Promise<string>{
        let text = await this.galleryName.getText();
        return text.trim();
    }
    public async getGallerybigTitleText():Promise<string>{
        let text = await this.bigTitle.getText();
        return text.trim();
    }
    public async getdescriptionText():Promise<string>{
        let text = await this.description.getText();
        return text.trim();
    }
    public async setComment(value:string){
        await this.ComTextArea.sendKeys(value)
        await this.SubmitBtn.click()
    }

    public async getCommentText():Promise<string>{
        let text = await this.comment.getText();
        return text.trim();
    }
    public async commentTooLongText():Promise<string>{
        let text = await this.commentTooLong.getText();
        return text.trim();
    }
}