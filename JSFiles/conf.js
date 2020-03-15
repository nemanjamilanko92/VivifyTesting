"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
exports.config = {
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: [
        './specs/createGallery.specs.ts'
    ],
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    jasmineNodeOpts: {
        showColors: true,
    },
    getPageTimeout: 30000,
    onPrepare: () => {
        protractor_1.browser.manage().timeouts().implicitlyWait(1000);
        protractor_1.browser.driver.manage().window().maximize();
        // browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'target/report',
            screenshotsFolder: 'screenshots',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true,
            fileNameDateSuffix: true,
            fixedScreenshotName: true,
            cleanDestination: false,
            fileNameSeparator: '-',
        }));
        jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({
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
    suites: {
        smoke: ['spec1.js']
    },
    directConnect: true,
    noGlobals: false
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMEM7QUFDMUMsSUFBSSxvQkFBb0IsR0FBRyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUN4RSxpRUFBbUQ7QUFDeEMsUUFBQSxNQUFNLEdBQVc7SUFDM0Isd0JBQXdCLEVBQUUsS0FBSztJQUM5QixTQUFTLEVBQUUsU0FBUztJQUNwQixZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUNELEtBQUssRUFBRTtRQUNNLGdDQUFnQztLQUNwQztJQUNULGtEQUFrRDtJQUNsRCxlQUFlLEVBQUM7UUFDZCxVQUFVLEVBQUMsSUFBSTtLQUVoQjtJQUNELGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFNBQVMsRUFBQyxHQUFFLEVBQUU7UUFDYixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMvQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3Qyx3Q0FBd0M7UUFDdkMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FDMUIsSUFBSSxvQkFBb0IsQ0FBQztZQUN2QixRQUFRLEVBQUUsZUFBZTtZQUN6QixpQkFBaUIsRUFBRSxhQUFhO1lBQ2hDLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLDZCQUE2QixFQUFFLElBQUk7WUFDbkMsa0JBQWtCLEVBQUUsSUFBSTtZQUN4QixtQkFBbUIsRUFBRSxJQUFJO1lBQ3pCLGdCQUFnQixFQUFFLEtBQUs7WUFDdkIsaUJBQWlCLEVBQUUsR0FBRztTQUV2QixDQUFDLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxvQ0FBWSxDQUFDO1lBQzVDLElBQUksRUFBRTtnQkFDSixpQkFBaUIsRUFBRSxJQUFJO2dCQUN2QixpQkFBaUIsRUFBRSxJQUFJO2dCQUN2QixhQUFhLEVBQUUsSUFBSTthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxlQUFlLEVBQUUsSUFBSTtnQkFDckIsb0JBQW9CLEVBQUUsSUFBSTthQUMzQjtTQUNGLENBQUMsQ0FBQyxDQUFDO0lBRVIsQ0FBQztJQUNELE1BQU0sRUFBQztRQUNMLEtBQUssRUFBQyxDQUFDLFVBQVUsQ0FBQztLQUNuQjtJQUNILGFBQWEsRUFBQyxJQUFJO0lBQ2hCLFNBQVMsRUFBRSxLQUFLO0NBQ2pCLENBQUMifQ==