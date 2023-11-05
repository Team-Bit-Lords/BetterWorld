/* eslint-disable no-unused-vars */
import React from 'react'

const Test = (props) => {

    const openModal = () => {
        const modal = document.getElementById('my_modal_1');
        modal.showModal();
    };


  return (
    
  <>
          <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                      <button  className="btn btn-primary">Buy Now</button>
                  </div>
              </div>
          </div>
     
          <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                  <button>close</button>
              </form>
          </dialog>
  </>
  )
}

export default Test
