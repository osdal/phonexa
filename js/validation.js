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
    

