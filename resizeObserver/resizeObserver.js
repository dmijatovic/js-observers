// items to add to parent
const items=[
  "1","2","3","Long item text","short",
  "long item text 2222","long item text 2223",
  "long item text 2224","5","Short 2","Short 3"
]

// select element to observe
const parent = document.querySelector("#parent")
let hiddenItems = 0;

// define mutation observer
const resizeObserver = new ResizeObserver(items=>{
  console.group("ResizeObserver")
  const parentPos = parent.getBoundingClientRect()
  console.log("parentPos",parentPos)

  items.forEach(item=>{
    // node.offsetTop
    console.log("item...",item)
  })

  console.groupEnd()
})
// add label for message
const label = document.createElement("span")
label.className="label"
parent.appendChild(label)

// activate obeserver to report child list change
resizeObserver.observe(parent)


// console.group("MutationObserver")
// console.log("parent...",parent)
// console.groupEnd()


items.map(item=>{
  const child = document.createElement("div")
  child.className = "child"
  // child.style = "opacity:0"
  child.innerText = item
  parent.appendChild(child)
  // children.push(child)
})
