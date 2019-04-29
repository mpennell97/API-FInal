//http://api.tvmaze.com/shows/112

const endpoint = 'https://random.dog/woof.json';

for(i=0; i<9; i++){
  $.getJSON(endpoint, function(element){
    console.log (element);
    let template = `<img src=${element.url} />`;
    
    $('#show').append(template);
  });
}
  