const Services = require('../../api/v1/services/model');
const { NotFoundError, BadRequestError } = require('../../errors');
const BadRequest = require('../../errors/bad-request');

const getAllServices = async (req) => {
    const result = await Services.find();

    return result;
};

const createServices = async (req) => {
    const {
        name,
        description,
        price
    } = req.body;

    console.log(name, description, price);

    const check = await Services.findOne({name});

    if (check) throw new BadRequest('Nama service duplikat');

    const result = await Services.create({
        name,
        description,
        price,
    });

    return result;
};

const getOneServices = async (req) => {
    const {id} = req.params;

    const result = await Services.findOne({ _id: id});

    if (!result) throw new NotFoundError(`Tidak menemukan service dengan id : ${id}`);

    return result;
};

const updateServices = async (req) => {
    const {id} = req.params;
    const {
        name,
        description,
        price,
    } = req.body;

    const checkService = await Services.findOne({
        _id : id,
    });

    if (!checkService) {
        throw new NotFoundError(`Tidak ada service dengan id : ${id}`);
    }

    const check = await Services.findOne({
        name,
        _id: {$ne: id},
    });

    if (check) throw new BadRequestError(`Nama service sudah terdaftar`);

    const result = await Services.findOneAndUpdate(
        {_id: id},
        {
            name, 
            description,
            price
        },
        {new: true, runValidators: true},
    );

    return result;
}

const deleteService = async (req) => {
    const {id} = req.params;

    const result = await Services.findOne({_id: id});

    if (!result) throw new NotFoundError(`Tidak ada service dengan id : ${id}`);

    await result.deleteOne();

    return result;
}

module.exports = {getAllServices, createServices, getOneServices, updateServices, deleteService};