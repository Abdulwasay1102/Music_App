import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import Sidebar from '../components/Sidebar'
import { ScaleLoader } from 'react-spinners'

const Home = () => {
    const [search,setSearch]=useState("Smack that")
    const [song,setSong]=useState([])
    const [loader,setLoader]=useState(false)
    const fetchmusic = async ()=>{
        try{
            setLoader(true)
        const res = await axios.get(`https://itunes.apple.com/search?term=${search}&media=music&limit=12`);
        // console.log(res.data.results);
        setSong(res.data.results);
        setLoader(false)
        }
        catch(error){
            console.error(error);
            setLoader(false)
            
        }
        
    }
    useEffect(()=>{
        fetchmusic()
    },[search])
   
  return (
   <>
<div className="d-flex">
    <Sidebar />


    <div className="container-fluid">
       
        <div className="row">
            <div className="col-12 ">
                <h1 className='text-center mt-4 mb-4 text-light  ' >MUSIC HUB</h1>
            </div>
        </div>

     
        <div className="row justify-content-center">
            <div className="col-md-6 d-flex">
                <input 
                    type="text"
                    className="form-control" 
                    placeholder='SEARCH SONGS...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className='btn btn-primary ms-2' onClick={fetchmusic}>
                    SEARCH
                </button>

                
            </div>
         {loader && (
    <div className="loader-overlay">
      <ScaleLoader
        color="#00E5FF"
        loading={loader}
        height={80}
        width={8}
        radius={2}
        margin={2}
      />
    </div>
  )}   
            <div className={loader? "loading-blur":""}>   
              <Card song={song}/>
              </div>
        </div>
    </div>
</div>
   
   
 
 
   
   </>
  )
}

export default Home