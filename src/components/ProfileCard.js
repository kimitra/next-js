import Link from "next/link";

export default function ProfileCard({ profile }) {
  return (
    <article className="profile-card">
      <img src={profile.image} alt={profile.name} className="profile-image" />
      <div className="profile-card-content">
        <h2>{profile.name}</h2>
        <p className="profile-title">{profile.title}</p>
        <p>{profile.bio}</p>
        <p>
          <strong>Major:</strong> {profile.major}
        </p>
        <p>
          <strong>Year:</strong> {profile.year}
        </p>

        <Link href={`/profile/${profile.id}`} className="button secondary">
          View Profile
        </Link>
      </div>
    </article>
  );
}