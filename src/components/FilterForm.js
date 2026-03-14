"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function FilterForm() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentTitle = searchParams.get("title") || "";
    const currentSearch = searchParams.get("search") || "";

    function handleSubmit(formData) {
        const params = new URLSearchParams(searchParams.toString());

        const title = formData.get("title")?.toString().trim() || "";
        const search = formData.get("search")?.toString().trim() || "";

        if (title) params.set("title", title);
        else params.delete("title");

        if (search) params.set("search", search);
        else params.delete("search");

        const queryString = params.toString();
        router.push(queryString ? `/?${queryString}` : "/" );
    }

    return (
        <form action={handleSubmit} className="filter-form">
            <div className="form-group">
                <label htmlFor="title">Filter by Title</label>
                <select id="title" name="title" defaultValue={currentTitle}>
                    <option value="">All Titles</option>
                    <option value="developer">Web Developer</option>
                    <option value="artist">Artist</option>
                    <option value="designer">Designer</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="search">Search</label>
                <input
                id="search" name="search" type="text"
                placeholder="Search by name, bio or major"
                defaultValue={currentSearch} />
            </div>
            <button type="submit" className="button">
                Apply Filters
            </button>
        </form>
    );
}