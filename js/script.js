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

    $('#button-form-1').on('click', fGo);    
        
            function fGo(){
                if(!$('#firstForm').valid()){
                    event.preventDefault();
                    $('.wrap-first-form').offset({left: winWidth/2});
                    $('.wrap-first-form').animate({left: (winWidth/2+firstFormWidth)}, 2000);
                    
                    $('.wrap-second-form').show();
                    $('.wrap-second-form').offset({left: -(winWidth+secondFormWidth)/2});
                    $('.wrap-second-form').animate({left: -secondFormWidth/2}, 2000);
                }
            }
        

            $.ajax({
                url: '../data/data1.json',
                dataType: 'json',
                type: 'get',
                cash: false,
                success: function(data) {
                    $(data.departments).each(function(index, value) {
                        let arr = Object.keys(value);
                        for (let i of arr) {
                            $('#specialization').append($("<option />").text(i).val(i));
                        }
   
                        $('#specialization').on('change', function() {
                            let selectedDepartment = this.value;
                            let selectedVacancies = value[selectedDepartment];
                            if(selectedDepartment == "departments"){
                                $('#vacancy').prop('disabled', true);
                                $('#button-form-2').prop('disabled', true);
                                $('#vacancy option[value!="vacancy"]').remove();
                            } else if((selectedDepartment != "departments")) {
                                $('#vacancy').prop('disabled', false);
                                $('#button-form-2').prop('disabled', true);
                                $('#vacancy option[value!="vacancy"]').remove();
                                if(selectedDepartment != 'departments' ) {
                                    for(let i of selectedVacancies) {
                                        $('#vacancy option[value="vacancy"]').after($('<option />').text(i).val(i));
                                    }
                                }
                            } else if((selectedDepartment != "departments")&&($('#vacancy').val() != 'vacancy')) {
                                $('#vacancy option[value!="vacancy"]').remove();
                                $('#vacancy').prop('disabled', true);
                                for(let i of selectedVacancies) {
                                    $('#vacancy option[value="vacancy"]').after($('<option />').text(i).val(i));
                                }
                                $('#button-form-2').prop('disabled', true);
                            } 
                            
                                                                
                        });
                                                            
                        $('#vacancy').on('change', function() {
                            (this.value =='vacancy')?($('#button-form-2').prop('disabled', true)):
                                                                ($('#button-form-2').prop('disabled', false));
                            console.log(this.value);
                        });
                    });
                }
            });
            


});    