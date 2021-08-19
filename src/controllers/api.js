const model = require("../models/__index_models");
const slug = require("slug");

exports.views = async (req, res) => {
    try {
        const views = await model.anct.findAndCountAll();
        if (views.count > 0) {
            return res.status(200).json(views);
        } else {
            return res.status(204).json();
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({});
    }
}

exports.view = async (req, res) => {
    let id = req.params.id;

    try {
        const view = await model.anct.findOne({ where: { id: id } });
        if (view) {
            return res.status(200).json(view);
        } else {
            return res.status(204).json();
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({});
    }
}

exports.create = async (req, res) => {

    try {
        let create = await model.anct.create({
            slug: slug(req.body.title),
            title: req.body.title,
            content: req.body.content
        });

        if (create.dataValues.id > 0) {
            return res.status(201).json(create);
        } else {
            return res.status(400).json({});
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({});
    }
}

exports.update = async (req, res) => {
    let id = req.params.id;

    try {
        let update = await model.anct.update(req.body, { where: { id: id } });
        console.log(update);
        if (update[0] === 1) {
            return res.status(200).json();
        } else {
            return res.status(204).json();
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json();
    }
}

exports.delete = async (req, res) => {
    let id = req.params.id;

    try {
        let destroy = await model.anct.destroy({ where: { id: id } });
        if (destroy === 1) {
            return res.status(200).json();
        } else {
            return res.status(204).json();
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json();
    }
}