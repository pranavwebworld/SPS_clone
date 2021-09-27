
// let previousIframe='';
// let haveIframe=false;



function myFunction(iframeId){

    
    // if(haveIframe){
    //     haveIframe.src+="?autoplay=0";
    // }

    let iframe=document.getElementById(iframeId);
    // previousIframe=iframe;
    // haveIframe=true;

    iframe.src+="?autoplay=1";


}


