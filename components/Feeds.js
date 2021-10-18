import { useSession } from "next-auth/react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feeds() {
    const {data : session} = useSession()
    return (
        <main className={`grid grid-cols-1 md:grid-cols-w md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
            {/* Section */}
            <section className="col-span-2">
                {/* Stories */}
                    <Stories/>
                {/* Posts */}
                    <Posts/>
            </section>


            {/* Section */}
           {session && (
            <section className="hidden xl:inline-grid md:col-span-1">
                <div className="fixed top-20">
                    {/* MiniProfile */}
                    <MiniProfile />
                    {/* SugesTions */}
                    <Suggestions />
                </div>
            </section>
           )}
            

        </main>
        
    )
}

export default Feeds
