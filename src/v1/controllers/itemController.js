import itemService from './../services/itemService.js'

const getAllItemLists = async (req,res) => {
    const allItems = await itemService.getAllItems()

    if (allItems) {
        res.status(200).json({ success: true, message: "Items retrieved successfully", data: allItems.data});
    } else {
        res.status(500).json({ success: false, message: 'Internal Server error!'});
    }
}

const getItembyId = async (req,res) => {
    const id = req.params.id
    console.log(id)
    const item = await itemService.getItembyId(id)

    if (item) {
        res.status(200).json({ success: true, message: "Item retrived successfully", data: item.data})
    } else {
        res.status(500).json({ success: false, message: 'Internal server error!'})
    }
}

const getAllItemsbyCategory = (req,res) => {

}

const getAllCategories = (req,res) => {

}

const addItem = async (req,res) => {
    const { name, category, price } = req.body

    try {
        const addItems = await itemService.addItem(name,category,price)

        if (addItems) {
            res.status(201).json({ success: true, message: "Item added successfully" });
        } else {
            res.status(500).json({ success: false, message: 'Internal Server error!' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server error!' });
    }
}

const editItem = (req,res) => {

}

const deleteItem = (req,res) => {

}

export default { getAllItemLists, getItembyId, getAllItemsbyCategory, getAllCategories, addItem, editItem, deleteItem }
