var winWidth = document.body.clientWidth,
winHeight = document.body.clientHeight,
firstFormWidth = $('.wrap-first-form').outerWidth(),
secondFormWidth = $('.wrap-second-form').outerWidth(),
thirdFormWidth = $('.wrap-third-form').outerWidth(),
thirdFormHeight = $('.wrap-third-form').height(),
resultKeys =[],
resultValues =[],
resultKeysFinal = [],
resultValuesFinal =[],
results ={},
resultsFinal ={};

  // Submit Form 1 (Register a new user)
  
    $('#button-form-1').on('click', submitFirstForm);    
        
    function submitFirstForm(){
        if($('#firstForm').valid()){
            event.preventDefault();
            $('.wrap-first-form').animate({left: (winWidth)}, 2000);
            
            $('.wrap-second-form').show();
            $('.wrap-second-form').offset({left: -(winWidth+secondFormWidth)/2});
            $('.wrap-second-form').animate({ left: $('.wrap-second-form').parent().width() / 2 - $('.wrap-second-form').width() / 2
        }, 2000);

            let form1 = $('#firstForm').serializeArray();
                
            for(let i of form1) {
                resultKeys.push(i.name);
                resultValues.push(i.value);
            }
            for(let i = 0; i < resultKeys.length; i++) {
                results[resultKeys[i]] = resultValues[i];
            }
        }
    }

    //  Submit Form 2 (Choose your specialization)
$('#button-form-2').on('click', submitSecondForm);

function submitSecondForm() {
    event.preventDefault();
    $('.wrap-second-form').animate({left: winWidth}, 2000);

    $('.wrap-third-form').show();
    $('.wrap-third-form').offset({left: -(winWidth+thirdFormWidth)/2});
    $('.wrap-third-form').animate({ left: $('.wrap-third-form').parent().width() / 2 - $('.wrap-third-form').width() / 2
        }, 2000);

    let form2 = $('#secondForm').serializeArray();
    for(let i of form2) {
        resultKeys.push(i.name);
        resultValues.push(i.value);
    }
    for(let i = 0; i < resultKeys.length; i++) {
        results[resultKeys[i]] = resultValues[i];
    }
    $('#thirdForm input').each(function() {
        for(let key = 0; key < resultKeys.length; key++) {
            if($(this).attr('name') == resultKeys[key]) { $(this).val(resultValues[key]); }  
        }
    });
}

    // Submit Form 3 (Check your information)
   $('#button-edit-form-3').on('click', editForm);

   function editForm() {
       event.preventDefault();
    $('.wrap-first-form').animate({ left: $('.wrap-first-form').parent().width() / 2 - $('.wrap-first-form').width() / 2
        }, 2000);
   
    $('.wrap-third-form').animate({left: -((winWidth+thirdFormWidth)/2 + thirdFormWidth)}, 2000);

   }
   
   $('#button-submit-form-3').on('click', saveForm);

   function saveForm() {
    event.preventDefault();
    let form3 = $('#thirdForm').serializeArray();
        for(let i of form3) {
            resultKeysFinal.push(i.name);
            resultValuesFinal.push(i.value);
        }
        for(let k = 0; k < resultKeysFinal.length; k++) {
            localStorage.setItem(resultKeysFinal[k], resultValuesFinal[k]);
        }

        $('#thirdForm')[0].reset();

        $('.wrap-third-form').animate({top: winHeight + thirdFormHeight/2});
        $('.thanks').show('slow');

    }