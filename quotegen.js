advgen();

$("#generator").click(function(){
    const slip = advgen();
    console.log(slip);
})


function advgen(){
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then(data => {
        const advarr=Object.values(data.slip);
        console.log(advarr);
        $("#adviceid").text(advarr[0]);
        $("#advicetext").text(advarr[1]);
    })
    .catch(error=>{
        $("#adviceid").text("???");
        $("#advicetext").text("Something wrong with generating advice! :(");
    })
}


    /*
    객체 요소에 접근하고 순회하기
    https://velog.io/@lilyoh/js-object-%EC%9A%94%EC%86%8C%EC%97%90-%EC%A0%91%EA%B7%BC%ED%95%98%EA%B3%A0-%EC%88%9C%ED%9A%8C%ED%95%98%EA%B8%B0
    */