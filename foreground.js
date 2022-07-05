document.addEventListener("DOMSubtreeModified", function(event){
  var posts = Array.from(document.querySelectorAll('.deck-layout-single-flex'))
  var infectedIndices = []

  for (var post of posts) {
    if (post.innerHTML.toLowerCase().includes('spikek')) {
      infectedIndices = [...infectedIndices, post]
    }
  }
  infectedIndices.forEach((post) => post.remove())
});
