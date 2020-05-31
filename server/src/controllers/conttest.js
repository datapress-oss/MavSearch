exports.test = async(req,res) => {
    const obj = {
        train_name: req.params.id
    }
    res.json(obj)
}