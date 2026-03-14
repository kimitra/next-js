import ProfileCard from "@/components/ProfileCard";

export default function ProfileList({profiles}){
    if (!profiles.length) {
        return <p className="empty-state">No profiles matched your filters.</p>;
    }
    return (
        <section className="profile-grid">
            {profiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} />
            ))}
        </section>
    );
}