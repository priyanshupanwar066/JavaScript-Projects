const quote = document.getElementById('quote');
const author = document.getElementById('author');
const api_url = "api link";



async function getquote(url){
     response = await fetch(url);
    var data = await response.json();
    console.log(data);
    
   quote.innerHTML = data.content;
   author.innerHTML = data.author;
    
}

getquote(api_url);


document.getElementById('shareBtn').addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check this out!',
          text: 'Here is something interesting to share.',
          url: window.location.href // You can replace it with a specific URL
        });
        console.log('Content shared successfully!');
      } catch (error) {
        console.error('Error sharing content:', error);
      }
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  });
  