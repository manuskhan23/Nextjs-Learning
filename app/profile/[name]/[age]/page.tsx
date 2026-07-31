import React from 'react'

type ProfilePageAgeProps = {
  params: Promise<{ name: string; age: string }>;
};

const ProfilePage = async ({ params }: ProfilePageAgeProps) => {
  const pageParams = await params;

  const nameParam = pageParams.name.toLowerCase();
  const age = pageParams.age;

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      age: "30",
      bio: "John is a web developer with a passion for creating interactive user experiences. He enjoys hiking and photography in his free time."
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      age: "25",
        bio: "Jane is a software developer with a love for open-source projects. She enjoys hiking and photography in her free time."
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      age: "28",
      bio: "Alice is a graphic designer who loves creating digital art. She enjoys traveling and exploring new cultures."
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      age: "35",
      bio: "Bob is a software engineer with a passion for open-source projects. He enjoys hiking and photography in his free time."
    }
  ];

  // Convert "John Doe" -> "john-doe" and compare with the URL parameter
  const user = users.find(
    (u) => u.name.toLowerCase().replace(/\s+/g, '-') === nameParam && u.age === age
  );

  return (
    <div>
      <h1>{user ? user.name : "User Not Found"}</h1>
      <p>Age: {age}</p>
      {user ? (
        <>
            <p>Email: {user.email}</p>
        <p>Bio: {user.bio}</p>
        </>
      ) : (
        <p>No user matches this name and age combination.</p>
      )}
    </div>
  );
};

export default ProfilePage;