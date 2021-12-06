function validcourse()
{
    var course_name=document.course.email;
    

    if(course_name_valid(course_email))
    {
        
        
    }


}

function course_name_valid(course_email)
{
    var letters=/^[A-Za-z]+$/;
    if(course_email.value.match(letters))
    {
        return true;
    }
    else
    {
        alert("Пожалуйста, укажите email или телефон");
        course_name.focus();
        return false;

    }
}

function course_duration_valid(course_duration)
{
    var letters=/^[1-9]+$/;
    if(cd.value.match(letters))
    {
        return true;
    }
    else
    {   
        alert("Course Duration can have numbers only");
        course_duration.focus();    
        retun false;
    }   


}

function course_id_valid(course_id)
{
    var letters=/^[0-9a-zA-z]+$/;
    if(course_id.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Course ID must have character and numeric values only');
        course_id.focus();
        return false;           
    }
}