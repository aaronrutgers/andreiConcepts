function marry(...args) {
    console.log('arguments', args);

    console.log(Array.from(arguments));

    return `${args[0]} is now married to ${args[1]}`

}

marry('Tim', "Tina")


function india() {
    console.log(arguments);    
}

india()