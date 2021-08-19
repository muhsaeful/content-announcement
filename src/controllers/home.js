const model = require("../models/__index_models");

exports.index = async (req, res) => {
    try {
        let contents = await model.anct.findAll();
        res.render('home', {
            title: "Home Pages",
            contents: contents
        });
    } catch (error) {

    }
}

exports.content = async (req, res) => {
    let slug = req.params.slug
    try {
        let content = await model.anct.findOne({ where: { slug: slug } });
        res.render('content', {
            title: content.title,
            content: content
        });
    } catch (error) {

    }
}