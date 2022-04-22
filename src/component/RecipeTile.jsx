import React from 'react'
import './RecipeTile.css'

const RecipeTile = ({recipe}) => {
  return (
    <div className=''>
        <img className='recipeTile_img ' src={recipe.recipe.image} alt="food" />
        <p className='recipeTile_name text-center'>{recipe.recipe.label}</p>
    </div>
  )
}

export default RecipeTile