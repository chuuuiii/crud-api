const Crud = require('../models/crud.model');


const getCrudItems = async (req, res) => {
 
  try { 
    const crud = await Crud.find({});
    res.status(200).json(crud)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCrudItem = async (req, res) => {
  const { id } = req.params;
  try {
    const crud = await Crud.findById(id)
    res.status(200).json(crud)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCrudItem = async (req, res) => {
  const { id } = req.params;
  try {
    const crud = await Crud.create(req.body);
    res.status(200).json(crud)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCrudItem = async (req, res) => {
  const { id } = req.params;
  try {
    const crud = await Crud.findByIdAndUpdate(id, req.body);
    if (!crud) {
      return res.status(404).json({ message: "Product not found" });
    }
   const updateCrudItem = await Crud.findById(id);
   res.status(200).json(updateCrudItem)
  } catch (error) {
    res.status(500).json({ message: error.message });
    
  }
};

const deleteCrudItem = async (req, res) => {
  const { id } = req.params;
  try {
    const crud = await Crud.findByIdAndDelete(id)
    if (!crud) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message })
    
  }
};

module.exports = {
  getCrudItems,
  getCrudItem,
  createCrudItem,
  updateCrudItem,
  deleteCrudItem
};