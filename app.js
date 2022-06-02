
//This function will make navigation bar stay on top always ;
window.onscroll = function(){myFunction()}; //on user scroll do function this will keep it on top everytime user scroll;
window.onload = function(){myFunction()}// on load do function that will make navbar go on top in the begging;
let navbar = document.getElementById('navbar'); 
let sticky = navbar.offsetTop;
function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
}
//This is the popUp Box when user try to Book a Table;
let body = document.getElementsByTagName('body')[0]
let divContainer = document.createElement('div');
let stop = true;        
let stroke = document.createElement('div').classList.add('stroke');
let btnContainer = document.createElement('div');
divContainer.classList.add('popUpBackground');
btnContainer.innerHTML = `
<h1>Are you a group of <br> 8 people or more?</h1>
<div class="stroke"></div>
<div id= "answerYes" onclick="moreThen8()" class="middle-btn inForm">Yes</div>
<div id= "no" onclick="lessThen8()" class="middle-btn inForm">No</div>
`;

divContainer.appendChild(btnContainer)
let noAnswer  = document.createElement('h1');
let joker = document.createElement('div')
let joker1 = 3 ;
function popUp(){
    if(joker1 > 3 && stop == true){
        joker1 = 3;
        divContainer.removeChild(form);
        divContainer.removeChild(joker)
        divContainer.appendChild(btnContainer)
        body.removeChild(divContainer)
        stop = true;
    }else if(stop){
        if(divContainer.childElementCount >1){
            divContainer.removeChild(noAnswer);
            divContainer.removeChild(joker);
            divContainer.appendChild(btnContainer);
            body.removeChild(divContainer)
            stop= true
        }else{
            body.appendChild(divContainer)
            stop = false;
        }
    }else{
        body.removeChild(divContainer);
        stop = true;
    }
}
function lessThen8(){
    divContainer.removeChild(btnContainer);
    noAnswer.innerHTML = 'Drop by and we will <br> find a table for you';
    noAnswer.classList.add('headingBookATable');
    divContainer.appendChild(noAnswer)
    stop= true;
    divContainer.appendChild(joker);
}
let form = document.createElement('div');
function moreThen8(){
    divContainer.removeChild(btnContainer);
    joker1 = 5;
    form.innerHTML = `
                    <form class = 'myForm'>
                         <input type="text" name="firstName" id="formName" placeholder="Name">
                         <input type="number" placeholder="Phone number">
                         <div>
                         <label for="start">Date:</label>
                         <input type="date" id="start" name="dinnerStart" value='' min="2022-01-01" max="2024-12-31">
                         </div>
                         <div>
                         <label for="time">Time</label>
                         <input type="time" id="appts" name="apptp" min="09:00" max="21:00" required>
                         </div>
                         <div>
                         <label for='countPeople'>Number of people</lebal>
                         <input type="number" id="peopleCount" name="peopleCount" min="8" max="50" value="8">
                         </div>
                         <input type="textarea" placeholder = 'Comments' name="comment" id="comment">
                         <button class="middle-btn">Send</button>
                     </form>` 
                     
    divContainer.appendChild(joker);
    divContainer.appendChild(form);
    stop= true;
}

//Now I decide to put all the tags and text from HTML here in Javascript ;
//file it save us couple of lines also the main point is the keep HTML file clean as possible ;

let paragraphArr = [`<p class="paragrafForLocation">
                    You can find us in the narrow Street right across from Frederik's Church, also popularly known as The Marble Church, in the <br> Heart of Copenhagen. <br> 
                    Our Store Kongensgade Location has been Open Since 2015.
                    A Cosy place to Dine in or Grab an Authentic Vietnamese meal to go. 
                    </p>`,`<p class="paragrafForLocation">
                    We opened our Restaurant in the Heart of Vesterbro in 2020.
                    Close to the Main Station you will find Us in the Trendy and Urban area of Vesterbro.
                    The area was originally named after the paved brick road which,
                    from the west led to the town's City Hall.
                    Bring your friends, family or partner. Dine in or Grab an Authentic Vietnamese Meal to go.
                    </p>`,`<p class="paragrafForLocation">
                    We opened our most central location in the centre of the old city of Copenhagen summer of 2021. “Strøget” in the centre of town is one of the longest pedestrian shopping streets in Europe, here in the midst of the busy streets and shopping opportunities you will find us at Nytorv square next to the Caritas Fountain which the oldest fountain in Copenhagen, built in 1608 by Christian IV. Right in front of the Copenhagen Court House.
                    Bring your friends, family or partner. Dine in or Grab an Authentic Vietnamese Meal to go.
                    </p>`,`<p class="paragrafForLocation">
                    Broens Gadekøkken is a melting pot of street food kitchens and bars that serve tasty food and beverages from all over the world. Here you can enjoy world class street food from renowned restaurants and chefs from Copenhagen where quality, good ingredients and great taste are the key elements. 
                    These are all the qualities that you can find within District Tonkin.
                    So in Spring 2022 we brought the taste of the Vietnamese Street kitchen to Broens Gadekøkken.
                    Bring your friends, family or partner. Dine there or Grab an Authentic Vietnamese Meal to go.
                    </p>`]
let googleMapArr= ['<iframe class="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.2267242390635!2d12.585925715493893!3d55.68504588053531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525318c797fc87%3A0x5189f60066410922!2sStore%20Kongensgade%2071%2C%201264%20K%C3%B8benhavn!5e0!3m2!1sen!2sdk!4v1653945180970!5m2!1sen!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>','<iframe class="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.93768419363!2d12.551498915493251!3d55.67268378053207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652530acdb10e87%3A0x21c72ebf508ee39f!2sVesterbrogade%2056%2C%201620%20K%C3%B8benhavn!5e0!3m2!1sen!2sdk!4v1653946560317!5m2!1sen!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>','<iframe class="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.6417554721247!2d12.571016815493484!3d55.677829580533356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525311bca960b7%3A0x19c46c700c9d6379!2sNytorv%203%2C%201450%20K%C3%B8benhavn!5e0!3m2!1sen!2sdk!4v1653947173075!5m2!1sen!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>','<iframe class="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d140.60193901289563!2d12.596449500669195!3d55.67801617679489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe375d8e889b12acb!2sNoodles%20%26%20Dumplings!5e0!3m2!1sen!2sdk!4v1653947282175!5m2!1sen!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'];
let imgArr = ['<img class="locationImg" src="./img/photo-facebook-bags.jpeg" alt="missing bags">','<img class="locationImg" src="./img/photo-facebook-bags.jpeg" alt="missing picture">','<img class="locationImg" src="./img/district-tonkin-nickie.jpeg" alt="picture missing">','<img class="locationImg" src="./img/photo-facebook-food.jpeg" alt="picture missing">']
let [firstLocation,secondLocation,thirthLocation,forthLocation] = document.getElementsByClassName('locationInfo'); //take the 4Divs that we need to put all the other elements and visualize them.
//Make function that will work instead of having 4x same function;
function showInfo(){

}
function showLocation1(){
    firstLocation.innerHTML = paragraphArr[0] + imgArr[0]+ googleMapArr[0];
    if(firstLocation.style.display == 'none'){
        firstLocation.style.display = 'block';
    }else{
        firstLocation.style.display = 'none';
    }
}
function showLocation2(){
    secondLocation.innerHTML = paragraphArr[1] + imgArr[1] + googleMapArr[1];
    if(secondLocation.style.display == 'none'){
        secondLocation.style.display = 'block';
    }else{
        secondLocation.style.display = 'none';
    }
}
function showLocation3(){
    thirthLocation.innerHTML = paragraphArr[2] + imgArr[2] + googleMapArr[2];
    if(thirthLocation.style.display == 'none'){
        thirthLocation.style.display = 'block';
    }else{
        thirthLocation.style.display = 'none';
    }
}
function showLocation4(){
    forthLocation.innerHTML = paragraphArr[3] + imgArr[3] + googleMapArr[3];
    if(forthLocation.style.display == 'none'){
        forthLocation.style.display = 'block';
    }else{
        forthLocation.style.display = 'none';
    }
}

