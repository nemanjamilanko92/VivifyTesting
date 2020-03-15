import {Config,browser} from 'protractor';
let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
import {SpecReporter} from "jasmine-spec-reporter";
export let config: Config = {
 SELENIUM_PROMISE_MANAGER: false,
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ 
               './specs/createGallery.specs.ts' 
          ],
  //seleniumAddress: 'http://localhost:44444/wd/hub',
  jasmineNodeOpts:{
    showColors:true,
  
  },
  getPageTimeout: 30000,
  onPrepare:()=>{
   browser.manage().timeouts().implicitlyWait(1000)
    browser.driver.manage().window().maximize();
   // browser.ignoreSynchronization = true;
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/report',
        screenshotsFolder: 'screenshots',
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true,
        fileNameDateSuffix: true,
        fixedScreenshotName: true,
        cleanDestination: false,
        fileNameSeparator: '-',
        
      }));
      jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
          displayStacktrace: true,
          displaySuccessful: true,
          displayFailed: true
        },
        summary: {
          displayDuration: true,
          displayErrorMessages: true
        }
      }));
    
  },
  suites:{
    smoke:['spec1.js']
  },
directConnect:true,
  noGlobals: false
};