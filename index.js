function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  // solution:
  // const rankedLists = document.querySelectorAll('.ranked-list')
  //
  // for (let i = 0, l = rankedLists.length; i < l; i++) {
  //   let children = rankedLists[i].children
  //
  //   for (let j = 0, k = children.length; j < k; j++) {
  //     children[j].innerHTML = parseInt(children[j].innerHTML) + n
  //   }
  // }

  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  let children = firstList.children

  for (let i = 0, l = children.length; i < l; i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML) + n
  }
  let children1 = secondList.children

  for (let i = 0, l = children1.length; i < l; i++) {
    children1[i].innerHTML = parseInt(children1[i].innerHTML) + n
  }

}

function deepestChild() {
  // solution:
  // let node = document.getElementById('grand-node')
  // let nextNode = node.children[0]
  //
  // while (nextNode) {
  //   node = nextNode
  //   nextNode = node.children[0]
  // }
  //
  // return node
  // 
  return document.querySelector('#grand-node div div div div')

}
