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
const mutationObserver = new MutationObserver(items=>{
  console.group("MutationObserver")
  const parentPos = parent.getBoundingClientRect()
  console.log("parentPos",parentPos)

  items.forEach(item=>{
    const node = item.addedNodes.item(0)
    if (node){
      const childPos = node.getBoundingClientRect()
      // node.offsetTop
      console.log("childPos...",childPos)
      if (childPos["bottom"] > parentPos["bottom"]){
        // increate hidden count
        hiddenItems+=1
      }
    }
  })

  console.groupEnd()

  // update label text (without triggering mutation observer event)
  if (hiddenItems>0) {
    label.style="visibility:visible;"
    label.innerHTML=`+${hiddenItems}`
  }else{
    label.style="visibility:hidden;"
  }

  // console.log(items)
})
// add label for message
const label = document.createElement("span")
label.className="label"
parent.appendChild(label)

// activate obeserver to report child list change
mutationObserver.observe(parent,{
  childList: true
})


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

console.log("parent.outerHeight",parent.outerHeight)