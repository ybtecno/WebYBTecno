//Service Worker

if('serviceWorker' in navigator){
  console.log('Puedes usar los serviceWorker en tu navegador');

  navigator.serviceWorker.register('./sw.js')
                        .then(res => console.log('serviceWorker cargado correctamente', res))
                        .catch(err => console.log('serviceWorker no se ha podido registrar', err));
                        

}else{
  console.log('NO PUEDES usar los serviceWorker en tu navegador');
}

