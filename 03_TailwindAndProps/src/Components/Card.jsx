import React from 'react'

function Card(props) {
    console.log(props);
  return (
      <div class="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{props.username}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">{props.btnTxt || "Watch"}</button>
        </div>
      </div>
    </div>
  )
}

export default Card
