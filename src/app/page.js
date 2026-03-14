import FilterForm from "@/components/FilterForm";
import ProfileList from "@/components/ProfileList";
import { getProfiles } from "@/lib/profiles";

export const metadata = {
  title: "Home",
  description: "Home page",
};

export default async function HomePage({ searchParams }){
  const params = await searchParams;
  const title = params?.title || "";
  const search = params?.search || "";

  const profiles = await getProfiles({ title, search });

  return (
    <section className="page-section">
      <div className="hero">
        <h1>Profiles</h1>
        <p>Filter profiles by title or search by name, bio, and major.</p>
      </div>
      <FilterForm />

      <div className="results-summary">
        <p>
          Showing <strong>{profiles.length}</strong> results
          {profiles.length !== 1 ? "s" : ""}
          {title ? (
            <>
            {" "}
            for title <strong>{title}</strong>
            </>
          ) : null}
          {search ? (
            <>
              {" "}
              matching <strong>{search}</strong>
            </>
          ): null}
        </p>
      </div>

      <ProfileList profiles={profiles} />
    </section>
  );
}


