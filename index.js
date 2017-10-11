var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return ("Welcome, " + `${name}` + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing() {
    if (katzDeliLine.length > 0) {
        return ("Currently serving " + `${katzDeliLine.splice(1)}` + " .");
    }
    else {
        return ("There is nobody waiting to be served!");
    }
}
