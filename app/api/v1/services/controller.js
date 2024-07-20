const { StatusCodes } = require("http-status-codes");
const { createServices, getAllServices, getOneServices, deleteService, updateServices } = require("../../../services/mongoose/service")

const create = async (req, res, next) => {
    try {
        const result = await createServices(req);

        res.status(StatusCodes.CREATED).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const index= async (req, res, next) => {
    try {
        const result = await getAllServices(req);

        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const find = async (req, res, next) => {
    try {
        const result = await getOneServices(req);

        res.status(StatusCodes.OK).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
     try {
        const result = await updateServices(req);

        res.status(StatusCodes.OK).json({
            data: result,
        });
     } catch (err) {
        next(err);
     }
};

const destroy = async (req, res, next) => {
    try {
        const result = await deleteService(req);

        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {create, index, find, update, destroy};
