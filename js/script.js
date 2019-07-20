// import { data } from  '../js/data1';

$(document).ready(function(){

    // Validation
    $.validator.addMethod('ruleName', function(value, element) {
        return this.optional(element)||
        /^([a-zа-яё]+)$/i.test(value);
    }, 'You entered forbidden symbol');

    $.validator.addMethod('rulePassword', function(value, element) {
        return this.optional(element)||
        /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W))/i.test(value);
    }, 'Password have to consist at least one number, uppercase and lowercase, one special character');
    
    $('#firstForm').validate({
        rules: {
            firstName:{
                required: true,
                ruleName: true
            },
            lastName: {
                required: true,
                ruleName: true
            },
            login: {
                required:true,
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                rulePassword: true
            },
            password_again: {
                equalTo: "#password"
            }
        },
            messages: {
                firstName: {
                    required: 'Обязательное поле',
                    minlength: 'Минимум три символа',
                    // name: 'Вы ввели запрещенный символ'
                },
                lastName: {
                    required: 'Обязательное поле',
                    minlength: 'Минимум три символа'
                }
            }
    });

    // Submit
    let winWidth = document.body.clientWidth,
        firstFormWidth = $('.wrap-first-form').outerWidth(),
        secondFormWidth = $('.wrap-second-form').outerWidth();

    $('#button-form-1').on('click', fGo); //событие на клик кнопки
   
        
            function fGo(){
                if($('#firstForm').valid()){
                    event.preventDefault(); //отключаем стандартную реакцию браузера
                    $('.wrap-first-form').offset({left: winWidth/2});
                    $('.wrap-first-form').animate({left: (winWidth/2+firstFormWidth)}, 2000);
                    
                    $('.wrap-second-form').show();
                    $('.wrap-second-form').offset({left: -(winWidth+secondFormWidth)/2});
                    $('.wrap-second-form').animate({left: -secondFormWidth/2}, 2000);
                }
            }
        
            
// let data = $.parseJSON('data1.json');
// console.log(data.name);


$.getJSON('js/data1.json', function(data) {
    console.log('work');
});

// var result = JSON.parse(JSON.stringify('../js/data.json'));
// console.log(result);
// });

});    