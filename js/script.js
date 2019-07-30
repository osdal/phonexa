$(document).ready(function(){
    $.ajax({
        url: '../data/data1.json',
        dataType: 'json',
        type: 'get',
        cash: false,
        success: function(data) {
            $(data.departments).each(function(index, value) {
                let arr = Object.keys(value);
                for (let i of arr) {
                    $('#specialization').append($("<option />").text(i).val(i).attr("name", i));
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
                                $('#vacancy option[value="vacancy"]').after($('<option />').text(i).val(i).attr("name", i.split(' ').join('')));
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
                });
            });
        }
    });
});    