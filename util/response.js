module.exports = {
    success: function(res, msg = null, data = null) {
        res.status(200);
        res.send({
            success: true,
            body: data,
            msg: msg
        });
    },
    badRequest: function(res, msg = null, data = null) {
        res.status(400);
        res.send({
            success: false,
            msg: msg,
            body: data
        });
    }
};
