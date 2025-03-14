import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const View = () => {
    const {id} = useParams();
    const allPastes = useSelector((state) => state.paste.pastes);
    const paste = allPastes.filter((p) => p._id === id)[0];
  return (
    <div className='mt-30 m-10'>
      <h1 className='m-5 text-3xl font-semibold '>{paste.title}</h1>
      <p className='m-5 text-lg'>{paste.content}</p>
    </div>
  )
}

export default View
