
let img2=document.getElementById('img2')
let img3=document.getElementById('img3')

let id1=document.getElementById('processingUI')
let id2=document.getElementById('sucessfullUI')
let id3=document.getElementById('failureUI')



let  StyleImage = [
   
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8k_DcMV9ymZLuM04DF_I5G3dAGEMstUXpA&usqp=CAU",
    "data:image/png;base64,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",
]

let btn=document.getElementById('button')
btn.addEventListener("click",function(event){

    event.preventDefault();
    new Promise((res,rej)=>{
        const random = Math.random()<0.7;
        Proccesing()
        setTimeout(() => {
            if(random){
                res()
            }
            else{
                rej()
            }
        }, 3000);
    }).then(()=>{
        successfull()
        console.log("resolve")
    })
    .catch(()=>{
        failed()
    })
})


function Proccesing(){
   
    id1.style.display="block"
    id2.style.display="none"
    id3.style.display="none"
   
}

function successfull(){
    img2.src=StyleImage[0]
    id1.style.display="none"
    id2.style.display="block"
    console.log(img2)
}

function failed(){
    img3.src=StyleImage[1]
    id1.style.display="none"
    id3.style.display="block"
    console.log(img3)
}
