//Let's build a framework/library
//                      greetr
//requirements  : build a library / frameworks that helps us give greetings

//When given a first name, lasat name, and optional language, it generates formal and informal greetings.

//support English and spanish languages

//Reusable library/framework

//Easy to type 'G$()' structure

//Support JQuery

(function(global, $){
    var Greetr = function(firstname, lastname, language){
        return new Greetr.init(firstname, lastname , language);
    }
    Greetr.prototype = {}; //methods go here
    Greetr.init = function (firstname, lastname, language){
        var self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
    }
    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;
    
    
}(window, jQuery));