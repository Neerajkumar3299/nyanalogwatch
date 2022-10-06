var hour=document.getElementById("hour")
var minute=document.getElementById("minute")
var second=document.getElementById("second")
setInterval(()=>{
    let date=new Date()
    let htime=date.getHours()
    let mtime=date.getMinutes()
    let stime=date.getSeconds()
    let hrotate=30*htime+0.5*mtime
    console.log(hrotate)
    let mrotate=6*mtime+0.1*stime
    let srotate=6*stime

    hour.style.transform=`rotate(${hrotate}deg)`
    hour.style.transformOrigin="bottom"
    minute.style.transform=`rotate(${mrotate}deg)`
    second.style.transform=`rotate(${srotate}deg)`
},1000)