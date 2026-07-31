import React from 'react';

type ProfilePageProps = {
  params: Promise<{ name: string }>;
};

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      bio: "I am a software developer with a passion for creating web applications."
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      bio: "I am a graphic designer who loves to create visually appealing designs."
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      bio: "I am a content writer who enjoys crafting engaging and informative articles."
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      bio: "I am a digital marketer who specializes in social media marketing and SEO."
    }
  ];

  const pageParams = await params;
  const userNameParam = pageParams.name.toLowerCase();

  // Convert "John Doe" -> "john-doe" to match the URL parameter
  const user = users.find(
    (user) => user.name.toLowerCase().replace(/\s+/g, '-') === userNameParam
  );

  return (
    <>
      <h1>{!user ? "User not found" : user.name}</h1>
      {user && (
        <>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
        </>
      )}
    </>
  );
};

export default ProfilePage;