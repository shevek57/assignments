function addressMaker({city, state}) { // Destructuring

  const newAddress = { // object literal
    city,
    state,
    country: "United States"
  };

  console.log(`Address is: ${newAddress.city}, ${newAddress.city}, ${newAddress.city}`); // template literal
}

addressMaker({city: 'Austin', state: 'Texas'});


const isThereABoolean = (...args) => {
  let found = false;
  for (let arg of args) {
    if (arg === true || arg === false) found = true;
  }

  return found
}