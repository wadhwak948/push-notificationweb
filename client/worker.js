console.log('Server Worker Loaded');
self.addEventListener('push', e=>{
    const data="test notif";
    console.log('Psh Recieved');
    self.registration.showNotification(data,{
        body: 'Notified By karan Company!',
        icon: 'http://image.ibb.co/fryOFd/tmlogo.png'
    });
});