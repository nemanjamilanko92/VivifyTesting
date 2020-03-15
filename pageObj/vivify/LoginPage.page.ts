import {browser,element,by,By,ElementFinder,$, $$,protractor} from 'protractor';

export class LoginPage {

    public email :ElementFinder 
    public password:ElementFinder
    public SubmitBtn:ElementFinder

    constructor(){
    this.email=element(by.id("email"))
    this.password=element(by.id("password"))
    this.SubmitBtn = element(by.xpath("//button[@class='btn btn-custom']"))
}

public async Login(email:string,password:string){
    this.email.sendKeys(email)
    this.password.sendKeys(password)
    this.SubmitBtn.click()
}
}