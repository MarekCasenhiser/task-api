

export async function validateCompleted(req, res, next){
    const completed = req.query.completed;
    if (!(completed === "true" ? true : (completed === "false" ? false : completed))){
        console.log(req.query.completed);
        return res.status(400).send("Bad Request");
    }
    next();
}