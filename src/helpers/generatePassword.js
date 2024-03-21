function generatePassword(length) {
    const characterSets = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+-=[]{};:|,.<>/?",
    };
  
    let password = "";
    let characterSetKeys = Object.keys(characterSets);
  
    // Include at least one character from each set if desired (optional)
    characterSetKeys.forEach(set => password += characterSets[set][Math.floor(Math.random() * characterSets[set].length)]);
  
    // Fill remaining characters with random selections from all sets
    while (password.length < length) {
      const randomSet = characterSetKeys[Math.floor(Math.random() * characterSetKeys.length)];
      password += characterSets[randomSet][Math.floor(Math.random() * characterSets[randomSet].length)];
    }
  
    return password;
  }

  export default generatePassword;

