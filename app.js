function checkvoter(){
    let age = document.getElementById('age');
    if(age>=18){
        document.getElementById('message').innerHTML="You are eligible to vote.";
    }
    else{
        document.getElementById('message').innerHTML="You are not eligible to vote yet.";
    }
}