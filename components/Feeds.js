import Posts from "./Posts";
import Stories from "./Stories";

function Feeds() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-w md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            {/* Section */}
            <section className="col-span-2">
                {/* Stories */}
                    <Stories/>
                {/* Posts */}
                    <Posts/>
            </section>


            {/* Section */}
            <section>
                {/* MiniProfile */}
                {/* SugesTions */}
            </section>

        </main>
    )
}

export default Feeds
