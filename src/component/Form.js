import Dexie from 'dexie';
import { useEffect , useState } from 'react';
import { dkts } from './Formdata';
import '../component/From.css';
function Dangky(){
    const [id,setID]= useState(0);
        const [name,setName]= useState('');  
        const [atho,setAtho] = useState('');
        const [namxuatban,setNamxuatban]= useState('');
        const [dangkythemsach,setDangkythemsach]=useState([]);
        useEffect(() =>{
            dkts.dangkythemsach.toArray().then(items => setDangkythemsach(items))
        },[])
        const clearForm = ()=>{
            setID(0);
            setName('');
            setAtho('');
            setNamxuatban('');
        }
        const save = (id,name, atho, namxuatban)=>{
            if(id==0){
                dkts.dangkythemsach.add({ name:name, atho:atho , namxuatban:namxuatban})
            }
            else{
                dkts.dangkythemsach.update(id , { name:name, atho:atho  ,namxuatban:namxuatban} )
            }
            dkts.dangkythemsach.toArray().then(items => setDangkythemsach(items))
            clearForm();
        }
        
    return(
        <>
       <div class="menu">
    <img src="data:image/png;base64,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" alt=""/><input type=""text/>
    <h1>A List  of Book</h1>
    <table>
      <tr><td><input type="text"/></td></tr>
      <tr><td><input type="text"/></td></tr>
      <tr><td><input type="text"/></td></tr>
      <tr><td><input type="text"/></td></tr>
      <tr><td><input type="text"/></td></tr>
      <tr><td><select></select></td></tr>
    </table>
    <table>
    <h2> Add a new Book </h2>
    <tr><td><input type="text" onChange={(e)=>setName(e.target.value)}value={name} ></input></td></tr>
    <tr><td><input type="text" onChange={(e)=>setAtho(e.target.value)}value={atho} ></input></td></tr>
    <tr><td><input type="date" onChange={(e)=>setNamxuatban(e.target.value)}value={namxuatban}></input></td></tr>
    <button onClick={()=>save(id , name , namxuatban)}>Add</button>
    <div>
    {dangkythemsach.map(items=>(
    <div key={items.id} >
        <div >{items.name}</div>
        <div>{items.atho}</div>
        <div >{items.namxuatban} </div>
     </div>
    ))}
 </div>
    </table>
</div>
        </>
    )
}
export default Dangky();
