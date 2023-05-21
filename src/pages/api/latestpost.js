import data from './data';
// api/latestpost

export default function handler (req, res){
    const {Latestpost} = data;
    if(Latestpost)return res.status(200).json(Latestpost)
    return res.status(404).json({error:"Data Not found"})
 }