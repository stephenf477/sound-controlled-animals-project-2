function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nezFG6YJG/', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
    
function gotResults(error, results)
