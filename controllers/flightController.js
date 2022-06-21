const Flight = require('../models/Flight');

const getAllFlight=async(req, res)=>{
    const allFlights = await Flight.find();
    if(!allFlights) res.status(404).json({error:'Not Found'});
    res.status(200).json(allFlights);
}

const singleFlight = async(req, res)=>{
    const id = req.params.id;
    const findSingle = await Flight.findOne({_id:id});
    if(!findSingle) res.status(404).json({error:`Flight with title: ${id} was not  found`});
    res.status(200).json(findSingle);
}

const bookFlight = async(req, res)=>{
    const {title, time, price, date} = req.body;
    const addBooking = new Flight({title, time, price, date});
    addBooking.save().then(result=>res.status(200).json({message:'flight Booked successfully'})).catch(err=>res.status(400).json({error:'error booking flight'}));
    
}


const updateFlight=async(req,res)=>{
    const id = req.params.id;
    const {title, time, price, date} = req.body;
   await Flight.findOneAndUpdate({ _id: id }, {title, time, price, date}).then(result=>res.status(200).json({message:'flight record updated successfully'})).catch(err=>res.status(400).json({message:'error updating records'}))

}

const deleteFlight =async(req, res)=>{
    const id = req.params.id;
     await Flight.findOneAndDelete({_id:id}).then(result=>res.status(200).json({message:'Flight deleted successfully'})).catch(err=>res.status(400).json({error:'error deleting flight'}));
}
module.exports={
    getAllFlight, singleFlight, bookFlight, updateFlight, deleteFlight
}

