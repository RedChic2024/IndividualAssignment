
document.addEventListener('DOMContentLoaded', () => {
    let countdown = 15; // Seting the initial countdown value
    const countdownElement = document.getElementById('countdown'); // Get the countdown element
    const skipButton = document.getElementById('skipButton'); // Get the skip button element
    const popupOverlay = document.getElementById('popupOverlay'); // Get the popup overlay element

    // Function to update the countdown every second
    const countdownInterval = setInterval(() => {
        countdown--; // Decrease the countdown value
        countdownElement.textContent = countdown; // Update the countdown display for the pop up

        // If countdown reaches zero, enable the skip button
        if (countdown <= 0) {
            clearInterval(countdownInterval); // Stop the countdown interval
            skipButton.textContent = 'Skip'; // Change the skip button text
            skipButton.addEventListener('click', hidePopup); // Add click event to hide the popup
        }
    }, 1000); // Run every second (1000 milliseconds)

    // Function to hide the popup
    function hidePopup() {
        popupOverlay.style.display = 'none'; // Hide the popup overlay
    }

    //banner starts here
    document.addEventListener('DOMContentLoaded', () => {
        const bannerAd = document.getElementById('bannerAd');
        const closeBannerButton = document.getElementById('closeBanner');
    
        // Close banner when close button is clicked
        closeBannerButton.addEventListener('click', () => {
            bannerAd.style.display = 'none';
        });
    
        // Optionally, set a timeout to hide the banner after a few seconds
        setTimeout(() => {
            bannerAd.style.display = 'none';
        }, 10000); // Hide after 10 seconds (adjust time as needed)
    });
    
    //adding the java script from the ad server for advert1
    var formdata = new FormData();
formdata.append("type", "Thick Vertical"); //change to my selection
formdata.append("tags", "Quote");  //change to my tag choise

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "gdtJtWKEiVGZRa0v8aGiCJNRmNSHRVWn");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertIMG').src = response.link; //use this for the image in the html file too
    document.querySelector('.advertIMG').alt = response.alt;
    document.querySelector('.anchorElement').href = response.href; //use this one in the html file to add the ad to my website
    document.querySelector('.headerText').innerHTML = response.message;
}

//trying the second advert as the first one was fighting me
//here I tried to make the add thick verticle instead of verticle strips

var formdata = new FormData();
formdata.append("type", "Thick Vertical"); //change the type here
formdata.append("tags", "Muse"); //change the tags here!

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "gdtJtWKEiVGZRa0v8aGiCJNRmNSHRVWn");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertIMG').src = response.link;
    document.querySelector('.advertIMG').alt = response.alt;
    document.querySelector('.anchorElement').href = response.href;
    document.querySelector('.headerText').innerHTML = response.message;
}

//advert 3, this add is more on a open yourself more.
var formdata = new FormData();
formdata.append("type", "Thick Vertical"); //change the type here
formdata.append("tags", "Sunshine"); //change the tags here!

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "gdtJtWKEiVGZRa0v8aGiCJNRmNSHRVWn");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertIMG').src = response.link;  //this img link = html
    document.querySelector('.advertIMG').alt = response.alt;
    document.querySelector('.anchorElement').href = response.href; //this anchor link = html
    document.querySelector('.headerText').innerHTML = response.message;
}
            
//advert 4 is here
var formdata = new FormData();
formdata.append("type", "Thick Vertical");
formdata.append("tags", "Moonlight");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "gdtJtWKEiVGZRa0v8aGiCJNRmNSHRVWn");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertIMG').src = response.link;
    document.querySelector('.advertIMG').alt = response.alt;
    document.querySelector('.anchorElement').href = response.href;
    document.querySelector('.headerText').innerHTML = response.message;
}
     
//advert 5 is here
var formdata = new FormData();
formdata.append("type", "Thick Vertical"); 
formdata.append("tags", "Kelly"); 

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "gdtJtWKEiVGZRa0v8aGiCJNRmNSHRVWn");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertIMG').src = response.link;
    document.querySelector('.advertIMG').alt = response.alt;
    document.querySelector('.anchorElement').href = response.href;
    document.querySelector('.headerText').innerHTML = response.message;

    //advert random....fashion
var formdata = new FormData();
formdata.append("type", "Thick Vertical"); //type I am looking for 
formdata.append("tags", "fashion"); //tags that might be randoms

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "gdtJtWKEiVGZRa0v8aGiCJNRmNSHRVWn");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertIMG').src = response.link;
    document.querySelector('.advertIMG').alt = response.alt;
    document.querySelector('.anchorElement').href = response.href;
    document.querySelector('.headerText').innerHTML = response.message;


}
//     //advert random....tech
//     var formdata = new FormData();
//     formdata.append("type", "Thick Vertical"); //type I am looking for 
//     formdata.append("tags", "tech"); //tags that might be randoms
    
//     var ajax = new XMLHttpRequest();
//     ajax.addEventListener("load", completeHandler, false);
    
//     ajax.open("POST", "https://ad.simaneka.com/api/get");
//     ajax.setRequestHeader("authorisation", "gdtJtWKEiVGZRa0v8aGiCJNRmNSHRVWn");
    
//     ajax.send(formdata);
    
//     function completeHandler(event) {
//         var response = JSON.parse(event.target.responseText);
    
//         console.log(response);
//         document.querySelector('.advertIMG').src = response.link;
//         document.querySelector('.advertIMG').alt = response.alt;
//         document.querySelector('.anchorElement').href = response.href;
//         document.querySelector('.headerText').innerHTML = response.message;
    
    
//     }

//         //advert random....food
// var formdata = new FormData();
// formdata.append("type", "Thick Vertical"); //type I am looking for 
// formdata.append("tags", "food"); //tags that might be randoms

// var ajax = new XMLHttpRequest();
// ajax.addEventListener("load", completeHandler, false);

// ajax.open("POST", "https://ad.simaneka.com/api/get");
// ajax.setRequestHeader("authorisation", "gdtJtWKEiVGZRa0v8aGiCJNRmNSHRVWn");

// ajax.send(formdata);

// function completeHandler(event) {
//     var response = JSON.parse(event.target.responseText);

//     console.log(response);
//     document.querySelector('.advertIMG').src = response.link;
//     document.querySelector('.advertIMG').alt = response.alt;
//     document.querySelector('.anchorElement').href = response.href;
//     document.querySelector('.headerText').innerHTML = response.message;


// }

//     //advert random....sport
//     var formdata = new FormData();
//     formdata.append("type", "Thick Vertical"); //type I am looking for 
//     formdata.append("tags", "sport"); //tags that might be randoms
    
//     var ajax = new XMLHttpRequest();
//     ajax.addEventListener("load", completeHandler, false);
    
//     ajax.open("POST", "https://ad.simaneka.com/api/get");
//     ajax.setRequestHeader("authorisation", "gdtJtWKEiVGZRa0v8aGiCJNRmNSHRVWn");
    
//     ajax.send(formdata);
    
//     function completeHandler(event) {
//         var response = JSON.parse(event.target.responseText);
    
//         console.log(response);
//         document.querySelector('.advertIMG').src = response.link;
//         document.querySelector('.advertIMG').alt = response.alt;
//         document.querySelector('.anchorElement').href = response.href;
//         document.querySelector('.headerText').innerHTML = response.message;
    
    
//     }

//         //advert random....Films and Movies
//         var formdata = new FormData();
//         formdata.append("type", "Thick Vertical"); //type I am looking for 
//         formdata.append("tags", "Films and Movies"); //tags that might be randoms
        
//         var ajax = new XMLHttpRequest();
//         ajax.addEventListener("load", completeHandler, false);
        
//         ajax.open("POST", "https://ad.simaneka.com/api/get");
//         ajax.setRequestHeader("authorisation", "gdtJtWKEiVGZRa0v8aGiCJNRmNSHRVWn");
        
//         ajax.send(formdata);
        
//         function completeHandler(event) {
//             var response = JSON.parse(event.target.responseText);
        
//             console.log(response);
//             document.querySelector('.advertIMG').src = response.link;
//             document.querySelector('.advertIMG').alt = response.alt;
//             document.querySelector('.anchorElement').href = response.href;
//             document.querySelector('.headerText').innerHTML = response.message;
        
        
//         }
//             //advert random....Animations
//     var formdata = new FormData();
//     formdata.append("type", "Thick Vertical"); //type I am looking for 
//     formdata.append("tags", "Animations"); //tags that might be randoms
    
//     var ajax = new XMLHttpRequest();
//     ajax.addEventListener("load", completeHandler, false);
    
//     ajax.open("POST", "https://ad.simaneka.com/api/get");
//     ajax.setRequestHeader("authorisation", "gdtJtWKEiVGZRa0v8aGiCJNRmNSHRVWn");
    
//     ajax.send(formdata);
    
//     function completeHandler(event) {
//         var response = JSON.parse(event.target.responseText);
    
//         console.log(response);
//         document.querySelector('.advertIMG').src = response.link;
//         document.querySelector('.advertIMG').alt = response.alt;
//         document.querySelector('.anchorElement').href = response.href;
//         document.querySelector('.headerText').innerHTML = response.message;
    
    
//     }

//         //advert random....Anime
//         var formdata = new FormData();
//         formdata.append("type", "Thick Vertical"); //type I am looking for 
//         formdata.append("tags", "Anime"); //tags that might be randoms
        
//         var ajax = new XMLHttpRequest();
//         ajax.addEventListener("load", completeHandler, false);
        
//         ajax.open("POST", "https://ad.simaneka.com/api/get");
//         ajax.setRequestHeader("authorisation", "gdtJtWKEiVGZRa0v8aGiCJNRmNSHRVWn");
        
//         ajax.send(formdata);
        
//         function completeHandler(event) {
//             var response = JSON.parse(event.target.responseText);
        
//             console.log(response);
//             document.querySelector('.advertIMG').src = response.link;
//             document.querySelector('.advertIMG').alt = response.alt;
//             document.querySelector('.anchorElement').href = response.href;
//             document.querySelector('.headerText').innerHTML = response.message;
        
        
//         }

//
//multiple tags 
    var formdata1 = new FormData();
    formdata1.append("type", "Thick Vertical"); // These are the type of ad servers defined on the dashboard
    formdata1.append("tags", "tech, food,fashion"); // These are the categories you assign your ad

    var formdata2 = new FormData();
    formdata2.append("type", "Thick Vertical");
    formdata2.append("tags", "sports,fitness");

    var formdata3 = new FormData();
    formdata3.append("type", "Thick Vertical");
    formdata3.append("tags", "technology,food");

    //Asynchronous javascript
    var ajax1 = new XMLHttpRequest();
    ajax1.addEventListener("load", completeHandler1, false);
    ajax1.open("POST", "https://ad.simaneka.com/api/get");
    ajax1.setRequestHeader("authorisation", "HwTHYpCv80Tj8JGFETHdMVJLE73kSeqZ");
    ajax1.send(formdata1);

    var ajax2 = new XMLHttpRequest();
    ajax2.addEventListener("load", completeHandler2, false);
    ajax2.open("POST", "https://ad.simaneka.com/api/get");
    ajax2.setRequestHeader("authorisation", "HwTHYpCv80Tj8JGFETHdMVJLE73kSeqZ");
    ajax2.send(formdata2);

    var ajax3 = new XMLHttpRequest();
    ajax3.addEventListener("load", completeHandler3, false);
    ajax3.open("POST", "https://ad.simaneka.com/api/get");
    ajax3.setRequestHeader("authorisation", "HwTHYpCv80Tj8JGFETHdMVJLE73kSeqZ");
    ajax3.send(formdata3);

    //multiple completeHandlers for APIS
    function completeHandler1(event) {
        var response = JSON.parse(event.target.responseText);
        document.querySelector('.advertIMG1').src = response.link;
        document.querySelector('.advertIMG1').alt = response.alt;
        document.querySelector('.anchorElement1').href = response.href;
      }
  
      function completeHandler2(event) {
        var response = JSON.parse(event.target.responseText);
        document.querySelector('.advertIMG2').src = response.link;
        document.querySelector('.advertIMG2').alt = response.alt;
        document.querySelector('.anchorElement2').href = response.href;
      }
  
      function completeHandler3(event) {
        var response = JSON.parse(event.target.responseText);
        document.querySelector('.advertIMG3').src = response.link;
        document.querySelector('.advertIMG3').alt = response.alt;
        document.querySelector('.anchorElement3').href = response.href;
      }

      //
}  
});
