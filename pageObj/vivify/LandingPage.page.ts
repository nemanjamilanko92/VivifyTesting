import {browser,element,by,By,ElementFinder,$, $$,protractor} from 'protractor';
import { EEXIST } from 'constants';


export class LandingPage{

public LoginBtn:ElementFinder
public AllGalleries:ElementFinder
public MyGalleries:ElementFinder
public CreateGallery:ElementFinder
public SearchField:ElementFinder
public FilterBtn:ElementFinder
public NoGalFound:ElementFinder
public logutBtn:ElementFinder
constructor(){
    this.NoGalFound=element(by.xpath("//h4[contains(text(),'No galleries found')]"))
    this.LoginBtn=element(by.xpath("//a[contains(text(),'Login')]"))
    this.MyGalleries=element(by.xpath("//a[@class='nav-link nav-buttons router-link-exact-active router-link-active']"))
    this.CreateGallery=element(by.xpath("//a[contains(text(),'Create Gallery')]"))
    this.SearchField=element(by.xpath("//input[@placeholder='Search...']"))
    this.FilterBtn=element(by.xpath("//button[@class='btn btn-outline-secondary input-button']"))
    this.logutBtn=element(by.xpath("//a[contains(text(),'Logout')]"))
}
public async SearchGal(value:string){
    await this.SearchField.sendKeys(value)
    await this.FilterBtn.click()
}
public async NoGalFoundText():Promise<string>{
    let text = await this.NoGalFound.getText();
    return text.trim();
}
}