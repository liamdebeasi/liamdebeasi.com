var liam = function() {
    
    var commands = {
        contact: {
            prompt: 'liam.contact()',
            desc: 'Find out how to get in touch with liam',
            label: 'Contact',
            callable: function() {
                log(commands.contact.label, 'h2');
                log('Shoot me an email at liam[at]debeasi.com');
                log('Or follow me on Twitter @liamdebeasi');
                return '';  
            }
        },
        help: {
            prompt: 'liam.help()',
            desc: 'Displays list of commands',
            label: 'Help',
            callable: function(label) {
                log(commands.help.label, 'h2');
                Object.keys(commands).forEach(function(key) {
                    log(commands[key].prompt + ' - ' + commands[key].desc + '\n');
                });
                return '';
            }
        }
    };

    var methods = {
        contact: commands.contact.callable,
        help: commands.help.callable
    };
        
    var headerCSS = 'color:#79c7e4;font-size:50px;font-family: Avenir;';
    var subHeaderCSS = 'color:#79c7e4;font-size:22px;font-family: Avenir;';
    var bodyCSS = 'font-family: Avenir; font-size:16px;';
    
    var h2CSS = 'font-size: 22px;font-family:Avenir;font-weight:300;';
    
    console.log('%cliam debeasi', headerCSS);
    console.log('%cfull stack web developer \n\n\n', subHeaderCSS);
    console.log('%cType liam.help() for help', bodyCSS);
    
    return methods;
    
    function log(m, type) {
        if (type == 'h2') {
            css = h2CSS;
            console.log('');
        } else {
            css = bodyCSS;
        }
        console.log('%c' + m, css);
    };
}();