import React from 'react';

function SearchNote({ onSearchChange, searchQuery }) {
  return (
    <input
      type="text"
      placeholder="Cari catatan ..."
      className="note-search"
      value={searchQuery}
      onChange={onSearchChange}
    />
  );
}

export default SearchNote;
