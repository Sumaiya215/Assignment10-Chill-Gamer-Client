
const Watchlist = ({watchlist , idx}) => {

    const {name ,photo, description, rating, year, genre} = watchlist;
    return (
        <div>
              <div className="overflow-x-auto">
                <table className="table">
                  
                    <thead>
                        <tr>
                            <th>Serial.</th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Year</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr>
                            <th>{idx +1}</th>
                            <td>{name}</td>
                            <td>
                             <img src={photo} className="w-[100px] h-[50px]"
                             alt="name" />
                            </td>
                            <td>{description}</td>
                            <td>{rating}</td>
                            <td>{year}</td>
                            <td>{genre}</td>
                        </tr>
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Watchlist;