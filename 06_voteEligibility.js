var checkVoterAge=function(age)
{
    if (age <= 0 || age > 130) {
        console.log(`Age : ${age} Invalid Data`);
    } 
    else if(age>=18)
    {
        console.log(`Age : ${age} Eligible for vote`);
    }
    else
    {
        console.log(`Age : ${age} not eligible for vote`);
    }
}
checkVoterAge(45);
checkVoterAge(17);
checkVoterAge(8);
checkVoterAge(20);
checkVoterAge(-10);
checkVoterAge(200);
checkVoterAge(0);
checkVoterAge(null);
