async function getdogs(){
    var raw=await fetch("https://dog.ceo/api/breeds/list/all");
    var all=await raw.json();
    //all.message gives the object of arrays where keys represent breed and value is an arrays. so simply represented as am
    var am=all.message;
    //lb is the array of 95 breeds of dogs;
    lb=Object.keys(am);
    showdata(lb)

    // console.log(lb[0]);
}
// getdogs()

function showdata(data){
    // console.log(data);
    var coll=document.createElement('ol');
    // coll.setAttribute('');
    let tbody=document.getElementById('tbody');
    let thead=document.getElementById('thead');

    tbody.innerHTML=null;
    var pk=0;
    thead.innerHTML=`
        <tr>
            <th>Id</th>
            <th>Breed Name</th>
            <!-- <th>Email</th> -->
        </tr>
        `
    data.forEach(el=>{
        
        tbody.innerHTML+=`
        
        <tr>
            <td>${pk}</td>
            <td>${el}</td>
        </tr>
        `
        pk++;
    })
    // let can=document.querySelector('col-8')
    // can.append(coll);
    // var val=document.getElementById('search').value;
    // var 
}
let url="https://dog.ceo/api/breed"
async function getImg(){
    try {
        document.body.style.backgroundImage="none";
        let tbody=document.getElementById('tbody');
        tbody.innerHTML=null;
        let thead=document.getElementById('thead');
        thead.innerHTML=null;
        var val=document.getElementById('breed').value
    // console.log(val);
        var raw=await fetch(url+'/'+ val+'/images');
        var data=await raw.json();
    // console.log(data);
    final(data)
    } catch (error) {
        console.log(error);
    }
}
function final(data){
    document.body.style.backgroundImage="none";
    let tbody=document.getElementById('tbody');
    tbody.innerHTML=null;
    var j=0;
    var dm=data.message;
    console.log(typeof(dm),dm.length);
    var para=document.getElementById('para');
    para.innerHTML=`THERE ARE ${dm.length} IMAGES OF THIS BREED`;
    // dm.forEach(el=>{
    //     // console.log(typeof(el),j);
    //     j++;
    // })
    // let c=document.getElementById('card-img');
    // var card=document.getElementById('card');
    var row=document.getElementById('row');
    var col=document.getElementById('col-8');
    var c=document.getElementById('image');


    
    image=dm[1];
    console.log(dm[1]);
    c.setAttribute('src',image);
    c.setAttribute('alt','dogImg');
            // console.log("value of i is: ", i);
            // card.append(c);
    // col.append(c);
    // row.append(col);
}



    // data.forEach(element =>{
    //     // let row=document.getElementById('row');

    //     let col=document.createElement('div');
    //     col.setAttribute('class','col-4 mb-3');

    //     let card=document.createElement('div');
    //     card.setAttribute('class','card h-100');

    //     let cardImg=document.createElement('img');
    //     cardImg.setAttribute('class','card-img-top')
    //     cardImg.setAttribute('src',element.flag);

    //     let cardbody=document.createElement('div');
    //     cardbody.setAttribute('class','card-body');

    //     let cardTitle=document.createElement('h4')
    //     cardTitle.setAttribute('class','card-title');
    //     cardTitle.innerHTML=element.name;

    //     let cardText=document.createElement('p');
    //     cardText.innerHTML=element.capital + " - " + element.region + " - " + element.timezones;

    //     cardbody.append(cardText,cardTitle);
    //     card.append(cardbody,cardImg);

    //     col.append(card);
    //     row.append(col);
    
    // });




