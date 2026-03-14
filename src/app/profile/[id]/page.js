import { notFound } from "next/navigation";
import { getProfileById } from "@/lib/profiles";

export async function generateMetadata({ params }){
    const { id } = await params;
    const profile = await getProfileById(id);
    
    if (!profile) {
        return {
            title: "Profile Not Found",
            description: "This profile does not exist.",
        };
    }
    return {
        title: `${profile.name} | Profiles`,
        description: profile.bio,
    };
}
export default async function ProfileDetailsPage({ params }){
    const { id } = await params;
    const profile = await getProfileById(id);

    if (!profile){
        notFound();
    }
    return (
        <section className="page-selection profile-details">
            <img src={profile.image} alt={profile.name} className="details-image" />
            <div className="details-content">
                <h1>{profile.name}</h1>
                <p className="profile-title">{profile.title}</p>
                <p>{profile.bio}</p>

                <div className="details-meta">
                    <p>
                        <strong>Major:</strong> {profile.major}
                    </p>
                    <p><strong>Year:</strong> {profile.year}</p>
                    <p><strong>ID:</strong> {profile.id}</p>
                </div>
            </div>
        </section>
    );
}