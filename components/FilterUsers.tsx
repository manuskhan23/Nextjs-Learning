"use client";
import React, { useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
};

type FilterUsersProps = {
  users: User[];
};

const FilterUsers = ({ users }: FilterUsersProps) => {
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <h2>Filter Users</h2>
      <ul>
        <input type="text" placeholder="Search users..." onChange={(e) => setSearchTerm(e.target.value)} />
      </ul>
        <ul>
          {users
            .filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> ({user.username})
              </li>
            )) || <li>No users found.</li>}
        </ul>
    </div>
  );
};

export default FilterUsers;