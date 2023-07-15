import Config from"../Config.json";
import axios from 'axios';
import React, { useEffect ,useState} from 'react'

 const SPost = () => {
    const [Spost,setSpost]=useState([]);
    useEffect(()=>{
        const fetchSpost=async()=>{
            const {data} =await axios.get(Config.apiUrl);
            setSpost(data);
        };
        fetchSpost();
    },[])
    console.log(SPost);
  return (
    <div className='Posts'>
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th>title</th>
                        <th>body</th>
                        <th>update</th>
                        <th>delete</th>
                        </tr>
</thead>
<tbody>
    {Spost.map((Spost)=>
    <tr key={Spost._id}>
        <td>
            {SPost.title}
        </td>
        <td>{SPost.content}</td>
        <td><button className="btn btn-primary">update</button></td>
    
    </tr>
        )}

</tbody>
                        
                
            </table>
        </div>

    </div>
  )
}
export default SPost
