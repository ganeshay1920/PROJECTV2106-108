function startIdentification(){

    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Xv9JgGazE/model.json", model_ready); 

}

function model_ready(){

    classifier.classify(getResults);

}

function getResults(error, result){

    if(error){

        console.error(error);

    }
    else{

        console.log(result);
        color_r=Math.floor(Math.random() * 255) + 1;
        color_g=Math.floor(Math.random() * 255) + 1;
        color_b=Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_accuracy").innerHTML = 'Accuracy - '+ (result[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_Voice").style.color="rgb("+color_r+","+color_g+","+color_b+")";
        document.getElementById("result_accuracy").style.color="rgb("+color_r+","+color_g+","+color_b+")";

    }

    if(result[0].label=="dog"){

        document.getElementById("result_Voice").innerHTML="Detected sound is a dog barking";
        document.getElementById("output").innerHTML='<img src="dog.jpg">';

    }

    if(result[0].label=="cat"){

        document.getElementById("result_Voice").innerHTML="Detected sound is a cat meowing ";
        document.getElementById("output").innerHTML='<img src="cat.jpg">';

    }

    if(result[0].label=="owl"){

        document.getElementById("result_Voice").innerHTML="Detected sound is a owl hooting";
        document.getElementById("output").innerHTML='<img src="owl.jpg">';

    }

}
