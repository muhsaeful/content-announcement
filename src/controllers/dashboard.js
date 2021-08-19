const model = require("../models/__index_models");
const slug = require("slug");
const { anct } = require("../models/__index_models");

exports.index = async (req, res) => {
    try {
        res.render('dashboard/index', {
            title: "Dashboard",
        });
    } catch (error) {
        console.error(error);
    }
}

exports.announcement_view = async (req, res) => {
    try {
        let announcement = await model.anct.findAll();
        res.render('dashboard/view', {
            contents: announcement
        });
    } catch (error) {
        console.log(error);
        res.status(500).json();
    }
}
exports.announcement_create = async (req, res) => {
    let isSlug = slug(req.body.title);
    let title = req.body.title;
    var content = req.body.content;
    var content = content.split('<table>').join('<table class="table border-1">');
    var content = content.split('<blockquote>').join('<table class="blockquote">');

    console.log(content);

    try {
        await anct.create({
            slug: isSlug,
            title: title,
            content: content
        });
        res.status(200).json({ msg: "Content is Created!" });
    } catch (error) {
        console.log(error);
        res.status(500).json();
    }
}
exports.announcement_update = async (req, res) => {
    let id = req.params.id;
    try {
        await anct.update(req.body, { where: { id: id } });
        res.status(200).json({ msg: "Content is Updated!" });
    } catch (error) {

    }

}
exports.announcement_delete = async (req, res) => {
    let id = req.params.id;
    try {
        let deleted = await model.anct.destroy({ where: { id: id } });
        if (deleted === 1) {
            res.status(200).json({ msg: `ID ${id} is Deleted` });
        } else {
            res.status(200).json({ error: `ID ${id} is not Deleted` });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({});
    }
}