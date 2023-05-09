export const DropDown = ({ filter }) => {
    
    return (
      <div >
        <select onChange={filter} >
          <option value="all">All</option>
          <option value="follow">Follow</option>
          <option value="following">Following</option>
        </select>
      </div>
    );
  };