var brandon={
    speed:10,
    sleep:5,
    nationality:"american",
    address:{
        address1:"2190 Seasons north Drive",
        address2:"unit 210",
        city:"Indianapolis",
        zip:"46280"

    }

};

var pedro={
    speed:8,
    sleep:2,
    nationality:"mexico",
    address:{
        address1:"2190 Seasons north Drive",
        address2:"unit 210",
        city:"Juarez",
        zip:"46280"

    }

};

var answer=prompt("what is your name?")

if (answer.toUpperCase()==="BRANDON"){
   console.log(brandon);
   alert(brandon.nationality);
} 
else if(answer.toUpperCase()==="PEDRO"){
    console.log(pedro);
}
else{
    alert("get out")
};


