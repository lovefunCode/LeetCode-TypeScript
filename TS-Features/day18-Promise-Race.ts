
// get API result, getList, if 10 seconds don't respond, then alert timeout, and return []
function getList (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('result return ======')
        })
    })
}


function getListWithTimeout(){
    const timeout = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            alert('request timeout')
            resolve([])
        }, 10000)
    })
    return Promise.race([getList(), timeout])
}
