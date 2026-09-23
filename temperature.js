function checktemperature(temperature)
{
    let message="";

    if(temperature <20)
    {
        message="Cold";
    }
    else if(temperature >20 && temperature <30)
    {
        message="Normal";
    }
    else
    {
        message="Hot";
    }
    return message;
}

console.log(checktemperature(5));