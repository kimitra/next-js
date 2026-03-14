export const profiles = [
    {
        id: "1",
        name: "Shane Hollander",
        title: "Web Developer",
        bio: "Captain of the Montreal Voyageurs. Back-end Developer.",
        major: "Web Programming & Design",
        year: "Senior",
        image: "https://pbs.twimg.com/profile_images/2014810779845808128/m8uW-qWB_400x400.jpg",
    },
    {
        id: "2",
        name: "Ilya Rozanov",
        title: "Designer",
        bio: "Captain of Boston Bears. UX Designer.",
        major: "UX Design",
        year: "Senior",
        image: "https://pbs.twimg.com/profile_images/2014163555092672514/lBh7jSfO_400x400.jpg"
    },
    {
        id: "3",
        name: "Rose Landry",
        title: "Artist",
        bio: "Award-Winning actress from critically-acclaimed 'X-Squad'. Site artist.",
        major: "Graphic Design",
        year: "Junior",
        image: "https://pbs.twimg.com/profile_images/2016633591388569602/LUDaWUDR_400x400.jpg"
    },
    {
        id: "4",
        name: "Svetlana Vetrova",
        title: "Web Developer",
        bio: "Luxury car dealership owner. Front-end developer.",
        major: "Web Programming & Design",
        year: "Junior",
        image: "https://pbs.twimg.com/profile_images/2012970250837331968/8Ltrzrrc_400x400.jpg"
    },
];
export async function getProfiles({ title = "", search = "" } = {}) {
    const titleLower = title.toLowerCase().trim();
    const searchLower = search.toLowerCase().trim();

    return profiles.filter((profile) => {
        const matchesTitle =
        !titleLower || profile.title.toLowerCase().includes(titleLower);

        const matchesSearch =
        !searchLower ||
        profile.name.toLowerCase().includes(searchLower) ||
        profile.bio.toLowerCase().includes(searchLower) ||
        profile.major.toLowerCase().includes(searchLower);

        return matchesTitle && matchesSearch;
    });
}
export async function getProfileById(id) {
    return profiles.find((profile) => profile.id === id) || null;
}