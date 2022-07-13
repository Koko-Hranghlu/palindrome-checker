let checkBtn = document.querySelector('button')
let output = document.querySelector('#outputContainer')

checkBtn.addEventListener('click', () => {
  let string = document.querySelector('#inputField').value;
  let msg = 'It is a Palindrome'
  let split = string.length / 2
  
  // i and j variable as the two index's variables that starts pointing character from each opposite ends of the string
  for (i=0; i<split; i++) {
    
    let j = string.length-1-i
    
    if (string[i] != string[j]) {
      msg = "It is not a Palindrome"
    }
  }
  output.innerText = msg
})
