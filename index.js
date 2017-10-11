var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return ("Welcome, " + `${name}` + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length > 0) {
        console.log("Currently serving " + `${katzDeliLine[0]}` + ".");
        return katzDeliLine.slice(1);
    }
    else {
        return ("There is nobody waiting to be served!");
    }
}
