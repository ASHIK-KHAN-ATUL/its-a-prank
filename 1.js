console.log('hi i am ashik khan atul')



const handleTrack =(ip) => {
    fetch(`http://ipinfo.io/${ip}?token=1982133fa79b14`)
    .then(response => response.json())
    .then(data => console.log(data));
}

function getIpAdd() {
    fetch("http://api.ipify.org?format=json")
    .then((res) => res.json() )
    .then((data) => {
        handleTrack(data.ip);
    })
    .catch((error) => {
        console.error(error);
    })
}
getIpAdd();