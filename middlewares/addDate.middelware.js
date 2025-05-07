export const addCurrentDate = (req, res, next) => {
    req.cuurentDate = new Date()
    next();
}

export const printDate = (req, res, next) => {
    if(req.method === 'GET'){
        console.log(req.cuurentDate);
    }
    next();
}


