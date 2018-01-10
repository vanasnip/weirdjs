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
    var supportedLangs = ['en','es'];

    var greetings = { //Not exposed to the outside environment
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }

    Greetr.prototype = {//methods go here
        fullname : function (){
            return this.firstname + ' ' + this.lastname;
        },
        validate: function(){
            if (supportedLangs.indexOf(this.language) === -1){
                throw 'Invalid Language'
            }
        },
        greeting: function(){
            return greetings[this.language] + ' ' + this.firstname + '!';
        },
        formalGreeting: function(){
            return formalGreetings[this.language] + ' ' + this.fullname() + '!';
        },
        greet: function(formal){
            var msg;

            // if undefined or null it will be coerced to 'false'
            if(formal){
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            if(console){
                console.log(msg);
            }
            // 'this' referes to the calling objecy at ececution time
            //makes the mothod chainable
            return this;
        },
        log: function(){
            if(console){
                console.log(
                    logMessages[this.language] + ': ' + this.fullname()
                );
            }
            return this;
        },
        setLang: function(lang){
            this.language = lang;

            this.validate();
            return this;
        }

    }; 

    Greetr.init = function (firstname, lastname, language){
        var self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
    }
    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr; //objects pass by refference so ends up
    
    
}(window, jQuery));