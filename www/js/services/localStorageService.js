angular.module('app.services')

.service('localStorage', ['$log', function($log) {
        this.storeData = function(dataName,dataValue){
             window.localStorage.setItem(dataName, dataValue);
            $log.log("Saved: localStorage["+dataName+"] = "+dataValue);
        };
  
        this.loadData = function(dataName){
            return window.localStorage.getItem(dataName);
            $log.log("Loaded: localStorage["+dataName+"] = "+dataValue);
        };
    
    
    this.localDB = {
        user: 
            {
                name: "Alex Milman",
                email: "Alex@MILMAN.com",
                password:"1234",
                numOfNotifications:3,
                  
            },
        jobs:[
            {
                name:"Fix Lock",
                type:"Locksmithing",
                contractor:{ name: "Yosi Vardi", Industry: "Locksmith", telephone: "052-1111111",},
                customer:{name: "Boji Herzog", address: "12 Be-Seret St.", city: "Lala Land", telephone: "052-1234567"},
                scheduledFor:"Dec 24, 2015",
                
            },
            {
                name:"Busted Computer",
                type:"Computer Repairing",
                contractor:{ name: "Bill Gates",
                            Industry: "Computer Repair",
                            telephone: "050-2222222",},
                customer:{name: "Suzi Suzana",
                          address: "39 M&M St.",
                          city: "Times Square",
                          telephone: "054-4242424",},
                scheduledFor:"Jan 15, 2016",   
            },
            {
                name:"Rip Off!",
                type:"Stealing",
                contractor:{name: "Jhon Travolta",
                            Industry: "Scientology",
                            telephone: "054-3333333", },
                customer:{name: "Bon Jovi",
                          address: "114 Star Lane",
                          city: "Hollywood",
                          telephone: "1800-CALL-NOW",},
                scheduledFor:"Nov 38, 2153",     
            },
        ],
        contractors: [
            {
                name: "Yosi Vardi",
                Industry: "Locksmith",
                telephone: "052-1111111",
            },
            {
                name: "Bill Gates",
                Industry: "Computer Repair",
                telephone: "050-2222222",
            },
            {
                name: "Jhon Travolta",
                Industry: "Scientology",
                telephone: "054-3333333",
            }
        ],
        customers: [
            {
                name: "Boji Herzog",
                address: "12 Be-Seret St.",
                city: "Lala Land",
                telephone: "052-1234567",
            },
            {
                name: "Suzi Suzana",
                address: "39 M&M St.",
                city: "Times Square",
                telephone: "054-4242424",
                
            },
            {
                name: "Bon Jovi",
                address: "114 Star Lane",
                city: "Hollywood",
                telephone: "1800-CALL-NOW",
                
            }],
    };
    
    
    
}]);