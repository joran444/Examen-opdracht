import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const searchRecept = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>

    </form>
  );
};

export default searchRecept;
