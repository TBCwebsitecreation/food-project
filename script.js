// top menu
document.querySelector('.menu').addEventListener('click', () => {
  document.querySelectorAll('.target').forEach((item) => {
    item.classList.toggle('change')
  })
})






// 1.select all the icons and store them in a variable called icons
const icons = document.querySelectorAll('.section-1-icons i')

// 6. after executing step 5, it will reach the end of the list. To make sure that it is repeated we have to set up a counter.
let i=1

// 2. built in setInterval function to execute it over and over again. The first argument will take a function that runs over and over again. The second argument is the time.
setInterval(() => {
  // 7. Increase the counter by 1
  i++;
  // 3.the first icon has the class change. We have to select that class and remove that class. 

  // select the class change
  const icon = document.querySelector('.section-1-icons .change');
  // 4. remove the class change.
  icon.classList.remove('change');

  // 8. We have to make sure that all the icons in the list have been completed
  if(i>icons.length){
    // 9. if the list has reached till the end, the we have to choose the first element in the list and assign the class change once again to it
    icons[0].classList.add('change')
    // 9. and make sure that the counter is reset to one
    i=1;
  }else {

    // 5. we have to access the next element and add the class change to it
    icon.nextElementSibling.classList.add('change')
  }

},4000)