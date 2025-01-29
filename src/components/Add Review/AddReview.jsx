import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';


const AddReview = () => {
    const {user} = useContext(AuthContext);

    const handleAddReview =e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const description =form.description.value;
        const rating = form.rating.value;
        const year = form.year.value;
        const genre = form.genre.value;
        const email = user.email;
        const username = user.displayName;
        const NewReview = {photo, name, description, rating, year, genre, email, username};
        console.log(NewReview);

        // send data to the server and database
         fetch('https://chill-gamer-server-wheat.vercel.app/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(NewReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('successfully added');
                    Swal.fire('Review added successfully');
                    e.target.reset();
                }
            })
    }
    return (
        <div className='lg:w-3/4 mx-auto'>
        <div className="text-center p-10">
            <h1 className="text-3xl font-bold">Add Review</h1>
            
        </div>
        <div className="card bg-base-100 w-3/4 mx-auto shadow-2xl mb-20">
            <form onSubmit={handleAddReview} className="card-body">
                {/* form first row */}
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Game Image</span>
                        </label>
                        <input type="text" name='photo' placeholder="game image" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Game Title</span>
                        </label>
                        <input type="text"  name='name' placeholder="game title" className="input input-bordered" required />
                    </div>
                </div>
                {/* form second row */}
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Review Description</span>
                        </label>
                        <textarea name='description' placeholder="review description" 
                        className="textarea textarea-bordered" rows='4' required ></textarea>
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" name='rating' placeholder="rating" className="input input-bordered" required />
                    </div>
                </div>
                {/* form third row */}
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Publishing Year</span>
                        </label>
                        <input type="number" name='year' placeholder="publishing year" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Genres</span>
                        </label>
                        <select name='genre' placeholder="genre" 
                        className="select select-bordered" required >
                            <option value="">Select Genre</option>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="RPG">RPG</option>
                            <option value="Puzzle">Puzzle</option>
                            <option value="Racing">Racing</option>
                            <option value="Strategy">Strategy</option>
                            <option value="Horror">Horror</option>
                        </select>
                    </div>
                </div>

                
                <div className='flex flex-col lg:flex-row gap-5'>
                <div className="form-control flex-1">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <input type="email" name='email' value={user?.email || ""}
                    className="input input-bordered"  readOnly/>
                 </div>
                 <div className="form-control flex-1">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input type="text" name='username' value={user?.displayName || ""}
                     className="input input-bordered" readOnly />
                 </div>
                 </div>

                 
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary text-base font-semibold">Submit Review</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddReview;