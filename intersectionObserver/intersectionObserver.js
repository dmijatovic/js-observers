// items to add to parent
const items=[
  "1","2","3","Long item text","short",
  "long item text 2222","long item text 2223",
  "long item text 2224","5","Short 2","Short 3"
]

// select element to observe
const parent = document.querySelector("#parent")

// add label for message
const label = document.createElement("span")
label.className="label"
parent.appendChild(label)

// list of child items
children=[]
const totalItems = items.length
// console.group("MutationObserver")
// console.log("parent...",parent)
// console.groupEnd()

items.map(item=>{
  const child = document.createElement("div")
  child.className = "child"
  child.innerText = item
  parent.appendChild(child)
  children.push(child)
})

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Entry is completely visible in the parent
      // toggle visible class
      entry.target.classList.add("visible")
      entry.target.classList.remove("hidden")
    } else {
      // console.log('Div is not visible:', entry.target.textContent);
      // Entry has exited the viewport
      // toggle hidden class
      entry.target.classList.add("hidden")
      entry.target.classList.remove("visible")
    }
  });
  const totalItems = parent.querySelectorAll(".child")
  const hiddenItems = parent.querySelectorAll(".hidden")
  
  console.group("IntersectionObserver")
  console.log("titalItems...", totalItems?.length ?? 0)
  console.log("hiddenItems...", hiddenItems?.length ?? 0)
  console.groupEnd()

  // check needs to be 
  setTimeout(()=>{
    if (hiddenItems?.length > 0){
      label.innerText = `+${hiddenItems.length}`
      label.classList.add("visible")
    }else{
      label.classList.remove("visible")
    }
  },10)

}, {
  root: parent,
  threshold: 1 // Trigger the callback when 50% of the child div is visible
});

// Observe each child div element
children.forEach(child => {
  observer.observe(child);
});


// update label text (without triggering mutation observer event)
// label.innerHTML="+3"
