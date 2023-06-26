import { Drop, Type } from "./DropDown.styled";

export const DropDown = ({ filter }) => {
    
    return (
      <div >
        <Drop onChange={filter} >
          <Type value="all">All</Type>
          <Type value="follow">Follow</Type>
          <Type value="following">Following</Type>
        </Drop>
      </div>
    );
  };